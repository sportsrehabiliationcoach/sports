
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const PORT = 5000;
const cors = require('cors');

mongoose.connect('mongodb://sports:website@ac-rgbfybh-shard-00-00.orrqiyt.mongodb.net:27017,ac-rgbfybh-shard-00-01.orrqiyt.mongodb.net:27017,ac-rgbfybh-shard-00-02.orrqiyt.mongodb.net:27017/sportsWebsite?ssl=true&replicaSet=atlas-x0h3so-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());

app.post('/api/signin', async (req, res) => {
    const { username, password } = req.body;

    if (password.length < 5) {
        return res.status(400).json({ success: false, message: "Password must be at least 5 characters long" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, password: hashedPassword });
        return res.json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "An error occurred while signing in" });
    }
});

app.post('/api/login',async (req,res)=>{
    const {username,password} = req.body;
    if ((!username && !password) && (!username || !password)){
        return res.status(400).json({ success: false, message: "Enter credentials" });
    }
    try{
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({success:false,message:'Invalid credentials'})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
        return res.json({success:true});
    }catch(error){
        console.log(error);
        return res.status(500).json({success:false,message:"Error occured while loggin in"});

    }

    
    
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



































































// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const User = require('./models/User');
// const bcrypt = require('bcrypt');
// const PORT = 5000;
// const cors = require('cors')

// mongoose.connect('mongodb://sports:website@ac-rgbfybh-shard-00-00.orrqiyt.mongodb.net:27017,ac-rgbfybh-shard-00-01.orrqiyt.mongodb.net:27017,ac-rgbfybh-shard-00-02.orrqiyt.mongodb.net:27017/sportsWebsite?ssl=true&replicaSet=atlas-x0h3so-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });


// app.use(express.json());
// app.use(cors());

// app.post('/api/signin', async (req, res) => {
//     const { username, password } = req.body;
//     if (!username) {
//         return res.status(400).json({ success: false, message: "Enter the username" });
//         if (!password) {
//             return res.status(400).json({ success: false, message: "Enter the password!" });
//         }
//         else if (password.length < 5) {
//             return res.status(400).json({ success: false, message: "Password must be at least 5 characters long" });
//         }

//     }
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await User.create({ username, password: hashedPassword });
//         return res.json({ success: true });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "An error occurred while signing in" });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
