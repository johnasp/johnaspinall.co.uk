const squad = document.querySelector('.squad');

const data = new XMLHttpRequest();
data.open('GET', 'json/worst11.json');
data.send();

const addPlayer = (name) => {
    let div = document.createElement('div')
    div.textContent = name;
    return div;
}

const getPlayers = () => {
    data.addEventListener('readystatechange', () => {
        if ( data.readyState === 4 & data.status === 200) {
            const playersObj = JSON.parse(data.responseText); // Parse the JSON into players object
            const players = Object.entries(playersObj); // Convert object into an array so can loop round data with forEach method
            let playerItem = document.createElement('div');
            players.forEach((player, index) => {
                const playerName = player[1].name;
                console.log(playerName);
                squad.appendChild(addPlayer(playerName));
                

            });
        }
        else if (data.readyState === 4) {
            console.log('There was an error fetching the data');
        }
    })    

}

getPlayers();

