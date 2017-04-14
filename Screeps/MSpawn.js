var MRoom = require('MRoom');
var MSpawn= new function()
{
    var Room  = null;
    function MSpawn (room) {
        Room = room;
        return this;
    };
    function CreateCreep()
    {
     Room.Spawns[0].createCreep([WORK, CARRY, MOVE]);
    }
  };
module.exports=MSpawn;