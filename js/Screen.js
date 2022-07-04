export const Screen = {
	screen:null,
	INIT: function (rootElem)
	{
		if(this.screen != null) return;
		
		this.screen=window.document.createElement("canvas");
		rootElem.appendChild(this.screen);
	},
	set id(value){
		this.screen.id=value;
	},
	set className(value){
		this.screen.className=value;
	},
	set fullScreen(value){
		if(value == true){
			
		}else{
			
		}
	},
	resize: function (){
		this.screen.height=parseInt(getComputedStyle(this.screen).height);
		
		this.screen.width=parseInt(getComputedStyle(this.screen).width);
		
	}
};
