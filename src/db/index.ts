import { SqlClient } from "msnodesqlv8";
import { config } from 'dotenv';

config();

export const sql: SqlClient = require("msnodesqlv8");
export const connectionString = `server=.;Database=${process.env.database};Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}`;


