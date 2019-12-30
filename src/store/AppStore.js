import {combineReducers, createStore} from "redux";
import rover from "./reducer/RoverReducer";
import {reducer as form} from 'redux-form';

export class AppStore {
    _store;

    constructor() {}

    get store() {
        return this._store;
    }

    set store(store) {
        this._store = store;
    }

    initialize() {
        console.info("App store is intializing!");

        const rootReducer = combineReducers({
            form,
            rover,
        });

        this.store = createStore(
            rootReducer,
        );
    }
}

const appStoreInstance = new AppStore();

export default appStoreInstance;
