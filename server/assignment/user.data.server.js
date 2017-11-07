var _bcrypt = require("bcrypt-nodejs");

function User(_id, username, password, firstName, lastName, email, role) {
    return {
        "_id": _id,
        "username": username,
        "password": _bcrypt.hashSync(password),
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "role": role,
    };
}

function getDefaultUsers() {
    var users = [ User("",
                       "alice",
                       "alice",
                       "Alice",
                       "Wonder",
                       "alice@example.com",
                       "user"),
                  User("",
                       "bob",
                       "bob",
                       "Bob",
                       "Marley",
                       "bob@example.com",
                       "superuser"),
                  User("",
                       "charly",
                       "charly",
                       "Charly",
                       "Garcia",
                       "charly@example.com",
                       "user"),
                  User("",
                       "dan",
                       "dan",
                       "Dan",
                       "Steely",
                       "dan@example.com",
                       "superuser"),
                  User("",
                       "jannunzi",
                       "jannunzi",
                       "Jose",
                       "Annunzi",
                       "jannunzi@example.com",
                       "user"),
                  User("",
                       "admin",
                       "admin",
                       "Nick",
                       "Setzer",
                       "admin@example.com",
                       "admin")
    ]
    return users;
}

exports.User = User;
exports.getDefaultUsers = getDefaultUsers