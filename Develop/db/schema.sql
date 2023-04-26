-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- create catergory table
CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT,
    category_name STRING NOT NULL,
    PRIMARY KEY (id)
);

-- create product table
CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    product_name STRING NOT NULL,
    price DECIMAL NOT NULL, -- validate it is a decimal
    stock INT NOT NULL, -- validate numeric
    -- set default of category_id to default 10
    category_id INT DEFAULT 10,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);


-- create tag table
CREATE TABLE tag (
    id INT NOT NULL AUTO_INCREMENT,
    tag_name STRING NOT NULL,
    PRIMARY KEY (id)
);

-- create product tag table
CREATE TABLE product_tag (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
);

