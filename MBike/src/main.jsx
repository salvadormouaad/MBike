import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App'
import { Provider } from 'react-redux';
import { StoreGlobal } from './store/storeGlobal';
import Carde1 from './carde1';
import Carde2 from './carde2';
import Carde3 from './carde3';
import Carde4 from './carde4';
import Carde5 from './carde5';
import Carde6 from './carde6';
import Carde7 from './carde7';
import Carde8 from './carde8';
import Carde9 from './carde9';
import Carde10 from './carde10';
import TrustedBrands from './TrustedBrands';
import Section_Qasques from './Section_Catalogue/Section_Qasques';
import Section_Vetements from './Section_Catalogue/Section_Vetements';
import Section_Gants from './Section_Catalogue/Section_Gants';
import Section_Chaussures from './Section_Catalogue/Section_Chaussures';
import SlideGearsHome from './SlideGearsHome';


createRoot(document.getElementById('root')).render(
    <Provider store={StoreGlobal}>
        <SlideGearsHome/>
    </Provider>
)
