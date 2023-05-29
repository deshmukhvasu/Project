 CREATE DATABASE motivity;
 USE motivity;
  CREATE TABLE users (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `sno_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)

  CREATE TABLE products (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NOT NULL,
  `image` VARCHAR(200) NOT NULL,
  `qunatity` DECIMAL(3) NULL,
  `description` TEXT(500) NULL,
  `price` INT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE INDEX `product_name_UNIQUE` (`product_name` ASC) VISIBLE);

  insert into products (product_name,image,qunatity,description,price) values
   ('Apple iPhone 12 (64GB) - Purple',
   'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY218_.jpg',
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
   
 insert into users (name,email,password) values
('Ashok Reddy','test@gmail.com','$2b$10$IMjU1iTS8NJalyDVENC2f.5/OesEafKWII5qWsK3AZWeYGvcMw1HS');
   
 CREATE USER 'test_user'@'%' IDENTIFIED BY 'Test_123';
 GRANT ALL PRIVILEGES ON *.* TO 'test_user'@'%';
 ALTER USER 'test_user'@'%' IDENTIFIED WITH mysql_native_password BY 'Test_123'
 
 
 
