//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput(){
	
	this.menuDisplayed = false;
	
	//playback button displayed in the top left of the screen
	this.playbackButton = new PlaybackButton();

	//make the window fullscreen or revert to windowed
	this.mousePressed = function(){
		//check if the playback button has been clicked
        var isButtonPressed = this.playbackButton.hitCheck();
		//if not make the visualisation fullscreen
        if(!isButtonPressed)
            {
                let fs = fullscreen();
                fullscreen(!fs);
            }
	};

	//responds to keyboard presses
	//@param keycode the ascii code of the keypressed
	this.keyPressed = function(keycode){
		console.log(keycode);
		if(keycode == 32){
			this.menuDisplayed = !this.menuDisplayed;
		}

		if(keycode > 48 && keycode < 58){
			var visNumber = keycode - 49;
			vis.selectVisual(vis.visuals[visNumber].name); 
		}
	};

	//draws the playback button and potentially the menu
	this.draw = function(){
		push();
		fill("white");
		textSize(30);

		//playback button 
		this.playbackButton.draw();
		//only draw the menu if menu displayed is set to true.
		if(this.menuDisplayed){
            textAlign(CENTER);
			text("Visualisation Select:", width/2, height/2);
            textAlign(LEFT);
            textSize(15)
			this.menu();
		}	
		pop();

	};
    
	this.menu = function(){
		//draw out menu items for each visualisation
		for(let i = 0; i < vis.visuals.length; i++)
            {
                text(i + 1 + ":" + " " + vis.visuals[i].name , width/2 - 130, height/2 + (i + 1) * 30);
            }
	};
}


