import { useContext, useEffect, useReducer, useState } from "react";
import { UserContext } from "../context/UserContext";

const UserList = () => {

    const {users} = useContext(UserContext)

    return ( <>
    <h3>User List</h3>
    <ul>
        {users.map(user => <li>
            <p>
                <strong>Name:</strong> {user.name.first} {user.name.last}</p>
                <p><strong>Location:</strong> {user.location.country} {user.location.city}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <div>
                    <img src={user.picture.large} alt={"Picture of " + user.name.first} />
                </div>
            
        </li>)}
    </ul>
    </> );
}
 
export default UserList;