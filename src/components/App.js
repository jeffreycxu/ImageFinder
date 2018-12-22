import React from 'react';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Search} />
                    <Route path="/favorites" exact component={Favorites} />
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;