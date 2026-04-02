CREATE TABLE articles (
id INT PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(100),
prix DECIMAL(10,2),
categorie VARCHAR(50),
stock INT,
note_moyenne DECIMAL(2,1)
);

INSERT INTO articles (nom, prix, categorie, stock, note_moyenne) VALUES
('PC Portable Pro', 900, 'Informatique', 5, 4.5),
('Souris Gaming', 25, 'Informatique', 10, 4.2),
('Casque Pro Audio', 70, 'Audio', 3, 4.1),
('iPhone 17', 650, 'Téléphonie', 0, 4.7),
('Clavier Mécanique', 80, 'Informatique', 7, 4.3),
('Chargeur USB', 15, 'Accessoire', 20, 3.8),
('Samsung Galaxy', 500, 'Téléphonie', 4, 4.4),
('Ecran 24 Pro', 150, 'Informatique', 0, 4.6);

SELECT * 
FROM articles
WHERE prix BETWEEN 20 AND 80;

SELECT * 
FROM articles
WHERE nom LIKE '%Pro%';

SELECT *
FROM articles
WHERE stock = 0;

SELECT *
FROM articles
WHERE categorie = 'Informatique'
OR categorie = 'Téléphonie';

SELECT *
FROM articles
WHERE prix > 50
AND note_moyenne >= 4;