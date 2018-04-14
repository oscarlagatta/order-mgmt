/**
 * we set the state of what the route looks like.
 */
import { Params } from '@angular/router';

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

/**
 * 1.- we create an interface called State, if you remember we've got
 *     in the app.module the storeModule.forRoot({}) this means we are
 *     initializing the root of the state of the application but
 *     we were not using any reducers.
 *     The "app.module" is a great place where we can keep track of the
 *     router state which allows us to use it in feature modules such
 *     as our Documents Module. We can always know where we are at a
 *     point in time.
 *
 *     When we define the State interface the NGRX router-store requires
 *     we define a property with the word routerReducer.
 *     Before anything we need to import the "ngrx/router-store"
 *     eg. import * fromRouter from '@ngrx/router-store' that will give
 *     us the RouterReducerState. e.g.
 *
 *     routerReducer: fromRouter.RouterReducerState
 *
 *     The Router Store package '@ngrx/router-store' is essentially giving us
 *     the state representation; meaning we can export reducers
 *
 *     export const reducers {
 *         routerReducer: fromRouter.routerReducer
 *     }
 *
 *     Also is important to define what the router state is going to look like,
 *     and that is where we create the interface RouterStateUrl.
 *
 *     Some of this code exist in the NGRX Store documentation for this, however
 *     this works very nicely; it give us everyting we need to get started and
 *     binding custom properties or queryParams or Other Params to our state of
 *     our Ngrx/Store; so we ask for the "url", "queryParams" and "Params".
 *
 *     export interface RouterStateUrl {
 *        url:string;
 *        queryParams: Params;
 *        params: Params;
 *     }
 *
 *     We can then ask for the queryParams, or normal params or the entire url; and
 *     we are going to bings all these to the state tree.
 *
 *     The RouterReducerState accepts a generic type; so we can say
 *
 *      fromRouter.RouterReducerState<RouterStateUrl>
 *
 *     This in fact typing (interface typing) to say that our routerReducer which essentially we are
 *     being given here fromRouter.routerReducer is going to be conforming the object
 *     url: string
 *     queryParams: Params
 *     params: Params
 *
 *     We need to type check the reudcers that has to be of ActionReducerMap from '@ngrx/store'
 *     and then we can pass it to our generic type into here
 *     export const reducers: ActionReducerMap<State> becuase this is our state for our application
 *     and the interface State and the const reducers are matching up they are working in tandem and
 *     we are safety checking that when we adding ActionReducerMap<State> as a type.
 *
 *     We need also to create a selector so we can ask for this particular piece of state. .
 *  *
 *
 * */
export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * app.module.ts
 * StoreModule.forRoot(reducers)
 */
export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
};

// selector
// this allows us to add the RouterState to another selector
// inside our Documents folder so we use createFeatureSelector.

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

/**
 * we can now go to the app.module and register this reducer in
 * StoreModule.forRoot({})
 * We need to import in the app.module the reducers from './store'
 * and replace the empty object with our reducers
 * StoreModule.forRoot(reducers)
 */
