import React, { useEffect, useState } from 'react';
import MainContainer from '../../components/mainContainer'
import AccountSideBar from '../../components/AccountSideBar/accountSideBar'
import OrderHistoryCard from '../../components/OrderHistoryCard/orderHistoryCard'
import { connect } from "react-redux";


import './orderHistory.scss'

const OrderHistory = (props) => {

  //global state
  const { user, cancelOrder } = props;

  //local state
  const [ordersHistory, setOrdersHistory] = useState([])

  const fetchOrderHistory = async () => {
    const response = await fetch('http://localhost:3030/users/orderhistory', { credentials: 'include' })
    const data = await response.json()
    return data
  }

  useEffect(() => {
    (async () => {
      const data = await fetchOrderHistory()
      setOrdersHistory(data)
    })()
  }, [user.logInStatus, cancelOrder])


  return (
    <MainContainer>
      <div className='d-flex order-history-container'>
        <AccountSideBar />
        <div>
          {ordersHistory.orderHistory && ordersHistory.orderHistory.map(el => (
            <OrderHistoryCard key={el.orderId} orderId={el.orderId} totalPrice={el.totalPrice} orderDate={el.created_at} orderStatus={el.orderStatus} deliveryId={el.deliveryId} itemImg={el[el.itemId].itemimg} itemName={el[el.itemId].itemName} itemPrice={el[el.itemId].itemPrice} itemBrand={el[el.itemId].itemBrand} />
          ))}
        </div>
      </div>
    </MainContainer>
  )
}

const mapStateToProps = (store) => {
  return { user: store.user, cancelOrder: store.cancelOrder };
};

export default connect(mapStateToProps)(OrderHistory)