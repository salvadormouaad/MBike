import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App'
import { Provider } from 'react-redux';
import { StoreGlobal } from './store/storeGlobal';
import Index1 from './index1';
import Buttonn from './index3';


createRoot(document.getElementById('root')).render(
    <Provider store={StoreGlobal}>
        <Index1 />
    </Provider>
)
