
## Required Features
 1. Could you please design SQL data structures/schema which:
- ensures ability to manage and log all financial operations made by inBillo users,
- ensures possibility of bank account balancing for all inBillo users,
 2. Could you design and implement an algorithm please, which ensures proper bank account balance, which is performed after each financial period ends (i.e. at the end of the day)?
 

## Additional Features
-  Unit test
-  
## Technologies

- Node JS
- Express
- Typescript
- Mochai
- Chai
- SQL

## Requirements and Installation

To install and run this project you would need to have installed:
- Node Js
- Git
- SQL Server

To run:
```
$ git clone https://github.com/jiokeokwuosa/InBillo-Node.git
$ cd InBillo-Node
$ npm install
$ create a database with the name "inbillo" in your SQL server and put the name in your env file as showed below
$ npm run migration  //This is important
$ npm run dev
```

## Testing
```
$ npm test (not fully done)
```

## Pivotal Tracker stories

None

## Template UI


## API

The API is currently in version 1 (v1) and can be accessed locally via [http://localhost:5000/api/v1](http://localhost:5000/api/vi) -->base URL

## API Documentation Link

https://github.com/jiokeokwuosa/InBillo-Node/edit/main/README.md


## API Endpoints
# you will need to pass a token in your header before you can make a successfully API call, the value of the token is "inbillo"

eg of the expected request body{
    accountNumber:2011513330, // you can equally select
    reportCategory:'daily', // can either be daily or range
    reportDate1:'2022-01-01' // this is enough if you select daily as the reportCategory
    reportDate2:'2022-01-04' // this is required if you select range as the reportCategory
}

Please you can check out the seeders file to have a clue of the kind of data available



| Endpoint                                         | Functionality                            |
| ------------------------------------------------ | -----------------------------------------|
| POST /baseURL/transaction/           | Perform Account Balancing                      |




## Author

Okwuosa Chijioke (Okwuosachijioke@gmail.com)

## License

This is licensed for your use, modification and distribution under the [MIT license.](https://opensource.org/licenses/MIT)

## My Env Variables
NODE_ENV=development
PORT=5000
Database=inbillo //Please create this database
