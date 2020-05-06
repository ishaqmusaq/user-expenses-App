import {v4 as uuid} from 'uuid';

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
            id: uuid(),
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

        case "DELETE_USER":
            const fitlteredUsers=state.users.filter(user=> user.id !== action.payload);
            return {...state,users:fitlteredUsers };
            case 'EDIT_USER':
                const editedForm= state.users.map(user=>{
                    if(user.id ===  action.user_id){
                        return{...user, ...action.updated_info}
                    }else{
                        return user;
                    }

                });
                return{...state , users:editedForm }
    default:
        return state;
}};

export default userReducer;