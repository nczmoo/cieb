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
		this.config.refreshMarket();
	}

	checkTableau(){
		for (let cardID of this.config.tableau){						
			let card = this.config.cards[cardID];
			let cleared = this.config.decrementFrom(cardID);
			if (!cleared){
				this.config.tableau.splice(cardID, 1);
				continue;
			}
			this.config.incrementResources(cardID);
		}
	}

	fetchDescription(name){
		return this.config.descriptions[name];
	}

	turn(){
		this.checkTableau();
	}
}
