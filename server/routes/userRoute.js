import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/userModel.js';

const UserRouter = express.Router();

//register
UserRouter.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        userauth: req.body.userauth,
        password: bcrypt.hashSync(req.body.password),
    });
    const user = await newUser.save();
    res.send({
        _id: user._id,
        username: user.username,
        userauth: user.userauth,
    });
});

//login
UserRouter.post('/login', async(req, res) => {
    const user = await User.findOne({userauth: req.body.userauth});

    //if user exists
    if(user) {
        //for hash password
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                username: user.username,
                userauth: user.userauth,
            });
        }
    }
});



//get a user
UserRouter.get('/:id', async(req, res) => {
    try {

        const user = await User.findById(req.params.id);
        if(user) {
            res.send(user);
        } else {
            res.status(404).send({message: "User not found!"});
        }

    } catch(error) {
        res.status(500).json(error);
    }
});


//get all users
UserRouter.get("/", async(req, res) => {
    const users = await User.find();
    res.send(users);
});

  //update user
UserRouter.put("/update/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

export default UserRouter;