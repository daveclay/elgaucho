import {
  ArrayUtils
} from "../utils";
import {
  newStateSelector
} from "../selectors/selectors";
import {buildTable} from "../tableUtils";

/************************************************
 * Mutators
 ************************************************/

export const resolveTableReferences = state => {
  const stateSelector = newStateSelector(state)
  state.tables = state.tableConfigs.map(config=> {
    const tableType = stateSelector.findTableTypeForName(config.typeId)
    const tableColor = stateSelector.findTableColorForName(config.colorId)
    const mixin = stateSelector.findTableTypeMixinForName(tableType.mixinTableTypeId)
    return buildTable(config, tableType, tableColor, mixin)
  })
}

