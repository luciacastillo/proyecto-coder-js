
const songs = [
    {
      songTitle: "King and Lionheart",
      songArtist: "Of Monsters and Men",
      songCategory: "wedding"
    },
    {
      songTitle: "Friday I'm in love",
      songArtist: "The Cure",
      songCategory: 1980
    },
    {
      songTitle: "Starlight",
      songArtist: "Muse",
      songCategory: "travel"
    },
    {
      songTitle: "City Grrrl",
      songArtist: "CSS, Ssion",
      songCategory: "travel"
    },
    {
      songTitle: "Nothing's gonna stop us now",
      songArtist: "Starship",
      songCategory: "travel"
    },
    {
      songTitle: "Silenced by the night",
      songArtist: "Keane",
      songCategory: "travel"
    },
    {
      songTitle: "Stadt Land Fluss",
      songArtist: "Wendja",
      songCategory: "travel"
    },
    {
      songTitle: "How to be a heartbreaker",
      songArtist: "MARINA",
      songCategory: "pop"
    },
    {
      songTitle: "Gravel to tempo",
      songArtist: "Hayley Kiyoko",
      songCategory: "pop"
    },
    {
      songTitle: "In your eyes",
      songArtist: "Kylie Minogue",
      songCategory: "pop"
    },
    {
      songTitle: "If I can't dance",
      songArtist: "Sophie Ellis-Bextor",
      songCategory: "dance"
    },
    {
      songTitle: "Murder on the dancefloor",
      songArtist: "Sophie Ellis-Bextor",
      songCategory: "dance"
    },
    {
      songTitle: "Lucky Strike",
      songArtist: "Troye Sivan",
      songCategory: "wedding"
    },
    {
      songTitle: "Stay the night",
      songArtist: "James Blunt",
      songCategory: "wedding"
    },
    {
      songTitle: "Accidentally in love",
      songArtist: "Counting Crows",
      songCategory: "wedding"
    },
    {
      songTitle: "Backpack",
      songArtist: "Petite Meller",
      songCategory: "wedding"
    },
    {
      songTitle: "Why do you love me",
      songArtist: "Garbage",
      songCategory: 2000
    },
    {
      songTitle: "Lovefool",
      songArtist: "The Cardigans",
      songCategory: "wedding"
    },
    {
      songTitle: "The only exception",
      songArtist: "Paramore",
      songCategory: "wedding"
    },
    {
      songTitle: "Sea of love",
      songArtist: "Cat Power",
      songCategory: "wedding"
    },
    {
      songTitle: "Stop and stare",
      songArtist: "OneRepublic",
      songCategory: 2000
    },
    {
      songTitle: "Your song",
      songArtist: "Elton John",
      songCategory: "wedding"
    },
    {
      songTitle: "As Long as I Got You",
      songArtist: "Lily Allen",
      songCategory: "wedding"
    },
    {
      songTitle: "Complicated",
      songArtist: "Avril Lavigne",
      songCategory: 2000
    },
    {
      songTitle: "Vertigo",
      songArtist: "U2",
      songCategory: 2000
    },
    {
      songTitle: "Don't look back in anger",
      songArtist: "Oasis",
      songCategory: 1990
    },
    {
      songTitle: "...Baby one more time",
      songArtist: "Britney Spears",
      songCategory: 1990
    },
    {
      songTitle: "All Star",
      songArtist: "Smash Mouth",
      songCategory: 1990
    },
    {
      songTitle: "Gangsta's Paradise",
      songArtist: "Coolio, L.V.",
      songCategory: 1990
    },
    {
      songTitle: "Bend & Break",
      songArtist: "Keane",
      songCategory: 2000
    },
    {
      songTitle: "Barbie Girl",
      songArtist: "Aqua",
      songCategory: 1990
    },
    {
      songTitle: "(Reach up for the) Sunrise",
      songArtist: "Duran Duran",
      songCategory: "birthday"
    },
    {
      songTitle: "Quit playing games (with my heart)",
      songArtist: "Backstreet Boys",
      songCategory: 1990
    },
    {
      songTitle: "Believe",
      songArtist: "Cher",
      songCategory: 1990
    },
    {
      songTitle: "Funkytown",
      songArtist: "Lipps Inc.",
      songCategory: "1980"
    },
    {
      songTitle: "Do you really want to hurt me",
      songArtist: "Culture Club",
      songCategory: "1980"
    },
    {
      songTitle: "Call me",
      songArtist: "Blondie",
      songCategory: "1980"
    },
    {
      songTitle: "You give love a bad name",
      songArtist: "Bon Jovi",
      songCategory: "1980"
    },
    {
      songTitle: "(I just) Died in your arms",
      songArtist: "Cutting Crew",
      songCategory: "1980"
    },
    {
      songTitle: "Take my breath away",
      songArtist: "Berlin",
      songCategory: "1980"
    },
    {
      songTitle: "The final countdown",
      songArtist: "Europe",
      songCategory: "1980"
    },
    {
      songTitle: "I want a new drug",
      songArtist: "Huey Lewis & The News",
      songCategory: "1980"
    },
    {
      songTitle: "Lessons in love",
      songArtist: "Level 42",
      songCategory: "1980"
    },
    {
      songTitle: "Take on me",
      songArtist: "a-ha",
      songCategory: 1980
    },
    {
      songTitle: "Heads High",
      songArtist: "Mr. Vegas",
      songCategory: "birthday"
    },
    {
      songTitle: "Let's dance",
      songArtist: "David Bowie",
      songCategory: "birthday"
    },
    {
      songTitle: "Raining again",
      songArtist: "Moby",
      songCategory: "dance"
    },
    {
      songTitle: "Ready for the floor",
      songArtist: "Hot Chip",
      songCategory: "birthday"
    },
    {
      songTitle: "Lose yourself to dance",
      songArtist: "Daft Punk, Pharrell Williams",
      songCategory: "birthday"
    },
    {
      songTitle: "Liebe ist meine Rebellion",
      songArtist: "Frida Gold",
      songCategory: "dance"
    },
    {
      songTitle: "Le Disko",
      songArtist: "Shiny Toy Guns",
      songCategory: "birthday"
    },
    {
      songTitle: "Let's have a kiki",
      songArtist: "Scissor Sisters",
      songCategory: "birthday"
    },
    {
      songTitle: "Four to the floor (Thin White Duke Remix)",
      songArtist: "Starsailor",
      songCategory: 2000
    },
    {
      songTitle: "Sing it back (Mousse T's Feel Love Mix)",
      songArtist: "Moloko, Mousse T.",
      songCategory: "birthday"
    },
    {
      songTitle: "I'm a believer",
      songArtist: "The Monkees",
      songCategory: "birthday"
    },
    {
      songTitle: "Seven days in sunny june",
      songArtist: "Jamiroquai",
      songCategory: "birthday"
    },
    {
      songTitle: "Last night a DJ ruined my life",
      songArtist: "Lola Dutronic",
      songCategory: "dance"
    },
    {
      songTitle: "Grace Kelly",
      songArtist: "MIKA",
      songCategory: "birthday"
    },
    {
      songTitle: "How Do You Do!",
      songArtist: "Roxette",
      songCategory: 1990
    },
    {
      songTitle: "Never be the same",
      songArtist: "Camila Cabello",
      songCategory: 2010
    },
    {
      songTitle: "Same Mistakes",
      songArtist: "One Direction",
      songCategory: 2010
    },
    {
      songTitle: "Dangerous Woman",
      songArtist: "Ariana Grande",
      songCategory: 2010
    },
    {
      songTitle: "You're still a mystery",
      songArtist: "Bleachers",
      songCategory: 2010
    },
    {
      songTitle: "Good Riddance (Time of your life)",
      songArtist: "Green Day",
      songCategory: 1990
    },
    {
      songTitle: "Problem",
      songArtist: "Natalia Kills",
      songCategory: 2010
    },
    {
      songTitle: "Drumming song",
      songArtist: "Florence + The Machine",
      songCategory: 2010
    },
    {
      songTitle: "Ich lass für dich das Licht an",
      songArtist: "Revolverheld",
      songCategory: "viaje"
    },
    {
      songTitle: "400 Lux",
      songArtist: "Lorde",
      songCategory: 2010
    },
    {
      songTitle: "Payphone",
      songArtist: "Maroon 5 & Wiz Khalifa",
      songCategory: 2010
    },
    {
      songTitle: "1983",
      songArtist: "Neon Trees",
      songCategory: 2010
    },
    {
      songTitle: "Can't feel my face",
      songArtist: "The Weeknd",
      songCategory: 2010
    },
    {
      songTitle: "Troubled times",
      songArtist: "Green Day",
      songCategory: 2010
    },
    {
      songTitle: "Whole Lotta Love",
      songArtist: "Led Zeppelin",
      songCategory: "rock"
    },
    {
      songTitle: "(I can't get no) Satisfaction",
      songArtist: "The Rolling Stones",
      songCategory: "rock"
    },
    {
      songTitle: "Another one bites the dust",
      songArtist: "Queen",
      songCategory: "rock"
    },
    {
      songTitle: "Who are you",
      songArtist: "The Who Rolling Stones",
      songCategory: "rock"
    },
    {
      songTitle: "Love will tear us apart",
      songArtist: "Joy Division",
      songCategory: "rock"
    },
    {
      songTitle: "Lithium",
      songArtist: "Nirvana",
      songCategory: "rock"
    },
    {
      songTitle: "Larger than life",
      songArtist: "Backstreet Boys",
      songCategory: 1990
    },
    {
      songTitle: "The only exception",
      songArtist: "Paramore",
      songCategory: "wedding"
    },
    {
      songTitle: "Sk8er Boi",
      songArtist: "Avril Lavigne",
      songCategory: 2000
    },
    {
      songTitle: "Look what you've done",
      songArtist: "Jet",
      songCategory: 2000
    },
    {
      songTitle: "Black hole sun",
      songArtist: "Soundgarden",
      songCategory: "rock"
    },
    {
      songTitle: "Time",
      songArtist: "Pink Floyd",
      songCategory: "rock"
    },
    {
      songTitle: "T.N.T.",
      songArtist: "AC/DC",
      songCategory: "rock"
    },
    {
      songTitle: "Something in the way",
      songArtist: "Nirvana",
      songCategory: "rock"
    },
    {
      songTitle: "Paradise city",
      songArtist: "Guns N' Roses",
      songCategory: "rock"
    },
    {
      songTitle: "Somewhere only we know",
      songArtist: "Keane",
      songCategory: 2000
    },
    {
      songTitle: "Je tombe amoureux",
      songArtist: "Coeur de Pirate & Marc Lavoine",
      songCategory: "travel"
    },
    {
      songTitle: "MMMBop",
      songArtist: "Hanson",
      songCategory: 1990
    },
    {
      songTitle: "Number1",
      songArtist: "Goldfrapp",
      songCategory: "dance"
    },
    {
      songTitle: "Lass uns gehen",
      songArtist: "Revolverheld",
      songCategory: "travel"
    },
    {
      songTitle: "Take back the city",
      songArtist: "Snow Patrol",
      songCategory: "travel"
    },
    {
      songTitle: "Drive",
      songArtist: "Halsey",
      songCategory: "travel"
    },
    {
      songTitle: "In your eyes",
      songArtist: "Kylie Minogue",
      songCategory: "dance"
    },
    {
      songTitle: "L.S.F.",
      songArtist: "Kasabian",
      songCategory: 2000
    },
    {
      songTitle: "You're in my eyes (Discosong)",
      songArtist: "Jarvis Cocker",
      songCategory: "dance"
    },
    {
      songTitle: "Here it goes again",
      songArtist: "OK Go",
      songCategory: 2000
    },
    {
      songTitle: "Ride",
      songArtist: "Lana del Rey",
      songCategory: "travel"
    },
    {
      songTitle: "Elle me dit",
      songArtist: "MIKA",
      songCategory: "dance"
    },
    {
      songTitle: "Gone daddy gone",
      songArtist: "Gnarls Barkley",
      songCategory: "dance"
    },
    {
      songTitle: "Gold guns girls",
      songArtist: "Metric",
      songCategory: "dance"
    },
    {
      songTitle: "Let's get out of this country",
      songArtist: "Camera Obscura",
      songCategory: "travel"
    },
    {
      songTitle: "Strangers",
      songArtist: "Halsey, Lauren Jauregui",
      songCategory: "pop"
    },
    {
      songTitle: "I know a place",
      songArtist: "MUNA",
      songCategory: "pop"
    },
    {
      songTitle: "Stay or run",
      songArtist: "Oriana",
      songCategory: "pop"
    },
    {
      songTitle: "Faint of heart",
      songArtist: "Tegan and Sara",
      songCategory: "pop"
    },
    {
      songTitle: "4 in the morning",
      songArtist: "Gwen Stefani",
      songCategory: "pop"
    },
    {
      songTitle: "On the loose",
      songArtist: "Niall Horan",
      songCategory: "pop"
    },
    {
      songTitle: "I'm a mess",
      songArtist: "Bebe Rexha",
      songCategory: "pop"
    },
    {
      songTitle: "FAKE LOVE",
      songArtist: "BTS",
      songCategory: "pop"
    },
    {
      songTitle: "Morning glory",
    songArtist: "HyunA, Isle Qim",
      songCategory: "pop"
    }
  ]
  

