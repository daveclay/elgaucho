const defaultStyle = { style: {} }

export function buildTable(config = {},
                           tableType = defaultStyle,
                           tableColor = defaultStyle,
                           mixin = defaultStyle) {
  const style = Object.assign({}, mixin.style, tableType.style, tableColor.style)
  return {
    ...config,
    style: style
  }
}