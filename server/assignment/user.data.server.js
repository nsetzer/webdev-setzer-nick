
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

exports.User = User;

exports.getDefaultUsers = function() {
    var users = [ new User("123",
                   "alice",
                   "alice",
                   "Alice",
                   "Wonder",
                   "alice@example.com"),
                  new User("234",
                           "bob",
                           "bob",
                           "Bob",
                           "Marley",
                           "bob@example.com"),
                  new User("345",
                           "charly",
                           "charly",
                           "Charly",
                           "Garcia",
                           "charly@example.com"),
                  new User("456",
                           "jannunzi",
                           "jannunzi",
                           "Jose",
                           "Annunzi",
                           "jannunzi@example.com")
    ]
    return users;
}