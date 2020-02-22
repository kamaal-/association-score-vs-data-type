import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Row from '../components/Rows/NormalRow';
import data from '../config/mock.data';
import { transformDataToRows,  } from '../services/'
import ReactDOM from 'react-dom'

describe('Row', () => {

    const setup = (fn = () => {}) => {
        const container = document.createElement('tbody')
        const rows = transformDataToRows(data())	
        return render(<Row row={rows[0]} index={0} collapsedRow={2} toggleCollapsedRow={fn}/>, {
            container: document.body.appendChild(container)
        });
    }

  	it('renders without crashing', () => {
        const div = document.createElement('tbody');
        const rows = transformDataToRows(data())	
    	ReactDOM.render(<Row row={rows[0]} index={0} collapsedRow={2} toggleCollapsedRow={() => {}}/>, div);
    	ReactDOM.unmountComponentAtNode(div);
    });

    it('should trigger parent event', async (done) => {
        const setNewIndexAtParent= jest.fn();
        const {getByTestId} = setup(setNewIndexAtParent)
        const el = await waitForElement(() => getByTestId('collapse-btn'))
        fireEvent.click(el)
        expect(setNewIndexAtParent).toBeCalled()
        done()
    })

  	it('Should render 1 rows', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('actual-tr').length).toBe(1);
    });
      
    it('should match snapshot', () => {
        const { asFragment } = setup()
        expect(asFragment()).toMatchSnapshot();
    })

})
 