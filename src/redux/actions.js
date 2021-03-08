export const init = () => ({
  type: 'init'
})

export const onTableTypeSelected = (tableType) => (dispatch) => {
  dispatch({
    type: 'onTableTypeSelected',
    tableType
  })
}

export const onTableColorSelected = (tableColor) => (dispatch) => {
  dispatch({
    type: 'onTableColorSelected',
    tableColor
  })
}

export const onOpenTableForm = (table) => ({
  type: 'onOpenTableForm',
  table
})

export const onUpdateTableName = (name) => ({
  type: 'onUpdateTableName',
  name
})

export const onCloseTableForm = () => ({
  type: 'onCloseTableForm'
})

export const onSaveTableForm = () => ({
  type: 'onSaveTableForm'
})

export const onOpenTableTypeForm = () => ({
	type: 'onOpenTableTypeForm'
})

export const onUpdateTableTypeName = (name) => ({
	type: 'onUpdateTableTypeName',
  name
})

export const onCloseTableTypeForm = () => ({
	type: 'onCloseTableTypeForm'
})

export const onSaveTableTypeForm = () => ({
	type: 'onSaveTableTypeForm'
})

export const onAdjustTableSize = (width, height) => ({
  type: 'onAdjustTableSize',
  width,
  height
})
