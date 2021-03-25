import React from 'react';
import { mount } from "enzyme";
import { Navbar } from '../../components/ui/Navbar';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../types/types';

describe('Pruebas en <Navabr />', () => {
    
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = { 
        dispath: jest.fn(),
        user: {
            logged: true,
            name: 'Dante'
        }
    }


    const wrapper = mount(   
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar/> 
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Dante');
    });

    test('debe de llamar el logout y el history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispath ).toHaveBeenCalledWith({
            type: types.logout
        })

        expect( historyMock.replace ).toHaveBeenCalled('/login');  

    })
    
    
});
