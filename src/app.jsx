import React from 'react';
import ReactDOM from 'react-dom';
import { useState, states } from './index'
import './app.css'

const App = () => {
    const [state, setState] = useState('California')

    return (
        <div>
            {state && state.summery}
            <br />
            {states.map(state => <a href="#" onClick={() => setState(state)} class="myButton">{state}</a>)}
        </div>
    )
};

ReactDOM.render(
    <App />,
    window.document.getElementById('app')
);
