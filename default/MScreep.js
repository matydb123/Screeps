'use strict';

var MScreep =
    {
        Create:function()
        {
            MSpawn.FindAll(Room).createCreep([WORK, MOVE, CARRY]);

        }
    }
module.exports=MScreep;
