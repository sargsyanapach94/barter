module.exports = function(Contact) {
	Contact.validatesUniquenessOf('email');
};
