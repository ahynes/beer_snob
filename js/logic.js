$(document).ready(function() {
	document.getElementById("beer").addEventListener("click", getBeers);
  		
});

var beerNames = [];
function getBeers() {
	$.ajax({
		type: 'GET',
	  	url: 'https://lcboapi.com/products',
	  	headers: { 'Authorization': 'Token MDo4ZWY2ZTE4ZS0wMDNiLTExZTYtOGViYi1mMzJlYjk0NzBkYTA6RGdpaUFBVk1Bd050Q0dwVEFzTlF4S2JDT3BMNEY5YUIyWlQy' },
	  	success: function(data){
	  		console.log(data);
	  		// document.getElementById('results').innerHTML = data;
		  		$.each(data.result, function() {        
			    beerNames.push(this.name);
			    document.getElementById('results').innerHTML = beerNames;
			});
	  	}
	});
	alert("BEER BEER BEER!")
}