
const { CredentialsModel}=require("../model/UserCredentials")
const contactDetails=async (req,res)=>{
    const result=await contactsModel.find({})
    console.log(result)
    res.send(JSON.stringify({
        status:"success",
        data:result
    }))
 }

 const getUser=async (req,res)=>{
    const ipCname=req.query.cname
    const result=await contactsModel.find({cname:ipCname})
    res.send(JSON.stringify({
        status:"success",
        data:result
    }))
 }

 const createUser=async (req,res)=>{
    const data=req.body
    const newData=new contactsModel(data)
    const result=await newData.save()
    console.log(result)
    if(result._id){
        res.send({
            status:"success",
            data:result
        })
    }
 }

 const putUser=async (req,res)=>{
    const data=req.body
    // const result=await contactsModel.updateOne({cname:data.cname},data)
    const result=await contactsModel.deleteOne({cname:data.cname})
    const  replacedData=new contactsModel(data)
    const insert=await replacedData.save()
    console.log(insert)
    res.send("dummy")
 }

 const patchUser=async (req,res)=>{
    const data=req.body
    const result=await contactsModel.updateOne({cname:data.cname},data)
    res.send({
        status:"successfully updated",
        data:result
    })
 }
const patchUserExp=async (req,res)=>{
const data=req.query
console.log(data.caddress)
const result=await contactsModel.updateMany({caddress:data.caddress},{cexp:"1 year"})
console.log(result)
res.send({
    status:"success",
    data:result
})
}

const deleteUser=async (req,res)=>{
const data=req.params
const result=await contactsModel.deleteOne({cname:data.username})
res.send({
    status:"deleted",
    data:result
})
}
 
 module.exports={
    contactDetails,getUser,createUser,putUser,patchUserExp,deleteUser
 }
 