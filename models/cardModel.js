const db = require('../db/connection');
const ErrorHandler= require('../utils/errorhandler');









const drawCommunityChestCard = async () => {
    try {
      const [rows, fields] = await db.promise().query('SELECT * FROM community_chest_cards');
  
      if (rows && rows.length > 0) {
        return rows; // Return the Community Chest cards retrieved from the database
      } else {
        return null; // If no Community Chest cards found in the database
      }
    } catch (error) {
      console.log(error);
      throw new ErrorHandler('Internal Server Error', 500);
    }
  };
  


  const drawChanceCard= async () => {
    try {
      const [rows, fields] = await db.promise().query('SELECT * FROM chance_cards');
  
      if (rows && rows.length > 0) {
        return rows; // Return the Chance cards retrieved from the database
      } else {
        return null; // If no Chance cards found in the database
      }
    } catch (error) {
      console.log(error);
      throw new ErrorHandler('Internal Server Error', 500);
    }
  };
  









const executeCardAction = async (cardId, player, next) => {
    try {
        // Assuming you have a database connection object named db
        const [card] = await db.promise().query('SELECT * FROM cards WHERE card_id = ?', [cardId]);
        
        if (!card || !card.length) {
            // If card not found, return an error
            return next(new ErrorHandler('Card not found', 404));
        }

        const { description, action_type, action_value } = card[0];

        switch (action_type) {
            case 'Move':
                player.move(action_value);
                break;
            case 'Collect':
                player.collect(action_value);
                break;
            case 'Pay':
                player.pay(action_value);
                break;
            // Add more action types as needed
            default:
                // If action type is not recognized, return an error
                return next(new ErrorHandler('Invalid action type', 400));
        }

        return description; // Return description of the executed action
    } catch (error) {
        console.log(error);
        // Assuming you have an error handler named ErrorHandler
        return next(new ErrorHandler(error.message, 500));
    }
}



module.exports={
    drawChanceCard,
    drawCommunityChestCard,
    executeCardAction
  };
