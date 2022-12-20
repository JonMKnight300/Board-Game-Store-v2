import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { auth, handleUserProfile, perf } from './firebase/utils';
import { checkUserSession } from './redux/User/user.actions';

//components
import AdminToolbar from './components/AdminToolbar';
import app from 'firebase/app';
import { analytics } from './firebase/utils';

//hoc
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth';

//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomePageLayout';
import AdminLayout from './layouts/AdminLayout';

//pages
import Homepage from './pages/Homepage/index';
import Search from './pages/Search';
import Registration from './pages/Registration';
import Login from './pages/Login'
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

import './default.scss';
import Payment from './pages/payment';


const App = props => {
  const dispatch = useDispatch();
  app.analytics();
  app.performance(); 
  const perf = app.performance(); 
  //const perf = getPerformance( app );

  useEffect(() => {
    dispatch(checkUserSession());

  }, [] );
  
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const logEvent = (url) => {
        analytics.setCurrentScreen(url);
       analytics.logEvent(`screen_view:${url}`);
      };
      //analytics.Cart.logEvent();
      //routers.events.on('routeChangeComplete', logEvent);
      //For First Page
      analytics.logEvent( window.location.pathname );
      // firebaseAnalytics.setUserProperties({ is_subscriber: true });
      //analytics.logEvent();

      //Remvove Event Listener after un-mount
      return () => {
        //routers.events.off('routeChangeComplete', logEvent);
      };
    }
  }, []);

  // useEffect( () =>
  // {


  //   const authListener = auth.onAuthStateChanged(async userAuth =>
  //   {
  //     if ( userAuth )
  //     {
  //       const userRef = await handleUserProfile(userAuth );
  //       userRef.onSnapshot( snapshot =>
  //       {
  //         dispatch(setCurrentUser)(
  //           {
  //             id: snapshot.id,
  //             ...snapshot.data()
  //           } );
  //       })
  //     }

  //       dispatch(setCurrentUser(userAuth))
  //   } );
  //   return () =>
  //   {
  //     authListener();
  //   };
  // }, [])




  //   const configAuthWrapper = {
  //     headline: 'Email Password'
  // };
    return (
        
    <div className="App">
        <Router>
          <AdminToolbar />
        <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
            )} />
        <Route exact path="/search" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
            )} />
        <Route path="/search/:filterType" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
            )} />
                    <Route path="/product/:productID" render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
            )} />
        <Route path="/cart" render={() => (
          <MainLayout>
            <Cart />
          </MainLayout>
            )} />
                    <Route path="/payment" render={() => (
          <WithAuth>
            <MainLayout>
              <Payment />
            </MainLayout>
          </WithAuth>
        )} />
      <Route path="/registration" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
      )} />
              <Route path="/login"
                render={() => (
          <MainLayout>
            <Login />
          </MainLayout>
                )} />
              <Route path="/recovery" render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
            )} />
        <Route path="/dashboard" render={() => (
              <WithAuth>
                <MainLayout>
                  <Dashboard />
                  </MainLayout>
          </WithAuth>
            )} />
          <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
         </WithAdminAuth>
        )} />
        </Switch>
        </Router>
      </div>
 
  );
  }


export default App;
