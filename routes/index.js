var express = require('express');
var router = express.Router();
var mongoose=require('mongoose')
const {UserDetails}=require('../dbSchema')
const {mongodb,MongoClient,dbname,dbUrl}=require('../dbConfig')
/* GET home page. */

mongoose.connect(dbUrl)

router.get('/all', async(req, res,)=> {
try{
  let users=await UserDetails.find()
  res.send({
    statuscode:"200",
    users:users
  })
}


catch(error){
  console.log(error)
  res.send({
    statuscode:500,
    message:"Internal server error",
    error
  })
}
})


router.get('/:id', async(req, res)=> {
  
  try{

    let users = await UserDetails.find({_id:mongodb.ObjectId(req.params.id)})
    res.send({
      statuscode:200,
      users
    });
  }catch(error){
    console.log(error)
    res.send({
      statuscode:500,
      message:"Internal server error",
      error
    })
  }

});


router.post('/add-user', async(req, res,)=> {
  try{
    let users=await UserDetails.create(req.body)
    res.send({
      statuscode:"200",
      message:"User added successfully" ,
      users
    })
  }
  
  catch(error){
    console.log(error)
    res.send({
      statuscode:500,
      message:"Internal server error",
      error
    })
  }
  })

  //login

  
  
router.put('/edit-user/:id', async(req, res,)=> {
  try{
    let users=await UserDetails.updateOne({_id:mongodb.ObjectId(req.params.id)},{$set:req.body})
    res.send({
      statuscode:"200",
      message:"User updated successfully" 
    })
  }
  
  catch(error){
    console.log(error)
    res.send({
      statuscode:500,
      message:"Internal server error",
      error
    })
  }
  })

  
router.delete('/delete-user/:id', async(req, res)=> {
 
  try{
  
    await UserDetails.deleteOne({_id:mongodb.ObjectId(req.params.id)})
    let users = await UserDetails.find().toArray();
    res.send({
      statuscode:200,
      mesaage:"user deleted successfully",
      users
    });
  }catch(error){
    console.log(error)
    res.send({
      statuscode:500,
      message:"Internal server error",
      error
    })
  }
})
module.exports = router;
