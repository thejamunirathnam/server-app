import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import Login from "./components/login/Login.jsx";
import Order from "./components/order/Order.jsx";
import Checkout from "./components/checkout/Checkout.jsx";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  return (
    <div className="App">
      <Router>
        <div className="app-container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  {!userLoggedIn ? (
                    <Login setUserLoggedIn={setUserLoggedIn} />
                  ) : (
                    <Navigate to="/order" />
                  )}
                </>
              }
            />
            <Route
              path="/order"
              element={
                <>
                  {userLoggedIn ? (
                    <Order setOrderDetails={setOrderDetails} />
                  ) : (
                    <Navigate to="/" />
                  )}
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  {orderDetails ? (
                    <Checkout orderDetails={orderDetails} />
                  ) : (
                    <Navigate to="/order" />
                  )}
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
