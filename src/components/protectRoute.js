import React from 'react';
import { connect} from  'react-redux';
import {Route,Redirect} from 'react-router-dom'

 function protectRoute({component : Component,auth, ...rest}) {
     //if user is logged in
if(!auth.isLoaded) return null;
  if (auth.uid){
      return (<Route
       {...rest} 
         render={(props) => {
          return <Component {...props} />;
      }} />
      );
    
  }

    //but if the user is not logged in

     return (
     <Route 
      {...rest} 
       render={(props) => {
         return <Redirect to= {{pathname :'/Login'}}/>;
        }} 
     />
     );
}

const mapStateToProps =(state) =>{
    return{
        auth: state.firebse.auth,
    };

};

export default connect(mapStateToProps)(protectRoute);
