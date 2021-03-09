import {map, reducer} from "./utils/redux-map";
import {mutatorToReducer, mutatorsToReducer} from "../utils";
import {
  defaultTableForm,
  hideTableForm,
  buildTablesFromConfig,
  setTableFormColor,
  setTableFormType,
  showTableForm,
  saveTableForm,
  updateTableName,
  updateTableTypeName,
  saveTableTypeForm,
  hideTableTypeForm,
  showTableTypeForm,
  adjustTableSize,
  adjustTableTypeRotation,
  initializeTableForm, deleteTable, tableMoved, adjustTableRotation
} from "./mutators"

export const initialState = {
  tableTypes: [
    {
      id: "tallRectTable",
      name: "tallRectTable",
      styleConfig: {
        width: 27,
        height: 54,
        borderRadius: "5px"
      },
    },
    {
      id: "wideRectTable",
      name: "wideRectTable",
      styleConfig: {
        width: 54,
        height: 27,
        borderRadius: "5px"
      },
    },
    {
      id: "togoTable",
      name: "togoTable",
      styleConfig: {
        height: 56,
        width: 42,
        borderRadius: "5px"
      },
    },
    {
      id: "fireTable",
      name: "fireTable",
      styleConfig: {
        width: 68,
        height: 68,
        lineHeight: "68px",
        borderRadius: "50%"
      },
    },
    {
      id: "smallCircleTable",
      name: "smallCircleTable",
      styleConfig: {
        width: 27,
        height: 27,
        lineHeight: "27px",
        borderRadius: "50%"
      },
    },
    {
      id: "medCircleTable",
      name: "medCircleTable",
      styleConfig: {
        width: 42,
        height: 42,
        lineHeight: "40px",
        borderRadius: "50%"
      },
    },
    {
      id: "smallSquareTable",
      name: "smallSquareTable",
      styleConfig: {
        width: 27,
        height: 27,
        borderRadius: "5px"
      },
    },
    {
      id: "medSquareTable",
      name: "medSquareTable",
      styleConfig: {
        width: 34,
        height: 34,
        borderRadius: "5px"
      },
    },
    {
      id: "largeSquareTable",
      name: "largeSquareTable",
      styleConfig: {
        width: 42,
        height: 42,
        borderRadius: "5px"
      },
    },
    {
      id: "smallDiamondTable",
      name: "smallDiamondTable",
      styleConfig: {
        rotation: 45,
        borderRadius: "5px",
        width: 27,
        height: 27
      },
    },
    {
      id: "largeDiamondTable",
      name: "largeDiamondTable",
      styleConfig: {
        rotation: 45,
        borderRadius: "5px",
        width: 32,
        height: 32
      },
    },
    {
      id: "vipRectTable",
      name: "vipRectTable",
      styleConfig: {
        width: 34,
        height: 68,
        borderRadius: "5px"
      },
    }
  ],
  tableColors: [
    {
      name: "blue",
      styleConfig: {
        backgroundColor: "rgb(62, 148, 229)"
      }
    },
    {
      name: "green",
      styleConfig: {
        backgroundColor: "rgb(71, 180, 152)"
      }
    },
    {
      name: "white",
      styleConfig: {
        backgroundColor: "rgb(255, 255, 255)"
      }
    }
  ],
  tableConfigs: [
    {
      x: 551,
      y: 746,
      typeId: "togoTable",
      colorId: "blue",
      styleConfig: {},
      name: "togo",
			id: "togo"
    },
    {
      x: 483,
      y: 338,
      typeId: "fireTable",
      colorId: "blue",
      styleConfig: {},
      name: "fire",
			id: "fire"
    },
    {
      x: 306,
      y: 642,
      typeId: "smallCircleTable",
      colorId: "white",
      styleConfig: {},
      name: "1",
			id: "1"
    },
    {
      x: 243,
      y: 642,
      typeId: "smallCircleTable",
      colorId: "green",
      styleConfig: {},
      name: "2",
			id: "2"
    },
    {
      x: 241,
      y: 283,
      typeId: "smallCircleTable",
      colorId: "white",
      styleConfig: {},
      name: "3",
			id: "3"
    },
    {
      x: 308,
      y: 284,
      typeId: "smallCircleTable",
      colorId: "white",
      styleConfig: {},
      name: "4",
			id: "4"
    },
    {
      x: 795,
      y: 747,
      typeId: "tallRectTable",
      colorId: "green",
      styleConfig: {},
      name: "20",
			id: "20"
    },
    {
      x: 934,
      y: 743,
      typeId: "smallSquareTable",
      colorId: "white",
      styleConfig: {},
      name: "21",
			id: "21"
    },
    {
      x: 887,
      y: 855,
      typeId: "smallSquareTable",
      colorId: "white",
      styleConfig: {},
      name: "22",
			id: "22"
    },
    {
      x: 771,
      y: 851,
      typeId: "largeSquareTable",
      colorId: "green",
      styleConfig: {},
      name: "23",
			id: "23"
    },
    {
      x: 617,
      y: 187,
      typeId: "medCircleTable",
      colorId: "green",
      styleConfig: {},
      name: "60",
			id: "60"
    },
    {
      x: 723,
      y: 187,
      typeId: "medCircleTable",
      colorId: "green",
      styleConfig: {},
      name: "61",
			id: "61"
    },
    {
      x: 827,
      y: 187,
      typeId: "medCircleTable",
      colorId: "green",
      styleConfig: {},
      name: "62",
			id: "62"
    },
    {
      x: 936,
      y: 187,
      typeId: "medCircleTable",
      colorId: "blue",
      styleConfig: {},
      name: "63",
			id: "63"
    },
    {
      x: 632,
      y: 297,
      typeId: "smallDiamondTable",
      colorId: "white",
      styleConfig: {},
      name: "30",
			id: "30"
    },
    {
      x: 770,
      y: 297,
      typeId: "smallDiamondTable",
      colorId: "green",
      styleConfig: {},
      name: "31",
			id: "31"
    },
    {
      x: 941,
      y: 285,
      typeId: "tallRectTable",
      colorId: "green",
      styleConfig: {},
      name: "40",
			id: "40"
    },
    {
      x: 941,
      y: 410,
      typeId: "tallRectTable",
      colorId: "green",
      styleConfig: {},
      name: "41",
			id: "41"
    },
    {
      x: 935,
      y: 547,
      typeId: "medSquareTable",
      colorId: "white",
      styleConfig: {},
      name: "42",
			id: "42"
    },
    {
      x: 751,
      y: 443,
      typeId: "largeDiamondTable",
      colorId: "green",
      styleConfig: {},
      name: "50",
			id: "50"
    },
    {
      x: 708,
      y: 580,
      typeId: "smallDiamondTable",
      colorId: "green",
      styleConfig: {},
      name: "51",
			id: "51"
    },
    {
      x: 654,
      y: 766,
      typeId: "vipRectTable",
      colorId: "green",
      styleConfig: {},
      name: "53",
			id: "53"
    },
    {
      x: 1034,
      y: 236,
      typeId: "medCircleTable",
      colorId: "white",
      styleConfig: {},
      name: "70",
			id: "70"
    },
    {
      x: 1033,
      y: 356,
      typeId: "medCircleTable",
      colorId: "green",
      styleConfig: {},
      name: "71",
			id: "71"
    },
    {
      x: 1034,
      y: 482,
      typeId: "medCircleTable",
      colorId: "green",
      styleConfig: {},
      name: "72",
			id: "72"
    },
    {
      x: 389,
      y: 519,
      typeId: "tallRectTable",
      colorId: "green",
      styleConfig: {},
      name: "90",
			id: "90"
    },
    {
      x: 389,
      y: 387,
      typeId: "tallRectTable",
      colorId: "green",
      styleConfig: {},
      name: "91",
			id: "91"
    },
    {
      x: 1291,
      y: 486,
      typeId: "wideRectTable",
      colorId: "white",
      styleConfig: {},
      name: "101",
			id: "101"
    },
    {
      x: 1293,
      y: 362,
      typeId: "largeDiamondTable",
      colorId: "white",
      styleConfig: {},
      name: "102",
			id: "102"
    },
    {
      x: 1286,
      y: 249,
      typeId: "wideRectTable",
      colorId: "white",
      styleConfig: {},
      name: "103",
			id: "103"
    },
    {
      x: 1408,
      y: 201,
      typeId: "tallRectTable",
      colorId: "white",
      styleConfig: {},
      name: "104",
			id: "104"
    },
    {
      x: 1402,
      y: 328,
      typeId: "wideRectTable",
      colorId: "white",
      styleConfig: {},
      name: "105",
			id: "105"
    },
    {
      x: 1402,
      y: 423,
      typeId: "wideRectTable",
      colorId: "white",
      styleConfig: {},
      name: "106",
			id: "106"
    },
    {
      x: 1209,
      y: 661,
      typeId: "largeDiamondTable",
      colorId: "white",
      styleConfig: {},
      name: "201",
			id: "201"
    },
    {
      x: 1210,
      y: 797,
      typeId: "tallRectTable",
      colorId: "white",
      styleConfig: {},
      name: "202",
			id: "202"
    },
    {
      x: 1053,
      y: 742,
      typeId: "smallCircleTable",
      colorId: "white",
      styleConfig: {},
      name: "203",
			id: "203"
    }
  ],
  tables: [],
  tableForm: {
    visible: false,
    table: {
      id: null,
      name: "New"
    },
  },
  tableTypeForm: {
    visible: false,
    tableType: {
      id: null,
      name: "New",
      styleConfig: {
        width: 30,
        height: 30,
        backgroundColor: "rgb(80, 80, 80)",
        borderRadius: "5px"
      }
    }
  },
  newTableTemplate: {
    id: null,
    name: "New",
    tableType: null,
    tableColor: null,
    styleConfig: {}
  }
}

