const mySeeder = `
INSERT INTO users(
  account_number,
  first_name,
  last_name,
  account_balance
)
VALUES
  (
    '2011513330',
    'Jackson',
    'Milan',
    '5000'
  ),
  (
    '2011513331',
    'Kate',
    'Wiki',
    '4000'
  );

INSERT INTO operations(
  name
)
VALUES
    (
      'Bought Stocks'       
    ),
    (
      'Sold Stocks'       
    ),
	  (
      'Bought Shares'       
    ),
	  (
      'Sold Shares'       
    ),
	  (
      'Bought Bonds'       
    ),
    (
      'Sold Bonds'       
    ),
	  (
      'Lent Money'       
    ),
	  (
      'Borrowed Money'       
    );

INSERT INTO transaction_types(
    name
)
VALUES
    (
      'Credit'       
    ),
    (
      'Debit'       
    );
INSERT INTO user_transactions(
    user_id,
    operation_id,
    transaction_type_id,
    amount,
    initial_balance,
    destination_account_number,
    created_on
  )
VALUES
    (
      1,
      1,
      2,
      100,
      5000,
      '2011513331',
      '2022-01-01 00:00:00.000'
    ),
    (
      1,
      3,
      2,
      150,
      4900,
      '2011513331',
      '2022-01-01 00:00:00.000'
    ),
    (
      1,
      2,
      1,
      100,
      4750,
      '2011513331',
      '2022-01-01 00:00:00.000'
    ),
    (
      1,
      5,
      2,
      50,
      4850,
      '2011513331',
      '2022-01-03 00:00:00.000'
    ),
    (
      1,
      3,
      2,
      50,
      4800,
      '2011513331',
      '2022-04-03 00:00:00.000'
    ),
    (
      2,
      1,
      2,
      100,
      5000,
      '2011513330',
      '2022-01-01 00:00:00.000'
    ),
    (
      2,
      3,
      2,
      150,
      4900,
      '2011513330',
      '2022-01-01 00:00:00.000'
    ),
    (
      2,
      2,
      1,
      100,
      4750,
      '2011513330',
      '2022-01-01 00:00:00.000'
      ),
    (
      2,
      5,
      2,
      50,
      4850,
      '2011513330',
      '2022-01-03 00:00:00.000'
    ),
    (
      2,
      3,
      2,
      50,
      4800,
      '2011513330',
      '2022-04-03 00:00:00.000'
    );
`;

export default mySeeder;