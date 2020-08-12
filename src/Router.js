import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './App';
import editedForm  from './components/editedForm';
import Register from './components/Register';
import Login from './components/Login';
import ProtectRoute from './components/ProtectRoute';


const Router= () => {
    return (
<BrowserRouter>
<ProtectRoute exact  path='/'  component={App}/>
<ProtectRoute path='/edit/:id' component={editedForm}/>
            <Route path='/Register' component={Register} />
            <Route path='/Login' component={Login} />
</BrowserRouter>
    );
}

export default Router;