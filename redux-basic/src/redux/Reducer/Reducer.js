const updateReducer = (state={ name: "user" }, action) =>{
    switch(action.type){
        case "UserName" :
         return { 
            name: action.payload 
        }
         default: 
         return state
    }
}

export default updateReducer;