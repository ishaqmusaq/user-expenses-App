import {v4 as uuid} from 'uuid';

const initialState={
    users: [],



}

const usersReducer=(state=initialState,action )=>{
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

                case 'SET_ALL_USERS':
                    return{users: action.payload}
    default:

        return state;
}};

export default usersReducer;