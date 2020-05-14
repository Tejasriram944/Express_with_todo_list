const express = require('express');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Todolist = require('../models/Todolist');

const router = express.Router();

// @route   GET api/todolist
// @desc    Get list of tasks
// @access  private
router.get('/', auth, async (req, res) => {
  try {
    const todolist = await Todolist.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(todolist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});

// @route   POST api/todolist
// @desc    Create list of task
// @access  private
router.post(
  '/',
  [auth, [check('taskname', 'Name is requried').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { taskname, description, type } = req.body;
    try {
      const newTask = new Todolist({
        taskname,
        description,
        type,
        user: req.user.id,
      });
      const todolist = await newTask.save();
      res.json(todolist);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUST api/todolist
// @desc    Update list of task
// @access  private
router.put('/:id', auth, async (req, res) => {
  const { taskname, description, type } = req.body;

  // build todolist object
  const todolistFields = {};
  if (taskname) todolistFields.taskname = taskname;
  if (description) todolistFields.description = description;
  if (type) todolistFields.type = type;

  try {
    let todolist = await Todolist.findById(req.params.id);
    if (!todolist) return res.status(404).json({ msg: 'Todolist not found' });

    // make sure user own contacts
    if (todolist.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' });
    }
    todolist = await Todolist.findByIdAndUpdate(
      req.params.id,
      { $set: todolistFields },
      { new: true }
    );
    res.json(todolist);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/todolist
// @desc    Delete list of task
// @access  private
router.delete('/:id', auth, async (req, res) => {
  try {
    let todolist = await Todolist.findById(req.params.id);
    if (!todolist) return res.status(404).json({ msg: 'Todolist not found' });

    // make sure user own contacts
    if (todolist.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' });
    }
    await Todolist.findByIdAndRemove(req.params.id);
    res.json({ msg: 'One Task is Removed!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
