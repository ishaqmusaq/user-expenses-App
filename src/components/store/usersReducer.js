 const initialState={
    users: [{
        ITEMS: 'Rent',
        ITEMS_DESCRIPTION: 'house rent',
        TIME_PURCHASED: '14:00',
        DATE_PURCHASED: '12/3/2020',
        LOCATION: 'Accra-ghana',
        AMOUNT_SPENT: '20.00'
    }


    ]



}

const userReducer=(state=initialState,action )=>{
switch (action.type) {
    case 'ADD_USER':
        const newUser = {
            ITEMS: action.payload.ITEMS,
            ITEMS_DESCRIPTION: action.payload.ITEMS_DESCRIPTION,
            TIME_PURCHASED: action.payload.TIME_PURCHASED,
            DATE_PURCHASED: action.payload.DATE_PURCHASED,
            LOCATION: action.payload.LOCATION,
            AMOUNT_SPENT: action.payload.AMOUNT_SPENT,

        };
        return {
          ...state,users: [...state.users, newUser]
        };
    default:
        return state;
}
}

export default userReducer;