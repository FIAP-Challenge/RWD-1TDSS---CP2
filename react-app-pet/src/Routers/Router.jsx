import { Routes, Route} from 'react-router-dom'
import React from 'react'
import PetCadastro from '../components/petsCadastro/PetCadastro';

const Routers = () =>{

    return(
        <div>

            <Routes>
                <Route path='/' element={<PetCadastro/>}>

                </Route>
            </Routes>

        </div>
    )

}


export default Routers;