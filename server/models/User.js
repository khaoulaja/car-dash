const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const carSchema = require('./Car');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        cars: [carSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password,
            saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function
    (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('carCount').get(function () {
    return this.car.length;
});

const User = model('User', userSchema);

module.exports = User;