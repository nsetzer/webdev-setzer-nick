

export class User {

    _id : string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;

    constructor(_id : string,
                username: string,
                password: string,
                firstName: string,
                lastName: string,
                email: string,) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = "user";
    }

    static getDefaultUsers() {
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



}