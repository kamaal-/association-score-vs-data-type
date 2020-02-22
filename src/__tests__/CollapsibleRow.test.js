import React from 'react';
import { render } from '@testing-library/react';
import Row from '../components/Rows/CollapsibleRow';
import data from '../config/mock.data';
import { transformDataToRows  } from '../services/'
import ReactDOM from 'react-dom'

describe('Collapsible Row', () => {

    const setup = () => {
        const container = document.createElement('tbody')
        const rows = transformDataToRows(data())	
        return render(<Row row={rows[0]} index={0} collapsedRow={2} chartTitle={'Chart Title'}/>, {
            container: document.body.appendChild(container)
        });
    }

  	it('renders without crashing', () => {
        const div = document.createElement('tbody');
        const rows = transformDataToRows(data())	
    	ReactDOM.render(<Row row={rows[0]} index={0} collapsedRow={2} chartTitle={'Chart Title'}/>, div);
    	ReactDOM.unmountComponentAtNode(div);
    });

  	it('Should render 1 rows', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('collapsible-tr').length).toBe(1);
    });
      
    it('should match snapshot', () => {
        const { asFragment } = setup()
        expect(asFragment()).toMatchSnapshot();
    })

})
 