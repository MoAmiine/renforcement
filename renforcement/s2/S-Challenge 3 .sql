SELECT * FROM employes;

SELECT * 
FROM employes
WHERE departement = "Marketing";

SELECT *
FROM employes
WHERE salaire > 3000;

SELECT *
FROM employes
ORDER BY salaire DESC;

SELECT *
FROM employes
ORDER BY salaire DESC
LIMIT 5;

SELECT COUNT(*) 
FROM employes;