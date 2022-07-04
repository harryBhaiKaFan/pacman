export let SoundHandler = {
	AudioElem:new Audio(),
	INIT: function (){
		this.PATH="/music/";
	},
	set PATH(value){
		this.BeginSound=value+"pacman_beginning.wav";
		this.EatFruitSound=value+"pacman_eatfruit.wav";
		this.IntermissionSound=value+"pacman_intermission.wav";
		this.MoveSound=value+"pacman_mov.wav";
		this.EatGhostSound=value+"pacman_eatghost.wav";
	},
	get CAN_PLAY()
	{
		return this.canPlaySound;
	},
	set CAN_PLAY(value)
	{
		this.canPlaySound=value;
	},
	play(sound){
		
		this.AudioElem.src=sound;
		
		return this.AudioElem.play();
	},
	pause(){
		return this.AudioElem.pause();
	},
	get finishedPrecent(){
		if(this.AudioElem.currentTime && this.AudioElem.duration)
			return (this.AudioElem.currentTime/this.AudioElem.duration)*100;
		
		return(null);
	},
	get finished(){
		return finishedPrecent===100;
	}
};
