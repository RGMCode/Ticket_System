// import { createContext, useContext, useState } from 'react';
//
// const UserContext = createContext(null);
//
// export const useUser = () => {
//     return useContext(UserContext);
// };
//
// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const value = {
//         user,
//         setUser,
//     };
//
//     return <UserContext.Provider value={value}> {children} </UserContext.Provider>;
// };


import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextProps {
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserContext = createContext<UserContextProps | null>(null);

interface UserProviderProps {
    children: ReactNode;
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const value = {
        user,
        setUser,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};