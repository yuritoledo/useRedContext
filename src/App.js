import React from 'react'
import { UserCtxProvider } from './Reducers/useUser';
import { SettingsCtxProvider } from './Reducers/useSettings';

import Counter from './Components/Counter'

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
