const initialState = {
    data:[]
}
const UserReducer = (state=initialState,action) => {
    switch(action.type){
        case "INSERT": console.log("insert dispatch");
        return {
            ...state,
           data:[
            ...state.data,action.payload
           ]
           
        }
        case "DELETE": return {
            ...state,
            data: state.data.filter((i,index)=>{
                    return index !== action.payload
            })
        }

        default: return state
    }
  
}

export default UserReducer