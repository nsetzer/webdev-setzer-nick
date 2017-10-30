
module.exports = function(mongoose, UserSchema) {
    let model =  mongoose.model("UserModel", UserSchema);

    model.createUser = function(user) {
        if (user._id || user._id==='') {
            delete user._id;
        }
        return model.create(user)
    }

    model.findUserById = async function(uid) {
        result = await model.find({_id: uid})
        if (result.length === 1) {
            return result[0];
        }
        return null
    }

    model.findUserByUsername = async function(username) {
        result = await model.find({username: username})
        if (result.length === 1) {
            return result[0];
        }
        return null
    }

    model.findUserByCreadentials = async function(username,password) {
        result = await model.find(
            {username: username, password:password})
        if (result.length === 1) {
            return result[0];
        }
        return null
    }

    model.updateUser = function(uid,user) {
        if (user._id || user._id==='') {
            delete user._id;
        }
        return model.update({_id: uid},user)
    }

    model.deleteUser = function(uid) {
        return model.remove({_id: uid})
    }

    return model
}