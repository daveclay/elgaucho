import {
} from "../selectors/selectors";
import {ArrayUtils} from "../utils";

export const init = () => ({
  type: 'init'
})

export const onTableTypeSelected = (tableType) => (dispatch) => {
  dispatch({
    type: 'onTableTypeSelected',
    tableType
  })
}

export const onTableColorSelected = (tableColor) => (dispatch) => {
  dispatch({
    type: 'onTableColorSelected',
    tableColor
  })
}

