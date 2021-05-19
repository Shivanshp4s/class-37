class Player {

construtor (){

this.name = null;
this.distance = 0;
this.index = null;

}





 getCount(){


var playerCountref = database.ref("playerCount");; 

playerCountref.on("value",(data)=>{
   playerCount = data.val();
 });

 }


updateCount(count){

    database.ref('/').update({
       playerCount : count 
      });
    }

  update(){

var playersIndex = "players/player"+this.index;

database.ref(playerIndex).set({

name:this.name,
distance:this.distance


});
    }
getPlayerInfo(){

var playerInfoRefrence = database.ref("players");
playerIndex.ref.on("value",(data)=>{

allPlayer= data.val();


});
}
}
