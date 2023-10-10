fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        const ipAddress = data.ip;


        console.log('User IP Address:', ipAddress);
    })
    .catch(error => {
        console.error('Error getting IP address:', error);
    });
