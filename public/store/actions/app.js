import { createAction } from 'redux-actions';

export const setPage =
  createAction('ADVANCED_SETTINGS_SET_PAGE', ({ pageNumber }) => ({ pageNumber }));
