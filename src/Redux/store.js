import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./reducers/demoReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import cartoonReducer from "./reducers/cartoonReducer";
import ecommreceReducer from "./reducers/ecommreceReducer";

const middleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        demo: demoReducer,
        cartoon: cartoonReducer,
        ecommrece: ecommreceReducer
    },
    middleware: (defaultMiddleware) =>{
        return defaultMiddleware().concat(middleware);
    }
});

middleware.run(rootSaga);