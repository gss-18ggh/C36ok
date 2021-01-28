class Player{

constructor( ){

this.name =null;
this.index = null;
this.distance = 0;



}

update( ){

var playerIndex = "players/player"+ this.index
database.ref(playerIndex).set({

name: this.name,
distance: this.distance,


})


}

updateCount(count){
database.ref("/").update({

    playerCount: count

})


}
getCount(){

var playerCountRef = database.ref("playerCount");
playerCountRef.on("value", function(data){

playerCount = data.val();


}) 

}

 static getPlayerInfo(){
    console.log("Get Player Info is called");
 var playerInfoRef =  database.ref("players");
 playerInfoRef.on("value", (data)=>{

    allPlayers = data.val();


})
console.log(allPlayers);

}


}


// valueEvent: access a value, val: is used with data in "on" function. 

/*if((touches.length > 0 || keyDown("SPACE")) && trex.y  >= height-120) {
    //jumpSound.play( )
    //trex.velocityY = -10;
     touches = [];
  }*/