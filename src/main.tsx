import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Import Route from react-router-dom

import App from "./App.tsx";
import Mainscreen from "./mainscreen";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Mainscreen />} />
            <Route path="/trip" element={<App />} />
        </Routes>
    </BrowserRouter>
);
