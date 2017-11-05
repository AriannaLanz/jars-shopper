import axios from 'axios'

const GET_USER_ORDERS = 'GET_USER_ORDERS'

const getUserOrdersActionCreator = orders => ({type: GET_USER_ORDERS, orders})


export default function (state = [], action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return action.orders
    default:
      return state
  }
}

export const fetchUserOrders = (userId) => {
  return function thunk (dispatch) {
      return axios.get(`/api/orders/users/${userId}`)
        .then(res => res.data)
        .then(order => dispatch(getUserOrdersActionCreator(orders)))
  }
}
