import { Request, Response } from 'express';
import { sql, connectionString} from '../db'
import logger from '../logger';

/**
    * Balance Account
    * @param {Request} req - Response object.
    * @param {Response} res - The payload.
    * @memberof StarShipController
    * @returns {JSON} - A JSON success response.
    *
*/

export const handleTransaction = async (req: Request, res: Response) => {
    try {
        const {accountNumber, reportCategory, reportDate1, reportDate2}  = req.body
        let query = `SELECT u.account_number, u.id, t.user_id, t.operation_id, t.transaction_type_id, t.amount,
                    t.initial_balance, t.destination_account_number, t.created_on, o.name AS transaction_name
                    FROM user_transactions t RIGHT JOIN users u ON u.id=t.user_id`;
                    if(reportCategory === 'daily'){
                        query+=` AND CAST(t.created_on as DATE) = '${reportDate1}'`
                    }else{
                        query+=` AND t.created_on >= '${reportDate1}' AND t.created_on <= '${reportDate2}' `
                    }
                    query+=` AND u.account_number=${accountNumber} JOIN operations o ON t.operation_id=o.id`       

        sql.query(connectionString, query, (err, result) => {
          if(err){
              return logger.error(err)
          }  
          if(result && result.length>0){
            let startingBalance = result[0].initial_balance;
            let transactionDetails:Array<object> = [];
            result.forEach(element => {
                if(element.transaction_type_id ===1){
                   startingBalance+=element.amount
                }else{
                    startingBalance-=element.amount
                }
                let trans = {
                    destinationBankAccountNumber:element.destination_account_number,
                    transactionAmount:element.amount,
                    activityPerformed:element.transaction_name,
                    datePerformed:element.created_on,
                }
                transactionDetails.push(trans)
            });         
            return res.status(200).json({
                status: "success",
                data: {
                    startingBalance:result[0].initial_balance,
                    endingBalance:startingBalance,
                    transactionDetails
                }
            });
          }else{
            return res.status(404).json({
                status: "success",
                message:"No record found"
            });
          }     
        });       
    } catch (error) {
        return res.status(500).json({
            status: "500 Internal server error",
            error: "Error adding StarShip",
        });
    }
}
