import React, { useEffect, useContext } from 'react'
import UserContext from '../context/User/UserContext'

const UserList = () => {
    
    const {getUsers} = useContext(UserContext)

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            User list
        </div>
    )
}

export default UserList
