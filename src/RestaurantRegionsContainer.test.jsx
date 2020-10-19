import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('<RestaurantRegionsContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }],
  }));

  const renderRestaurantRegionsContainer = () => render((
    <RestaurantRegionsContainer />
  ));

  it('renders region list', () => {
    // When
    const { getByRole } = renderRestaurantRegionsContainer();

    // Then
    expect(getByRole('list')).toHaveTextContent('서울');
  });

  it('calls dispatch', () => {
    // When
    renderRestaurantRegionsContainer();

    // Then
    expect(dispatch).toBeCalled();
  });

  it('calls dispatch on region button click', () => {
    // Given
    const { getAllByRole } = renderRestaurantRegionsContainer();

    // When
    getAllByRole('button').forEach((button) => {
      fireEvent.click(button);
    });

    // Then
    expect(dispatch).toBeCalledTimes(getAllByRole('button').length + 1);
  });
});
