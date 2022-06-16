const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')

//@description  GetGOals
//@route Get/api/goals
//@access private

const getGoals = asyncHandler(async (req,res) =>{
    const goals = await Goal.find()
    res.status(200).json(goals)
})

//@description  SetGOal
//@route Post/api/goals
//@access private

const setGoal = asyncHandler(async (req,res) =>{

    if(!req.body.text){
        res.status(400)
        throw new Error('please add text field') 
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})


//@description  UpdateGOal
//@route Put/api/goals/:id
//@access private

const updateGoal = asyncHandler(async (req,res) =>{

    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id , req.body,{
        new:true
    })
    res.status(200).json(updatedGoal)
})


//@description  deleteGOal
//@route delete/api/goals/:id
//@access private

const deleteGoal = asyncHandler(async (req,res) =>{
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }
   await goal.remove()
    res.status(200).json({id:req.params.id})
})



module.exports ={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}