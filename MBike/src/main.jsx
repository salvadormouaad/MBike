import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BikeSlice from './Features/BikeSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
const store = configureStore({
    reducer: {
        bikes:BikeSlice
}
})
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
