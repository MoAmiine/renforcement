CREATE TABLE hotels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    adresse VARCHAR(255),
    etoiles INT
);
CREATE TABLE type_chambres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    prix DECIMAL(10, 2),
    capacite INT
);
CREATE TABLE chambres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(10),
    etage INT,
    statut VARCHAR(20),
    type_id INT,
    FOREIGN KEY (type_id) REFERENCES type_chambres(id)
);
CREATE TABLE clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    email VARCHAR(100),
    telephone VARCHAR(20)
);
CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    chambre_id INT,
    date_debut DATE,
    date_fin DATE,
    statut VARCHAR(20),
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (chambre_id) REFERENCES chambres(id)
);
CREATE TABLE factures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reservation_id INT,
    montant DECIMAL(10, 2),
    date_paiement DATE,
    FOREIGN KEY (reservation_id) REFERENCES reservations(id)
);
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prix DECIMAL(10, 2)
);
CREATE TABLE avis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    hotel_id INT,
    note INT,
    commentaire TEXT,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (hotel_id) REFERENCES hotels(id)
);
INSERT INTO clients (nom, email, telephone)
VALUES ('Ali', 'ali@gmail.com', '0600000001'),
    ('Sara', 'sara@gmail.com', '0600000002'),
    ('Omar', 'omar@gmail.com', '0600000003'),
    ('Yasmine', 'yas@gmail.com', '0600000004'),
    ('Khalid', 'khalid@gmail.com', '0600000005'),
    ('Nadia', 'nadia@gmail.com', '0600000006'),
    ('Hamza', 'hamza@gmail.com', '0600000007'),
    ('Imane', 'imane@gmail.com', '0600000008'),
    ('Reda', 'reda@gmail.com', '0600000009'),
    ('Zineb', 'zineb@gmail.com', '0600000010');
INSERT INTO type_chambres (nom, prix, capacite)
VALUES ('Single', 300, 1),
    ('Double', 500, 2),
    ('Suite', 900, 4),
    ('Deluxe', 1200, 5);
INSERT INTO chambres (numero, etage, statut, type_id)
VALUES ('101', 1, 'disponible', 1),
    ('102', 1, 'disponible', 1),
    ('103', 1, 'occupée', 1),
    ('104', 1, 'disponible', 1),
    ('105', 1, 'occupée', 1),
    ('201', 2, 'disponible', 2),
    ('202', 2, 'occupée', 2),
    ('203', 2, 'disponible', 2),
    ('204', 2, 'disponible', 2),
    ('205', 2, 'occupée', 2),
    ('301', 3, 'disponible', 3),
    ('302', 3, 'occupée', 3),
    ('303', 3, 'disponible', 3),
    ('304', 3, 'disponible', 3),
    ('305', 3, 'occupée', 3),
    ('401', 4, 'disponible', 4),
    ('402', 4, 'occupée', 4),
    ('403', 4, 'disponible', 4),
    ('404', 4, 'disponible', 4),
    ('405', 4, 'occupée', 4);
INSERT INTO reservations (
        client_id,
        chambre_id,
        date_debut,
        date_fin,
        statut
    )
VALUES (1, 1, '2026-05-01', '2026-05-05', 'confirmée'),
    (2, 2, '2026-05-03', '2026-05-06', 'confirmée'),
    (3, 3, '2026-05-02', '2026-05-04', 'annulée'),
    (4, 4, '2026-05-10', '2026-05-15', 'confirmée'),
    (5, 5, '2026-05-12', '2026-05-18', 'confirmée'),
    (6, 6, '2026-05-01', '2026-05-03', 'confirmée'),
    (7, 7, '2026-05-04', '2026-05-08', 'confirmée'),
    (8, 8, '2026-05-06', '2026-05-10', 'confirmée'),
    (9, 9, '2026-05-07', '2026-05-12', 'confirmée'),
    (10, 10, '2026-05-08', '2026-05-11', 'annulée'),
    (1, 11, '2026-05-15', '2026-05-20', 'confirmée'),
    (2, 12, '2026-05-16', '2026-05-22', 'confirmée'),
    (3, 13, '2026-05-18', '2026-05-25', 'confirmée'),
    (4, 14, '2026-05-20', '2026-05-28', 'confirmée'),
    (5, 15, '2026-05-22', '2026-05-30', 'confirmée');
INSERT INTO factures (reservation_id, montant, date_paiement)
VALUES (1, 1200, '2026-05-01'),
    (2, 1500, '2026-05-03'),
    (4, 3000, '2026-05-10'),
    (5, 4200, '2026-05-12'),
    (7, 2000, '2026-05-04');
SELECT t.nom,
    COUNT(r.id) * 100 / COUNT(c.id) AS taux_occupation
FROM chambres c
    JOIN type_chambres t ON c.type_id = t.id
    LEFT JOIN reservations r ON c.id = r.chambre_id
    AND MONTH(r.date_debut) = 5
GROUP BY t.nom;

SELECT MONTH(f.date) AS mois,
SUM(f.montant) AS total
FROM factures f
GROUP BY mois;

SELECT client_id, COUNT(*) AS total_reservations
FROM reservations
GROUP BY client_id
HAVING COUNT(*) > 3;

SELECT * 
FROM chambres
WHERE id NOT IN (
    SELECT chambre_id
    FROM reservations
    WHERE NOT (
        date_fin <= '2026-05-01'
        OR date_debut >= '2026-05-10'
    )
);

SELECT AVG(total)
FROM (
    SELECT client_id, SUM(f.montant) AS total
    FROM reservations r
    JOIN factures f ON r.id = f.reservation_id
    GROUP BY client_id
) t;

SELECT c.nom, SUM(f.montant) AS total
FROM clients c
JOIN reservations r ON c.id = r.client_id
JOIN factures f ON r.id = f.reservation_id
GROUP BY c.id
ORDER BY total DESC
LIMIT 5;