module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    host : '0.0.0.0',
    port : 32769,
    password: 'password',
    database: 'osticket'
  },
   pool: { min: 0, max: 50 }
}