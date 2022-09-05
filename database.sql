CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "role" INTEGER NOT NULL DEFAULT 0,
    "avatar" VARCHAR (200) DEFAULT 'https://pixy.org/src/477/4773331.png'
);

CREATE TABLE "trips" (
	"id" SERIAL PRIMARY KEY,
	"startAddress" VARCHAR (80) NOT NULL,
	"endAddress" VARCHAR (80) NOT NULL,
	"distance" REAL NOT NULL,
	"duration" VARCHAR (20) NOT NULL,
	"passengers" INT NOT NULL,
	"estimateId" VARCHAR (36) NOT NULL,
	"modelId" VARCHAR (36) NOT NULL,
	"year" INT NOT NULL,
	"make" VARCHAR (20) NOT NULL,
	"model" VARCHAR (30) NOT NULL,
	"carbonPounds" REAL NOT NULL,
	"user_id" INT NOT NULL
);

INSERT INTO "user" ("username", "password", "role", "avatar")
VALUES
('anonymous', '$2a$10$gLRFkdtpcJKY8JbJUE0uZORfwZeQ6RgITGM/3xP.iLoyp0vqVOQcq', 0, 'https://pixy.org/src/477/4773331.png');

INSERT INTO "trips" ("startAddress", "endAddress", "distance", "duration", "passengers", "estimateId", "modelId", "year", "make", "model", "carbonPounds", "user_id")
VALUES
('Florida, USA', 'North Carolina, USA', 656.9022, '10 hours 12 mins', 5, '2baab1ad-30b9-4ed7-9a36-c9567fc885cc', '2a2d9b81-5a33-420a-8de0-a0fe0cb7f0ff', 1990, 'BMW', '525i', 715.02, 1),
('Atlanta, GA, USA', 'Seattle, WA, USA', 2636.51, '1 day 15 hours', 6, '8d4878a2-bb25-437d-b433-96821307f0cd', '2742e52c-c0f0-4517-96b7-9d41956aa3bc', 2003, 'Chrysler', 'PT Cruiser', 2347.99, 1),
('Boston, MA, USA', 'Chicago, IL, USA', 982.7886, '15 hours 40 mins', 4, '0d6d1a80-86bf-4956-904e-18127f04d373', '4cfd70ba-62a7-4ddb-ab72-0f7001c0fa3a', 2004, 'Daewoo', 'Magnus', 962.76, 1),
('Blaine, MN, USA', 'Austin, TX, USA', 1189.0614, '17 hours 18 mins', 5, '52fde5ad-e2c8-4364-aeaf-c29a59c2b819', '4d89b2a7-098c-41ab-a563-3e11fa5b0d1f', 1998, 'Eagle', 'Talon', 1109.36, 1),
('Boise, ID, USA', 'Las Vegas, NV, USA', 623.5774, '9 hours 34 mins', 7, '437bd1cb-bb73-4a22-a7f3-dec892e97a35', 'bcc56f8f-bbf0-443f-9f30-f920b2fe6e4f', 2000, 'Jeep', 'Cherokee 4WD', 718.67, 1),
('Sacramento, CA, USA', 'Portland, OR, USA', 579.2045, '9 hours 8 mins', 5, 'e21d459a-a286-4b5c-928a-778cee089b61', '8668accb-cdfc-4f95-b1f7-6ff926fd1de1', 1998, 'Mercury', 'Sable', 567.4, 1),
('New Mexico, USA', 'Nashville, TN, USA', 1192.2472, '17 hours 28 mins', 2, '0cac7005-dc17-4132-86ad-07798d9d7b0d', '69390467-3549-41f5-8c03-9a5050585e61', 2015, 'Buick', 'Regal', 1001.44, 1),
('Florida, USA', 'North Carolina, USA', 656.9022, '10 hours 12 mins', 5, '2baab1ad-30b9-4ed7-9a36-c9567fc885cc', '2a2d9b81-5a33-420a-8de0-a0fe0cb7f0ff', 1990, 'BMW', '525i', 715.02, 1),
('Atlanta, GA, USA', 'Seattle, WA, USA', 2636.51, '1 day 15 hours', 6, '8d4878a2-bb25-437d-b433-96821307f0cd', '2742e52c-c0f0-4517-96b7-9d41956aa3bc', 2003, 'Chrysler', 'PT Cruiser', 2347.99, 1),
('Boston, MA, USA', 'Chicago, IL, USA', 982.7886, '15 hours 40 mins', 4, '0d6d1a80-86bf-4956-904e-18127f04d373', '4cfd70ba-62a7-4ddb-ab72-0f7001c0fa3a', 2004, 'Daewoo', 'Magnus', 962.76, 1),
('Blaine, MN, USA', 'Austin, TX, USA', 1189.0614, '17 hours 18 mins', 5, '52fde5ad-e2c8-4364-aeaf-c29a59c2b819', '4d89b2a7-098c-41ab-a563-3e11fa5b0d1f', 1998, 'Eagle', 'Talon', 1109.36, 1),
('Boise, ID, USA', 'Las Vegas, NV, USA', 623.5774, '9 hours 34 mins', 7, '437bd1cb-bb73-4a22-a7f3-dec892e97a35', 'bcc56f8f-bbf0-443f-9f30-f920b2fe6e4f', 2000, 'Jeep', 'Cherokee 4WD', 718.67, 1),
('Sacramento, CA, USA', 'Portland, OR, USA', 579.2045, '9 hours 8 mins', 5, 'e21d459a-a286-4b5c-928a-778cee089b61', '8668accb-cdfc-4f95-b1f7-6ff926fd1de1', 1998, 'Mercury', 'Sable', 567.4, 1),
('New Mexico, USA', 'Nashville, TN, USA', 1192.2472, '17 hours 28 mins', 2, '0cac7005-dc17-4132-86ad-07798d9d7b0d', '69390467-3549-41f5-8c03-9a5050585e61', 2015, 'Buick', 'Regal', 1001.44, 1),
('Florida, USA', 'North Carolina, USA', 656.9022, '10 hours 12 mins', 5, '2baab1ad-30b9-4ed7-9a36-c9567fc885cc', '2a2d9b81-5a33-420a-8de0-a0fe0cb7f0ff', 1990, 'BMW', '525i', 715.02, 1),
('Atlanta, GA, USA', 'Seattle, WA, USA', 2636.51, '1 day 15 hours', 6, '8d4878a2-bb25-437d-b433-96821307f0cd', '2742e52c-c0f0-4517-96b7-9d41956aa3bc', 2003, 'Chrysler', 'PT Cruiser', 2347.99, 1),
('Boston, MA, USA', 'Chicago, IL, USA', 982.7886, '15 hours 40 mins', 4, '0d6d1a80-86bf-4956-904e-18127f04d373', '4cfd70ba-62a7-4ddb-ab72-0f7001c0fa3a', 2004, 'Daewoo', 'Magnus', 962.76, 1),
('Blaine, MN, USA', 'Austin, TX, USA', 1189.0614, '17 hours 18 mins', 5, '52fde5ad-e2c8-4364-aeaf-c29a59c2b819', '4d89b2a7-098c-41ab-a563-3e11fa5b0d1f', 1998, 'Eagle', 'Talon', 1109.36, 1),
('Boise, ID, USA', 'Las Vegas, NV, USA', 623.5774, '9 hours 34 mins', 7, '437bd1cb-bb73-4a22-a7f3-dec892e97a35', 'bcc56f8f-bbf0-443f-9f30-f920b2fe6e4f', 2000, 'Jeep', 'Cherokee 4WD', 718.67, 1),
('Sacramento, CA, USA', 'Portland, OR, USA', 579.2045, '9 hours 8 mins', 5, 'e21d459a-a286-4b5c-928a-778cee089b61', '8668accb-cdfc-4f95-b1f7-6ff926fd1de1', 1998, 'Mercury', 'Sable', 567.4, 1),
('New Mexico, USA', 'Nashville, TN, USA', 1192.2472, '17 hours 28 mins', 2, '0cac7005-dc17-4132-86ad-07798d9d7b0d', '69390467-3549-41f5-8c03-9a5050585e61', 2015, 'Buick', 'Regal', 1001.44, 1),
('Florida, USA', 'North Carolina, USA', 656.9022, '10 hours 12 mins', 5, '2baab1ad-30b9-4ed7-9a36-c9567fc885cc', '2a2d9b81-5a33-420a-8de0-a0fe0cb7f0ff', 1990, 'BMW', '525i', 715.02, 1),
('Atlanta, GA, USA', 'Seattle, WA, USA', 2636.51, '1 day 15 hours', 6, '8d4878a2-bb25-437d-b433-96821307f0cd', '2742e52c-c0f0-4517-96b7-9d41956aa3bc', 2003, 'Chrysler', 'PT Cruiser', 2347.99, 1),
('Boston, MA, USA', 'Chicago, IL, USA', 982.7886, '15 hours 40 mins', 4, '0d6d1a80-86bf-4956-904e-18127f04d373', '4cfd70ba-62a7-4ddb-ab72-0f7001c0fa3a', 2004, 'Daewoo', 'Magnus', 962.76, 1),
('Blaine, MN, USA', 'Austin, TX, USA', 1189.0614, '17 hours 18 mins', 5, '52fde5ad-e2c8-4364-aeaf-c29a59c2b819', '4d89b2a7-098c-41ab-a563-3e11fa5b0d1f', 1998, 'Eagle', 'Talon', 1109.36, 1),
('Boise, ID, USA', 'Las Vegas, NV, USA', 623.5774, '9 hours 34 mins', 7, '437bd1cb-bb73-4a22-a7f3-dec892e97a35', 'bcc56f8f-bbf0-443f-9f30-f920b2fe6e4f', 2000, 'Jeep', 'Cherokee 4WD', 718.67, 1),
('Sacramento, CA, USA', 'Portland, OR, USA', 579.2045, '9 hours 8 mins', 5, 'e21d459a-a286-4b5c-928a-778cee089b61', '8668accb-cdfc-4f95-b1f7-6ff926fd1de1', 1998, 'Mercury', 'Sable', 567.4, 1),
('New Mexico, USA', 'Nashville, TN, USA', 1192.2472, '17 hours 28 mins', 2, '0cac7005-dc17-4132-86ad-07798d9d7b0d', '69390467-3549-41f5-8c03-9a5050585e61', 2015, 'Buick', 'Regal', 1001.44, 1);
