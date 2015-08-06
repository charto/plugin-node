export function instantiate(load) {
	var modulePath = load.address.replace(/^file:\/\//, '');

	return(require(modulePath));
}
