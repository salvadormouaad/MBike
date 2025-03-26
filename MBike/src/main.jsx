import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SliceGear from './Features/SliceGears.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes/Route.jsx'
import App from './App.jsx'
import BikeSlice from './Features/BikeSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
const store = configureStore({
    reducer: {
        bikes:BikeSlice ,
        gear:SliceGear
}
})


createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <App />
        <RouterProvider router={Router} />
    </Provider>
)



