class UI{
	fills = [];
	constructor(){

	}
	refresh(){
		this.printTableau();
		this.printMarket();		
		for (let fill of this.fills){
			$("#" + fill).html(game.config[fill]);
		}
		this.printResources();
	}

	buy(id){
		$(".tableau").addClass('replacing');
		$(".buy").prop('disabled', true);
	}


	formatID(id){
		return Number(id) + 1;
	}

	highlight(id){
		$(".tableau").removeClass('highlighted');
		$("#" + id).addClass('highlighted');
	}

	printCard(cardID, isMarket, setID){
		let txt = "<span class=''>", cardClass = ' tableau ';										
		let card = game.config.cards[cardID], id = 'tableau-' + setID;				
		txt += "<div>Cost:</div>";		
		if (Object.keys(card[0]).length == 0){
			txt  += "<div class='fst-italics text-secondary'>nothing</div>";
		}
		for (let name in card[0]){
			let quantity = card[0][name];
			txt += "<div class='text-danger'>-" + quantity + " " + name + "</div>"
		}
		txt += "<div class='mt-3'>Income:</div>";
		for (let name in card[1]){
			let quantity = card[1][name];
			txt += "<div class='text-success'>+" + quantity + " " + name + "</div>"
		}
		if (isMarket){
			txt += "<div><button id='buy-" + setID 
				+ "' class='buy btn btn-primary'>buy</button></div>"
			cardClass = ' market ';
			id = "market-" + setID;
		}
		return "<div id='" + id + "' class='card col text-center p-5 " + cardClass + "'>" 
			+ txt 
			+   "</div></div>";
	}
	printMarket(){
		let txt = '';
		for (let marketID in game.config.market){
			let cardID = game.config.market[marketID];			
			let nullTxt = "<div id='market-" + marketID 
				+ "' class='card col text-center p-5 market fst-italics text-secondary'>empty</div>";			
			if (cardID == null){
				txt += nullTxt;
				continue;
			}
			txt += this.printCard(cardID, true, marketID);
		}
		$("#market").html(txt);
	}

	printResources(){
		let txt = '';		
		for (let resource in game.config.resources){			
			txt += resource + ": " + game.config.resources[resource] + " ";
		}
		$("#resources").html(txt);
	}

	printTableau(){
		let txt = '';
		for (let tableauID in game.config.tableau){
			let cardID = game.config.tableau[tableauID];			
			let nullTxt = "<div id='market-" + tableauID 
				+ "' class='card col text-center p-5 market fst-italics text-secondary'>empty</div>";
			if (cardID == null){
				txt += nullTxt;
				continue;
			}
			
			txt += this.printCard(cardID, false, tableauID);
		}
		$("#tableau").html(txt);
	}
}
