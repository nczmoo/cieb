class Game{
	buying = null;
	config = new Config();
	loop = null;
	loopInterval = null; 
	
	constructor(){
		this.loop = new Loop();
		this.loopInterval = setInterval(this.loop.looping, 1000);
	}

	buy(replaceWith){
		this.config.tableau[replaceWith] = this.config.market[this.buying];
		this.config.market.splice(this.buying, 1);
		this.buying = null;
	}

	fetchDescription(name){
		return this.config.descriptions[name];
	}
}
