import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "normalize.css";

//模板
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import MainContent from "./components/mainContent";

//內頁
import IndexPage from "./pages/indexPage";
import ClassDetail from "./pages/classDetail";
import ItemList from "./pages/ItemList/itemList";
import ItemDetails from "./pages/ItemDetails/itemDetails";
import MyWishList from "./pages/MyWishList/myWishList";
import OrderDetail from "./pages/OrderDetail/orderDetail";
import ClassPage from "./pages/ClassPage/classPage";
import ClassList from "./pages/ClassList/classList";
import Registration from "./pages/Registration/registration";
import PasswordForgot from "./pages/PasswordForgot/passwordForgot";
import PasswordForgotChange from "./pages/PasswordForgotChange/passwordForgotChange";
import Modify from "./pages/Modify/modify";
import CreditCard from "./pages/CreditCard/creditCard";
import OrderPayMent from "./pages/OrderPayMent/orderPayMent";
import AccountDashboard from "./pages/AccountDashboard/accountDashboard";

import OrderDelivery from "./pages/OrderDelivery/orderDelivery";
import ErrorPage from "./pages/ErrorPage/errorPage";
import OrderHistory from "./pages/OrderHistory/orderHistory";
import ShopPage from "./pages/shop/shop.component";
import FaqAccordion from "./pages/FaqAccordion/FaqAccordion";
import CheckoutPage from "./pages/Checkout/chechout";
import MyCoupon from "./components/MyCoupon/MyCoupon";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <MainContent>
          <Switch>
            <Route path="/classlist">
              <ClassList />
            </Route>
            <Route path="/FaqAccordion">
              <FaqAccordion />
            </Route>
            <Route path="/itemlist">
              <Route path="/itemlist/:brandOrCategory/:Name">
                <ItemList />
              </Route>
            </Route>
            <Route path="/itemdetail/:itemId?">
              <ItemDetails />
            </Route>
            <Route path="/orders">
              <Route path="/orders/checkout">
                <CheckoutPage />
              </Route>
              <Route path="/orders/orderDelivery">
                <OrderDelivery />
              </Route>
              <Route path="/orders/orderpayment">
                <OrderPayMent />
              </Route>
              <Route path="/orders/orderdetail/:orderid">
                <OrderDetail />
              </Route>
            </Route>
            <Route path="/classdetail/:classid">
              <ClassDetail />
            </Route>
            <Route path="/Shop">
              <ShopPage />
            </Route>
            <Route path="/account">
              <Route path="/account" exact>
                <AccountDashboard />
              </Route>
              <Route path="/account/classpage">
                <ClassPage />
              </Route>
              <Route path="/account/creditcard">
                <CreditCard />
              </Route>
              <Route path="/account/wishlist">
                <MyWishList />
              </Route>
              <Route path="/account/passwordforgot">
                <PasswordForgot />
              </Route>
              <Route path="/account/passwordforgotchange/:userId">
                <PasswordForgotChange />
              </Route>
              <Route path="/account/registration">
                <Registration />
              </Route>
              <Route path="/account/modify">
                <Modify />
              </Route>
              <Route path="/account/orderhistory">
                <OrderHistory />
              </Route>
              <Route path="/account/MyCoupon">
                <MyCoupon />
              </Route>
            </Route>
            <Route path="/404">
              <ErrorPage />
            </Route>
            <Route path="/">
              <IndexPage />
            </Route>
          </Switch>
        </MainContent>
        <Footer />
      </>
    </Router>
  );
}

export default App;
