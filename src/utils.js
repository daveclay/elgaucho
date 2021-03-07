import produce from "immer";

export const ArrayUtils = {
  clone: function(array) {
    return [...array];
  },
  allExcept: function(array, item) {
    return array.filter(a => a !== item)
  },
  pluckRandom: function(array) {
    if (array.length === 0) {
      return null
    }
    return array.splice(ArrayUtils.sampleIndex(array), 1)[0];
  },
  sampleIndex: function(array) {
    return Math.floor(Math.random() * array.length);
  },
  sample: (array) => {
    return array[ArrayUtils.sampleIndex(array)];
  }
}

export const reduceAll = (state, ...reducers) => {
  return reducers.reduce((newState, reducer) => reducer(newState), state)
}

export const mutatorToReducer = (mutator) => (oldState, action) => produce(oldState, newState => mutator(newState, action))

export const camelCaseToDisplay = (text) => {
  const replaced = text.replace( /([A-Z])/g, " $1" );
  return replaced.charAt(0).toUpperCase() + replaced.slice(1);
}

