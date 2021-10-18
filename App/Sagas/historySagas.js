/* ***********************************************************
* A short word on how to use this automagically generated file.
* but you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import HistoryActions from '@Redux/HistoryRedux'
// import { HistorySelectors } from '@Redux/HistoryRedux'

export function * getHistory (api, action) {
  const { data } = action
  // get current data from Store
  // const currentData = yield select(HistorySelectors.getData)
  // make the call to the api
  const response = yield call(api.getHistory, data)

  // success?
  if (response.ok) {
    yield put(HistoryActions.historySuccess(response.data))
  } else {
    yield put(HistoryActions.historyFailure(response))
  }
}
