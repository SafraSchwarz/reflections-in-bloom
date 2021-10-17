CREATE TABLE floral_products (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    event VARCHAR(255),
    season VARCHAR(255),
    photo_url VARCHAR(255),
    size VARCHAR(255)
);