import { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux'
console.log(ReduxStore)
export type Action = { type: string, data?: any }

export interface State {

  theme: any,
  sidebar: {
    show: boolean,
    collapse: boolean
  }
}

export type ThunkDispatch<A> = ((Dispatch, GetState) => Promise<void> | void) => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>

export type GetState = () => State

export interface Providers {
  [key: string]: any
}

export type FunctionType = (...args: any[]) => any
export type ActionsCreatorsMapObject = { [actionCreator: string]: FunctionType}
