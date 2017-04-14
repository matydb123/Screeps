//var MMaintainWorkers= require('MMaintainWorkers');
var MRoom =new class MRoom{

    constructor() 
    { 
        this. CreepsFriendly =[];
        this. Spawns = [];
        this.FindAllCreeps();
        this.FindAllSpawns();
        console.log('1');
        console.log(MRoom);  
       //var k = new MMaintainWorkers.constructior('asdf');
        return this;
    };
    FindAllCreeps () {
        for (var room  in  this.FindAllRooms()) {
            for (var screep in room.find(FIND_MY_CREEPS)) {
               this. CreepsFriendly.push(screep);
            };
        };
    };
    FindAllRooms () {

        for (var roomHash in  Game.rooms) {
           this. roomArray.push(Game.rooms[roomHash]);
        };
    };

    FindAllSpawns() {
        var spawnArray = [];
        for (var spawnHash in  Game.spawns) {
            this.Spawns.push(Game.spawns[spawnHash]);
        };
    };

};

module.exports = MRoom;
