(function showTheNet() {
	var rows = 1;
	while (rows <= 7) {
		var hash = '';
		if (rows %2 === 0) {
			while (hash.length < 10){
				hash +=' #';
			}
		}else{
			while (hash.length < 10){
				hash +='# ';
			}
		}
	rows ++;	
	console.log(hash);
	}
})();