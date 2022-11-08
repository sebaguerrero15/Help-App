import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menuhtml from './pages/Menuhtml.jsx'
import Menubootstrap from './pages/Menubootstrap.jsx'
import Menucmd from './pages/Menucmd.jsx'
import Menucss from './pages/Menucss.jsx'
import Menugit from './pages/Menugit.jsx'
import Menujs from './pages/Menujs.jsx'
import Menunpm from './pages/Menunpm.jsx'
import Menureact from './pages/Menureact.jsx'
import Menusass from './pages/Menusass.jsx'
import Menutailwind from './pages/Menutailwind.jsx'
import Menuvs from './pages/Menuvs.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route exact path="Menuhtml" element={<Menuhtml />} />
                <Route exact path="Menubootstrap" element={<Menubootstrap />} />
                <Route exact path="Menucmd" element={<Menucmd />} />
                <Route exact path="Menucss" element={<Menucss />} />
                <Route exact path="Menugit" element={<Menugit />} />
                <Route exact path="Menujs" element={<Menujs />} />
                <Route exact path="Menunpm" element={<Menunpm />} />
                <Route exact path="Menureact" element={<Menureact />} />
                <Route exact path="Menusass" element={<Menusass />} />
                <Route exact path="Menutailwind" element={<Menutailwind />} />
                <Route exact path="Menuvs" element={<Menuvs />} />
            </Route>
        </Routes>
    </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

