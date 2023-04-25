$(document).on('click', '', function(e){

})

$(document).on('click', '.replacing', function(e){	
	game.buy(e.target.id.split('-')[1]);
	ui.refresh();
})


$(document).on('click', '.menu', function(e){
	ui.window = e.target.id.split('-')[1];
	$(".window").addClass('d-none');
	$("#" + e.target.id.split('-')[1]).removeClass('d-none');
	$(".menu").prop('disabled', false);
	$("#" + e.target.id).prop('disabled', true);
})

$(document).on('click', '.verb0', function(e){
	game[e.target.id]();
})

$(document).on('click', '.verb1', function(e){
	game[e.target.id.split('-')[0]](e.target.id.split('-')[1]);
})

$(document).on('click', '.verb2', function(e){
	game[e.target.id.split('-')[0]](e.target.id.split('-')[1], e.target.id.split('-')[2]);
})


$(document).on('click', 'button', function(e){
	ui.refresh()
})
$(document).on('click', '.buy', function(e){
	let id = e.target.id.split('-')[1];
	console.log(id);
	game.buying = id; 
	ui.buy(id);
})