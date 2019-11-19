const uuidv1 = require("uuid/v1");
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("calendars")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("calendars").insert([
				{
					calendarName: "Primary",
					calendarDescription: "Default calendar",
					isDefault: true,
					uuid: uuidv1()
				},
				{
					calendarName: "Home",
					calendarDescription: "Home calendar",
					uuid: uuidv1()
				},
				{
					calendarName: "Work",
					calendarDescription: "School calendar",
					uuid: uuidv1()
				},
				{
					calendarName: "Lambda",
					calendarDescription: "Course calendar",
					uuid: uuidv1()
				}
			]);
		});
};