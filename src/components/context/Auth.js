import { useState, createContext } from 'react';

const USER_LOGIN = 'user';
const USER_PSW = 'user';

const initAuthContextData = {
    isLogged: false,
    handleLogin: () => {},
    handleLogout: () => {},
}
export const AuthContext = createContext(initAuthContextData);

const AuthProvider = ({ children }) => {
    const [ isLogged, setIsLogged ] = useState(false);

    const handleLogin = (login, password) => {
        if (login === USER_LOGIN && password === USER_PSW) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }
    const handleLogout = () => {
        setIsLogged(false);
    }

    const authContextData = {
        isLogged,
        handleLogin,
        handleLogout,
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;