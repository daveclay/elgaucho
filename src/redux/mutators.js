import {
  ArrayUtils
} from "../utils";
import {
} from "../selectors/selectors";

/************************************************
 * Mutators
 ************************************************/

export const resolveTableReferences = state => {
  state.tables = Object.entries(state.tableConfigs).map(kv=> {
    const tableId = kv[0]
    const config = kv[1]
    const tableType = state.tableTypes[config.typeId] || { style: {} }
    const tableColor = state.tableColors[config.colorId] || { style: {} }
    const positionStyle = {
      left: config.x,
      top: config.y
    }
    // TODO: mixins
    const style = Object.assign({}, tableType.style, tableColor.style, positionStyle)
    return {
      ...config,
      id: tableId,
      style: style
    }
  })
}

