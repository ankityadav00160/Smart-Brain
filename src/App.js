import './App.css';
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './Components/Rank/Rank.js'
import FaceRecoginition from './Components/FaceRecoginition/FaceRecoginition'

class App extends Component {

  constructor(){
    super()
    this.state = {
      input:''
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSumbit = () =>{
    console.log('click');

    const PAT = 'd271ca98cf5e443a9ca40fe686ff3299';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'd434ce68718343a7a4490ed2e282e405';       
    const APP_ID = 'my-first-application';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'general-image-recognition';
    const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
    const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

  }

  render(){
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm  onInputChange={this.onInputChange} onButtonSumbit={this.onButtonSumbit}/>
      <FaceRecoginition/>
    </div>
  );
}
}

export default App



  
