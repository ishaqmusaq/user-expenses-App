import React, { Component } from 'react';
import{connect} from 'react-redux';
import {addUser} from './components/store/usersAction';
import './App.css';
import UsersForm from './components/UsersForm';
import UsersInfo from './components/UsersInfo'



  class App extends Component {
    
addNewUser = newUser=> {
       this.props.addUser(newUser)
    };

    render () {
        return (
            <div  className='App'>
                {/*<h1> DAILY EXPENSES<h1/> */}
                <UsersForm addUser={this.addNewUser}/>
                <div className='App_user-info'>
                {this.props.users.map((item,index) => {
                    
                    return (
                        <UsersInfo  key={index} ITEMS={item.ITEMS} ITEMS_DESCRIPTION={item.ITEMS_DESCRIPTION} TIME_PURCHASED={item.TIME_PURCHASED}
                        DATE_PURCHASED= {item.DATE_PURCHASED}
                        LOCATION= {item.LOCATION}
                        AMOUNT_SPENT= {item.AMOUNT_SPENT}/>
                    );
                     } )}
                </div>

            </div>
        ); 
    }
}


const mapStateToProps=(state)=>({
users:state.users
})

const mapDispatchToProps={
addUser:addUser
}


        export default connect(mapStateToProps,mapDispatchToProps)(App);