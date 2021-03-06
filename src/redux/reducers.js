import * as actions from "./actions"
import {map, reducer} from "./utils/redux-map";
import {mutatorToReducer, ArrayUtils, reduceAll} from "../utils";
import {resolveTableReferences} from "./mutators"
import {} from "../selectors/selectors"

export const initialState = {
  // TODO: mixin styles for common types like "diamond"
  tableTypeMixins: {
    diamond: {
      style: {
        transform: "rotate(45deg)",
        borderRadius: "5px",
      }
    }
  },
  tableTypes: {
    tallRectTable: {
      style: {
        width: "27px",
        height: "54px",
        borderRadius: "5px",
      }
    },
    wideRectTable: {
      style: {
        width: "54px",
        height: "27px",
        borderRadius: "5px",
      }
    },
    togoTable: {
      style: {
        height: "56px",
        width: "42px",
        borderRadius: "5px",
      }
    },
    fireTable: {
      style: {
        width: "68px",
        height: "68px",
        lineHeight: "68px",
        borderRadius: "50%",
      }
    },
    smallCircleTable: {
      style: {
        width: "27px",
        height: "27px",
        lineHeight: "27px",
        borderRadius: "50%",
      }
    },
    medCircleTable: {
      style: {
        width: "42px",
        height: "42px",
        lineHeight: "40px",
        borderRadius: "50%",
      }
    },
    smallSquareTable: {
      style: {
        width: "27px",
        height: "27px",
        borderRadius: "5px",
      }
    },
    medSquareTable: {
      style: {
        width: "34px",
        height: "34px",
        borderRadius: "5px",
      }
    },
    largeSquareTable: {
      style: {
        width: "42px",
        height: "42px",
        borderRadius: "5px",
      }
    },
    smallDiamondTable: {
      mixin: "diamond",
      style: {
        width: "27px",
        height: "27px",
      }
    },
    largeDiamondTable: {
      mixin: "diamond",
      style: {
        width: "32px",
        height: "32px",
      }
    },
    vipRectTable: {
      style: {
        width: "34px",
        height: "68px",
        borderRadius: "5px",
      }
    },
  },

  tableColors: {
    blue: {
      style: {
        backgroundColor: "rgb(62, 148, 229)"
      }
    },
    green: {
      style: {
        backgroundColor: "rgb(71, 180, 152)"
      }
    },
    white: {
      style: {
        backgroundColor: "rgb(255, 255, 255)"
      }
    }
  },
  tableConfigs: [
    {
      x: 551,
      y: 746,
      typeId: "togoTable",
      colorId: "blue",
      name: "togo"
    },
    {
      x: 483,
      y: 338,
      typeId: "fireTable",
      colorId: "blue",
      name: "fire"
    },
    {
      x: 306,
      y: 642,
      typeId: "smallCircleTable",
      colorId: "white",
      name: "1"
    },
    {
      x: 243,
      y: 642,
      typeId: "smallCircleTable",
      colorId: "green",
      name: "2"
    },
    {
      x: 241,
      y: 283,
      typeId: "smallCircleTable",
      colorId: "white",
      name: "3"
    },
    {
      x: 308,
      y: 284,
      typeId: "smallCircleTable",
      colorId: "white",
      name: "4"
    },
    {
      x: 795,
      y: 747,
      typeId: "tallRectTable",
      colorId: "green",
      name: "20"
    },
    {
      x: 934,
      y: 743,
      typeId: "smallSquareTable",
      colorId: "white",
      name: "21"
    },
    {
      x: 887,
      y: 855,
      typeId: "smallSquareTable",
      colorId: "white",
      name: "22"
    },
    {
      x: 771,
      y: 851,
      typeId: "largeSquareTable",
      colorId: "green",
      name: "23"
    },
    {
      x: 617,
      y: 187,
      typeId: "medCircleTable",
      colorId: "green",
      name: "60"
    },
    {
      x: 723,
      y: 187,
      typeId: "medCircleTable",
      colorId: "green",
      name: "61"
    },
    {
      x: 827,
      y: 187,
      typeId: "medCircleTable",
      colorId: "green",
      name: "62"
    },
    {
      x: 936,
      y: 187,
      typeId: "medCircleTable",
      colorId: "blue",
      name: "63"
    },
    {
      x: 632,
      y: 297,
      typeId: "smallDiamondTable",
      colorId: "white",
      name: "30"
    },
    {
      x: 770,
      y: 297,
      typeId: "smallDiamondTable",
      colorId: "green",
      name: "31"
    },
    {
      x: 941,
      y: 285,
      typeId: "tallRectTable",
      colorId: "green",
      name: "40"
    },
    {
      x: 941,
      y: 410,
      typeId: "tallRectTable",
      colorId: "green",
      name: "41"
    },
    {
      x: 935,
      y: 547,
      typeId: "medSquareTable",
      colorId: "white",
      name: "42"
    },
    {
      x: 751,
      y: 443,
      typeId: "largeDiamondTable",
      colorId: "green",
      name: "50"
    },
    {
      x: 708,
      y: 580,
      typeId: "smallDiamondTable",
      colorId: "green",
      name: "51"
    },
    {
      x: 654,
      y: 766,
      typeId: "vipRectTable",
      colorId: "green",
      name: "53"
    },
    {
      x: 1034,
      y: 236,
      typeId: "medCircleTable",
      colorId: "white",
      name: "70"
    },
    {
      x: 1033,
      y: 356,
      typeId: "medCircleTable",
      colorId: "green",
      name: "71"
    },
    {
      x: 1034,
      y: 482,
      typeId: "medCircleTable",
      colorId: "green",
      name: "72"
    },
    {
      x: 389,
      y: 519,
      typeId: "tallRectTable",
      colorId: "green",
      name: "90"
    },
    {
      x: 389,
      y: 387,
      typeId: "tallRectTable",
      colorId: "green",
      name: "91"
    },
    {
      x: 1291,
      y: 486,
      typeId: "wideRectTable",
      colorId: "white",
      name: "101"
    },
    {
      x: 1293,
      y: 362,
      typeId: "largeDiamondTable",
      colorId: "white",
      name: "102"
    },
    {
      x: 1286,
      y: 249,
      typeId: "wideRectTable",
      colorId: "white",
      name: "103"
    },
    {
      x: 1408,
      y: 201,
      typeId: "tallRectTable",
      colorId: "white",
      name: "104"
    },
    {
      x: 1402,
      y: 328,
      typeId: "wideRectTable",
      colorId: "white",
      name: "105"
    },
    {
      x: 1402,
      y: 423,
      typeId: "wideRectTable",
      colorId: "white",
      name: "106"
    },
    {
      x: 1209,
      y: 661,
      typeId: "largeDiamondTable",
      colorId: "white",
      name: "201"
    },
    {
      x: 1210,
      y: 797,
      typeId: "tallRectTable",
      colorId: "white",
      name: "202"
    },
    {
      x: 1053,
      y: 742,
      typeId: "smallCircleTable",
      colorId: "white",
      name: "203"
    }
  ]
}

const init = state => reduceAll(state, mutatorToReducer(resolveTableReferences))

map('init', init)

export const rootReducer = reducer
