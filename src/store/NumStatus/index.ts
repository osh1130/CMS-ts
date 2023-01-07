const store= {
    state: {
        num:20
    },
    actions: {
        add1(newState:{num:number},action:{type:string,val:number}){
            newState.num++;
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num +=action.val;
        },
        add3(newState:{num:number},action:{type:string,val:number}){
            newState.num +=action.val;
        }
    },
    // redux-thunk async
    asyncActions:{ 
        asyncAdd1(dispatch:Function){
            setTimeout(()=>{
            dispatch({type:"add1"})
            },1000)
        }
    },

    // Unified management of names
    //add1:"add1",
    //add2:"add2",
    actionNames:{
        //add1:"add1",
        //add2:"add2",
    }
}

// Automatic generated actionNames{add1:"add1", add2:"add2"} object
let actionNames = {}
for(let key in store.actions){
     actionNames[key]=key
}
store.actionNames=actionNames

export default store
