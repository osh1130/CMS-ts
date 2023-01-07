import {useSelector,useDispatch} from "react-redux"

// TS ReturnType is provided in to get the return value type of the function type
//type RootState = ReturnType<typeof store.getState>

const View = () => {
    // retrieve data
    const { num,sarr } = useSelector((state:RootState) => ({
        num:state.handleNum.num,
        sarr:state.handleArr.sarr 
    }));

    
    // change the data
    const dispatch = useDispatch();
    const changeNum = () =>{
        dispatch({ type: 'add3',val:1 })
    }
    const changeNum2 = () =>{
        // redux-thunk：
        dispatch((dis:Function)=>{
            setTimeout(()=>{
            dis({type:'add3',val:1})
            },1000);
        });
    }
    const changeArr = () =>{
        dispatch({ type: 'sarrpush',val:10 })
    }
    return(
        <div className='page1'>
            <p>This is the page content of Page1</p>
            <p>{num}</p>
            <button onClick={changeNum}>changeNum button</button>
            <button onClick={changeNum2}>changeNum ansyn button</button>
            <p>{sarr}</p>
            <button onClick={changeArr}>changeArr button</button>
        </div>
    )
}
export default View