// Guardar en JSON en storage local
localStorage.setItem("list of songs", JSON.stringify(songs));

// --> Funciones

// Mensaje de bienvenida
function welcomeMessage() {
    let nameInputValue = $("#nameInput").val();
    sessionStorage.setItem('nombre', nameInputValue);
    window.location.replace('#welcomeUserScreen');
}

// Funciones para armar las playlists
function getRockPlaylist() {
    let rockPlaylist = songs.filter(song => song.songCategory == "rock");
    let listofsongs = rockPlaylist.map(function (songinfo) {
        return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
    })
    $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
    window.location.replace("#listScreen");
    $('#finalList').fadeIn('slow')
        .css('color', '#FFFFFF');
}

const getPopPlaylist = () => {
    let popPlaylist = songs.filter(song => song.songCategory == "pop");
    let listofsongs = popPlaylist.map(function (songinfo) {
        return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
    })
   
    $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
    window.location.replace("#listScreen");
    $('#finalList').fadeIn('slow')
    .css('color', '#FFFFFF');
}

const getDancePlaylist = () => {
    let dancePlaylist = songs.filter(song => song.songCategory == "dance");
    let listofsongs = dancePlaylist.map(function (songinfo) {
        return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
    })
    $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
    window.location.replace("#listScreen");
    $('#finalList').fadeIn('slow')
    .css('color', '#FFFFFF');
}

