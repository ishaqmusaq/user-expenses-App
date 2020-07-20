import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware ,compose} from 'redux';
import {Provider} from 'react-redux'
import  thunk  from 'redux-thunk';
import {getFirebase, reduxReactFirebase} from 'react-redux-firebase';
import firebase from './Firebase/config';
import {getFirestore ,reduxFirestore}  from 'redux-firestore'
import usersReducer from './components/store/usersReducer';






const store = createStore(usersReducer,compose(
applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebase),
    reduxReactFirebase(firebase)
));

ReactDOM.render(
<Provider store={store}>
 <Router/>
</Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
