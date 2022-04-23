import {useContext, useState} from 'react'
import { AuthContext, handleLogout } from '../context/Auth'
import { Link } from 'react-router-dom';
import LogoutBtnStyled from './Logout.styled';
import { Icon } from '@iconify/react';

const Logout = () => {
    const { isLogged, handleLogout } = useContext(AuthContext)
const LogoutButton = () => {
    handleLogout();
}
    return (
        <>
        {isLogged && <Link to="/"><LogoutBtnStyled onClick={LogoutButton}>
        <Icon icon="fa:sign-out" />
        </LogoutBtnStyled></Link>}
        </>
    )
}

export default Logout;