CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role ENUM('apprenant', 'formateur') NOT NULL,
    niveau VARCHAR(50),
    bio TEXT, 
    note_moyenne FLOAT DEFAULT 0,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

    CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT
);

    CREATE TABLE cours (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    prix DECIMAL(10,2) NOT NULL CHECK (prix >= 0),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    formateur_id INT NOT NULL,
    categorie_id INT,

    FOREIGN KEY (formateur_id) REFERENCES utilisateurs(id)
        ON DELETE CASCADE,

    FOREIGN KEY (categorie_id) REFERENCES categories(id)
        ON DELETE SET NULL
);

    CREATE TABLE modules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    ordre INT,
    cours_id INT NOT NULL,

    FOREIGN KEY (cours_id) REFERENCES cours(id)
        ON DELETE CASCADE
);

-- 5. LECONS
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    duree INT,
    video_url VARCHAR(255),
    module_id INT NOT NULL,

    FOREIGN KEY (module_id) REFERENCES modules(id)
        ON DELETE CASCADE
);

CREATE TABLE inscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apprenant_id INT NOT NULL,
    cours_id INT NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    progression FLOAT DEFAULT 0 CHECK (progression >= 0 AND progression <= 100),

    UNIQUE (apprenant_id, cours_id),

    FOREIGN KEY (apprenant_id) REFERENCES utilisateurs(id)
        ON DELETE CASCADE,

    FOREIGN KEY (cours_id) REFERENCES cours(id)
        ON DELETE CASCADE
);

CREATE TABLE avis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    note INT NOT NULL CHECK (note BETWEEN 1 AND 5),
    commentaire TEXT,
    date DATE,
    apprenant_id INT NOT NULL,
    cours_id INT NOT NULL,

    FOREIGN KEY (apprenant_id) REFERENCES utilisateurs(id)
        ON DELETE CASCADE,

    FOREIGN KEY (cours_id) REFERENCES cours(id)
        ON DELETE CASCADE
);