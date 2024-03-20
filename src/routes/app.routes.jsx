import {Routes,Route} from 'react-router-dom';

import { New } from '../pages/new';
import { Home } from '../pages/Home';
import { App } from "../pages/App/App";
import { Profile } from '../pages/Profile/index';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path= "/New" element={<New/>}/>
            <Route path= "/profile" element={<Profile/>}/>
            <Route path= "/App/:id" element={<App/>}/>
        </Routes>
    )
}