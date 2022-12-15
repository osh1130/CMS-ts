import handleArr from "./"
let reducer = (state = {...handleArr.state}, action:{type:string,val:number}) =>
{
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case handleArr.sarrpush:
        handleArr.actions[handleArr.sarrpush](newState,action)
        break;
    default:
        break;
    }
    return newState
}
export default reducer