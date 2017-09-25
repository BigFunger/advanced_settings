import { handleActions } from 'redux-actions';
import { setPage } from '../actions/app';

const defaultState = {
  sortField: 'indexName',
  sortReverse: true,
  loading: false,
  error: null,
  pageSize: 5,
  pageNumber: 0,
  startItem: 0,
  endItem: 4,
  pageStartIndex: 0,
  requestStart: null,
  requestEnd: null
};

export const app = handleActions({
  [setPage](state, action) {
    const { pageNumber } = action.payload;

    return {
      ...state,
      pageNumber
    };
  }
}, defaultState);
