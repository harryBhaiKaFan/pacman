const screen=document.querySelector("#screen");
const draw=screen.getContext("2d");

screen.width=parseInt(getComputedStyle(screen).width);
screen.height=parseInt(getComputedStyle(screen).height);

const randInt=(min,max)=>min+Math.floor((max-min)*Math.random);


//All basic vars and funs end here

function constructFood(cx,cy,rad){
	
}
function consturctAlien(cx,cy,w,h){
	
}

let gameMap={
	mapRect:new Array(),
	mapCreate:function(){
		let noOfRects=4;
		
		for(let i=0;i<noOfRects;++i){
			let rect=new Array();
			rect.push(randInt());
			rect.push();
			rect.push();
			rect.push();
			mapRect.push(rect);
		}
		
		return(mapRect);
	}
};

let gameBoard={
	canGo:function(){
		
	}
};
let pacman={
	cx:screen.width*50/100,
	cy:screen.height*50/100,
	rad:(screen.height<screen.width?screen.height:screen.width)/20
	,
	strtAng:2*Math.PI,
	endAng:2*Math.PI,
	direction:'left',
	init:function(){
		
	},
	render:function(){
		
	},
	move:function(){
		let nX=this.cx,nY=this.cy;
		
		if(this.direction=='left'){
			nX=(nX+rad)-1;
			if(board.canGo(nX,nY)){
				
			}
		}else if(this.direction=='right'){
			nX=(nX+rad)+1;
			if(board.canGo(nX,nY)){
				
			}
		}else if(this.direction=='top'){
			nY=(nY+rad)-1;
			if (board.canGo(nX, nY)) {
			
			}
		}else if(this.direction=='bottom'){
			nY=(nY+rad)+1;
			if (board.canGo(nX, nY)) {
			
			}
		}
		
		this.render();
	}
};
//All game vars and funs end here 


function startGame(lvl){
	let gameLoop=setInterval(()=>{
		pacman.move();
	},100);
}


//works to be done onload >>>
window.onload=(e)=>{
	const loader = document.querySelector(".loader");
	
	btn1.onclick=(e)=>{ //top
		pacman.direction="top";
	}
	
	btn2.onclick=(e)=>{ //left
		pacman.direction="left";

	}
	
	btn3.onclick=(e)=>{ //right
		pacman.direction="right";
	}
	
	btn4.onclick=(e)=>{ //bottom
		pacman.direction="bottom";
	}
	//game buttons end here
	
	
	loader.onclick=(e)=>{ 
		loader.style.display="none";
	}
}