const getBirthdayPlaylist = () => {
    let birthdayPlaylist = songs.filter(song => song.songCategory == "birthday");
    let listofsongs = birthdayPlaylist.map(function (songinfo) {
        return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
    })
    $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
    window.location.replace("#listScreen");
    $('#finalList').fadeIn('slow')
    .css('color', '#FFFFFF');
}

const getWeddingPlaylist = () => {
    let weddingPlaylist = songs.filter(song => song.songCategory == "wedding");
    let listofsongs = weddingPlaylist.map(function (songinfo) {
        return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
    })
    $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
    window.location.replace("#listScreen");
    $('#finalList').fadeIn('slow')
    .css('color', '#FFFFFF');
}

const getTravelPlaylist = () => {
    let travelPlaylist = songs.filter(song => song.songCategory == "travel");
    let listofsongs = travelPlaylist.map(function (songinfo) {
        return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
    })
    $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
    window.location.replace("#listScreen");
    $('#finalList').fadeIn('slow')
    .css('color', '#FFFFFF');
}

// Mostrar opciones para que el usuario seleccione
// Vincular con la playlist correspondiente
function showOptions() {
    $('#selectScreenOne').append(`<div class="buttons" id="buttonOne">Birthday year</div>
    <div class="buttons" id="buttonTwo">Favourite genre</div>
    <div class="buttons" id="buttonThree">Special event</div>`
    );
    $('#buttonOne').on('click', optionA);
    $('#buttonTwo').on('click', optionB);
    $('#buttonThree').on('click', optionC);
}

