import {
  ArrayUtils
} from "../utils";
import {
} from "../selectors/selectors";

/************************************************
 * Mutators
 ************************************************/
const defaultStyle = {
  style: {}
}

export const resolveTableReferences = state => {
  state.tables = state.tableConfigs.map(config=> {
    const tableType = state.tableTypes[config.typeId] || defaultStyle
    const tableColor = state.tableColors[config.colorId] || defaultStyle
    const mixin = state.tableTypeMixins[tableType.mixin] || defaultStyle
    const style = Object.assign({}, mixin.style, tableType.style, tableColor.style)
    return {
      ...config,
      style: style
    }
  })
}

