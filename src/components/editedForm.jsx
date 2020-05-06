import React, { Component } from 'react';
import {connect} from 'react-redux';
import { editUser } from './store/usersAction';


 class editedForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ITEMS: props.user.ITEMS,
            ITEMS_DESCRIPTION: props.user.ITEMS_DESCRIPTION,
            TIME_PURCHASED: props.user.TIME_PURCHASED,
            DATE_PURCHASED: props.user.DATE_PURCHASED,
            LOCATION: props.user.LOCATION,
            AMOUNT_SPENT: props.user.AMOUNT_SPENT
        };
         this.id = props.match.params.id
         
        
    }

    handleChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            }
        );
        console.log(this.state.ITEMS);
    };
    handleSubmit = e => {
        e.preventDefault();
        const updatedInfo = {
            
            ITEMS: this.state.ITEMS,
            ITEMS_DESCRIPTION: this.state.ITEMS_DESCRIPTION,
            TIME_PURCHASED: this.state.TIME_PURCHASED,
            DATE_PURCHASED: this.state.DATE_PURCHASED,
            LOCATION: this.state.LOCATION,
            AMOUNT_SPENT: this.state.AMOUNT_SPENT,

        };

            
        this.props.editUser(this.id , updatedInfo);
        this.setState(
            {
                 ITEMS: '',
                ITEMS_DESCRIPTION: '',
                TIME_PURCHASED: '',
                DATE_PURCHASED: '',
                LOCATION: '',
                AMOUNT_SPENT: ''
            } );
            
            this.props.history.push('/');
        };
    
    
    render(){
        return (
            <form onSubmit={this.handleSubmit} className='App-user-form'>
                <div className='container'>
                    <h1 className='App-header'>USER DAILY EXPENSES</h1>

                    <div className='form-control'>
                        <label>ITEMS: </label>
                        <input placeholder=' item' name='ITEMS' value={this.state.ITEMS} onChange={this.handleChange}  />
                        <br />
                    </div>
                    <br /><br />


                    <div className='form-control'>
                        <label>ITEMS_DESCRIPTION: </label>
                        <textarea  placeholder='ITEMS_DESCRIPTION' value={this.state.ITEMS_DESCRIPTION} onChange={this.handleChange} type="text"/>
                        <br />
                    </div>
                    <br /><br />

                    <div className='form-control'>
                        <label>TIME_PURCHASED: </label>
                        <input placeholder=' time' name='TIME_PURCHASED' value={this.state.TIME_PURCHASED} onChange={this.handleChange} type='time' />
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        <label>DATE_PURCHASED: </label>
                        <input placeholder=' date' name='DATE_PURCHASED' value={this.state.DATE_PURCHASED} onChange={this.handleChange} type='DATE' />
                        <br />
                    </div>
                    <br /><br />
                    <div className='form-control'>
                        <label>LOCATION: </label>
                        <input placeholder=' location' name='LOCATION' value={this.state.LOCATION} onChange={this.handleChange} type='text' />
                        <br />
                    </div>

                    <br /><br />
                    <div className='form-control'>
                        <label>AMOUNT_SPENT: </label>
                        <input placeholder=' Amounnt' name='AMOUNT_SPENT' value={this.state.AMOUNT_SPENT} onChange={this.handleChange} type='Number' />
                        <br /><br />
                    </div><br />
                    <button className='btn' type='submit'> Add Item</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state,ownProps) => ({
    user: state.users.find(user => user.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
    editUser: editUser
    
}





export default connect(mapStateToProps,mapDispatchToProps)(editedForm);