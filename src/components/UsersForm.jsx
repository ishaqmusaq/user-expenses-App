import React, { Component } from 'react';

export class UsersForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:'1',
            ITEMS: '',
            ITEMS_DESCRIPTION: '',
            TIME_PURCHASED: '',
            DATE_PURCHASED: '',
            LOCATION: '',
            AMOUNT_SPENT: ''
        };
      
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value,
            }
        );

    };

    
    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            ITEMS: this.state.ITEMS,
            ITEMS_DESCRIPTION: this.state.ITEMS_DESCRIPTION,
            TIME_PURCHASED: this.state.TIME_PURCHASED,
            DATE_PURCHASED: this.state.DATE_PURCHASED,
            LOCATION: this.state.LOCATION,
            AMOUNT_SPENT: this.state.AMOUNT_SPENT,

        };
            
        this.props.addUser(newUser);
        this.setState(
            {
                 ITEMS: '',
                ITEMS_DESCRIPTION: '',
                TIME_PURCHASED: '',
                DATE_PURCHASED: '',
                LOCATION: '',
                AMOUNT_SPENT: ''
            } );
        };
    
    render() {
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
                        <textarea  placeholder='ITEMS_DESCRIPTION' name='ITEMS_DESCRIPTION' value={this.state.ITEMS_DESCRIPTION} onChange={this.handleChange} type="text"/>
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
                        <input placeholder=' location' name='LOCATION' value={this.state.LOCATION} onChange={this.handleChange} type='location' />
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

export default UsersForm;