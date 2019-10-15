var uri = 'http://api.openweathermap.org/data/2.5/weather?id=4167147&APPID=c88ff073756824e9918765774d6e6602';

fetch(uri)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let jsonData = JSON.stringify(data);

        let output = document.getElementById('output');
        output.textContent = jsonData;
    })
    .catch((err) => {
        console.log('Error: ', err.message);
    });