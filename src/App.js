import About from './Components/About';
import ContactUs from './Components/Contact Us';
import Footer from './Components/footer';
import Header from './Components/header';
import ListMissons from './Components/ListMissons';
import AboutDetail from './views/About';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import NavControllers from './Components/NavContainer';
import MissionDetail from './views/Missions';
import ScrollToTop from './Hooks';

function App() {

  return (
    <div className="App">
      <Router>
         <ScrollToTop/>
         <NavControllers/>
       <Switch>
       

        
         <Route exact path="/">
         <Header />
          <About/>
          <ListMissons/>
          <ContactUs/>
         <Footer />
         </Route>
         <Route exact path="/details">
          
          <AboutDetail/>
         </Route>
        
         <Route exact path="/missions">
          
          <MissionDetail/>
         
         </Route>
         
         
       </Switch>
    </Router>
      
    </div>


  );
  
}




export default App;
