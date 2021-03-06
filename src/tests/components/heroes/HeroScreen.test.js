import React from 'react';
import { mount, shallow } from "enzyme";
import { HeroesScreen } from '../../../components/heroes/HeroesScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('pruebas en <HeroeScreen />', () => {
    
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero']}>
                <HeroesScreen history={ historyMock }/> 
            </MemoryRouter>
        )

    test('debe de mostrar el componente redirect si no hay argumentos en el url ', () => {
        
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    });

    test('debe de mostrar un hero si el parametro existe y se encuentra ', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ HeroesScreen }/>
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);
    });

    test('should return to the previous screen with push function', () => {
        
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ (props) => <HeroesScreen history={ historyMock } />}/>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    })

    test('should return to the previous screen', () => {
        
        const historyMock = {
            length: 3,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ (props) => <HeroesScreen history={ historyMock } />}/>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).not.toHaveBeenCalled(0);
        expect( history.goBack ).toHaveBeenCalled();
    });
    

    test('debe de llamar el redirect si el hero no existe', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ (props) => <HeroesScreen history={ historyMock } />}/>
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('')
    })
    
    
});
