const express=require('express');
const {authUser, getUserProfile, createUser,updateUserProfile, getUser} =require('../controller/authUserController');
const router=express.Router();
const {protect,admin}=require('../middleware/authMiddleware');

router.route('/').post(createUser).get(protect,admin,getUser);;
router.post('/login',authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);


module.exports=router;
