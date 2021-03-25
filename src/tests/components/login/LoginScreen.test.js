import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {
    
    const mockValue = {
        dispath: jest.fn(),
        user: {
            logged: false,
        }
    }

    const history = {
        replace: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ mockValue }>
            <LoginScreen history={ history } />
        </AuthContext.Provider>
    )

    test('debe de mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de realizar el dispath y la navegacion', () => {
        
        wrapper.find('.btn-primary').prop('onClick')();

        expect( mockValue.dispath ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Isaac'
            }
        })

        expect( history.replace ).toHaveBeenCalled();
    
    })
    
    
})
