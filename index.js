const loader = document.querySelector(".loader");
const cnva=document.querySelector("#screen");
cnva.width=parseInt(getComputedStyle(cnva).width);
cnva.height=parseInt(getComputedStyle(cnva).height);
const ctx=cnva.getContext("2d");
let drawObj={
	width:cnva.width,
	height:cnva.height,
	refresh:function(){
		ctx.clearRect(0,0,this.width,this.height);
	},
	render:ctx
};
//All vars end here

function constructFood(cx,cy,rad){
	
}
function consturctAlien(cx,cy,w,h){
	
}
let gameBoard={
	
};
let pacMan={
	cx:drawObj.width*50/100,
	cy:drawObj.width*50/100,
	rad:10,
	strtAng:2*Math.PI,
	endAng:2*Math.PI,
	initPac:function(){
		
	},
	movePac:function(direction){
		
	}
};


function startGame(lvl){
	let gameLoop=setInterval(()=>{
		
	},100);
}

window.onload=(e)=>{
	//Wrks to be done on start
	btn1.onclick=(e)=>{ //top
		
	}
	
	btn2.onclick=(e)=>{ //left
		
	}
	
	btn3.onclick=(e)=>{ //right
		
	}
	
	btn4.onclick=(e)=>{ //bottom
		
	}
}
loader.onclick=(e)=>{ 
	loader.style.display="none";
}