import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './Components/Rank/Rank.js'

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/* <FaceRecoginition/> */}
    </div>
  );
}


export default App



  
