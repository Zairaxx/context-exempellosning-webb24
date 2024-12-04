import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AddUserBtn = () => {

    const {addUser} = useContext(UserContext)

    return ( <button onClick={addUser}>Add user</button> );
}
 
export default AddUserBtn;