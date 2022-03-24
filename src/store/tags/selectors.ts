import { createSelector } from "reselect";

import { RootState } from "../store";

import { LoadingState, TagsState } from "./contracts/state";

export const selectTags = (state: RootState): TagsState => state.tags;

export const selestLoadingState = (state: RootState): LoadingState => selectTags(state).loadingState;

export const selectIsTagsLoading = (state: RootState): boolean => selestLoadingState(state) === LoadingState.LOADING;
export const selectIsTagsLoaded = (state: RootState): boolean => selestLoadingState(state) === LoadingState.LOADING;

export const selectTagsItems = createSelector(selectTags, Tags => Tags.items);