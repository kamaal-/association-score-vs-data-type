import React from 'react';
import { render } from '@testing-library/react';
import Bar from '../components/charts/Bar';
import data from '../config/mock.data';
import { transformDataToRows  } from '../services/'
import ReactDOM from 'react-dom'

describe('Bar Chart', () => {

    const setup = () => {
        const container = document.createElement('div')
        const rows = transformDataToRows(data())	
        return render(<Bar row={rows[0]} chartTitle={'Chart Title'}/>, {
            container: document.body.appendChild(container)
        });
    }

  	it('renders without crashing', () => {
        const div = document.createElement('div');
        const rows = transformDataToRows(data())	
    	ReactDOM.render(<Bar row={rows[0]} chartTitle={'Chart Title'}/>, div);
    	ReactDOM.unmountComponentAtNode(div);
    });

  	it('Should contain clip', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('clip').length).toBe(1);
    });

    it('Should contain horizontal grid', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('h-grid').length).toBe(1);
    });

    it('Should contain Score label', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('y-label').length).toBe(1);
    });

    it('Should contain Data Type label', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('x-label').length).toBe(1);
    });

    it('Should contain 7 bars', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('bar').length).toBe(7);
    });

    it('should match snapshot', () => {
        const { asFragment } = setup()
        expect(asFragment()).toMatchSnapshot();
    })

})
 