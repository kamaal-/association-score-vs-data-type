import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../components/DataGrid';
import data from '../config/mock.data';
import { transformDataToRows } from '../services/'
import ReactDOM from 'react-dom'

describe('Grid', () => {

    const setup = () => {	
        return render(<Grid rows={transformDataToRows(data())} chartTitle={'Some title'}/>);
    }

  	test('renders without crashing', () => {
    	const div = document.createElement('div');
    	ReactDOM.render( <Grid rows={transformDataToRows(data())} chartTitle={'Some title'}/>, div);
    	ReactDOM.unmountComponentAtNode(div);
  	});

  	test('Should render 5 rows', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('actual-tr').length).toBe(5);
  	});

	test('Should render 1 header', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('title-tr').length).toBe(1);
	});
	  
	test('Should render 5 collapsible rows', () => {
		const { getAllByTestId } = setup()
		expect( getAllByTestId('collapsible-tr').length).toBe(5);
	});
	  
	it('should match snapshot', () => {
        const { asFragment } = setup()
        expect(asFragment()).toMatchSnapshot();
    })
})
 