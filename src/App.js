import './App.css';
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './Components/Rank/Rank.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',  
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  render(){
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange}/>
      {/* <FaceRecoginition/> */}
    </div>
  );
}
}

export default App



  
