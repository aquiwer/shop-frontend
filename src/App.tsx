import React from 'react';
import './index.scss';
import {AppRouter} from "./router/AppRouter";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
}

export default App;
