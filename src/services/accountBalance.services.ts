import  {sql, connectionString} from '../db'
import logger from '../logger';

export const testing = async() => {
   try{
      const query = "SELECT * FROM Persons";
      sql.query(connectionString, query, (err, rows) => {
         logger.info(rows);
      });     
   }catch(err){
      logger.error(err)
   } 
}
