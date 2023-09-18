import { useState } from 'react';
import axios from 'axios'
import "./App.css";

function App() {
const [stateYoureIn,setStateYoureIn] = useState('')
const [location, setLocation] = useState('')
  const getLocalIpInfo = (event) => {
    event.preventDefault();
    axios
      .get("https://ipinfo.io?token=6b922a43d53dac")
      .then(res => {
        console.log(res.data)
        setStateYoureIn(res.data.country);
       d
      })
      .then(res => {
        setLocation({
          ip: res.data.ip,
          region: res.data.region,
          postal: res.data.postal
      })
      })
    console.log(stateYoureIn, location)
  }
	return (
		<div className='App'>
			<form onSubmit={getLocalIpInfo}>
				<button>Click Me</button>
				<input />

				<button type='submit'>Submit</button>
				<input />
			</form>
		</div>
	);
}

export default App;
