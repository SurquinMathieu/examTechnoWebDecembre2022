let express = require('express');
let router = express.Router();

let travelerController = require('./controllers/travelerController')
router.get('/',travelerController.showReservation) //page de réservation
router.post('/registerTravelers',travelerController.showRegisterTraveler) //page encodage des voyageurs
router.post('/validation',travelerController.showFinalReservation) //page de validation des réservations
router.get('/confirmation',travelerController.confirmation)
module.exports = router;