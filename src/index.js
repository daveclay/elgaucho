import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'

import {
} from "./redux/actions";

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)

const steps = []
let currentStepIndex = 0;
let runStep = () => {
    if (currentStepIndex < steps.length) {
        console.log(steps[currentStepIndex])
        store.dispatch(steps[currentStepIndex]());
        currentStepIndex++;
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(() => runStep(), 100)



