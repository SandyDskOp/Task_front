import Login from "../../Pages/User/Login";
import Register from "../../Pages/User/Register";

export const AuthRoutePaths = [
    {id:1,path:"/",component:Login,isProtected:"false"},
    {id:2,path:"/register",component:Register,isProtected:"false"},
]