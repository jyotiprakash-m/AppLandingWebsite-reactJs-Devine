import './App.css';

import Header from './Header'
import Info from './Info'
import Video from './Video'
import Description from './Description'
import QrCode from './QrCode'

function App() {
  return (
    <div className="App">
      <Header/>
      <Info />
      <Video />
      <Description/>
      <QrCode />
        
    </div>
  );
}

export default App;
