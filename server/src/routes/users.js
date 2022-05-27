const {Router} = require('express');
const {updateUser, createUser, getUserById, deleteUser, getUsers} = require('../controllers/user.controller');
const {  checkDuplicateEmailOrDni} = require('../middleware/verifyCreate');
const router = Router();


/* Creating a router object and then using it to define the routes for the API. */
router.get('/all', getUsers);
router.put('/update/:id', updateUser);
router.post('/create',[checkDuplicateEmailOrDni ],createUser);
router.get('/get/:id', getUserById);
router.delete('/delete/:id', deleteUser);




module.exports = router;