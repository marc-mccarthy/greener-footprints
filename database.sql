CREATE TABLE "pages" (
    "id" SERIAL PRIMARY KEY,
    "page_name" VARCHAR (50) NOT NULL,
    "address" VARCHAR (50) NOT NULL
);

CREATE TABLE "technologies" (
    "id" SERIAL PRIMARY KEY,
    "tech_name" VARCHAR (50) NOT NULL,
    "link" VARCHAR (500) NOT NULL,
    "logo" VARCHAR (500) NOT NULL
);

CREATE TABLE "services" (
    "id" SERIAL PRIMARY KEY,
    "service_name" VARCHAR (50) NOT NULL,
    "link" VARCHAR (500) NOT NULL,
    "logo" VARCHAR (500) NOT NULL
);

CREATE TABLE "futureToDos" (
    "id" SERIAL PRIMARY KEY,
    "future_to_do" VARCHAR (500) NOT NULL
);

CREATE TABLE "resume" (
    "id" SERIAL PRIMARY KEY,
    "link" VARCHAR (500) NOT NULL
);

CREATE TABLE "interests" (
    "id" SERIAL PRIMARY KEY,
    "interest_name" VARCHAR (50) NOT NULL,
    "icon" VARCHAR (50) NOT NULL
);

CREATE TABLE "videos" (
    "id" SERIAL PRIMARY KEY,
    "video_name" VARCHAR (50) NOT NULL,
    "link" VARCHAR (500) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "project_name" VARCHAR (50) NOT NULL,
    "image" VARCHAR (500) NOT NULL,
    "description" VARCHAR (500) NOT NULL,
    "host" VARCHAR (500) NOT NULL,
    "github" VARCHAR (500) NOT NULL
);

CREATE TABLE "contactLinks" (
	"id" SERIAL PRIMARY KEY,
    "contact_name" VARCHAR (50) NOT NULL,
    "link" VARCHAR (500) NOT NULL,
    "logo" VARCHAR (500) NOT NULL
);

CREATE TABLE "contact" (
	"id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (50) NOT NULL,
    "last_name" VARCHAR (50) NOT NULL,
    "email" VARCHAR (50),
    "message" VARCHAR (1000) NOT NULL
);

INSERT INTO "pages" ("page_name", "address") VALUES
('Home', '/home'),
('Projects', '/projects'),
('Resume', '/resume'),
('Videos', '/videos'),
('About', '/about'),
('Contact', '/contact');

INSERT INTO "technologies" ("tech_name", "link", "logo") VALUES
('JavaScript', 'https://www.javascript.com', 'https://img.shields.io/badge/JavaScript-323330?style=plastic&logo=javascript&logoColor=F7DF1E'),
('React.js', 'https://reactjs.org', 'https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB'),
('Redux.js', 'https://redux.js.org', 'https://img.shields.io/badge/Redux-593D88?style=plastic&logo=redux&logoColor=white'),
('React Router', 'https://www.npmjs.com/package/react-router', 'https://img.shields.io/badge/React_Router-CA4225?style=plastic&logo=react-router&logoColor=white'),
('Redux-Saga.js', 'https://redux-saga.js.org', 'https://img.shields.io/badge/Redux%20saga-86D46B?style=plastic&logo=redux%20saga&logoColor=999999'),
('Node.js', 'https://nodejs.org/en', 'https://img.shields.io/badge/Node.js-339933?style=plastic&logo=nodedotjs&logoColor=white'),
('PostgreSQL', 'https://www.postgresql.org', 'https://img.shields.io/badge/PostgreSQL-316192?style=plastic&logo=postgresql&logoColor=white'),
('Express.js', 'https://expressjs.com', 'https://img.shields.io/badge/Express.js-000000?style=plastic&logo=express&logoColor=white'),
('Git Versioning', 'https://git-scm.com', 'https://img.shields.io/badge/git-%23F05033.svg?style=plastic&logo=git&logoColor=white'),
('Styled Components', 'https://styled-components.com', 'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white'),
('Material UI', 'https://mui.com', 'https://img.shields.io/badge/Material%20UI-007FFF?style=plastic&logo=mui&logoColor=white'),
('NPM.js', 'https://www.npmjs.com/', 'https://img.shields.io/badge/npm-CB3837?style=plastic&logo=npm&logoColor=white'),
('jQuery', 'https://jquery.com', 'https://img.shields.io/badge/jQuery-0769AD?style=plastic&logo=jquery&logoColor=white'),
('HTML5', 'https://en.wikipedia.org/wiki/HTML', 'https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white'),
('CSS3', 'https://en.wikipedia.org/wiki/CSS', 'https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white'),
('Chart.js', 'https://www.chartjs.org', 'https://img.shields.io/badge/chart.js-F5788D.svg?style=plastic&logo=chart.js&logoColor=white'),
('Markdown', 'https://www.markdownguide.org', 'https://img.shields.io/badge/Markdown-000000?style=plastic&logo=markdown&logoColor=white'),
('Bootstrap', 'https://getbootstrap.com', 'https://img.shields.io/badge/Bootstrap-563D7C?style=plastic&logo=bootstrap&logoColor=white'),
('React Native', 'https://reactnative.dev', 'https://img.shields.io/badge/react_native-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB'),
('Zsh Shell', 'https://zsh.sourceforge.io', 'https://img.shields.io/badge/Shell_Script-121011?style=plastic&logo=gnu-bash&logoColor=white'),
('Passport (Auth)', 'https://www.passportjs.org', ''),
('React Hook Form', 'https://react-hook-form.com/', 'https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=plastic&logo=reacthookform&logoColor=white'),
('Jest', 'https://jestjs.io', 'https://img.shields.io/badge/-jest-%23C21325?style=plastic&logo=jest&logoColor=white');

