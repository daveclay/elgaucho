import {deepCopy} from "./utils";

export const defaultStyle = { styleConfig: {} }

function translateStyle(styleConfig) {
  const translatedStyle = {
    ...styleConfig
  }

  if (styleConfig.rotation) {
    translatedStyle.transform = `rotate(${styleConfig.rotation}deg)`
  }

  if (styleConfig.width) {
    translatedStyle.width = `${styleConfig.width}px`
  }

  if (styleConfig.height) {
    translatedStyle.height = `${styleConfig.height}px`
  }

  return translatedStyle
}

export function buildTableStyle(table) {
  const tableType = table.tableType || defaultStyle
  const tableColor = table.tableColor || defaultStyle
  return Object.assign({},
    translateStyle(table.styleConfig),
    translateStyle(tableType.styleConfig),
    translateStyle(tableColor.styleConfig))
}

export function newTable(state) {
  return {
    ...deepCopy(state.newTableTemplate),
    tableType: state.tableTypes[0],
    tableColor: state.tableColors[0]
  }
}