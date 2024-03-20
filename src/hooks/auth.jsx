import { createContext, useContext, useState, useEffect } from "react";
import {api} from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [data, setData] = useState({});

    async function  Signin({email, password}){
        try{
            const response = await api.post("/sessions", {email, password});
            const {user, token} = response.data;
            
            localStorage.setItem("@BlocoNotas:user", JSON.stringify(user));
            localStorage.setItem("@BlocoNotas:token", token);
            
            console.log(response, token);
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({user, token});

        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possivel entrar.");
            }
        }
       
    }

    function signOut(){
        localStorage.removeItem("@BlocoNotas:token");
        localStorage.removeItem("@BlocoNotas:user");

        setData({})
    }

    useEffect(() => {
        const token = localStorage.getItem("@BlocoNotas:token");
        const user = localStorage.getItem("@BlocoNotas:user");

        if(token && user){
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);
    
    return(
        <AuthContext.Provider value={{Signin, signOut, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth(){
    const context = useContext(AuthContext);
    return context;
}



export {AuthProvider, useAuth};
