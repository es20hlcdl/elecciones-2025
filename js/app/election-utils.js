(function (window) {
    'use strict';

    var constants = window.ElectionConstants;

    function getRoundKey(round) {
        return round === 'segunda' ? 'segunda' : 'primera';
    }

    function getNumber(feature, fieldName) {
        return Number((feature.properties || {})[fieldName]) || 0;
    }

    function getWinnerForFeature(feature, round) {
        var roundKey = getRoundKey(round);
        if (roundKey === 'segunda') {
            var pdcVotes = getNumber(feature, constants.SECOND_ROUND_VOTE_FIELDS.PDC);
            var libreVotes = getNumber(feature, constants.SECOND_ROUND_VOTE_FIELDS.LIBRE);
            if (pdcVotes === libreVotes) return null;
            return pdcVotes > libreVotes ? 'PDC' : 'LIBRE';
        }
        return (feature.properties || {})[constants.ROUND_FIELDS.primera.ganador] || null;
    }

    function getVotesForParty(feature, partyKey, round) {
        var roundKey = getRoundKey(round);
        var fields = roundKey === 'segunda'
            ? constants.SECOND_ROUND_VOTE_FIELDS
            : constants.FIRST_ROUND_VOTE_FIELDS;

        if (!fields[partyKey]) return 0;
        return getNumber(feature, fields[partyKey]);
    }

    function getValidVotes(feature, round) {
        var fields = constants.ROUND_FIELDS[getRoundKey(round)];
        return getNumber(feature, fields.validos);
    }

    function getParticipation(feature, round) {
        var fields = constants.ROUND_FIELDS[getRoundKey(round)];
        var habilitados = getNumber(feature, fields.habilitados);
        var emitidos = getNumber(feature, fields.emitidos);
        return habilitados ? (emitidos / habilitados) * 100 : 0;
    }

    function getMarginOfVictory(feature, round) {
        var roundKey = getRoundKey(round);

        if (roundKey === 'segunda') {
            var pdc = getVotesForParty(feature, 'PDC', roundKey);
            var libre = getVotesForParty(feature, 'LIBRE', roundKey);
            var totalSecond = pdc + libre;
            if (!totalSecond) return 0;
            return (Math.abs(pdc - libre) / totalSecond) * 100;
        }

        var votes = constants.FIRST_ROUND_PARTIES.map(function (party) {
            return {
                party: party,
                count: getVotesForParty(feature, party, roundKey)
            };
        }).sort(function (a, b) {
            return b.count - a.count;
        });

        var totalFirst = votes.reduce(function (sum, vote) {
            return sum + vote.count;
        }, 0);

        if (!totalFirst) return 0;
        return ((votes[0].count - votes[1].count) / totalFirst) * 100;
    }

    window.ElectionUtils = {
        getWinnerForFeature: getWinnerForFeature,
        getVotesForParty: getVotesForParty,
        getValidVotes: getValidVotes,
        getParticipation: getParticipation,
        getMarginOfVictory: getMarginOfVictory
    };
})(window);