const init = mutatorsToReducer(
  initializeTableForm,
  buildTablesFromConfig,
  defaultTableForm
)

const onTableMoved = mutatorsToReducer(tableMoved)
const onTableTypeSelected = mutatorsToReducer(
  setTableFormType,
)
const onTableColorSelected = mutatorsToReducer(
  setTableFormColor,
)
const onOpenTableForm = mutatorToReducer(showTableForm)
const onCloseTableForm = mutatorToReducer(hideTableForm)
const onSaveTableForm = mutatorsToReducer(saveTableForm, hideTableForm)
const onUpdateTableName = mutatorsToReducer(updateTableName)
const onAdjustTableRotation = mutatorsToReducer(adjustTableRotation)
const onDeleteTable = mutatorsToReducer(deleteTable, hideTableForm)

const onOpenTableTypeForm = mutatorToReducer(showTableTypeForm)
const onCloseTableTypeForm = mutatorToReducer(hideTableTypeForm)
const onSaveTableTypeForm = mutatorsToReducer(saveTableTypeForm, hideTableTypeForm)
const onUpdateTableTypeName = mutatorsToReducer(updateTableTypeName)
const onAdjustTableSize = mutatorsToReducer(adjustTableSize)
const onAdjustTableTypeRotation = mutatorsToReducer(adjustTableTypeRotation)
const onReset = mutatorsToReducer(buildTablesFromConfig)

map('init', init)
map('onReset', onReset)
map('onTableMoved', onTableMoved)
map('onTableTypeSelected', onTableTypeSelected)
map('onTableColorSelected', onTableColorSelected)
map('onAdjustTableRotation', onAdjustTableRotation)
map('onOpenTableForm', onOpenTableForm)
map('onUpdateTableName', onUpdateTableName)
map('onSaveTableForm', onSaveTableForm)
map('onCloseTableForm', onCloseTableForm)
map('onDeleteTable', onDeleteTable)
map('onOpenTableTypeForm', onOpenTableTypeForm)
map('onUpdateTableTypeName', onUpdateTableTypeName)
map('onSaveTableTypeForm', onSaveTableTypeForm)
map('onCloseTableTypeForm', onCloseTableTypeForm)
map('onAdjustTableSize', onAdjustTableSize)
map('onAdjustTableTypeRotation', onAdjustTableTypeRotation)

export const rootReducer = reducer
