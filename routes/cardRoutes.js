const db=require('../db/connection');

const express = require('express');
const cardController = require('../controllers/cardController');
const router = express.Router();







// Route for card drawChanceCard
router.post('/drawChanceCard', cardController.drawChanceCard);

// Route for card drawCommunityChestCard
router.post('/drawCommunityChestCard', cardController.drawCommunityChestCard);

//Route for card executeCardAction
router.post('/executeCardAction ', cardController.executeCardAction );

//Route for  card shuffleChanceDeck 
router.put('/shuffleChanceDeck', cardController.shuffleChanceDeck);

// Route for card shuffleCommunityChestDeck 
router.get('/shuffleCommunityChestDeck ', cardController.shuffleCommunityChestDeck );

// Route for card returnCardToDeck
router.get("/returnCardToDeck ", cardController.returnCardToDeck );




module.exports = router;