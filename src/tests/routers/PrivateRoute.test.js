import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe('Pruebas en <PrivateRoute />', () => {
    
    const props = { 
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si esta atuenticado y guardar localStorage', () => {
        
      

        // const wrapper = mount( 
        // <MemoryRouter>
        //     <PrivateRoute
        //         isAuth={ true }
        //         component={ () => <span>Listo!</span> }
        //         { ...props }
        //     />
        // </MemoryRouter>
        // );
        
        //expect( wrapper.find('span').exists() ).toBe(true)
        //expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');
        
    });

    test('debe de bloquear el componente si no esta autenticado', () => {
    
         // const wrapper = mount( 
        // <MemoryRouter>
        //     <PrivateRoute
        //         isAuth={ false }
        //         component={ () => <span>Listo!</span> }
        //         { ...props }
        //     />
        // </MemoryRouter>
        // );

        //expect( wrapper.find('span').exists() ).toBe(false)
    })
    

  
    
    
});
