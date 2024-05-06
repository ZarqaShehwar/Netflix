
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'//for tailwindcss index.css must be add in main.jsx
import { Provider } from 'react-redux'
import { Store } from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={Store}>
    <App />
    </Provider>
  
)
