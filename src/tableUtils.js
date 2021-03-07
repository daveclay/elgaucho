export const defaultStyle = { style: {} }

export function buildTableStyle(tableType = defaultStyle,
                                tableColor = defaultStyle) {

  return Object.assign({}, tableType.style, tableColor.style)
}