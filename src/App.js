import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App ">
            <Router>
                <Navbar />
                <div className="w-full md:w-2/3 mx-auto pb-16">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/projects" component={Projects} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
