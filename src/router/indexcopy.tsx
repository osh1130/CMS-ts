import App from "../App"
import Home from "../views/Home"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
// BrowserRouter ( History ) ， HashRouter( Hash )
// const baseRouter = () => {
// return ()
// }
const baseRouter = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            {/* When configuring the user to access /, redirect to the /home path */}
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/home" element={<Home/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
    )
    export default baseRouter