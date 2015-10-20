module.exports = {
	instantiate: function(load) {
		var modulePath = load.address.replace(/^file:\/\//, '');

		return(System._nodeRequire(modulePath));
	}
};
