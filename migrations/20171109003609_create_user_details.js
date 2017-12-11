
exports.up = function(knex, Promise) {
   return knex.schema.createTable('user', function (t) {
    t.increments('user_id').primary()
    t.string('username').notNullable()
    t.string('first_name').notNullable()
	t.string('last_name').notNullable()
	t.string('gender').notNullable()
	t.string('password').notNullable()
	t.string('status').notNullable()
    t.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('user')
};
