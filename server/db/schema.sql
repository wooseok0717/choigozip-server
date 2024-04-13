DROP DATABASE IF EXISTS josh;
CREATE DATABASE josh;
\c josh;

DROP DATABASE IF EXISTS choigozip;
CREATE DATABASE choigozip;
\c choigozip;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  pw TEXT NOT NULL,
  name TEXT NOT NULL,
  tier INTEGER default 0
);

INSERT INTO users (user_id, pw, name, tier) VALUES ('admin', '1345', '관리자', 5);

CREATE TABLE timecard (
  id SERIAL PRIMARY KEY,
  interaction TEXT NOT NULL,
  user_id TEXT,
  time TIMESTAMP NOT NULL
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  kor_name TEXT NOT NULL,
  eng_name TEXT NOT NULL,
  kor_details TEXT,
  eng_details TEXT,
  order_id SERIAL
);

CREATE TABLE menu (
  id SERIAL PRIMARY Key,
  category_id INTEGER REFERENCES category(id),
  kor_name TEXT NOT NULL,
  eng_name TEXT NOT NULL,
  kor_details TEXT NOT NULL,
  eng_details TEXT NOT NULL,
  price NUMERIC(10, 2),
  total_sold INTEGER default 0,
  img_url TEXT,
  order_id SERIAL
);