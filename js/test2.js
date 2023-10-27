const axios = require('axios');

const wledip = 'http://10.2.48.31'; 
const numLEDs = 200; 

const apiEndpoint = `${wledip}/json/state`;

// Takes color [r,g,b] as a parameter // 
function set_wled(color){

    // Set LEDs to the colour //
    const mod = {

        "seg": {"i":[0,numLEDs,color]} 
    
    }

    // Post request //
    try {
        const response = axios.post(apiEndpoint, mod);
        console.log(`POST request successful`);
      } catch (error) {
        console.error(`Error making POST request :`, error);
      }

}

set_wled([0,0,255]);