import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';
import Country from './components/country';
import Header from './views//Header';
import './App.css';
class App extends Component {
  render() {
    return (
      <main>
         <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={IndexItem} />
                <Route path='/add-item' component={AddItem} />
                <Route path='/index' component={IndexItem} />
                <Route path='/edit/:id' component={EditItem} />
                <Route path='/country' component={Country} />
            </Switch>
          </Router>
        </main>
    );
  }
}

export default App;
