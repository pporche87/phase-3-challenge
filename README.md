# phase-3-challenge
## Patrick Porche

### General Requirements

- [x] 10: Solution is in a public repository called `phase-3-challenge`.
- [x] 10: Solution repository has 3 folders: `part-1`, `part-2`, and `part-3`.
- [x] 10: Solution repository includes a `.gitignore` ignoring files that don't shouldn't be committed (e.g. `node_modules/`, `*.log` files).
- [x] 10: Parts 1 and 2 have their own `package.json` specifying dependencies.
- [x] 20: Git history shows frequent commits.

#### Part 1: Simple web app

Build a very basic web app to perform basic calculations on numbers supplied in the URL.

Use Express. You don't need to use an HTML templater like EJS or Pug, just respond with plain text.

The web server should provide the following routes:

```
/api/supported-operations
/api/square
/api/compute
```
All routes just respond with a JSON response.

Example requests and responses:

```javascript
// First route
request: GET /api/supported-operations
response: {"/": "division",
           "+": "addition",
           "-": "subtraction",
           "\*": "multiplication"}
response content-type: application/json


// Second route
request: GET /api/square?number=10.5
response: {"result": 110.25}
request content type: application/json


// Third route
request: POST /api/compute
request body params: {"operator": "+",
                      "operands": [3,4]}
request content type: application/json
response: {"result": 7}


request: POST /api/compute
request body params: {"operator": "/",
                      "operands": [5,3]}
response: {"result": 1.67}
request content type: application/json


request: POST /api/compute
request body params: {"operator": "?",
                      "operands": [5,3]}
request content type: application/json
response: {"error": "invalid operator ?. Valid operators are /, +, -, *"}
response content type: application/json
response status code: 404
```
Requirements

 - [x] 10: All files are stored under the `part-1/` folder
 - [x] 10: All dependencies are specified in a `package.json` file
 - [x] 10: Web server can be started with `npm start` command
 - [x] 20: GET requests to the `/api/supported-operators` route responds with JSON content, as described in the example above
 - [x] 80: POST requests to the `/api/compute` route add the two numbers provided in the request body and responds with the result. An invalid operator should return a 404.
 - [x] 20: GET requests to the `/api/square` route squares the number provided in the query string variables number.

#### Part 2: Database for grocery store & tests

Build a small PostgreSQL database for a grocery store, then connect and write queries using Node.js. Same idea as in part 3, but focused on the database side.

Design a database to store grocery items, shoppers, and shoppers' orders. Let's call the database grocery_store (so clever, I know).

You'll need to design the schema and write some SQL statements to insert data. Look closely at the requirements to determine how to design your schema.

Use the provided grocery item data to seed your grocery items table, and write some custom insert statements to add 3-5 rows to the shoppers and orders tables and any join tables you may need to connect them all.

Then, use pg-promise and Mocha + Chai to write and test database queries.

Requirements

 - [x] 10: All files are stored under the part-2/ folder
 - [x] 10: Database schema (all CREATE TABLE statements) is defined in a file schema.sql
 - [x] 10: SQL script to insert grocery seed data and load from CSV is created in a file load-data.sql
 - [x] 10: All database query functions are written in a file database.js, and tests for queries are written in a file database_test.js
 - [x] 10: Tests can be run with the command $ npm test

User Stories: Ensure that your schema design can satisfy the following scenarios

 - [x] 10: As a shopper I can fetch all my orders
 - [x] 10: As a shopper I can have multiple items in an order
Implement these functions in database.js using pg-promise to make the following queries:

 - [x] 20: allItems() : Find the IDs, names, prices, and sections for all grocery items
 - [x] 20: itemsInSection(<section>) : Find the IDs and names of all grocery items in the given section
 - [x] 20: cheapItems() : Find the IDs, names, and prices of all grocery items that cost less than $10.00, ordered from lowest to highest price
 - [x] 20: countItemsInSection(<section>) : Get the count of all grocery items in the given section
 - [x] 20: mostRecentOrders() : Find the IDs and order dates for the 10 most recent orders
 - [X] 20: lastShopperName() : Find the shopper's name who made the most recent order
 - [x] 20: orderTotal(<ID>) : Find the sum of all prices for items for a specific order
Write tests with Mocha + Chai in database_test.js that assert:

 - [x] 20: A call to itemsInSection("bulk") returns the items "Flour", "Pasta", and "Rice"
 - [x] 20: A call to cheapItems() returns the item with name "Fish" as the first item and the item with name "Honey" as the last item
 - [x] 20: A call to countItemsInSection("packaged") returns 5

#### Part 3: Web interface for grocery store

Create a front-end only site for an online grocery store where users can choose from a list of items and add them to a cart.

You only need to write HTML, CSS, and JavaScript. No web server is required.

The initial layout has already been provided for you in the grocer.html and grocer.css files. From this base, build the modal and add interactive behavior with JS.

Note that this interface has been intentionally simplified for the purposes of this challenge: for example, when adding multiple items it will just duplicate the same item instead of adding to a quantity.

Requirements

 - [x] 10: All files are stored under the part-3/ folder
 - [x] 20: No third party CSS or JS libraries are used (all code must be written from scratch)
 - [x] 10: HTML, CSS, and JS are separated into their own files.
 - [x] 20: Clicking on a section in the "Sections" sidebar will jump to that section in the page
 - [x] 20: Clicking on "Add to cart" will update the number displayed next to the "Cart" button to show the total number of items in the user's cart
 - [x] 20: Clicking on the "Cart" button will show the cart modal with a list of all items added
 - [x] 20: Clicking on the "Clear" button in the cart modal removes all items from the cart
 - [x] 20: Clicking on the "X" button in the cart modal closes the modal
 - [x] 20: The "Total" in the cart modal shows the calculated sum of all item prices
