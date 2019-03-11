# useRedContext
> This is a project that aims on use a Redux-Like structure, to handle global variables, using only React hooks.

## Play with it
[https://codesandbox.io/s/ww8n17323k](https://codesandbox.io/s/ww8n17323k)

## How to use

### Creating a Reducer
1. Create the structure and reducer's files
- `cd src && mkdir Reducers`
- `touch useCounter.js`

```js
  // Import some stuffs on newer file
  import React, { useContext, createContext, useReducer } from 'react'

  // Create a initialState
  const initialState = { count: 0 }

  // Create the reducer
   const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 }
      case "decrement":
        return { count: state.count - 1 }
      default:
        return state
    }
  }

  // Create the context, that will be the store.
  const Context = createContext()

  // Create the Hook that will be used in consumers / children
  export const useCounter = () => useContext(Context)

  /* 
    Create a <Context.Provider> to reduce the App.js boilerplate and 
    Finally add the reducer that you receive the store and dispatches!
  */
  export const CounterCtxProvider = ({ children }) => {
    const [counterStore, counterDispatch] = useReducer(reducer, initialState)
    return (
      <Context.Provider value={{ counterDispatch, counterStore }}>
        {children}
      </Context.Provider>
    )
  }

```

### Adding the Reducer to the Context application

```js
import React from 'react'
import { CounterCtxProvider } from './Reducers/useCounter'

import Counter from './Components/Counter'

const App = () => {
  return (
    <CounterCtxProvider>
      <Counter />
    </CounterCtxProvider>
  )
}

export default App

```

### Using the awesome hook

```js
import React from 'react'
import { useCounter } from '../Reducers/useCounter'

const Counter = () => {
  const { counterStore, counterDispatch } = useCounter()

  return (
    <div>
      <p>You clicked {counterStore.count} times</p>

      <button onClick={() => counterDispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => counterDispatch({ type: "decrement" })}>
        -
      </button>
    </div>
  )
}

export default Counter
```

### That's it!
