const db = require("../data/db-config.js");
const shortid = require("shortid");

function get(id) {
	return db("invitations")
		.where(id)
		.first();
}

function getBy(filter) {
	return db("invitations")
		.where(filter)
		.first();
}

function create(userId) {
	return db("invitations")
		.insert({ userId, invitationCode: shortid.generate() })
		.then(ids => {
			return get({ id: ids[0] });
		});
}

module.exports = {
	get,
	getBy,
	create
};
