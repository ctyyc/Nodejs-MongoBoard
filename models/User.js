const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique : 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: String,
    tokenExp: Number
});

// 비밀번호 암호화


// 비밀번호 비교
// userSchema.methods.comparePassword = function(plainPassword, cb){
//     bcrypt.compare(plainPassword, this.password, function(err, isMatch){
//         if(err) return cb(err);
        
//         cb(null, isMatch);
//     })
// }
userSchema.methods.comparePassword = function(plainPassword, cb) {
    if (inputPassword === this.password) {
        cb(null, true);
    } else {
        cb('error');
    }
};

const User = mongoose.model('User', userSchema, 'User');

module.exports = { User };