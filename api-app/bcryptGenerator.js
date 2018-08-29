var bcrypt = require('bcryptjs')

let salt = bcrypt.genSaltSync(10),
	pass = bcrypt.hashSync('admin', salt)

console.log(pass);

//password: $2a$10$wsYASoONm7ntjTIstLiCYeiLDZx1uG6dBYWn9R/AHHnPL9sAaEWs6