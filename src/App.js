import { supabase } from './supabase';
import './index.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import CrewmateForm from './CrewmateForm';
import CrewmateList from './CrewmateList';
import CrewmateInfo from './CrewmateInfo';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Crewmates</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/crewmates/new">
          <CrewmateForm />
        </Route>
        <Route path="/crewmates/:id">
          <CrewmateInfo />
        </Route>
        <Route path="/">
          <CrewmateList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
