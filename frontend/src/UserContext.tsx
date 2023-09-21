import {createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, FC} from 'react';

interface UserContextProps {
    user: string | null;
    setUser: Dispatch<SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextProps | null>(null);

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

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const value = {
        user,
        setUser,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};