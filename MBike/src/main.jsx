import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BikeSlice from './Bikes/SliceBikes/BikeSlice.jsx'
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
        Bikes:BikeSlice
}
})
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
