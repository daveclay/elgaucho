export const init = () => ({
  type: 'init'
})

export const onTableMoved = (table, draggableData) => ({
  type: 'onTableMoved',
  table,
  ...draggableData
})

export const onTableTypeSelected = tableType => ({
    type: 'onTableTypeSelected',
    tableType
})

export const onTableColorSelected = (color) => ({
  type: 'onTableColorSelected',
  color
})

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

export const onAdjustTableRotation = rotation => ({
  type: 'onAdjustTableRotation',
  rotation
})

export const onReset = () => ({
  type: 'onReset'
})

export const onDeleteTable = () => ({
  type: 'onDeleteTable'
})