INSERT INTO "services" ("service_name", "link", "logo") VALUES
('Amazon Web Services', 'https://aws.amazon.com', 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=plastic&logo=amazon-aws&logoColor=white'),
('Google Maps API', 'https://mapsplatform.google.com', 'https://img.shields.io/badge/Google_Cloud-4285F4?style=plastic&logo=google-cloud&logoColor=white'),
('Carbon Interface API', 'https://www.carboninterface.com', ''),
('GitHub', 'https://github.com', 'https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white'),
('Dokku', 'https://dokku.com', ''),
('Heroku', 'https://www.heroku.com', 'https://img.shields.io/badge/heroku-%23430098.svg?style=plastic&logo=heroku&logoColor=white'),
('Digital Ocean', 'https://www.digitalocean.com/', 'https://img.shields.io/badge/Digital_Ocean-0080FF?style=plastic&logo=DigitalOcean&logoColor=white'),
('Vultr', 'https://www.vultr.com', 'https://img.shields.io/badge/Vultr-007BFC.svg?style=plastic&logo=vultr'),
('Vercel', 'https://vercel.com', 'https://img.shields.io/badge/vercel-%23000000.svg?style=plastic&logo=vercel&logoColor=white'),
('Postman', 'https://www.postman.com', 'https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=postman&logoColor=white'),
('Visual Studio Code', 'https://code.visualstudio.com', 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=plastic&logo=visual-studio-code&logoColor=white'),
('Postico', 'https://eggerapps.at/postico', ''),
('Figma', 'https://www.figma.com', 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white');

INSERT INTO "futureToDos" ("future_to_do") VALUES
('Convert Redux to Redux Toolkit.'),
('Dig deeper into Jest unit testing.'),
('Redo previous apps to be mobile first developed.'),
('Learn the power of Next.js.'),
('Use React Native with mobile version of portfolio.'),
('Learn Typescript and Object Oriented Programming.'),
('Learn .NET and C#.'),
('Add Movies, TV Shows, and Video Games to About Me page.');

INSERT INTO "resume" ("link") VALUES
('https://drive.google.com/file/d/19vnaNpPTX0noVyrGa2YxGYnwSifMUF2C/preview');

INSERT INTO "interests" ("interest_name", "icon") VALUES
('Full Stack Dev', '💻'),
('Space Exploration', '🪐'),
('Sports', '🏈'),
('Climate Science', '🌏'),
('Comedy', '🎭'),
('Philosophy', '📜'),
('Motorcycles', '🏍'),
('Animal Rights', '🐶'),
('Special Olympics', '🥇'),
('Running', '🏃'),
('Reading', '📚'),
('Forex/Stocks', '📈'),
('FinTech', '💲'),
('Gaming', '🕹️');

INSERT INTO "videos" ("video_name", "link") VALUES
('Greener Foot(prints): Road Trip Edition', 'https://www.youtube.com/embed/hHFNIzP0SUg');

INSERT INTO "projects" ("project_name", "image", "description", "host", "github") VALUES
('Greener Foot(prints)', '/wireframes/greener-footprints-wireframe.png', '🍃 Travel emissions footprint calculator based on variables integrated with many features.', 'https://greener-footprints.marcmccarthy.io', 'https://github.com/marc-mccarthy/greener-footprints'),
('Police Conduct', '/wireframes/police-conduct-wireframe.png', '👨🏻‍✈️ A place to publish details for your police encounter per incident, good or bad.', 'https://police-conduct.marcmccarthy.io', 'https://github.com/marc-mccarthy/police-conduct'),
('Movie Sagas', '/wireframes/movie-sagas-wireframe.png', '🍿 Small database of some great movies with CRUD features and a Top 10 Page.', 'https://movie-sagas.marcmccarthy.io', 'https://github.com/marc-mccarthy/movie-sagas'),
('React Gallery', '/wireframes/react-gallery-wireframe.png', '🖼️ Picture gallery CRUD application for some of my favorite life moments.', 'https://react-gallery.marcmccarthy.io', 'https://github.com/marc-mccarthy/react-gallery'),
('Redux Feedback Loop', '/wireframes/redux-feedback-loop-wireframe.png', '🖲️ Provide feedback for how well your retaining programming concepts.', 'https://redux-feedback-loop.marcmccarthy.io', 'https://github.com/marc-mccarthy/redux-feedback-loop'),
('SQL To-Do List', '/wireframes/sql-to-do-list-wireframe.png', '✏️ A To-Do List that keeps track of whatever really. Rebuilding with React.', 'https://sql-to-do-list.marcmccarthy.io', 'https://github.com/marc-mccarthy/sql-to-do-list');

INSERT INTO "contactLinks" ("contact_name", "link", "logo") VALUES
('Gmail', 'mailto:marstheory20@gmail.com', 'https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white'),
('GitHub', 'https://github.com/marc-mccarthy', 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'),
('LinkedIn', 'https://www.linkedin.com/in/the-marc-mccarthy/', 'https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white'),
('YouTube', 'https://www.youtube.com/channel/UCjwzRyKjuJHm1mPw_KcGZUA', 'https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white'),
('Twitter', 'https://twitter.com/themarcmccarthy', 'https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white');
