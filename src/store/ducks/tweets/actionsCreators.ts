import { Action } from "redux";
import { LoadingState, TweetsState } from "./contracts/state";


export enum TweetsActionsType{
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADIG_STATE = 'tweets/SET_LOADIG_STATE',
};

export interface SetTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
};

export interface FetchTweetsActionsInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.FETCH_TWEETS;
};

export interface SetTweetsLoadingStateInterface extends Action<TweetsActionsType>{
    type: TweetsActionsType.SET_LOADIG_STATE;
    payload: LoadingState;
};

export const setTweets = (payload: TweetsState['items']): SetTweetsActionsInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
    type: TweetsActionsType.SET_LOADIG_STATE,
    payload,
});

export const fetchTweets = (): FetchTweetsActionsInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions = SetTweetsActionsInterface | FetchTweetsActionsInterface | SetTweetsLoadingStateInterface;
