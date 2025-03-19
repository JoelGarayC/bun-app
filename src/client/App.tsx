import { APITester } from '@/client/APITester'
import type { FC } from 'react'
import './index.css'

import logo from './logo.svg'
import reactLogo from './react.svg'

export const App: FC = () => {
  return (
    <div className='app'>
      <div className='logo-container'>
        <img src={logo} alt='Bun Logo' className='logo bun-logo' />
        <img src={reactLogo} alt='React Logo' className='logo react-logo' />
      </div>

      <h1>Bun + React</h1>
      <p>
        Editar <code>src/App.tsx</code> y guardar para probar HMR con Bun.
      </p>
      <APITester />
    </div>
  )
}
