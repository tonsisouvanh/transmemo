CREATE TABLE translations (
    id SERIAL PRIMARY KEY,
    source_text VARCHAR(255),
    translated_text VARCHAR(255),
    source_language VARCHAR(10), -- e.g., 'vi' for Vietnamese, 'th' for Thai
    target_language VARCHAR(10), -- e.g., 'th' for Thai
    context TEXT, -- Any additional information about the text, e.g., "legal document"
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE translations
ALTER COLUMN source_text TYPE TEXT,
ALTER COLUMN translated_text TYPE TEXT,
ALTER COLUMN context TYPE VARCHAR(255);

CREATE TABLE glossary (
    id SERIAL PRIMARY KEY,
    term VARCHAR(255),
    definition VARCHAR(255),
    source_language VARCHAR(10), -- e.g., 'vi' for Vietnamese
    target_language VARCHAR(10), -- e.g., 'th' for Thai
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100),
    password_hash VARCHAR(255),
    role VARCHAR(10) CHECK (
        role IN ('admin', 'translator', 'user')
    ),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);