const User=require('../Model/Client')
const Movie = require('../Model/Movie')
const Theater = require('../Model/Theater')
const SeaTs=require('../Model/Seat')

exports.userhome=async (req,res)=>{
    let token=req.cookies.token
    let curuser=token.user
    let data=await Movie.find()
    let theater=await Theater.find()
    return res.render('userviewmovie',{curuser,data,theater})
}
exports.userprofile=async (req,res)=>{
    let token=req.cookies.token
    let curuser=token.user
    let currentadmin=await User.find({username:curuser})
    return res.render('userviewprofile',{currentadmin,curuser})
}

exports.updateprofile=async (req,res)=>{
    
    let {uname,uemail,password,admin,uimage}=req.body
    let updatedata=await User.findOne({id:admin})
    updatedata.username=uname
    updatedata.email=uemail
    updatedata.password=password
    updatedata.userimage=uimage

    await updatedata.save()
    return res.redirect('/login')
}
exports.movietheater=async (req,res)=>{
    let {mname}=req.params
    let token=req.cookies.token
    let curuser=token.user
    let theater=await Theater.find({mname:mname})    
    res.render('userviewtheater',{theater,curuser})
}

exports.booktickets=async (req,res)=>{
    let token=req.cookies.token
    let curuser=token.user
    let {mname,thname,thtime,thseats}=req.params
    let tickets=await Theater.find({thtime:thtime,mname:mname,thname:thname,thseats:thseats})
    let a=thseats
    
    res.render('userbookseats',{tickets,curuser,a})   
}

exports.confrimseats=async(req,res)=>{
    let token=req.cookies.token
    let curuser=token.user
    let {mname,thname,thtime,thseats}=req.params
    let tickets=await Theater.find({thtime:thtime,mname:mname,thname:thname,thseats:thseats})
    let a=thseats
    let{teatername,seatsbooked,username,moviename,time}=req.body
    let id=`${Date.now()}`
    await SeaTs.create({
        id:id,
        thname:teatername,
        username:username,
        seatsbooked:seatsbooked,
        mname:moviename,
        thtime:time,

    })
    
    let c=3
    a-c
    console.log(a);
    
    return res.render('userbookseats',{tickets,curuser,a})
}

// exports.userconfirmedseats=async(req,res)=>{
//     let token=req.cookies.token
//     let curuser=token.user
//     let {mname,thname,thtime,thseats}=req.params
//     let tickets=await Theater.find({thtime:thtime,mname:mname,thname:thname,thseats:thseats})
//     let a=thseats
    
//     bookedseats=await SeaTs.find({thname:thname,username:curuser,mname:mname})
//     let b=bookedseats[0]
//     console.log(b)
    
//     return res.render('userconfirmedseats',{tickets,a,curuser})
// }