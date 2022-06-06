import { useContext } from 'react'
import { Context } from '../context'

function ThemeBox() {
  const { theme } = useContext(Context)
  const backgroundColor = theme === 'light' ? '#eeeeee' : '#181818'

  return <div
    style={{
      width: '100px',
      height: '100px',
      backgroundColor
    }}>
  </div>
}

export default ThemeBox