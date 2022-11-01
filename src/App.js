import { Route, Routes } from 'react-router-dom'
import './App.scss';
import Landing from './components/Landing'
import Header from './components/Header'
import Audio from './components/Audio'
import Video from './components/Video'
import Lighting from './components/Lighting'
import ConcertPics from './components/ConcertPics';
import CorporatePics from './components/CorporatePics';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={ <Landing />} />
            <Route path="/audio" element={ <Audio />} />
            <Route path="/video" element={ <Video />} />
            <Route path="/lighting" element={ <Lighting />} />
            <Route path="/concert-event-photos" element={ <ConcertPics />} />
            <Route path="/corporate-event-photos" element={ <CorporatePics />} />
        </Routes>
    
    </div>
  );
}

export default App;
