const players

const data = new XMLHttpRequest();
data.open('GET', 'json/worst11.json');
data.send();

const getPlayers = () => {
    data.addEventListener('readystatechange', () => {
        if ( data.readyState === 4 & data.status === 200) {
            const playersObj = JSON.parse(data.responseText);
            console.log(playersObj);
            console.log(typeof playersObj);
        }
        else if (data.readyState === 4) {
            console.log('There was an error fetching the data');
        }
    })
}

getPlayers();

