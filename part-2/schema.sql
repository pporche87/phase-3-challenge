CREATE TABLE shoppers (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	order_date TIMESTAMP DEFAULT NOW(),
	shopper_id SERIAL REFERENCES shoppers(id)
);

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	price DECIMAL,
	section VARCHAR(255) NOT NULL
);

CREATE TABLE order_items (
	order_id SERIAL REFERENCES orders(id),
	item_id SERIAL REFERENCES items(id)
);
