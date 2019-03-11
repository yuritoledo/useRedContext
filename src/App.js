import React from 'react'
import { UserCtxProvider } from './useUser'
import { SettingsCtxProvider } from './useSettings'

import Counter from './Counter'

const App = () => {
  return (
    <UserCtxProvider>
      <SettingsCtxProvider>
        <Counter />
      </SettingsCtxProvider>
    </UserCtxProvider>
  )
}

export default App
