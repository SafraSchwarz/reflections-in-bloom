CREATE TABLE floral_products (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    event VARCHAR(255),
    season VARCHAR(255)
);