const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", socket => {
  socket.on("isGameActive", gameCode => {
    isGameActive(socket, gameCode);
  })

  socket.on('menuStatus', (status) => {
    handleMenuStatus(socket, status);
  })

  socket.on('joinToRoom', (name) => {
    joinToRoom(socket, name);
  })

  socket.on("activePlayersButton", (resquest) => {
    socket.join("100000032");
    handlePlayersStatus(socket, resquest);
  })

  socket.on("raiseHand", (playerId) => {
    requestToAnswer(socket, playerId);
   })

  socket.on('deletePlayer', (playerId) => {
    deletePlayer(socket, playerId);
  })

})


const port = 8080
app.get('/', (req, res) => {
  res.send("Hello");
});

http.listen(port, () => {
  console.log(`Сервер слушает порт ${port}`);
});


const isGameActive = (socket, gameCode) => {
  for(var i = 0; i < games.length; i++)
  {
    if(games[i].number === gameCode){
      gameCode = String(gameCode)
      socket.roomId = gameCode;
      console.log(typeof gameCode)
      return socket.emit("isGameActive", true);
    }
  }
  return socket.emit("isGameActive", false);
}

const handleMenuStatus = (socket, data) => {
  socket.join(data.number)
  var room = getRoom(data.number);
  room.menu = data.isMenu;
  console.log(typeof data.number)
}



const joinToRoom = (socket, playerName) => {
  var room = getRoom(socket.roomId);
  console.log(room.menu)
  if(room.menu === false){
    socket.join(socket.roomId);
    console.log("hello" + playerName)
    addPlayer(socket, playerName)
    socket.emit('joinToRoom', true)
    socket.emit("myID", socket.id)
  } 
}

const changeScore = (socket, data) => {
 const players = getPlayers(socket.roomId);
 const player = getPlayer(players, data.playerId);
 if(data.request === 'plus'){
   player.score = player.score + data.score;
 }
 else if(data.request === 'minus'){
  player.score = player.score - data.score;
 }
 io.to(socket.roomId).emit('players', players);
}

const getPlayers = (gameId) => {
  for(var i = 0; i < games.length; i++){
    if(games[i].id === gameId){
      return games[i].players;
    }
  }
}

const getPlayer = (players, playerId) => {
  for(var i = 0; i < players.length; i++){
    if(players[i].id === playerId){
      const player = players[i];
      return player;
    }
  }
}

const deletePlayer = (socket, playerId) => {
  const players = getPlayers(socket.roomId);
  for(var i = 0; i < players.length; i++){
    if(players[i].id === playerId){
      players.splice(i, 1);
    }
  }
  io.to(socket.roomId).emit('players', players);
  disconnecting(socket, playerId);
}

const disconnecting = (socket, playerId) => {
  const playerSocket = getSocket(playerId);
  playerSocket.leave(socket.roomId);
  playerSocket.disconnect();
}

const getSocket = (socketId) => {
  return io.of("/" ).sockets.get(socketId);
}

const getRoom = (roomId) => {
  return io.of("/").adapter.rooms.get(roomId);
}

const addPlayer = (socket, playerName) => {
  console.log("enter")
  for(var i = 0; i < games.length; i++)
  {
    if(games[i].number === socket.roomId) {
      if(typeof games[i].players === "undefined") {
        const player = [{ id:socket.id, name:playerName, score:0, display:"block" }];
        games[i].players = player;
      }
      else { 
        const player = { id:socket.id, name:playerName, score:0, display:"block" };
        games[i].players.push(player);
      }
      io.to(socket.roomId).emit('players', games[i].players);
    }
  }
}

app.get("/api/:id", function(req, res){
  var id = req.params.id; 
  id = String(id)
  var game;
  for(var i=0; i < games.length; i++){
      if(games[i].number === id){
        game = games[i];
      }
  }
  if(game){
      res.send(game);
  }
  else{
      res.status(404).send();
  }
});

const handlePlayersStatus = (socket, request) => {
  for(var i = 0; i < games.length; i++){
    if(games[i].number === "100000032"){
      var players = games[i].players;
      for(var j = 0; j < players.length; j++){
        players[j].button = request;
        console.log(players[j])
      }
      io.to("100000032").emit('players', players);
    }
  }
}

const handleTasksStatus = (socket, data) => {
  for(var i = 0; i < games.length; i++){
    if(games[i].id === socket.roomId){
      const variants = games[i].variants;
      for(var j = 0; j < variants.length; j++){
        if(variants[j].id === variantId){
          const tasks = variants[j].tasks;
          for(var k = 0; k < tasks.length; k++){
            if(tasks[k].id === taskId && tasks[k].status === 'undefined'){
              tasks[k].status = request;
            }
            else if(tasks[k].id === taskId){
              tasks[k].status = request;
            }
          }
          io.to(socket.roomId).emit('handleTasksStatus', players);
        }
      }
    }
  }
}


const requestToAnswer = (socket, playerId) => {
  var room = getRoom(socket.roomId)
  if(room.menu === 'active')
  {
    room.menu = "block";
    for(var i = 0; i < games.length; i++){
      if(games[i].number === socket.roomId){
        var players = games[i].players;
        for(var j = 0; j < players.length; j++){
          if(players[j].id === playerId){
            players[j].button = "answer";            
            socket.emit('scoreBoard', {player:players[j], request:'active'});
          }
          else players[j].button = "block";
        }
        io.to(socket.roomId).emit('players', players);
      }
    }
  }
}


const hand = (socket, request) => {
  for(var i = 0; i < games.length; i++){
    if(games[i].number === "100000032"){
      var players = games[i].players;
      for(var j = 0; j < players.length; j++){
        players[j].button = request;
      }
      io.to(socket.roomId).emit('players', players);
    }
  }
}




var games = [
  {
    "number":"100000032",
    "title":"Обществознание вокруг нас",
    "finishDate":1609873140000,
    "startDate":1609786800000,
    "players": [ 
      { "id":"kas73uzyyvHzoJDgAABt", 
        "name":"Ivan", 
        "score":0, 
        "button":"block"
      }, 
      { 
        "id":1,
        "name":"Ivan", 
        "score":0, 
        "button":"block" 
      }, 
    ],
    "variants":[
      {
        "id":0,
        "title":"Пример первой темы",
        "tasks":[
          { 
            "id":0,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835065484.JPG"
          },
          {
            "id":1,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835070843.JPG"
          },
          {
            "id":2,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835075631.JPG"
          },
          {
            "id":3,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835079655.JPG"
          },
          {
            "id":4,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835085810.JPG"
          }
        ]
      },
      {
        "id":1,
        "title":"Пример второй темы",
        "tasks":[
          {
            "id":0,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835140194.JPG"
          },
          {
            "id":1,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835145091.JPG"
          },
          {
            "id":2,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835149775.JPG"
          },
          {
            "id":3,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835154181.JPG"
          },
          {
            "id":4,
            "type":"image",
            "content":"users/5f8b294af3c2cb3b48d54d3e/100000031/1609835157859.JPG"
          }
        ]
      }
    ]
  }
]

