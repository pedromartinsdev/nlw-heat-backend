import { createContext } from "react";

const AuthContext = createContext(null)

export function AuthProvider(){
    return (
        <AuthContext.Provider>
    )
}