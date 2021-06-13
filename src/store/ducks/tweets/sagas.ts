import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {tweetsApi } from '../../../servises/api/tweetsApi';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionsCreators';
import { LoadingState } from './contracts/state';


export function* fetchTweetsRequest(): any {
    try {
        const items = yield call(tweetsApi.fetchTweets);
        yield put(setTweets(items));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
    
};

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}