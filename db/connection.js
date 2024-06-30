const mysql=require('mysql2');

const connection=mysql.createConnection({
 host:process.env.DATABASE_HOST,
 user:process.env.DATABASE_USER,
 password:process.env.DATABASE_PASS,
 database:process.env.DATABASE
});


  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });



const createCardQuery = `
CREATE TABLE Card (
  card_id INT PRIMARY KEY,
  card_type VARCHAR(20),  -- Type of card (Chance or Community Chest)
  description TEXT,       -- Description of the card's effect
  action_type VARCHAR(20), -- Type of action triggered by the card (e.g., Move, Collect, Pay)
  action_value INT        -- Value associated with the action (e.g., number of spaces to move, amount to collect/pay)
);

`;

  connection.query(createCardQuery, (error,results)=>{
    if(error){
        console.error('Error creating in card table;',error);
    }
    else{
        console.log('card Table created or already exists');
      }
});

module.exports=connection;