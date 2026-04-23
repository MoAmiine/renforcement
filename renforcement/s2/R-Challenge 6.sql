SELECT 
    livres.titre,
    livres.prix,
    editeurs.nom AS editeur,
    genres.nom AS genre
FROM livres
JOIN editeurs ON livres.editeur_id = editeurs.id
JOIN genres ON livres.genre_id = genres.id;

SELECT 
    editeurs.nom,
    COUNT(livres.id) AS nombre_livres
FROM editeurs
LEFT JOIN livres ON livres.editeur_id = editeurs.id
GROUP BY editeurs.nom
ORDER BY nombre_livres DESC;

SELECT 
    genres.nom,
    SUM(livres.prix * ventes.quantite) AS chiffre_affaires
FROM ventes
JOIN livres ON ventes.livre_id = livres.id
JOIN genres ON livres.genre_id = genres.id
GROUP BY genres.nom;

SELECT editeurs.nom
FROM editeurs
LEFT JOIN livres ON livres.editeur_id = editeurs.id
LEFT JOIN ventes ON ventes.livre_id = livres.id
WHERE ventes.id IS NULL;

SELECT 
    genres.nom AS genre,
    livres.titre,
    SUM(ventes.quantite) AS total_vendu
FROM ventes
JOIN livres ON ventes.livre_id = livres.id
JOIN genres ON livres.genre_id = genres.id
GROUP BY genres.nom, livres.titre
HAVING total_vendu = (
    SELECT MAX(total)
    FROM (
        SELECT SUM(v2.quantite) AS total
        FROM ventes v2
        JOIN livres l2 ON v2.livre_id = l2.id
        WHERE l2.genre_id = livres.genre_id
        GROUP BY l2.id
    AS sous)
);

SELECT 
    ventes.client
FROM ventes
JOIN livres ON ventes.livre_id = livres.id
GROUP BY ventes.client
HAVING COUNT(DISTINCT livres.genre_id) > 3;

SELECT 
    DATE_FORMAT(date_vente, '%Y-%m') AS mois,
    SUM(livres.prix * ventes.quantite) AS chiffre_affaires
FROM ventes
JOIN livres ON ventes.livre_id = livres.id
GROUP BY mois
ORDER BY mois;

SELECT 
    livres.titre,
    livres.prix,
    genres.nom
FROM livres
JOIN genres ON livres.genre_id = genres.id
WHERE livres.annee_publication > 2020
AND livres.prix > (
    SELECT AVG(l2.prix)
    FROM livres l2
    WHERE l2.genre_id = livres.genre_id
);

