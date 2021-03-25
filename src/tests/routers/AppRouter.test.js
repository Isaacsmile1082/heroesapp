import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';
const { mount } = require("enzyme");

describe('Pruebas en <AppRouter/>', () => {
    
    const contextValue = { 
        dispath: jest.fn(),
        user: {
            logged: false
        }
    }

    test('debe de mostrar login si no esta autenticado', () => {
        
        const wrapper = mount (
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el componente de marvel si esta atuenticado', () => {
        
 
        const contextValue = { 
            dispath: jest.fn(),
            user: {
                logged: true,
                name: 'Angel'
            }
        }

        const wrapper = mount (
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect( wrapper.find('navbar').exists() ).toBe( true );

    })  
    
    
});
