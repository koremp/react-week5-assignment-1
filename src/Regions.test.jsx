import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/restaurants';

describe('Regions', () => {
  it('button들을 보여준다.', () => {
    const { queryByText } = render((
      <Regions regions={regions} />
    ));

    regions.forEach((region) => {
      const { name } = region;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
