import {
  newStateSelector
} from "../selectors/selectors";
import {deepCopy} from "../utils";
import {newTable} from "../tableUtils";

/************************************************
 * Mutators
 ************************************************/

export const buildTablesFromConfig = state => {
  const stateSelector = newStateSelector(state)

  state.tableTypes.forEach(tableType => {
    if (tableType.mixinTableStyleTypeId) {
      const mixin = stateSelector.findTableTypeMixinForName(tableType.mixinTableStyleTypeId)
      // TODO: don't do this here, but only at display time. means passing the lookup to components.
      Object.assign(tableType.style, mixin.style)
    }
  })

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
      hex: state.tableColors[0].style.backgroundColor
    }
  })
}

export const updateTableName = (state, action) => {
  state.tableForm.table.name = action.name
}

export const saveTableForm = state => {
  const stateSelector = newStateSelector(state)
  const tableForm = state.tableForm
  if (tableForm.table.isNew) {
    console.log("TODO: No adding new tables yet")
  } else {
    const table = stateSelector.findTableForId(tableForm.table.id)
    Object.assign(table, tableForm.table)
  }
}

export const setTableFormType = (state, action) => {
  const tableForm = state.tableForm
  tableForm.table.tableType = action.tableType
}

export const setTableFormColor = (state, action) => {
  const tableForm = state.tableForm
  tableForm.table.tableColor.style.backgroundColor = action.color.hex
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
  if (tableTypeForm.tableType.isNew) {
    state.tableTypes.push(tableTypeForm.tableType)
  } else {
    const table = stateSelector.findTableForId(tableTypeForm.table.id)
    Object.assign(table, tableTypeForm.table)
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
  state.tableTypeForm.tableType.style.width = action.width
  state.tableTypeForm.tableType.style.height = action.height
}