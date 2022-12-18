import {useSelector,useDispatch} from "react-redux"
import store from "@/store";
// TS中提供了 ReturnType , 用于 获取函数类型的返回值类型
//type RootState = ReturnType<typeof store.getState>

const View = () => {
    // 获取数据
    const { num } = useSelector((state:RootState) => ({
        num:state.num // 这里划曲线警告
    }));
    // 修改数据
    const dispatch = useDispatch();
    const changeNum = () =>{
        dispatch({ type: 'add2',val:3 })
    }
    return(
        <div className='page1'>
            <p>这是Page2页面内容</p>
            <p>{num}</p>
            <button onClick={changeNum}>按钮</button>
        </div>
    )
}
export default View