import {Routes, Route} from  'react-router-dom';

import {Signin} from '../pages/signin/index';
import {Singup} from '../pages/singup/index';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Signin/>}/>
            <Route path='/register' element={<Singup/>}/>
        </Routes>
    )
}