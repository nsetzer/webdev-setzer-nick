
module.exports = function(mongoose, UserSchema) {
    let model =  mongoose.model("UserModel", UserSchema);

    model.createUser = createUser
    model.findUserById = findUserById
    model.findUserByUsername = findUserByUsername
    model.findUserByCreadentials = findUserByCreadentials
    model.updateUser = updateUser
    model.deleteUser = deleteUser

    function createUser(user) {
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

    async function findUserByUsername(username) {
        result = await model.find({username: username})
        if (result.length === 1) {
            return result[0];
        }
        return null
    }

    async function findUserByCreadentials(username,password) {
        result = await model.find(
            {username: username, password:password})
        if (result.length === 1) {
            return result[0];
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