import { ArrayUtils } from "../utils";

/************************************************
 * Selectors
 ************************************************/
const findByName = (collection, name) => collection.find(item => item.name === name)

class StateSelector {
  constructor(state) {
    this.state = state
  }

  getTableTypes() {
    return this.state.tableTypes
  }

  findTableTypeForName(name) {
    return findByName(this.getTableTypes(), name)
  }

  getTableColors() {
    return this.state.tableColors
  }

  findTableColorForName(name) {
    return findByName(this.getTableColors(), name)
  }

  getTableTypeMixins() {
    return this.state.tableTypeMixins
  }
  findTableTypeMixinForName(name) {
    return findByName(this.getTableTypeMixins(), name)
  }
}

export const newStateSelector = (state) => new StateSelector(state)
