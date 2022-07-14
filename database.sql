-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role" INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE "trips" (
	"id" SERIAL PRIMARY KEY,
	"startAddress" VARCHAR (80) NOT NULL,
	"endAddress" VARCHAR (80) NOT NULL,
	"distanceMiles" REAL NOT NULL,
	"duration" VARCHAR (20) NOT NULL,
	"passengers" INT NOT NULL,
	"estimateId" VARCHAR (36) NOT NULL,
	"vehicleModelId" VARCHAR (36) NOT NULL,
	"vehicleYear" INT NOT NULL,
	"vehicleMake" VARCHAR (20) NOT NULL,
	"vehicleModel" VARCHAR (30) NOT NULL,
	"carbonPounds" REAL NOT NULL,
	"user_id" INT NOT NULL
);
