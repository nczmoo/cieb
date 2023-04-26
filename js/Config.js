class Config { 

    cards = Card.templates;    
    market = [null, null, null];     
    maxMarket = 3;
    maxTableau = 4;
    resources = {forest: 0, logs: 0, lumberjacks: 0, money: 10, };

    tableau = [0, 0, 0, 0];
    
	constructor(){     
        this.integrityCheck();
        this.refreshMarket();   
    }

    areReqsMet(cardID){
        for (let resource in this.cards[cardID][0]){
            let quantity = this.cards[cardID][0][resource];
            if (this.resources[resource] < quantity){
                return false;
            }
        }
        return true;
    }    

    decrementFrom(cardID){
        let clearedToGo = this.areReqsMet(cardID);

        if (!clearedToGo){
            return clearedToGo;
        }
        for (let resource in this.cards[cardID][0]){
            let quantity = this.cards[cardID][0][resource];
            this.resources[resource] -= quantity;
        }
        return clearedToGo;
    }

    fetchRandomCard(){
        while(1){
            let rand = randNum(1, this.cards.length - 1);
            if (this.areReqsMet(rand) && !this.market.includes(rand)){
                return rand;
            }
        }        
    }

    incrementResources(cardID){
        for (let resource in this.cards[cardID][1]){
            let quantity = this.cards[cardID][1][resource];
            this.resources[resource] += quantity;
        }
        

        
    }

    integrityCheck(){
        for (let cardID in this.cards){
            let card = this.cards[cardID];
            for (let incOrDec of card){
                for (let resource in incOrDec){
                    if (this.resources[resource] == undefined){
                        this.resources[resource] = 0;
                    }
                }
                
                
            }
        }
    }

    refreshMarket(){
        for (let i = 0; i < this.maxMarket; i ++){
            this.market[i] = this.fetchRandomCard();
        }
    }
}