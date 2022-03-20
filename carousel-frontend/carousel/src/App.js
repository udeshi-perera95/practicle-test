import logo from './logo.svg';
import './App.css';
import SlideImage from './components/SlideImage';
import { DataFile } from './components/DataFile';

function App() {
  return <SlideImage slides={DataFile}/>
}

export default App;
