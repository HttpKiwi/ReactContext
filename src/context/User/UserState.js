import React, { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axios from 'axios'

const UserState = (props) => {
     const initialState = {
         users: [],
         selectedUser: null
     }

     const [state, dispatch] = useReducer(UserReducer, initialState)

     const getUsers = async () => {
        const res = await axios.get('http://localhost:3001/users')
        console.log(res)
    }

     const getProfile = async (id) => {
        const res = await axios.get('http://localhost:3001/users/' + id)
        console.log(res)
    }

     return (
         <UserContext.Provider value = {{
             users: state.users,
             selectedUser: state.selectedUser,
             getUsers,
             getProfile
            }
         }>
             {props.children}
         </UserContext.Provider>
     )
}

export default UserState