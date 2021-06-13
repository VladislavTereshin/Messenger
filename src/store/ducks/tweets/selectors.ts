import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selestLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;

export const selectIsTweetsLoading = (state: RootState): boolean => selestLoadingState(state) === LoadingState.LOADING;
export const selectIsTweetsLoaded = (state: RootState): boolean => selestLoadingState(state) === LoadingState.LOADING;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items);