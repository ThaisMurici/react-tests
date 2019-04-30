import { call, put } from "redux-saga/effects";
import axios from "axios";

import { Creators as RepositoryActions } from "../ducks/repositories";

export function* getRepositories() {
  try {
    const response = yield call(
      axios.get,
      "https://api.github.com/users/diego3g/repos"
    );

    yield put(RepositoryActions.getSuccess(response.data));
  } catch (error) {
    yield put(RepositoryActions.getFailure());
  }
}
