import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import MultiSelect from './MultiSelect';

describe('MultiSelect', () => {
  const options = ['option1', 'option2'];

  it('renders select with passed options', () => {
    render(<MultiSelect options={options} onChange={jest.fn()} />);

    expect(screen.getAllByRole('option').map((option) => option.textContent)).toEqual(options);
  });

  it('calls passed onChange with selected options on select change', () => {
    const onChange = jest.fn();
    render(<MultiSelect options={options} onChange={onChange} />);

    const select = screen.getByTestId('multiselect');

    fireEvent.change(select, { target: { value: 'option2' } });

    expect(onChange).toBeCalledWith(['option2']);
  });
});
