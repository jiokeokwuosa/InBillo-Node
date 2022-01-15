import { Request, Response, NextFunction } from 'express';

/**
    * Validation transaction payload
    * @param {Request} req - Response object.
    * @param {Response} res - The payload.
    * @memberof StarShipController
    * @returns {JSON} - A JSON success response.
    *
*/
export const validateRequestPayload = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validationMessages:Array<string> = [];
        const transactionCategories:Array<string>  = ['daily','range'];
        const availableAccounts:Array<string>  = ['2011513330','2011513331'];
        
        // validate account number
        if(!req.body.accountNumber){
            validationMessages.push('Account number is required')
        }else if(req.body.accountNumber && !availableAccounts.includes(req.body.accountNumber)){
            validationMessages.push('Account number does not exist, Please use 2011513330 or 2011513331 to test')
        }

        // validate category
        if(!req.body.reportCategory){
            validationMessages.push('Report category is required')
        }else if(req.body.reportCategory && !transactionCategories.includes(req.body.reportCategory)){
            validationMessages.push('Report category does not exist. Try using \'daily or range\'')
        }

        // validate datetime
        if(!req.body.reportDate1){
            validationMessages.push('Report date 1 is required (eg. 2022-01-03)')
        }
        if(req.body.reportCategory === 'range' && !req.body.reportDate2){
            validationMessages.push('Report date 2 is required (eg. 2022-01-03)')
        }

        if(validationMessages.length>0){
            return res.status(400).json({
                status: "error",
                message: validationMessages
            });
        }        
        return next();
    } catch (error) {
        return res.status(500).json({
            status: "500 Internal server error",
            error: "Error validating payload data",
        });
    }
}
