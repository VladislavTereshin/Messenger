import produce, { Draft } from 'immer';
import { TweetsActions, TweetsActionsType } from './actionsCreators';
import { LoadingState, TweetsState } from './contracts/state';

export const initialTweetState: TweetsState = {
    items: [],
    loadingState: LoadingState.NEVER,
};


export const tweetsReducer = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetsActionsType.SET_LOADIG_STATE:
            draft.loadingState = action.payload;
            break;

        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;
        default:
            break;
    }
}, initialTweetState);