import React, { useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { checkPermission } from '@/utils';
import { appRoutes } from '@/routes';

import { Wrapper, Header } from './App.styles';
import * as actions from '../core.actions';
import * as selectors from '../core.selectors';


const App: React.FC = () => {
  const dispatch = useDispatch();
 
  const isAuth = useSelector(selectors.getIsAuthed);
  const isAuthLoading = useSelector(selectors.getIsAuthLoading);
 
  useEffect(() => {
    dispatch(actions.checkAuth.request())
  }, []);
  console.log('appRoutes ', appRoutes);
  if(isAuthLoading) {
    return (
      <p>
        Loading...
      </p>
    )
  }
  console.log('appRoutes ', appRoutes);
  
  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Loading...</p>}>
      <Wrapper>
        <Header>
          <Switch>
          
            {appRoutes.map((route, index) => {
              const { component: Component , ...rest }  = route;
              return (
                <Route
                  key={index}
                  {...rest}
                  render={props =>
                    isAuth ? (
                      // @ts-ignore
                      <Component {...props} />
                    ) : ( 
                        <Redirect
                          to={{
                            pathname: "/auth"
                          }}
                        />
                      )
                  }
                />);
            })}
           
          
          </Switch>
          
          
        </Header>
      </Wrapper>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
