/************************************************
 * Selectors
 ************************************************/
const findByName = (collection, name) => collection.find(item => item.name === name)
const findById = (collection, id) => collection.find(item => item.id === id)

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

  getTableTypeStyleMixins() {
    return this.state.tableTypeStyleMixins
  }

  findTableTypeMixinForName(name) {
    return findByName(this.getTableTypeStyleMixins(), name)
  }

  findTableForId(id) {
    return findById(this.state.tables, id)
  }
}

export const newStateSelector = (state) => new StateSelector(state)
