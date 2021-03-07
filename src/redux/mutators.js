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

export const updateTableFormTable = (state) => {
  state.tableForm.table = buildTable(
    { name: "New" },
    state.tableForm.tableType,
    state.tableForm.tableColor
  )
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
  state.tableForm.tableType = action.tableType
}

export const setTableFormColor = (state, action) => {
  state.tableForm.tableColor = action.tableColor
}

export const hideTableForm = (state, action) => {
  state.tableForm.visible = false
}

export const showTableForm = (state, action) => {
  state.tableForm.visible = true
}

