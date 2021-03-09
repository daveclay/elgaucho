import {
  newStateSelector
} from "../selectors/selectors";
import {newTable} from "../tableUtils";
import {mutatorsToReducer} from "../utils";

/************************************************
 * Mutators
 ************************************************/
export const buildTablesFromConfig = state => {
  const stateSelector = newStateSelector(state)
  state.tables = state.tableConfigs.map(config=> {
    return {
      ...config,
      tableType: stateSelector.findTableTypeForName(config.typeId),
      tableColor: stateSelector.findTableColorForName(config.colorId)
    }
  })
}

export const defaultTableForm = (state) => {
  setTableFormType(state, {
    tableType: state.tableTypes[0]
  })
  setTableFormColor(state, {
    color: {
      hex: state.tableColors[0].styleConfig.backgroundColor
    }
  })
}

export const tableMoved = (state, action) => {
  const table = newStateSelector(state).findTableForId(action.table.id)
  table.x = action.x
  table.y = action.y
}

export const updateTableName = (state, action) => {
  state.tableForm.table.name = action.name
}

export const saveTableForm = state => {
  const stateSelector = newStateSelector(state)
  const tableForm = state.tableForm
  if (tableForm.table.id) {
    const table = stateSelector.findTableForId(tableForm.table.id)
    Object.assign(table, tableForm.table)
  } else {
    tableForm.table.id = Date.now()
    tableForm.table.x = 20
    tableForm.table.y = 100
    state.tables.push(tableForm.table)
    tableForm.table = newTable(state)
  }
}

export const deleteTable = state => {
  const tableForm = state.tableForm
  const id = tableForm.table.id
  if (id) {
    state.tables = state.tables.filter(table => table.id !== id)
  }
}

export const setTableFormType = (state, action) => {
  const tableForm = state.tableForm
  tableForm.table.tableType = action.tableType
}

export const setTableFormColor = (state, action) => {
  const tableForm = state.tableForm
  tableForm.table.tableColor.styleConfig.backgroundColor = action.color.hex
}

export const initializeTableForm = state => {
  state.tableForm.table = newTable(state)
}

export const showTableForm = (state, action) => {
  const tableForm = state.tableForm
  tableForm.visible = true
  tableForm.table = action.table || newTable(state)
}

export const hideTableForm = state => {
  state.tableForm.visible = false
}

export const updateTableTypeName = (state, action) => {
  state.tableTypeForm.tableType.name = action.name
}

export const saveTableTypeForm = state => {
  const stateSelector = newStateSelector(state)
  const tableTypeForm = state.tableTypeForm
  if (tableTypeForm.tableType.id) {
    const table = stateSelector.findTableForId(tableTypeForm.table.id)
    Object.assign(table, tableTypeForm.table)
  } else {
    state.tableTypes.push(tableTypeForm.tableType)
  }
}

export const showTableTypeForm = (state, action) => {
  const tableTypeForm = state.tableTypeForm
  tableTypeForm.visible = true
  const tableType = action.tableType || state.tableTypeForm.tableType
  tableTypeForm.tableType = tableType
}

export const hideTableTypeForm = state => {
  state.tableTypeForm.visible = false
}

export const adjustTableSize = (state, action) => {
  state.tableTypeForm.tableType.styleConfig.width = action.width
  state.tableTypeForm.tableType.styleConfig.height = action.height
}

export const adjustTableRotation = (state, action) => {
  state.tableTypeForm.tableType.styleConfig.rotation = action.rotation
}