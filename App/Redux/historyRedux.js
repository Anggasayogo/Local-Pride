import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  historyRequest: ['data'],
  historySuccess: ['data'],
  historyFailure: ['error'],
})

export const HistoryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  historyModule: { data: null, fetching: false, error: null }
})

/* ------------- Selectors ------------- */

export const HistorySelectors = {
  getData: state => state.history.historyModule
}

/* ------------- Reducers ------------- */

// request the data from an api
export const historyRequest = (state, { data }) =>
  state.merge({ ...state, historyModule: { ...state.historyModule, fetching: true, error: null } })

// successful api lookup
export const historySuccess = (state, { data }) =>
  state.merge({ ...state, historyModule: { ...state.historyModule, data, fetching: false, error: null } })

// Something went wrong somewhere.
export const historyFailure = (state, { error }) =>
  state.merge({ ...state, historyModule: { ...state.historyModule, fetching: false, error } })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HISTORY_REQUEST]: historyRequest,
  [Types.HISTORY_SUCCESS]: historySuccess,
  [Types.HISTORY_FAILURE]: historyFailure,
})
