
function User(_id, username, password, firstName, lastName, email) {
    return {
        "_id": _id,
        "username": username,
        "password": password,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "role": "user",
    };
}

function getDefaultUsers() {
    var users = [ User("",
                       "alice",
                       "alice",
                       "Alice",
                       "Wonder",
                       "alice@example.com"),
                  User("",
                       "bob",
                       "bob",
                       "Bob",
                       "Marley",
                       "bob@example.com"),
                  User("",
                       "charly",
                       "charly",
                       "Charly",
                       "Garcia",
                       "charly@example.com"),
                  User("",
                       "jannunzi",
                       "jannunzi",
                       "Jose",
                       "Annunzi",
                       "jannunzi@example.com")
    ]
    return users;
}

exports.User = User;
exports.getDefaultUsers = getDefaultUsers