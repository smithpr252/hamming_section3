var compute;

compute = function(s1, s2) {

	if (s1.length !== s2.length) {

		throw new Error('DNA strands must be of equal length.');
	}

	var distance = 0;
	for (var i = 0; i < s1.length; i += 1) {
		if(s1[i] !== s2[i]) {
			distance = distance + 1
		}
	}


	return distance; 
};


module.exports = {
	compute: compute
}; 