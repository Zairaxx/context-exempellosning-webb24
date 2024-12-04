import { createContext, useState } from "react";


export const UserContext = createContext();

//Returnera en Context.Provider och sätta in value

export function UserContextProvider ({children}){

    const [users, setUsers] = useState([])

    const addUser = async () => {
        //Fetcha användare + lägga till i nuvarande user-statet
        let response = await fetch("https://randomuser.me/api");
        let json = await response.json();
        let newArray = [...users, json.results[0]]
        setUsers(newArray)
    }


    return(
        <UserContext.Provider value={{users, addUser}}>
            {children}
        </UserContext.Provider>
    )
}