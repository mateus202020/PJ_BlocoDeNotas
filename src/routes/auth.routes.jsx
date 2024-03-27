import {Routes, Route, Navigate} from  'react-router-dom';

import {Signin} from '../pages/signin/index';
import {Singup} from '../pages/singup/index';

export function AuthRoutes(){

    const user = localStorage.getItem("@BlocoNotas:users");

    return(
        <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/register' element={<Singup/>}/>
            {!user && <Route path="*" element={<Navigate to="/"/>}/>}
        </Routes>
    )
}