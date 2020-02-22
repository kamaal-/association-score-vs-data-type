import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  	let testable = null
  	const setup = () => {
    	return render(<App />);
  	}

  	beforeAll(() => {
    	testable = setup()
  	})

  	test('renders Symbol column', () => {
    	const symbolColumn = testable.getByText(/Symbol/i);
    	expect(symbolColumn).toBeInTheDocument();
	});
	  
	it('should match snapshot', () => {
        const { asFragment } = setup()
        expect(asFragment()).toMatchSnapshot();
    })

})
 