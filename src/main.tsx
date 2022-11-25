import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConfigProvider, theme } from 'antd'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#DB6BCF',
          // colorSuccess: '#A0DC2C',
          // colorWarning: '#FFC328',
          colorError: '#EB4185',
          // colorInfo: '#BBBDE6',
        },
        components: {
          Radio: {
            colorPrimary: '#00b96b',
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
