import { CANCEL_ORDER } from '../action-types'

const cancelOrderReducer = (state = false, action) => {
  switch (action.type) {
    case CANCEL_ORDER:
      return state = !state
    default:
      return state
  }

}

export default cancelOrderReducer
