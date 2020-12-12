import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
    document.title = "Portfolio";
    return (
        <Router>
            <div>
            <Wrapper>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Footer />
            </Wrapper>
            </div>
        </Router>
    );
}
export default App;

