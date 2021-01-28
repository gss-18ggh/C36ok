class Game {

    constructor() {



    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function (data) {
            gameState = data.val();

        }
        )

    }
    update(state) {
        database.ref("/").update({

            gameState: state

        })



    }

    async start() {

        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value")
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val()
                player.getCount();




            }
            form = new Form();
            form.display();





        }
        //here

        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);

        cars = [car1, car2, car3, car4];
        console.log("In start " + cars);

    }

    play() {

        // String concatenation
        form.hide();
        textSize(30);
        text("GAME START", 120, 100);
        Player.getPlayerInfo();
        if (allPlayers !== undefined) {

            var index = 0;
            var x1 = 0;
            var y1;

            //          var displayPosition = 130;

            for (var plr in allPlayers) {
                index = index + 1;
                x1 = x1 + 200;
                y1 = displayHeight - allPlayers[plr].distance;
                console.log("In play " + cars);
                cars[index - 1].x = x1
                cars[index - 1].y = y1

                if (index === player.index) {

                    cars[index - 1].shapeColor = "black";


                }

                /*if (plr === "player" + player.index) {

                    fill("blue");

                }
                else {

                    fill("black");

                    }*/

                //                displayPosition += 20;
                //               textSize(15);
                //             text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition);
                //foreach loop.        


            }


        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {

            player.distance += 50;
            player.update();


        }
        drawSprites();
    }
}
