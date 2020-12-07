import CONSTS from '../../constants/constants'
interface InitialState{
    post:any
}
const initialState={
    post:[]
}
export const appReducer=(state:InitialState=initialState,action:any)=>{
    switch(action.type){
        case (CONSTS.GET_POST):
            const postValue=[...state.post,...action.posts]
            return ({...state,post:postValue})
        default:return  state;
    }

}