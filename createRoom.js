const fetch = require('node-fetch');

const HYPERBEAM_API_KEY = 'sk_test_io8eOBNW0bLfT9NpPDSkbY8l5pfUYXA75zQkPH3bAVg'; // <-- replace with your API key

async function createHyperbeamRoom() {
  const response = await fetch('https://engine.hyperbeam.com/v0/vm', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${HYPERBEAM_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
  });

  const data = await response.json();
  // Room key is in data['key']
  console.log('Room Key:', data['key']);
  return data['key'];
}

createHyperbeamRoom();
