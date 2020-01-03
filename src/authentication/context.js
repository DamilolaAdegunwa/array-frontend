import React, {useContext, createContext} from 'react';
export const AuthContext = createContext();
export function useAuth(){
    useContext(AuthContext);
}