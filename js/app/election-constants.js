(function (window) {
    'use strict';

    var FIRST_ROUND_PARTIES = ['PDC', 'LIBRE', 'UNIDAD', 'AP', 'APB-SUMATE', 'MAS-IPSP', 'FP', 'LYP-ADN'];
    var SECOND_ROUND_PARTIES = ['PDC', 'LIBRE'];

    var PARTY_COLORS_HEX = {
        PDC: '#0f6d72',
        LIBRE: '#e1524e',
        UNIDAD: '#f3b347',
        AP: '#7f64a8',
        'APB-SUMATE': '#3e1f72',
        'MAS-IPSP': '#2f7486',
        FP: '#2db7ea',
        'LYP-ADN': '#b61f31',
        BLANCO: '#dcdcdc',
        NULO: '#828282',
        ABS: '#373737'
    };

    var PARTY_COLORS_RGB = {
        PDC: [15, 109, 114],
        LIBRE: [225, 82, 78],
        UNIDAD: [243, 179, 71],
        AP: [127, 100, 168],
        'APB-SUMATE': [62, 31, 114],
        'MAS-IPSP': [47, 116, 134],
        FP: [45, 183, 234],
        'LYP-ADN': [182, 31, 49],
        BLANCO: [220, 220, 220],
        NULO: [130, 130, 130],
        ABS: [55, 55, 55, 100]
    };

    var FIRST_ROUND_VOTE_FIELDS = {
        PDC: 'v_PDC',
        LIBRE: 'v_LIBRE',
        UNIDAD: 'v_UNIDAD',
        AP: 'v_AP',
        'APB-SUMATE': 'v_APB-SUMATE',
        'MAS-IPSP': 'v_MAS-IPSP',
        FP: 'v_FP',
        'LYP-ADN': 'v_LYP-ADN'
    };

    var SECOND_ROUND_VOTE_FIELDS = {
        PDC: 'svPDC',
        LIBRE: 'svLIBRE'
    };

    var ROUND_FIELDS = {
        primera: {
            habilitados: 'hab',
            emitidos: 'emi',
            validos: 'val',
            blancos: 'bla',
            nulos: 'nul',
            ganador: 'g'
        },
        segunda: {
            habilitados: 'hab_sv',
            emitidos: 'emi_sv',
            validos: 'val_sv',
            blancos: 'bla_sv',
            nulos: 'nul_sv',
            ganador: 'svg'
        }
    };

    var OFFICIAL_FIRST_ROUND = {
        PDC: 1717432,
        LIBRE: 1430176,
        UNIDAD: 1054568,
        AP: 456002,
        'APB-SUMATE': 361640,
        'MAS-IPSP': 169887,
        FP: 89253,
        'LYP-ADN': 77576,
        BLANCOS: 172835,
        NULOS: 1371049,
        EMITIDOS: 6900418,
        HABILITADOS: 7936515,
        VALIDOS: 5356534
    };

    var OFFICIAL_SECOND_ROUND = {
        PDC: 3519534,
        LIBRE: 2884661
    };

    window.ElectionConstants = {
        FIRST_ROUND_PARTIES: FIRST_ROUND_PARTIES,
        SECOND_ROUND_PARTIES: SECOND_ROUND_PARTIES,
        PARTY_COLORS_HEX: PARTY_COLORS_HEX,
        PARTY_COLORS_RGB: PARTY_COLORS_RGB,
        FIRST_ROUND_VOTE_FIELDS: FIRST_ROUND_VOTE_FIELDS,
        SECOND_ROUND_VOTE_FIELDS: SECOND_ROUND_VOTE_FIELDS,
        ROUND_FIELDS: ROUND_FIELDS,
        OFFICIAL_FIRST_ROUND: OFFICIAL_FIRST_ROUND,
        OFFICIAL_SECOND_ROUND: OFFICIAL_SECOND_ROUND
    };
})(window);
