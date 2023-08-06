const asyncHandler = require("express-async-handler");

// @desc  Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Get goals',
    })
})

// @desc  Set a goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please provide a text')
    }

    res.status(200).json({
        message: "Create a goal",
    });
})

// @desc  Update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Update a goal " + req.params.id,
    });
})

// @desc  Delete a goal
// @route DELETE /api/goals/"id"
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Delete a goal " + req.params.id,
    });
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}