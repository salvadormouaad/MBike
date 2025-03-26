import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { StoreGlobal } from "./store/storeGlobal.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={StoreGlobal}>
            <App />
        </Provider>
    </StrictMode>
);
