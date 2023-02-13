import './App.css';
import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './Components/Rank/Rank.js'

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

    const USER_ID = "d434ce68718343a7a4490ed2e282e405"

    const PAT = "d271ca98cf5e443a9ca40fe686ff3299"

    const APP_ID = "my-first-application"

    const MODEL_ID = "face-detection";
  const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";

  const IMAGE_URL = this.state.input;

  const raw = JSON.stringify({
    user_app_id:{
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs:[{
      data:{
        image:{
          url:IMAGE_URL,
        }
      }
    }]
  })

  const requestOptions = {
    method: "POST",
    headers:{
      Accept: "application/json",
      Authorization: "Key" + PAT,
    },
    body: raw,
  };

  fetch(
    "https://api.clarifai.com/v2/models/"+
    MODEL_ID +
    "/versions/" +
    MODEL_VERSION_ID +
    "/outputs",
    requestOptions
  )

  .then((response) => response.json())
  .then((result) =>
  console.log(result)
  )

  .catch((error) => console.log("error", error))

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



  
