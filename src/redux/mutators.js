import {
  ArrayUtils, mutatorToReducer
} from "../utils";
import {
  newStateSelector
} from "../selectors/selectors";
import {buildTable} from "../tableUtils";

/************************************************
 * Mutators
 ************************************************/

export const resolveTableReferences = state => {
  const stateSelector = newStateSelector(state)
  state.tables = state.tableConfigs.map(config=> {
    const tableType = stateSelector.findTableTypeForName(config.typeId)
    const tableColor = stateSelector.findTableColorForName(config.colorId)
    const mixin = stateSelector.findTableTypeMixinForName(tableType.mixinTableTypeId)
    return buildTable(config, tableType, tableColor, mixin)
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

export const hideTableForm = (state, action) => {
  state.tableForm.visible = false
}

export const showTableForm = (state, action) => {
  state.tableForm.visible = true
  state.tableForm.table = action.table || buildTable(
    {
      name: "New",
      isNew: true
    },
    state.tableForm.tableType,
    state.tableForm.tableColor
  )
}

