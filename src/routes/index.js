const mainRouter = require('express').Router();
const mailController = require('../controllers/mailController');
const pdfController = require('../controllers/pdfController');

mainRouter.get('/pdf', pdfController.generatedPDF);
mainRouter.post('/send-mail', mailController.sendMail);

module.exports = mainRouter;