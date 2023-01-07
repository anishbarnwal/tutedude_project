
import { BrowserRouter as Router } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Desktop1 from './desktop1/Desktop1';
import Desktop2 from './desktop2/Desktop2';
import "./App.css"

function App() {
  return (
    <Router>
      <Carousel className='carousel'>
        <div>
          <Desktop1 />
        </div>
        <div>
          <Desktop2 />
        </div>
      </Carousel>
    </Router>
  );
}

export default App;
