
var MMaintainWorkers =new class MMaintainWorkers
{
    constructor(room)
    {console.log(room);
        this.Room = room;
        if (this.Room.CreepsFriendly.length<5)
        { 
          this.  room.Spawns[0].CreateCreep();
        }; 
        return this;
    };
};


