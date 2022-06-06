import { useState } from 'react'
import { Context, initialState } from './context'

import ThemeBox from './components/ThemeBox'

function App() {
  const [state, setState] = useState(initialState)

  const toggleTheme = () => {
    const theme = state.theme === 'light' ? 'dark' : 'light'
    setState({ theme })
  }

  return <Context.Provider value={state}>
    <div className='App'>
      <ThemeBox/>
      <button onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  </Context.Provider>
}

export default App