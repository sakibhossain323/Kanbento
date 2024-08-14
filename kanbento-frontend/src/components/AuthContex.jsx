import React, { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../services/AuthService";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthContexProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = getUser();
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContexProvider;
