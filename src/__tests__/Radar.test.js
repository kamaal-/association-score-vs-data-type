import React from 'react';
import { render } from '@testing-library/react';
import Radar from '../components/charts/Radar';
import data from '../config/mock.data';
import { transformDataToRows  } from '../services/'
import ReactDOM from 'react-dom'

describe('Radar Chart', () => {

    const setup = () => {
        const container = document.createElement('div')
        const rows = transformDataToRows(data())	
        return render(<Radar row={rows[0]} chartTitle={'Chart Title'}/>, {
            container: document.body.appendChild(container)
        });
    }

  	it('renders without crashing', () => {
        const div = document.createElement('div');
        const rows = transformDataToRows(data())	
    	ReactDOM.render(<Radar row={rows[0]} chartTitle={'Chart Title'}/>, div);
    	ReactDOM.unmountComponentAtNode(div);
    });

  	it('Should polygon', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('radar-poly').length).toBe(1);
    });
      
    it('Should render 5 steps text', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('radar-steps-text').length).toBe(5);
    });
      
    it('Should render 5 steps polygon', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('radar-steps-poly').length).toBe(5);
  	});//radar-axis-labels

    it('Should render 7 axis labels', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('radar-axis-labels').length).toBe(7);
      });//axis-lines
      
    it('Should render 7 axis lines', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('axis-lines').length).toBe(7);
    });
      
    it('should match snapshot', () => {
        const { asFragment } = setup()
        expect(asFragment()).toMatchSnapshot();
    })

})
 