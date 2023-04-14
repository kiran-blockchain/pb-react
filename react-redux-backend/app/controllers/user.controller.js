const { user } = require("../models");
const db = require("../models");
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = async(req, res) => {
  let usersList = await db.user.find({});
  res.json(usersList);
  //res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
exports.updateUserDetails = async (req,res)=>{
  if(req.body.email){
    try{
    let result = await db.user.updateOne({_id:req.userId},{"$set":{
      email:req.body.email
    }});
    res.json({message:"Updated Data successfully"});
  }
  catch(ex){
    res.json({message:"Updated Data successfully"});
  }

  }else{
    res.json({message:"Email is not there"});
  }
}
exports.deleteUser = async (req,res)=>{
  if(req.body.username){
    try{
    let result = await db.user.deleteOne({_id:req.body.username});
    res.json({message:"User Deleted Successfully"});
  }
  catch(ex){
    res.json({message:"Updated Data successfully"});
  }

  }else{
    res.json({message:"Email is not there"});
  }
}