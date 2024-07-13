import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import KeyFeatures from './Components/KeyFeatures';
import Navbar from './Components/Navbar';
import Partners from './Components/Partners';
import Services from './Components/Services';
import Topdestinations from './Components/Topdestinations';
import TravelPoint from './Components/TravelPoint';

function App() {
  return (
    <div className="App">
       <div className="background"></div>
      <Navbar/>
      <Hero/>
      <Partners/>
      <Services/>
      <Topdestinations/>
      <TravelPoint/>
      <KeyFeatures/>
      <Footer/>
    </div>
  );
}

export default App;
