import {
  ArrayUtils
} from "../utils";
import {
} from "../selectors/selectors";

/************************************************
 * Mutators
 ************************************************/

export const resolveTableReferences = state => {
  state.tables = Object.entries(state.tableConfigs).map(table => {
    const tableId = table[0]
    const config = table[1]
    return {
      ...config,
      id: tableId,
      type: state.tableTypes[table.typeId],
      color: state.tableColors[table.colorId]
    }
  })
}

