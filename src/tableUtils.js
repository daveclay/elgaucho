import {deepCopy} from "./utils";

export const defaultStyle = { style: {} }

export function buildTableStyle(tableType = defaultStyle,
                                tableColor = defaultStyle) {
  const translatedStyle = {
    ...tableType.style,
    width: `${tableType.style.width}px`,
    height: `${tableType.style.height}px`
  }
  return Object.assign({}, translatedStyle, tableColor.style)
}

export function newTable(state) {
  return {
    ...deepCopy(state.newTableTemplate),
    tableType: state.tableTypes[0],
    tableColor: state.tableColors[0]
  }
}