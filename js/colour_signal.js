import { color } from './main';

const axios = require('axios');
const wledIP = 'http://10.2.48.31';
const numLEDs = 250; // Number of LEDs



const apiEndpoint = `${wledIP}/json/state.playlist`;

// Define the playlist configuration
const playlistConfig = {
  "playlist": {
    "ps": [26, 20, 18, 20],
    "dur": [30, 20, 10, 50],
    "transition": 0,
    "repeat": 10,
    "end": 21
  }
};

// Function for delay between post requests //
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

/*
axios.get(apiEndpoint)
    .then (response => {

        const wledState = response.data;
        console.log('State:', wledState);  

    })
    .catch (error => {
        console.error('Error fetching state',error); 
    })

*/ 


// Send POST requests // 
async function sendPostRequests() {
    for (let j = 0; j < numLEDs; j++) {
      const modifier = {
        "seg": { "i": [j, color] }
      };
  
      try {
        const response = await axios.post(apiEndpoint, modifier);
        console.log(`POST request successful for LED ${j}`);
      } catch (error) {
        console.error(`Error making POST request for LED ${j}:`, error);
      }
  
      // Introduce a delay of 100 milliseconds between each LED update
      if (j < numLEDs - 1) {
        await delay(100);
      }
    }
  }
  
  sendPostRequests(); // Call the async function to start sending POST requests
  
  async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  






