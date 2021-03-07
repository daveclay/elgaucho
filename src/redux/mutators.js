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

export const updateAddTableFormTable = (state) => {
  state.addTableForm.table = buildTable(
    { name: "New" },
    state.addTableForm.tableType,
    state.addTableForm.tableColor
  )
}

export const defaultAddTableForm = (state) => {
  setAddTableFormType(state, {
    tableType: state.tableTypes[0]
  })
  setAddTableFormColor(state, {
    tableColor: state.tableColors[0]
  })
}

export const setAddTableFormType = (state, action) => {
  state.addTableForm.tableType = action.tableType
}

export const setAddTableFormColor = (state, action) => {
  state.addTableForm.tableColor = action.tableColor
}

export const hideAddTableForm = (state, action) => {
  state.addTableForm.visible = false
}

export const showAddTableForm = (state, action) => {
  state.addTableForm.visible = true
}

