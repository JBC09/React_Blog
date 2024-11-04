import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style/App.css';
import Header from './components/Header';
import View from './components/View';
import Create from './components/Create';
import Context from './Context';
import Footer from './components/Footer';
import Detail from './components/Detail';

function App() {
    return (
        <div className="App">

            <Context >
                <BrowserRouter>
                    <Header/>
                    <div className="Blog">
                        <div id="BlogWrap">
                            <Routes>
                                <Route exact="exact" path="/" element={<View />}/>
                                <Route exact="exact" path="/create" element={<Create />}/>
                                <Route exact="exact" path="/detail/:id" element={<Detail />}/>
                            </Routes>
                        </div>
                    </div>

                    {/* Add moreroutes as needed */}
                </BrowserRouter>
            </Context>

            <Footer/>
        </div>
    );
}

export default App;
