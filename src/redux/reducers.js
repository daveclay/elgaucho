import * as actions from "./actions"
import {map, reducer} from "./utils/redux-map";
import {mutatorToReducer, ArrayUtils, reduceAll} from "../utils";
import { resolveTableReferences } from "./mutators"
import {} from "../selectors/selectors"

export const initialState = {
    tableTypes: {
        tallRectTable: {
            style: "tall-rect-table"
        },
        wideRectTable: {
            style: "wide-rect-table"
        },
        togoTable: {
            style: "togo-table"
        },
        fireTable: {
            style: "fire-table"
        },
        smallCircleTable: {
            style: "small-circle-table"
        },
        medCircleTable: {
            style: "med-circle-table"
        },
        smallSquareTable: {
            style: "small-square-table"
        },
        medSquareTable: {
            style: "med-square-table"
        },
        largeSquareTable: {
            style: "large-square-table"
        },
        smallDiamondTable: {
            style: "small-diamond-table diamond-table"
        },
        largeDiamondTable: {
            style: "large-diamond-table diamond-table"
        },
        vipRectTable: {
            style: "vip-rect-table"
        },
    },

    tableColors: {
        blue: "blue-table",
        green: "green-table",
        white: "white-table"
    },

    tableConfigs: {
        togo: {
            x: 551, y: 746,
            typeId: "togoTable",
            colorId: "blue"
        },
        fire: {
            x: 483, y: 338,
            typeId: "fireTable",
            colorId: "blue"
        },
        table1: {
            x: 306, y: 642,
            typeId: "smallCircleTable",
            colorId: "white"
        },
        table2: {
            x: 243, y: 642,
            typeId: "smallCircleTable",
            colorId: "green"
        },
        table3: {
            x: 241, y: 283,
            typeId: "smallCircleTable",
            colorId: "white"
        },
        table4: {
            x: 308, y: 284,
            typeId: "smallCircleTable",
            colorId: "white"
        },
        table20: {
            x: 795, y: 747,
            typeId: "tallRectTable",
            colorId: "green"
        },
        table21: {
            x: 934, y: 743,
            typeId: "smallSquareTable",
            colorId: "white"
        },
        table22: {
            x: 887, y: 855,
            typeId: "smallSquareTable",
            colorId: "white"
        },
        table23: {
            x: 771, y: 851,
            typeId: "largeSquareTable",
            colorId: "green"
        },
        table60: {
            x: 617,
            y: 187,
            typeId: "medCircleTable",
            colorId: "green"
        },
        table61: {
            x: 723,
            y: 187,
            typeId: "medCircleTable",
            colorId: "green"
        },
        table62: {
            x: 827,
            y: 187,
            typeId: "medCircleTable",
            colorId: "green"
        },
        table63: {
            x: 936,
            y: 187,
            typeId: "medCircleTable",
            colorId: "blue"
        },
        table30: {
            x: 632,
            y: 297,
            typeId: "smallDiamondTable",
            colorId: "white"
        },
        table31: {
            x: 770,
            y: 297,
            typeId: "smallDiamondTable",
            colorId: "green"
        },
        table40: {
            x: 941,
            y: 285,
            typeId: "tallRectTable",
            colorId: "green"
        },
        table41: {
            x: 941,
            y: 410,
            typeId: "tallRectTable",
            colorId: "green"
        },
        table42: {
            x: 935,
            y: 547,
            typeId: "medSquareTable",
            colorId: "white"
        },
        table50: {
            x: 751,
            y: 443,
            typeId: "largeDiamondTable",
            colorId: "green"
        },
        table51: {
            x: 708,
            y: 580,
            typeId: "smallDiamondTable",
            colorId: "green"
        },
        table53: {
            x: 654, y: 766,
            typeId: "vipRectTable",
            colorId: "green"
        },
        table70: {
            x: 1034, y: 236,
            typeId: "medCircleTable",
            colorId: "white"
        },
        table71: {
            x: 1033, y: 356,
            typeId: "medCircleTable",
            colorId: "green"
        },
        table72: {
            x: 1034, y: 482,
            typeId: "medCircleTable",
            colorId: "green"
        },
        table90: {
            x: 389, y: 519,
            typeId: "tallRectTable",
            colorId: "green"
        },
        table91: {
            x: 389, y: 387,
            typeId: "tallRectTable",
            colorId: "green"
        },
        table101: {
            x: 1291, y: 486,
            typeId: "wideRectTable",
            colorId: "white"
        },
        table102: {
            x: 1293, y: 362,
            typeId: "largeDiamondTable",
            colorId: "white"
        },
        table103: {
            x: 1286, y: 249,
            typeId: "wideRectTable",
            colorId: "white"
        },
        table104: {
            x: 1408, y: 201,
            typeId: "tallRectTable",
            colorId: "white"
        },
        table105: {
            x: 1402, y: 328,
            typeId: "wideRectTable",
            colorId: "white"
        },
        table106: {
            x: 1402, y: 423,
            typeId: "wideRectTable",
            colorId: "white"
        },
        table201: {
            x: 1209, y: 661,
            typeId: "largeDiamondTable",
            colorId: "white"
        },
        table202: {
            x: 1210, y: 797,
            typeId: "tallRectTable",
            colorId: "white"
        },
        table203: {
            x: 1053, y: 742,
            typeId: "smallCircleTable",
            colorId: "white"
        }
    }
}

const init = state => reduceAll(state, mutatorToReducer(resolveTableReferences))

map('init', init)

export const rootReducer = reducer
