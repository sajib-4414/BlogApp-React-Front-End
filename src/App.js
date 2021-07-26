import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../src/components/NavigationBar'
import Home from '../src/components/Home'
import MyProfile from '../src/components/MyProfile'
import NotFound from '../src/components/NotFound'
import MyPosts from '../src/components/MyPosts'
import Services from '../src/components/Services'

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          {/*Responsive navbar*/}
          <NavigationBar/>


          {/*Page content*/}
          <div class="container px-4 px-lg-5">
          <br/>
           {/*Content row*/}
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/myprofile" component={MyProfile}></Route>
                <Route exact path="/myposts" component={MyPosts}></Route>
                <Route exact path="/services" component={Services}></Route>
              <Route component={NotFound} />
            </Switch>
          </div>
          {/*Footer*/}
          <footer class="py-5 bg-dark">
            <div class="container px-4 px-lg-5"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
          </footer>

        </div>
      </BrowserRouter>

  );
}

export default App;
