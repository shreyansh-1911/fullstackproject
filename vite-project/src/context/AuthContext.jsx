import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(localStorage.getItem('userId'));

    const login = (id) => {
        setUserId(id);
        localStorage.setItem('userId', id);
    };

    const logout = () => {
        setUserId(null);
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
