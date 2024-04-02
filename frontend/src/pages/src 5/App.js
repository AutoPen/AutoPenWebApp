import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home'; // Import your Home component
import About from './components/About'; // Import your About component
import Contact from './components/Contact'; // Import your Contact component

function App() {
  return (
    <Router>
      <div>
        <header>
          {/* Your header content */}
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} /> {/* Home page */}
            <Route path="/about" component={About} /> {/* About page */}
            <Route path="/contact" component={Contact} /> {/* Contact page */}
          </Switch>
        </main>
        <footer>
          {/* Your footer content */}
        </footer>
      </div>
    </Router>
  );
}

export default App;