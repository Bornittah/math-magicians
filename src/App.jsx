import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import CalculatorPage from './components/pages/CalculatorPage';
import Quotes from './components/pages/Quotes';
import Home from './components/pages/Home';
import NavBar from './components/shared/NavBar';
import './components/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
