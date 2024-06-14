import { createContext, useContext, useState } from "react";

const GoogleContext = createContext();
const AuthProvider = ({children}) => {

    const [googlAuth,setAuth] = useState({
        token : null
    })

    return(
        <GoogleContext.Provider  value={[googlAuth,setAuth]}>
            {children}
        </GoogleContext.Provider>
    )
}

const useAuth = () => {
    return useContext(GoogleContext);
}

export {useAuth,AuthProvider}