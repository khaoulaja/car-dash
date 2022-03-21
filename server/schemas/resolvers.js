const { AuthenticationError } = require('apollo-server-express');
const { User, Car } = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context)=>{
            if(context.user){
                const userData = await User.findOne({_id: context.user._id})
                .select('-__v -password')
                .populate('cars');

                return userData;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        cars: async (parent, args, context) => {
            if(context.user){
                // const params = username ? {username} : {};
                const userCars = await Car.find({username: context.user.username})

                return userCars;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        car: async (parent, {carId}, context)=>{
            if(context.user){
                // const params = username ? {username} : {};
                const car = await Car.findOne({_id: carId})

                return car;
            }
            throw new AuthenticationError('You need to be logged in!')
        }
    },
    Mutation: {
        addUser: async(parent, args)=>{
            const user= await User.create(args);
            const token = signToken(user);
            return {token, user};
          },
          login: async(parent, {email, password})=>{  
            const user = await User.findOne({email});
    
            if(!user){
                throw new AuthenticationError('Incorrect credentials!');
            }
    
            const correctPw = await user.isCorrectPassword(password)
            if(!correctPw){
                throw new AuthenticationError('Incorrect credentials!');
            }
            const token = signToken(user);
            return {token, user};
          },
          addCar: async(parent, args, context)=>{
              if(context.user){
                  const car = await Car.create({...args, username: context.user.username });

                  await User.findByIdAndUpdate(
                      {_id: context.user._id},
                      {$push: {cars: car._id} },
                      {new: true}
                  );
                  return car;
              }

              throw new AuthenticationError('You need to be logged in!');
          },
          deleteCar: async(parent, {carId}, context)=>{
            if(context.user){
                const car = await Car.findOneAndDelete( {_id: carId} );

                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    {$pull: {cars: car._id} },
                    {new: true}
                );
                return car;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
          saveMaintenance: async (parent, {carId, type}, context)=>{
            if(context.user){
                const updateCar = await Car.findOneAndUpdate(
                    {_id: carId},
                    {$push: {maintenance: type}},
                    {new: true}
                );
                return updateCar;
            }
            throw new AuthenticationError('You need to be logged in!')
          },
          removeMaintenance: async (parent, {carId, type}, context)=>{
            if(context.user){
                const updateCar = await Car.findOneAndUpdate(
                    {_id: carId},
                    {$pull: {maintenance: type}},
                    {new: true}
                );
                return updateCar;
            }
            throw new AuthenticationError('You need to be logged in!')
          },
    }
};

module.exports = resolvers;