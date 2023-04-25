class UI{
	fills = ['money'];
	constructor(){

	}
	refresh(){
		this.printMarket();
		this.printTableau();
		for (let fill of this.fills){
			$("#" + fill).html(game.config[fill]);
		}
	}

	buy(id){
		$(".tableau").addClass('replacing');
		$(".buy").prop('disabled', true);
		console.log('buy', id);
	}


	formatID(id){
		return Number(id) + 1;
	}

	printCard(name, isMarket, id){
		let txt = '', cardClass = ' tableau ';			
		if (name == 'nepo'){
			txt = game.config.descriptions[name];
		} else {
			let card = game.config.cards[name];
			txt += "<span class='text-secondary'>"
			for (let i of card.from ){
				txt += " " + i;
				if (card.from.indexOf(i) < card.from.length - 1){
					txt += " &";					
				}
			}
			txt += "</span> &rarr; <span class='fw-bold'>" + card.quantity + " " + card.to + "</span>";

		}
		if (isMarket){
			txt += "<div><button id='buy-" + id.split('-')[1] + "' class='buy btn btn-primary'>buy</button></div>"
			cardClass = ' market ';
		}
		return "<div id='" + id + "' class='card col text-center p-5 " + cardClass + "'>" 
			+ txt 
			+   "</div></div>";
	}
	printMarket(){
		let txt = '';
		for (let i in game.config.market){
			let name = game.config.market[i];
			txt += this.printCard(name, true, 'market-' + i);			
		}
		$("#market").html(txt);
	}

	printTableau(){
		let txt = '';
		for (let i in game.config.tableau){
			let name = game.config.tableau[i];
			txt += this.printCard(name, false, 'tableau-' + i);
		}
		$("#tableau").html(txt);
	}
}
