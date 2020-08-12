import React, { Component } from 'react';
import{connect} from 'react-redux';
import {logoutUser} from  './components/store/authAction'
import {addUser,deleteUser,getAllUsers} from './components/store/usersAction';
import UsersForm from './components/UsersForm';
import UsersInfo from './components/UsersInfo'



  export class App extends Component {
      
      
    
addNewUser = newUser=> {
       this.props.addUser(newUser)
    };

      deleteUser = user_id => {
          this.props.deleteUser(user_id)
      };

      componentDidMount(){
this.props.getAllUsers();
      }
      
      

    render () {
        
        return (
            <div  className='App'>
                <button onClick={this.props.logoutUser}>Loguot</button>
                {/*<h1> DAILY EXPENSES<h1/> */}

                <UsersForm addUser={this.addNewUser}/>
                <div className='App_user-info'>
                {this.props.users.map((item) => {
                    
                    return (
                        <UsersInfo  key={item.id}
                        id={item.id}
                        ITEMS={item.ITEMS}
                         ITEMS_DESCRIPTION ={item.ITEMS_DESCRIPTION}
                          TIME_PURCHASED ={item.TIME_PURCHASED}
                        DATE_PURCHASED= {item.DATE_PURCHASED}
                        LOCATION= {item.LOCATION}
                        AMOUNT_SPENT= {item.AMOUNT_SPENT}
                            removeUser={this.deleteUser}
                        />
                        
                    );
                     } )}
                     
                </div>

            </div>
        ); 
    }
}


const mapStateToProps=(state)=>{
    console.log(state)
    return {
users:state.usersState.users
}; }

const mapDispatchToProps={
addUser,
deleteUser,
getAllUsers,
logoutUser
}


        export default connect(mapStateToProps,mapDispatchToProps)(App);