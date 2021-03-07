import {
  newStateSelector
} from "../selectors/selectors";

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
    tableColor: state.tableColors[0]
  })
}

export const saveTableForm = state => {
  const stateSelector = newStateSelector(state)
  const tableForm = state.tableForm
  if (tableForm.table.isNew) {
    console.log("TODO: No adding new tables yet")
  } else {
    const table = stateSelector.findTableForName(tableForm.table.name)
    Object.assign(table, tableForm.table)
  }
}

export const setTableFormType = (state, action) => {
  const tableForm = state.tableForm
  tableForm.table.tableType = action.tableType
}

export const setTableFormColor = (state, action) => {
  const tableForm = state.tableForm
  tableForm.table.tableColor = action.tableColor
}

export const showTableForm = (state, action) => {
  const tableForm = state.tableForm
  tableForm.visible = true
  const table = action.table || {
    name: "New",
    isNew: true,
    tableType: state.tableTypes[0],
    tableColor: state.tableColors[0]
  }
  tableForm.table = table
}

export const hideTableForm = (state, action) => {
  state.tableForm.visible = false
}
