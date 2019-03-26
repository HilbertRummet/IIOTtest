const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// some house data 
const houses =  [{
    address:'Skomakaregatan 4',
    id:1,
    imageUrl : 'http://shoemakers.se/utsida-big.jpg',
    name :'ON-IQ@Shoemakers ',
    rooms:[{name:'Meeting room', temperature:21.1,humidity:40},{name:'Office', temperature:21.1,humidity:40}
  ]
  },
  {
    address:'Kyrkogatan 6',
    id:2,
    name :'Domkyrkan',
    imageUrl : 'https://www.allakartor.se/venue_images_475/58773_63967064.jpg',
    rooms:[{name:'Sanctuary', temperature:20.3,humidity:42.1},{name:'Crypt', temperature:18,humidity:22.3}
  ]
  }];

generateTemperature=(current)=>{
    var newVal =  randomInRange(17,25);
    return  Number((newVal*0.1+current*0.9).toPrecision(3));
}
generateHumidity=(current)=>{
    var newVal = randomInRange(20,80);
    return  Number((newVal*0.1+current*0.9).toPrecision(3));
}

randomInRange= (min,max)=>{
    return min+Math.random(0)*(max-min)
}
var openClients = {};

setInterval(function(){
    // update values for a random room in a random house 
    let houseNr = parseInt(Math.random()*houses.length);
 
    let house = houses[houseNr];
    let roomNr = parseInt(Math.random()*house.rooms.length);

    house.rooms[roomNr].humidity = generateHumidity(house.rooms[roomNr].humidity);
    house.rooms[roomNr].temperature = generateTemperature(house.rooms[roomNr].temperature);
    // emit update to all clients 
    Object.keys(openClients).forEach(key => {
        let socket= openClients[key];
        socket.to(house.id).emit('house', house);

    });
    
    
}, 1000);
io.on('connection', socket => {
    
    let previousId;
    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId, () => console.log(`Socket ${socket.id} joined room ${currentId}`));
        previousId = currentId;
        openClients[socket.id]=socket;
    }



    socket.on('getHouse', houseId => {
        safeJoin(houseId);
        socket.emit('house', houses[houseId]);
    });

    io.emit('houses', houses);

    console.log(`Socket ${socket.id} has connected`);
});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});
