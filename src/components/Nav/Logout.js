import {useContext, useState} from 'react'
import { AuthContext, handleLogout } from '../context/Auth'
import { Link } from 'react-router-dom';

const Logout = () => {
    const { isLogged, handleLogout } = useContext(AuthContext)
const LogoutButton = () => {
    handleLogout();
}
    return (
        <>
        {isLogged && <Link to="/"><button onClick={LogoutButton}>
            Logout
        </button></Link>}
        </>
    )
}

export default Logout;