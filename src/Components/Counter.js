import React from 'react'
import { useUser } from '../Reducers/useUser'
import { useSettings } from '../Reducers/useSettings'


const Counter = () => {
  const { userStore, userDispatch } = useUser()
  const { settingStore, settingDispatch } = useSettings()

  return (
    <div>
      <p>You clicked {userStore.count} times</p>
      <p>{`Is Admin: ${settingStore.isAdmin}`}</p>

      <button onClick={() => userDispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => userDispatch({ type: "decrement" })}>
        -
      </button>
      <button onClick={() => userDispatch({ type: "reset" })}>
        Reset
      </button>
      <button onClick={() => settingDispatch({ type: 'toggleAdmin' })}>
        Toggle is admin status
      </button>
    </div>
  )
}

export default Counter
