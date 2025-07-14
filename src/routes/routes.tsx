import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "../pages/SignUp"
import { ROUTE } from "../constants"
import Login from "../pages/Login"
import ForgetPassword from "../pages/ForgotPassword"
import VerfPassword from "../pages/ForgotPassword(Verify Code)"
import SetPassword from "../pages/ForgotPassword(Set a new Password)"
import Users from "../pages/users/Users"
import UserDetail from "../pages/users/UserDetail"
import PrivateRoute from "./PrivateRoute"

const MainRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<SignUp />} />
                    <Route path={ROUTE.LOGIN} element={<Login />} />
                    <Route path={ROUTE.FORGETPASSWORD} element={<ForgetPassword />} />
                    <Route path={ROUTE.VERFY_CODE} element={<VerfPassword />} />
                    <Route path={ROUTE.SETPASSWOD} element={<SetPassword />} />
                    <Route element={<PrivateRoute />}>
                        <Route path={ROUTE.USERS} element={<Users />} />
                        <Route path={ROUTE.DETAILUSER} element={<UserDetail />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainRoutes
