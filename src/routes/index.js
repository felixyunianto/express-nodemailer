const mainRouter = require('express').Router();
const mailController = require('../controllers/mailController');

mainRouter.post('/send-mail', mailController.sendMail);

module.exports = mainRouter;