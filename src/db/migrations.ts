import { sql, connectionString } from './index';
import logger from './../logger'
import seeders from './seeders';

const migrations = async () => {
    const tables = `
    DROP TABLE IF EXISTS user_transactions;
	DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS operations;
    DROP TABLE IF EXISTS transaction_types;	
  
    CREATE TABLE
        users(
            id int IDENTITY(1,1) PRIMARY KEY,
            account_number VARCHAR(10) NOT NULL UNIQUE,
            first_name VARCHAR(30) NOT NULL,
            last_name VARCHAR(30) NOT NULL,
            account_balance VARCHAR(10) NOT NULL,       
            created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        );     
    CREATE TABLE
        operations(
            id int IDENTITY(1,1) PRIMARY KEY,
            name VARCHAR(15) NOT NULL,
            created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    CREATE TABLE
        transaction_types(
            id int IDENTITY(1,1) PRIMARY KEY,
            name VARCHAR(15) NOT NULL,
            created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    CREATE TABLE
        user_transactions(
            id int IDENTITY(1,1) PRIMARY KEY,
            user_id INT NOT NULL,
            operation_id INT NOT NULL,
            transaction_type_id INT NOT NULL,
            amount INT NOT NULL,
            initial_balance INT NOT NULL,
            destination_account_number INT NOT NULL,
            created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (operation_id) REFERENCES operations (id) ON DELETE CASCADE,   
            FOREIGN KEY (transaction_type_id) REFERENCES transaction_types (id) ON DELETE CASCADE,          
        );`; 
    try {
        sql.query(connectionString, tables, (err) => {
            if(!err){
                logger.info('Tables Created Successfully');
                sql.query(connectionString, seeders, (err) => {                        
                });    
            }else{
                logger.error('Error occured while creating tables', err);
            }            
        });    
    } catch (err) {

    }
};

migrations();