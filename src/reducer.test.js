import reducer from './reducer';

import {
  selectCategory,
  selectRegion,
  setRegions,
  loadRegions,
} from './actions';

import regions from '../fixture/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('Reducer', () => {
  it('returns initialState', () => {
    expect(reducer(undefined, {})).toMatchObject({
      selectCategoryId: undefined,
      categories: [],
      selectRegionId: undefined,
      regions: [],
    });
  });

  describe('selectCateogry', () => {
    const initialState = {
      selectCategoryId: undefined,
    };

    it('returns select cateogry id', () => {
      expect(reducer(initialState, selectCategory({ selectCategoryId: 1 }))).toStrictEqual({
        selectCategoryId: 1,
      });
    });
  });

  describe('selectRegion', () => {
    const initialState = {
      selectRegionId: undefined,
    };

    it('returns select adress id', () => {
      expect(reducer(initialState, selectRegion({ selectRegionId: 1 }))).toStrictEqual({
        selectRegionId: 1,
      });
    });
  });

  describe('setRegions', () => {
    const initialState = {
      regions: [],
    };

    it('returns regions', () => {
      expect(reducer(initialState, setRegions({ regions }))).toStrictEqual({
        regions,
      });
    });
  });

  describe('loadRegions', () => {
    it('called setRegions with regions data', async () => {
      const dispatch = jest.fn();
      await loadRegions()(dispatch);

      expect(dispatch).toBeCalledWith({
        type: 'setRegions',
        payload: {
          regions,
        },
      });
    });
  });
});
