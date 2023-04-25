class Config { 

    cards = [

    ]
    descriptions = {
        nepo: " +$1  every turn",
    }
    
    cards = {        
        buy_forest: { from: ['money'], to: 'forest', quantity: 100},
        chop_trees: { from: ['forest', 'lumberjacks'], to: 'logs', quantity: 1},
        hire_lumberjack: { from: ['money'], to: 'lumberjacks', quantity: 100},
    };
    
    market = ['buy_forest', 'chop_trees', 'hire_lumberjack']; 
    money = 10;
    maxMarket = 3;
    maxTableau = 4;
    resources = {wood: 0};

    tableau = ['nepo', 'nepo', 'nepo', 'nepo'];
    
	constructor(){        
    }

    
}