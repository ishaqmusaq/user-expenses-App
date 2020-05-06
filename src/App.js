import React, { Component } from 'react';
import{connect} from 'react-redux';
import {addUser,deleteUser} from './components/store/usersAction';
import UsersForm from './components/UsersForm';
import UsersInfo from './components/UsersInfo'



  export class App extends Component {
      
      
    
addNewUser = newUser=> {
       this.props.addUser(newUser)
    };

      deleteUser = user_id => {
          this.props.deleteUser(user_id)
      };
      
      

    render () {
        
        return (
            <div  className='App'>
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


const mapStateToProps=(state)=>({
users:state.users
})

const mapDispatchToProps={
addUser:addUser,
deleteUser:deleteUser
}


        export default connect(mapStateToProps,mapDispatchToProps)(App);