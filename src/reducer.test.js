import reducer from './reducer';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

import {
  setRegions,
  setCategories,
  selectCategory,
  selectRegion,
} from './actions';

describe('reducer', () => {
  const initialState = {
    regions: [],
    categories: [],
  };

  describe('undefined action', () => {
    it('changes nothing', () => {
      const state = reducer();

      expect(state.regions).toStrictEqual(initialState.regions);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(regions.length);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(categories.length);
    });
  });

  describe('selectCategory', () => {
    it('changes the name of selected category', () => {
      const state = reducer({
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식(v)' },
        ],
      }, selectCategory(categories[0].id));

      state.categories.forEach((category, index) => {
        if (index === 0) {
          expect(category.name).toContain('(v)');
          return;
        }

        expect(category.name).not.toContain('(v)');
      });
    });
  });

  describe('selectRegion', () => {
    it('changes the name of selected region', () => {
      const state = reducer({
        regions,
      }, selectRegion(regions[0].id));

      expect(state.regions[0].name).toBe(`${regions[0].name}(v)`);
    });
  });
});
