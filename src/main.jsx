import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function CenteredApp() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-6xl px-5 box-border">
        <App />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CenteredApp />
  </React.StrictMode>,
)