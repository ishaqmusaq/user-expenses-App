import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './App';
import editedForm  from './components/editedForm';

const Router= () => {
    return (
<BrowserRouter>
<Route exact  path='/'  component={App}/>
<Route path='/edit/:id' component={editedForm}/>
</BrowserRouter>
    );
}

export default Router;