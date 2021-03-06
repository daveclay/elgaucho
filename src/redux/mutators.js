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
  state.tables = Object.entries(state.tableConfigs).map(kv=> {
    const tableId = kv[0]
    const config = kv[1]
    const tableType = state.tableTypes[config.typeId] || defaultStyle
    const tableColor = state.tableColors[config.colorId] || defaultStyle
    const mixin = state.tableTypeMixins[tableType.mixin] || defaultStyle
    const positionStyle = {
      left: config.x,
      top: config.y
    }
    // TODO: mixins
    const style = Object.assign({}, mixin.style, tableType.style, tableColor.style, positionStyle)
    return {
      ...config,
      id: tableId,
      style: style
    }
  })
}

