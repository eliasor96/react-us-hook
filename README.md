# react-us-hook

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/eliasor96/react-us-hook/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/react-us-hook.svg)](https://badge.fury.io/js/react-us-hook)

Useful react hook for United States.

## Installation

```
npm install react-us-hook
```

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { useState, states } from 'react-us-hook'

const App = () => {
    const [state, setState] = useState('California')

    return (
        <div>
            {state && state.summery}
            <br />
            {states.map(state => <a href="#" onClick={() => setState(state)}>{state}</a>)}
        </div>
    )
};

ReactDOM.render(
    <App />,
    window.document.getElementById('app')
);
```

or run demo:

```
npm start
```


