
import Contact from './components/Contact/Contacts';
import Navbar from './components/elemts/Navbar';
import './styles/App.scss';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link,Switch, } from "react-router-dom";
import AddContact from './components/Contact/AddContact';
function App() {
  return (
    <Provider store={store}>
      
 <Router>
 <div className="App">
      <Navbar/>
      <div className="container">
        <div className="py-3">
          <Switch>
            <Route exact path="/" component={Contact}/>
            <Route exact path="/contacts/add" component={AddContact}/>

          </Switch>
        </div>
      </div>
     </div>
 </Router>
    </Provider>
  );
}

export default App;
