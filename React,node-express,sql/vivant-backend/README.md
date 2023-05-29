# Backend - (Node js,Express,Mysql)

Node js and Npm (my system) = 16.16.0/8.11.0
Mysql (my system) = 8.0.30

## Mysql config:- config\db.mysql.js

const pool = mysql.createPool({
connectionLimit: 10,
host: "<server -Host>",
user: "<user Name>",
password: "<Password>",
database: "<Database Name>",
});

## schemas and sample Data (Mysql)

CREATE TABLE users (
`user_id` INT NOT NULL AUTO*INCREMENT,
`name` VARCHAR(100) NOT NULL,
`email` VARCHAR(100) NOT NULL,
`password` VARCHAR(200) NOT NULL,
PRIMARY KEY (`user_id`),
UNIQUE INDEX `sno_UNIQUE` (`user_id` ASC) VISIBLE,
UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
insert into users (name,email,password) values
('Ashok Reddy','test@gmail.com','$2b$10$IMjU1iTS8NJalyDVENC2f.5/OesEafKWII5qWsK3AZWeYGvcMw1HS')
/* password is `Test@123` \_/

CREATE TABLE products (
`product_id` INT NOT NULL AUTO_INCREMENT,
`product_name` VARCHAR(100) NOT NULL,
`image` VARCHAR(200) NOT NULL,
`qunatity` DECIMAL(3) NULL,
`description` TEXT(500) NULL,
`price` INT NULL,
PRIMARY KEY (`product_id`),
UNIQUE INDEX `product_name_UNIQUE` (`product_name` ASC) VISIBLE);

insert into products (product*name,image,qunatity,description,price) values
('Apple iPhone 12 (64GB) - Purple',
'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY218*.jpg',
10,'6.1-inch (15.5 cm diagonal) Super Retina XDR display',75000),
('Apple iPhone 12 min (64GB) - Blue',
'https://m.media-amazon.com/images/I/71sNNCTfMuL._AC_UY218_.jpg',
10,'6.1-inch (15.5 cm diagonal) Super Retina XDR display',59000),
('Apple iPhone 13 Pro (128GB) - Sierra Blue',
'https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY218_.jpg',
10,'6.1-inch (15.5 cm diagonal) Super Retina XDR display',107000)

create table cart (
`cart_id` INT auto_increment,
`product_id` INT NOT null,
`user_id` INT NOT NULL,
`qunatity` INT NOT null,
PRIMARY KEY (`cart_id`)
);

## Node Modules install

```sh
npm install
```

## Local Run :-

```sh
npm start or node server.js
```

Url :-
http://localhost:5001
