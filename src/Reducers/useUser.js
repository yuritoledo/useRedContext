import React, { useContext, createContext, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      return state
  }
}

const initialState = { count: 0 }
const Context = createContext()

export const useUser = () => useContext(Context)

export const UserCtxProvider = ({ children }) => {
  const [userStore, userDispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ userDispatch, userStore }}>
      {children}
    </Context.Provider>
  )
}
