const defaultStyle = { style: {} }

export function buildTableStyle(tableType = defaultStyle,
                                tableColor = defaultStyle,
                                mixin = defaultStyle) {
  return Object.assign({}, mixin.style, tableType.style, tableColor.style)
}