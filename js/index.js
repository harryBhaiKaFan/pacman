import {Screen} from './Screen.js';
import {SoundHandler} from './Sound.js';
import {Container} from './UI/Container.js';

const HomeScreen = new Container();
const GameScreen = new Container();
const SettingsScreen = new Container();


window.onload=(e)=>{
	
	SoundHandler.INIT();
	// Sound setup 📢
	
	Screen.INIT(document.body);
	Screen.id="screen";
	Screen.fullScreen=true;
	
	// Screen setup 📺
	
}
