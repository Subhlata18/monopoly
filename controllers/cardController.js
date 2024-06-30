const cardModel = require('../models/cardModel');
const db=require('../db/connection');




const drawChanceCard = async (req, res) => {
    const drawnCard = chanceDeck.drawCard(); // Assuming chanceDeck is an instance of MonopolyDeck containing Chance cards
    executeCardAction(drawnCard, req, res);
  };

  



  const drawCommunityChestCard = async (req, res) => {
    const drawnCard = communityChestDeck.drawCard(); // Assuming communityChestDeck is an instance of MonopolyDeck containing Community Chest cards
    executeCardAction(drawnCard, req, res);
  };

  
  const executeCardAction = async (card, req, res) => {
    switch (card.type) {
      case 'Chance':
        // Execute Chance card action
        break;
      case 'Community Chest':
        // Execute Community Chest card action
        break;
      default:
        // Handle other types of cards, if needed
        break;
    }
    res.status(200).json({ success: true, card: card });
  };

  








  const shuffleChanceDeck = async (req, res) => {
    chanceDeck.shuffle();
    res.status(200).json({ success: true, message: 'Chance deck shuffled successfully' });
  };
  
  const shuffleCommunityChestDeck = async (req, res) => {
    communityChestDeck.shuffle();
    res.status(200).json({ success: true, message: 'Community Chest deck shuffled successfully' });
  };

  





  const returnCardToDeck = async (req, res) => {
    const card = req.body.card; // Assuming the card to return is sent in the request body
    if (card.type === 'Chance') {
      chanceDeck.addCard(card);
    } else if (card.type === 'Community Chest') {
      communityChestDeck.addCard(card);
    } else {
      res.status(400).json({ success: false, message: 'Invalid card type' });
      return;
    }
    res.status(200).json({ success: true, message: 'Card returned to deck successfully' });
  };
  






  module.exports = {
    drawChanceCard,
    drawCommunityChestCard,
    executeCardAction,
    shuffleChanceDeck,
    shuffleCommunityChestDeck,
    returnCardToDeck
    
  };