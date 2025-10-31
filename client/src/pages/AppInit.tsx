import { useDispatch} from "react-redux"
import { userProfile } from "../features/auth/authSlice"

const AppInit = () => {
    const dispatch=useDispatch();

    const storedUser=localStorage.getItem("userInfo");

    if(storedUser){
        dispatch(userProfile(JSON.parse(storedUser)))
    }

    return null; 
}

export default AppInit