function optionA() {
    $('#selectScreenOne').empty().append(`<p id="questionAge"></p>
    <form id="ageForm">
        <input type="text" id="ageInput" />
        <button type="button" id="sendAge">Send</button>
    </form>`
    );
    let whatAge = document.getElementById('questionAge')
    whatAge.textContent = `How old are you?`;
    $('#sendAge').on('click', function () {
        let edad = document.getElementById('ageInput').value;
        const currentYear = 2021;
        isOptionA(edad, currentYear);
    });
}

function optionB() {
    $('#selectScreenOne').empty().append(`<div class="buttons" id="buttonOne">Rock</div>
    <div class="buttons" id="buttonTwo">Pop</div>
    <div class="buttons" id="buttonThree">Dance</div>`
    );
    $('#buttonOne').on('click', getRockPlaylist);
    $('#buttonTwo').on('click', getPopPlaylist);
    $('#buttonThree').on('click', getDancePlaylist);
}

function optionC() {
    $('#selectScreenOne').empty().append(`<div class="buttons" id="buttonOne">Birthday</div>
    <div class="buttons" id="buttonTwo">Wedding</div>
    <div class="buttons" id="buttonThree">Travel</div>`
    );
    $('#buttonOne').on('click', getBirthdayPlaylist);
    $('#buttonTwo').on('click', getWeddingPlaylist);
    $('#buttonThree').on('click', getTravelPlaylist);
}

