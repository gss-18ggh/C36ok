 class Form{
 constructor(){

   this.input = createInput("Name");
   this.button = createButton("PLAY");
   this.greeting = createElement("h3");
      

}



display(){

var title= createElement("h1");
title.html("Car Racing Game");
title.position(displayWidth/2-50, 50);

this.input.position(displayWidth/2-40, displayHeight/2-80);
this.button.position(displayWidth/2+20, displayHeight/2-50);
this.button.mousePressed(()=>{


this.input.hide();
this.button.hide();

player.name= this.input.value();

   textFont("times new roman")
this.greeting.html("HIIII "+player.name)
this.greeting.position(550, 250);

playerCount +=  1

player.index = playerCount;

player.update();
player.updateCount(playerCount);


});


}

hide(){

this.greeting.hide();
this.button.hide();
this.input.hide();

}


}