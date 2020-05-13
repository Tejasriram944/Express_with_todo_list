const express = require('express');

const router = express.Router();

// @route   GET api/todolist
// @desc    Get list of tasks
// @access  private
router.get('/', (req, res) => res.send('Get list of tasks'));

// @route   POST api/todolist
// @desc    Create list of task
// @access  private
router.post('/', (req, res) => res.send('Create list of task'));

// @route   PUST api/todolist
// @desc    Update list of task
// @access  private
router.put('/:id', (req, res) => res.send('Update list of task'));

// @route   DELETE api/todolist
// @desc    Delete list of task
// @access  private
router.delete('/:id', (req, res) => res.send('Delete list of task'));

module.exports = router;
