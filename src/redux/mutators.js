import {
  ArrayUtils, mutatorToReducer
} from "../utils";
import {
  newStateSelector
} from "../selectors/selectors";
import {buildTableStyle} from "../tableUtils";

/************************************************
 * Mutators
 ************************************************/

export const buildTablesFromConfig = state => {
  const stateSelector = newStateSelector(state)

  state.tableTypes.forEach(tableType => {
    if (tableType.mixinTableStyleTypeId) {
      const mixin = stateSelector.findTableTypeMixinForName(tableType.mixinTableStyleTypeId)
      Object.assign(tableType.style, mixin.style)
    }
  })

  state.tables = state.tableConfigs.map(config=> {
    const tableType = stateSelector.findTableTypeForName(config.typeId)
    const tableColor = stateSelector.findTableColorForName(config.colorId)
    const style = buildTableStyle(tableType, tableColor)
    return {
      ...config,
      style
    }
  })
}

export const defaultTableForm = (state) => {
  setTableFormType(state, {
    tableType: state.tableTypes[0]
  })
  setTableFormColor(state, {
    tableColor: state.tableColors[0]
  })
}

export const setTableFormType = (state, action) => {
  const tableForm = state.tableForm
  tableForm.tableType = action.tableType
  tableForm.table.style = Object.assign(tableForm.table.style, action.tableType.style)
}

export const setTableFormColor = (state, action) => {
  const tableForm = state.tableForm
  tableForm.tableColor = action.tableColor
  tableForm.table.style = Object.assign(tableForm.table.style, action.tableColor.style)
}

export const showTableForm = (state, action) => {
  const tableForm = state.tableForm
  tableForm.visible = true
  tableForm.table = action.table || {
    name: "New",
    isNew: true,
    style: buildTableStyle(tableForm.tableType, tableForm.tableColor)
  }
}

export const hideTableForm = (state, action) => {
  state.tableForm.visible = false
}
