
module.exports = function(mongoose, UserSchema) {
    let model =  mongoose.model("UserModel", UserSchema);
    var _bcrypt = require("bcrypt-nodejs");

    model.createUser = createUser
    model.findUserById = findUserById
    model.findUserByFacebookId = findUserByFacebookId
    model.findOrCreateUserByFacebookProfile = findOrCreateUserByFacebookProfile
    model.findUserByUsername = findUserByUsername
    model.findUserByCredentials = findUserByCredentials
    model.updateUser = updateUser
    model.deleteUser = deleteUser

    function createUser(user) {
        user.password = _bcrypt.hashSync(user.password);
        if (user._id || user._id==='') {
            delete user._id;
        }
        return model.create(user)
    }

    async function findUserById(uid) {
        result = await model.find({_id: uid})
        if (result.length === 1) {
            return result[0];
        }
        return null
    }

    async function findUserByFacebookId(id) {
        result = await model.find({'facebook.id': id})
        if (result.length === 1) {
            return result[0];
        }
        return null
    }

    async function findOrCreateUserByFacebookProfile(profile, token) {
        let result = await model.find({'facebook.id': profile.id})
        if (result.length === 0) {

            let user = {
                username: profile.id,
                firstName: profile.name.givenName || "N/A",
                lastName: profile.name.familyName || "N/A",
                role: "user",
                facebook:{"id":profile.id,token:token}
            }
            return await model.create({})
        }
        return result[0]
    }

    async function findUserByUsername(username) {
        result = await model.find({username: username})
        if (result.length === 1) {
            return result[0];
        }
        return null
    }

    async function findUserByCredentials(username,password) {
        result = await model.find({username: username})
        if (result.length === 1) {
            let user = result[0]
            if(user && _bcrypt.compareSync(password, user.password)) {
                return user;
            }
        }
        return null
    }

    function updateUser(uid,user) {
        if (user._id || user._id==='') {
            delete user._id;
        }
        return model.update({_id: uid},user)
    }

    function deleteUser(uid) {

        return model.remove({_id: uid})
    }

    return model
}