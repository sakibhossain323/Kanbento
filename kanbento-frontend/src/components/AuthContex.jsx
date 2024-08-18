import React, { createContext, useContext, useEffect, useState } from "react";
import { getSavedUser } from "../services/AuthService";
import { useLoaderData } from "react-router-dom";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const authLoader = () => {
    return getSavedUser();
};

const AuthContexProvider = ({ children }) => {
    const loadedUser = useLoaderData();
    const [user, setUser] = useState(loadedUser);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContexProvider;
