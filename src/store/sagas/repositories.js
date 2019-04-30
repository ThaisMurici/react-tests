import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as RepositoryActions } from "../ducks/repositories";

export function* getRepositories() {
  try {
    const response = yield call(api.get, "users/diego3g/repos");

    yield put(RepositoryActions.getSuccess(response.data));
  } catch (error) {
    yield put(RepositoryActions.getFailure());
  }
}