function isOptionA(a, b) {
    anioNacimiento = b - a;
    if (anioNacimiento <= 2019 & anioNacimiento >= 2010) {
        let dosMilDiezPlaylist = songs.filter(song => song.songCategory == "2010");
        let listofsongs = dosMilDiezPlaylist.map(function (songinfo) {
            return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
        })
        $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
        window.location.replace("#listScreen");
        $('#finalList').fadeIn('slow')
        .css('color', '#FFFFFF');
    }
    else if (anioNacimiento <= 2009 && anioNacimiento >= 2000) {
        let dosMilPlaylist = songs.filter(song => song.songCategory == "2000");
        let listofsongs = dosMilPlaylist.map(function (songinfo) {
            return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
        })
        $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
        window.location.replace("#listScreen");    
        $('#finalList').fadeIn('slow')
        .css('color', '#FFFFFF');
    }
    else if (anioNacimiento <= 1999 && anioNacimiento >= 1990) {
        let noventasPlaylist = songs.filter(song => song.songCategory == "1990");
        let listofsongs = noventasPlaylist.map(function (songinfo) {
            return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
        })
        $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
        window.location.replace("#listScreen");
        $('#finalList').fadeIn('slow')
        .css('color', '#FFFFFF');
    }
    else if (anioNacimiento <= 1989 && anioNacimiento >= 1980) {
        let ochentasPlaylist = songs.filter(song => song.songCategory == "1980");
        let listofsongs = ochentasPlaylist.map(function (songinfo) {
            return '<li>' + songinfo.songTitle + ' - ' + songinfo.songArtist + '</li>'
        })
        $('#listScreen').append(`<ul id='finalList'>${listofsongs}</ul>`);
        window.location.replace("#listScreen");
        $('#finalList').fadeIn('slow')
        .css('color', '#FFFFFF');
    }
}

// --> Recorrido principal

// Pantalla de bienvenida
$('#firstScreen').append(`<div id="screenZeroContent">
<h1>Playlist recommendations</h1>
<p style="display:none" id="subtitle">The songs that you need for every moment in your life! 🎶 </p>
</div>
<button class="buttons" id="startButton">Discover</button>
`);

$('#subtitle').fadeIn('slow')
    .css('color', '#993399')
    .fadeOut('slow')
    .fadeIn('slow')
    .css('color', '#FFFFFF');

// Uso de AJAX para simular envío de datos (POST)
const URLGET = "https://jsonplaceholder.typicode.com/posts"
const infoPost = { estado: "started" }
$('#startButton').on('click', function () {
    $.post(URLGET, infoPost, (r, e) => {
        if (e === "success") {
            $("#userNameScreen").prepend(`<div id="searchStart">
            Your search for new music has ${r.estado}!
            </div>`);
        }
    });
    window.location.replace('#userNameScreen');
});


// Entrada del nombre y saludo
$('#userNameScreen').append(`<p id='nameQ'>What's your name?</p>
<form id="nameForm">
    <input type='text' id='nameInput' />
    <button id='sendName'>Send</button>
</form>`);

//Dar bienvenida
$('#sendName').on('click', welcomeMessage);
$('#welcomeUserScreen').append(`<p id='welcomeParagraph'>Welcome ${sessionStorage.getItem('nombre')}!</p>
<p><a href='#selectScreenOne' class='link'><button class="buttons" id="getJsonButton">Start</button></a></p>`);
$('#welcomeParagraph').fadeIn(2000)
    .fadeOut(2000)
      
// Mostrar los criterios al usuario para que elija
showOptions();

// Recuperar el nombre desde el storage para volver a mostrarlo junto a la playlist que corresponde a la opción
$('#listScreen').prepend(`<h2 id='playlistForUser'>This is your playlist, ${sessionStorage.getItem('nombre')}!<h2>`);