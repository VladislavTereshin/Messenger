import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { TagsApi } from '../../servises/api/tagsApi';
import { setTags, setTagsLoadingState, TagsActionsType } from './actionsCreators';

import { LoadingState } from './contracts/state';


export function* fetchTagsRequest(): any {
    try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setTags(items));
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR));
    }
    
};

export function* TagsSaga() {
    yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}