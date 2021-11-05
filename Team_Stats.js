const team = {
    _players: [{firstName:'Pablo',
    lastName: 'Sanchez',
    age: 11}, 
    {
      firstName: 'pete',
      lastName: 'Wheeler',
      age: 54
    },
    {
      firstName: 'Lily',
      lastName: 'Bet',
      age: 30
    }],
    _games: [{
      opponent: 'Broncos',
      teamPoints: 44,
      opponentPoints: 22
    },{
      opponent: 'Frezly',
      teamPoints: 32,
      opponentPoints: 43
    },{
      opponent: 'Pepprt',
      teamPoints: 45,
      opponentPoints: 23
    }],
    
    get games(){
      return this._games;
    },
     get players(){
      return this._players;
    },
  
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      this.players.push(player);
    },
  
    addGame(opponentName, teamPoints, opponentPoints){
      let game = {
        opponent: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
  
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Titans',50, 43);
  team.addGame('Hearts',23, 45);
  team.addGame('Kotoko', 21, 33);
  //console.log(team)