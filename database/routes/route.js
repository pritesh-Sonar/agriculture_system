const express  = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Crop =  require("../modules/Detail")

const Prod = require("../modules/products")

const Contact = require("../modules/contact")

const Register = require("../modules/register")

const Updates = require('../modules/updates')

const Order = require('../modules/Form')

const routes = express.Router()


// routes.get("/",async (req,res)=>{
//  const details = await Detail.find({_id:"65af8f44453c89d5bfa9c55c"})
//  const product = await Prod.find({Name:"CEAXOR"})
//     res.render("start",{
//         details:details,
//         product:product,
//     })    
// })

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json({ extended: true }));

//all get routes

routes.get("/",async (req,res)=>{
    res.render("start")         
})

routes.get('/login',(req,res)=>{
    res.render("register")
})

routes.get('/register',(req,res)=>{
    res.render("register")
})

routes.get("/login/landing",(req,res)=>{
    res.render("landing");
})

routes.get("/login/landing/prodDetail",(req,res)=>{
    res.render("productDetail")
})

routes.get("/login/landing/experties",(req,res)=>{
    res.render("experties")
})

routes.get("/login/landing/products",(req,res)=>{
    res.render("products")
})

routes.get("/login/landing/gallary",(req,res)=>{
    res.render("photoGallary")
})

routes.get("/login/landing/ChatBot",(req,res)=>{
    res.render("chatbot")
})

routes.get("/login/landing/Weather",(req,res)=>{
    res.render("wether")
})

routes.get("/login/landing/products/details",async (req,res)=>{
    res.render("details")
})

routes.get("/login/landing/help",(req,res)=>{
    res.render("help")
})

// routes.get("/login/landing/cart",(req,res)=>{
//     res.render("cart")
// })

routes.get("/form",(req,res)=>{
    res.render('form');
})

// routes.get("/html/product_details.html",(req,res)=>{
//     res.render("productDetail")
// })

routes.get("/login/landing/productDetail",(req,res)=>{
    res.render("productDetail")
})

routes.get("/contact",(req,res)=>{
    res.render("contact")
})

routes.get('/login/landing/cabage',async (req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Cabbage"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
})
})

routes.get('/login/landing/onion',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Onion"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })
    
})

routes.get('/login/landing/cotton',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Cotton"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/watermelon',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Watermelon"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/tomato',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Tomato"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/pomogranet',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Pomegranate"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/grapes',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Grapes"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/corn',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Maize"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/sugarcane',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Sugarcane"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/garlic',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Garlic"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/bringel',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Brinjal"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/potato',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Potato"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/chilly',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Chilli"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/capsicum',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Capsicum"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/cucumber',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Cucumber"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get('/login/landing/carrot',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Carrot"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.get("/form/cart",(req,res)=>{
    const myData = new Order(req.body);
    myData.save().then(()=>{
        res.send("Order is placed")
    }).catch(()=>{
        res.send("Item is not saved")
    });

})


routes.get("/login/landing/changeEmail",(req,res)=>{
    res.render("changeEmail")
})

routes.get("/login/landing/changeNumber",(req,res)=>{
    res.render("changeNumber")
})

routes.get("/login/landing/search",(req,res)=>{
    res.render("search")
})

routes.get("/login/landing/cart", async(req,res)=>{
    const myData = await Order.find({email:"priteshs2003@gmail.com"});
        res.render("cart",{
            myData:myData
    })
})

// routes.get("/landing/cart/data",async(req,res)=>{
//     const myData = await Order.find({},{email:1})
//     const userUsername = await Register.find({},{email:1}); 
//     //  console.log(userUsername);
//     if(myData === userUsername){
//         res.render("cart",{
//             myData:myData
//         })
//     }
// })



//all post routes

// routes.post("/login",(req,res)=>{
//     res.render("login")
// })



routes.post('/login/landing', (req,res)=>{
    res.render("landing")
})

routes.post("/login/landing/experties",(req,res)=>{
    res.render("experties")
})

routes.post("/login/landing/products",(req,res)=>{
    res.render("products")
})

routes.post("/login/landing/gallary",(req,res)=>{
    res.render("photoGallary")
})

routes.post("/login/landing/ChatBot",(req,res)=>{
    res.render("chatbot")
})

routes.post("/login/landing/Weather",(req,res)=>{
    res.render("wether")
})

// routes.post("/landing/ProdDetail",async (req,res)=>{
//     const product = await Prod.find({})
//     res.render("productDetail",product[0])
// })

routes.post("/login/landing/prodDetail",(req,res)=>{
    res.render("productDetail")
})

routes.post("/login/landing/products/details",(req,res)=>{
    res.render("details")
})
routes.post("login/landing/help",(req,res)=>{
    res.render("help")
})



routes.post("/login/landing/productDetail",(req,res)=>{
    res.render("productDetail")
})

routes.post('/login/landing/search',(req,res)=>{
    res.render("search")
})



routes.post("/contact",async (req,res)=>{
    const myData = new Contact(req.body);
    myData.save().then(()=>{
        res.render("contact")
    }).catch(()=>{
        res.send("Item is not saved")
    });
})

routes.post("/register", async (req, res) => {
    try {
      const password = req.body.password;
      const confirmpassword = req.body.confirmpassword;
  
      if (password === confirmpassword) {
        const registerUser = new Register({
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          password: password,
          confirmpassword: confirmpassword,
        });
  
        const registered = await registerUser.save();
        res.status(201).render("register");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  });

  routes.post("/login", async(req,res) => {
    try{
  
      const username =req.body.username;
      const password =req.body.password;
      const userUsername = await Register.findOne({username:username});
      const UpdateData = await Updates.findOne({})
  
     if(userUsername.password === password) {
      res.status(201).render("landing",{
        userUsername:userUsername,
        UpdateData:UpdateData
      });
     }else{
      res.send("password are not matching");
     }
    }catch (error) {
      res.status(400).send("invalid username or password ")
    }
  })

routes.post("/form",(req,res)=>{
    res.render("form")
})


routes.post("/form/cart",async (req,res)=>{
    const myData = new Order(req.body);
    myData.save().then(()=>{
        res.send("Order is placed")
    }).catch(()=>{
        res.send("Item is not saved")
    });

})

routes.post('/login/landing/cabage',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Cabbage"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })   
})

routes.post('/login/landing/onion',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Onion"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/cotton',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Cotton"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/watermelon',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Watermelon"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/tomato',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Tomato"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/pomogranet',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Pomegranate"})
    // console.log(CropInfo);
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/grapes',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Grapes"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})


routes.post('/login/landing/corn',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Maize"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/sugarcane',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Sugarcane"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/garlic',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Garlic"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/bringel',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Brinjal"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/potato',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Potato"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/chilly',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Chilli"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/capsicum',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Capsicum"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/cucumber',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Cucumber"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post('/login/landing/carrot',async(req,res)=>{
    const CropInfo = await Crop.findOne({Name:"Carrot"})
    res.render("Crops",{
        CropInfo:CropInfo
    })  
})

routes.post("/login/landing/changeEmail",(req,res)=>{
    res.render("changeEmail")
})

routes.post("/login/landing/changeNumber",(req,res)=>{
    res.render("changeNumber")
})

routes.post("/login/landing/cart",async (req,res)=>{
    const myData = await Order.find({email:"priteshs2003@gmail.com"});
        res.render("cart",{
            myData:myData
        })
})




module.exports=routes
