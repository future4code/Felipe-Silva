import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewTripPage from "../pages/NewTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import FormPage from "../pages/FormPage";
import ListTripsPage from "../pages/ListTripsPage";


const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path={"/trips/list"}>
                <ListTripsPage />
          </Route>
  
          <Route exact path="/trips/application">
            <FormPage />
          </Route>
  
          <Route exact path="/login">
            <LoginPage />
          </Route>
  
          <Route exact path ="/admin/trips/list">
            <AdminPage />
          </Route>

          <Route exact path ="/admin/trips/create">
            <NewTripPage />
          </Route>

          <Route exact path ="/admin/trips/detail">
            <TripDetailsPage />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;