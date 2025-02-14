import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom'; 
import Habitform from '../habitform';
import { chartStore as store } from "../..";
import { addHabit } from "../redux/actionFunctions";
import jest from '@jest/globals';

    jest.mock('react-router-dom', () => ({
        useNavigate: jest.fn(),
    }));


beforeEach(() => {
    store.dispatch = jest.fn();
});

test('AddHabit', () => {

    render(<Habitform />)
    const element = screen.getByTestId('Add');
    
    fireEvent.change(screen.getByPlaceholderText('Habit Name'), {
        target : { value : 'habit test'}
    });

    fireEvent.change(screen.getByPlaceholderText('Gaol'), {
        target : { value : 10}
    })

    fireEvent.change(screen.getByPlaceholderText('Habit description'), {
        target : { value : 'habit test description'}
    })

    fireEvent.click(element)
    expect(store.dispatch).toHaveBeenCalledWith(addHabit({
        id : jest.any(Number),
        name : 'habit test',
        goal : 10,
        description : 'habit test description'
    }))

    expect(require('react-router-dom').useNavigate).not.toHaveBeenCalled();
})