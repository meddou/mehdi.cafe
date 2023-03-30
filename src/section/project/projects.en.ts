import type { Project } from '@section/project/Project'

const projects: Project[] = [
  {
    name: 'my arte',
    logo: 'arte',
    color: '#fd4600',
    skills: [
      'React',
      'Typescript',
      'Javascript',
      'PHP',
      'Symfony',
      'Redis',
      'mySQL',
      'Storybook',
      'Eslint',
      'PHPUnit',
      'Github',
      'Docker',
      'Jest',
      'Web',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    url: 'https://my.arte.tv',
    images: [
      'arte/1.png',
      'arte/2.png',
      'arte/3.png',
      'arte/4.png',
    ],
    description_project: '"A responsible European public media, ARTE is committed to themes dear to the citizens of Europe: the fight against inequalities, whether social, cultural, economic, geographical, linked to gender or disability, as well as the sustainable development',
    description_mission: [
      'Migration of the frontend website <a href=\'https://my.arte.tv\' target=\'_blank\'>my.arte.tv</a> into a component library',
      'Development and optimization of the user API (viewing history, content suggestion, account update ...) processing more than 3 million requests / day',
      'Migration of the ARTE authentication system (IAM) from LoginRadius to Keycloak',
      'Contribution to content caching strategy, database design, system design and code quality',
      'Optimization of the video player used on <a href=\'https://arte.tv\' target=\'_blank\'>arte.tv</a>',
      'Support of an external team in charge of the redesign of the user API to Symfony',
    ],
    recommendations: [],
    start: '2020-08-01',
    end: '2022-04-01',
  },
  {
    name: 'kwote',
    logo: 'kwote',
    color: '#e0cbaa',
    skills: [
      'Typescript',
      'Javascript',
      'NodeJS',
      'mySQL',
      'Redis',
      'Angular',
      'Eslint',
      'Gitlab',
      'Jenkins',
      'Web',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    url: 'https://kwote.fr',
    images: [
      'kwote/kwote_1.jpg',
      'kwote/kwote_2.jpg',
      'kwote/kwote_3.jpg',
      'kwote/kwote_4.jpg',
      'kwote/kwote_6.jpg',
      'kwote/kwote_5.jpg',
    ],
    description_project: '"Kwote is a risk manager for companies. It relies on company data, thanks to its connection with their information systems, offering the user tools for managing customer risk and monitoring the performance of credit insurance contracts associated with a brick of services including disruptive financing solutions, online recovery, scoring based on payment behavior..."',
    description_mission: [
      'Development of "COLLECT", a recovery module for unpaid invoices including an action planning system for recovery scenarios (email, sms, mail, etc.) as well as a recovery template editor. This module processes 10 000 actions / month on average',
      'Technical refactoring to improve testability, scalability and code cleanliness',
      'Development of a reporting module aggregating key data for clients',
      'Development of a collaborative workspace module',
      'Development of various connectors to external APIs (ATRADUIS, Euler Hermes)',
      'Various Angular version upgrades',
    ],
    recommendations: [],
    start: '2018-08-01',
    end: '2021-10-01',
  },
  {
    name: 'pfizer centaur',
    logo: 'centaur',
    color: '#0008c4',
    skills: [
      'React',
      'Typescript',
      'Javascript',
      'AWS',
      'neo4j',
      'Docker',
      'Github',
      'Jenkins',
      'Eslint',
      'Jest',
      'Web',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    images: [
    ],
    description_project: 'Centaur is a BI platform used internally by Pfizer.\nThrough different modules, it improves the daily decision-making of employees through the analysis, consolidation and graphical restitution of key data.',
    description_mission: [
      'Development of "Simple Search", a search engine allowing users to search and visualize data from a text search',
      'Realization and execution of a technical audit aimed at greatly reducing the technical debt, improving the quality and readability of the code as well as the software design',
      'Development and deployment of a PoC "Trial Review”, a tool allowing the annotation / correction / review of files used internally by Pfizer',
      'Redesign and improvement of several user interfaces aimed at simplifying the user journey',
      'Various feature developments',
    ],
    recommendations: [],
    start: '2022-04-01',
    end: '2022-12-23',
  },
  {
    name: 'MateMeUp',
    logo: 'matemeup',
    color: '#b01515',
    skills: [
      'Javascript',
      'NodeJS',
      'React',
      'Redis',
      'jQuery',
      'Laravel',
      'PHP',
      'mySQL',
      'Git',
      'Github',
      'Web',
      'Eslint',
    ],
    companies: [
      'freelancer',
    ],
    images: [
      'matemeup/matemeup_web_1.jpg',
      'matemeup/matemeup_web_2.jpg',
      'matemeup/matemeup_web_3.jpg',
      'matemeup/matemeup_web_4.jpg',
    ],
    description_project: '"The purpose of the matemeup.com website is to centralize the tools necessary for e-sport players and more generally for video game players, to facilitate the creation of links and meetings while promoting the related gaming sphere (broadcasters , casters, videographers, etc.)."',
    description_mission: [
      'Development of a player matching tool that includes a textual and vocal lobby system with the ability to create, modify and delete ones',
      'Development of a real-time chat',
      'Development of a newsfeed where users can publish text and images',
      'Design, development and deployment',
    ],
    recommendations: [
      1,
    ],
    start: '2017-10-01',
    end: '2018-01-01',
  },
  {
    name: 'MateMeUp Mobile',
    logo: 'matemeup',
    color: '#ec6464',
    skills: [
      'Android',
      'iOS',
      'Java',
      'Swift',
      'Git',
      'Github',
    ],
    companies: [
      'freelancer',
    ],
    images: [
      'matemeup-mobile/matemeup_mobile_1.jpg',
      'matemeup-mobile/matemeup_mobile_2.jpg',
      'matemeup-mobile/matemeup_mobile_3.jpg',
      'matemeup-mobile/matemeup_mobile_4.jpg',
      'matemeup-mobile/matemeup_mobile_5.jpg',
    ],
    description_project: '"The purpose of the matemeup.com website is to centralize the tools necessary for e-sport players and more generally for video game players, to facilitate the creation of links and meetings while promoting the related gaming sphere (broadcasters , casters, videographers, etc.)."',
    description_mission: [
      'Development of a newsfeed where users can publish text and images',
      'Development of a real-time chat',
      'Development of an authentication system',
      'Design, development and deployment of iOS and Android apps',
    ],
    recommendations: [
      1,
    ],
    start: '2018-02-01',
    end: '2018-08-01',
  },
  {
    name: 'Cloudindus',
    logo: 'cloudindus',
    color: '#dadadd',
    skills: [
      'Javascript',
      'NodeJS',
      'MongoDB',
      'Angular',
      'Web',
      'Git',
    ],
    companies: [
      'cloudindus',
    ],
    images: [
      'cloudindus/cloudindus_1.gif',
      'cloudindus/cloudindus_2.jpg',
      'cloudindus/cloudindus_3.jpg',
      'cloudindus/cloudindus_4.jpg',
      'cloudindus/cloudindus_5.png',
    ],
    description_project: 'Cloudindus is an industrial supervisor allowing the configuration of IoT objects. The application allows individuals as well as professionals to interact and consult the status of their objects connected to each other on their network. Interactions between objects can be defined and viewed by the user through the application interface',
    description_mission: [
      'Development of an engine allowing the update of the state of a connected object according to the state of other network objects',
      'Development of the visualization system for the state of a connected object via a graphical representation (SVG) on the application',
      'Development of user profile management',
      'Implementation of website internationalization',
      'Design, development and deployment',
    ],
    recommendations: [],
    start: '2015-05-01',
    end: '2017-03-01',
  },
  {
    name: 'The Babel Community',
    logo: 'the-babel-community',
    color: '#000000',
    skills: [
      'Javascript',
      'jQuery',
      'PHP',
      'Symfony',
      'mySQL',
      'Web',
      'Git',
      'Laravel',
    ],
    companies: [
      'freelancer',
    ],
    url: 'https://thebabelcommunity.com/en',
    images: [
      'the-babel-community/the_babel_community_1.jpg',
      'the-babel-community/the_babel_community_2.jpg',
      'the-babel-community/the_babel_community_3.jpg',
      'the-babel-community/the_babel_community_4.jpg',
      'the-babel-community/the_babel_community_5.jpg',
      'the-babel-community/the_babel_community_6.jpg',
      'the-babel-community/the_babel_community_7.png',
      'the-babel-community/the_babel_community_8.png',
    ],
    description_project: 'The Babel Community is the largest coworking and coliving residence brand in France.',
    description_mission: [
      "Development of the residence's showcase website to list the services offered and the goods currently available. The website also allows you to plan a visit or to book an apartment as well as to register for a sports course or reserve a table at the restaurant.",
      'Design, development and deployment',
    ],
    recommendations: [],
    start: '2018-10-01',
    end: '2019-02-01',
  },
  {
    name: 'The Babel Zone',
    logo: 'the-babel-zone',
    color: '#000000',
    skills: [
      'Javascript',
      'PHP',
      'Laravel',
      'mySQL',
      'Web',
      'PWA',
      'Git',
      'React',
    ],
    companies: [
      'freelancer',
    ],
    images: [
      'the-babel-zone/the_babel_zone_1.png',
      'the-babel-zone/the_babel_zone_2.png',
      'the-babel-zone/the_babel_zone_3.png',
      'the-babel-zone/the_babel_zone_4.png',
    ],
    description_project: 'The Babel Community is the largest coworking and coliving residence brand in France.',
    description_mission: [
      "THE BABEL ZONE est une web-app à destination des locataires de la résidence. L'application leur permet d'interagir avec les services de cette dernière. Ils peuvent en effet, depuis l'application, commander un plat au restaurant, s'inscrire à un cours de sport ou encore réserver une salle de réunion. Développement de la totalité de l'application",
      "Conception, développement et mise en production de l'application",
    ],
    recommendations: [],
    start: '2018-08-01',
    end: '2019-05-01',
    isVisible: false,
  },
  {
    name: 'Album Quiz',
    logo: 'album-quiz',
    color: '#00d3ee',
    skills: [
      'React',
      'iOS',
      'Android',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    url: 'https://play.google.com/store/apps/details?id=com.albumquiz&hl=fr',
    images: [
      'album-quiz/1.png',
      'album-quiz/2.png',
      'album-quiz/3.png',
      'album-quiz/4.png',
      'album-quiz/5.png',
      'album-quiz/6.png',
    ],
    description_project: '"Album Quiz | Rap Français" is a quiz which consists in finding an artist from an album title.<br/>The game is centered around French urban music.<br/>More than 3500 albums available through 30 years.',
    description_mission: [
      'Development on Android and iOS',
      'Design, development and deployment',
    ],
    recommendations: [],
    start: '2019-03-01',
    end: '2019-11-01',
  },
  {
    name: 'Intranet AXIS',
    logo: 'axis',
    color: '#FFFFFF',
    skills: [
      'Javascript',
      'jQuery',
      'PHP',
      'mySQL',
      'Web',
      'Git',
    ],
    companies: [
      'axis',
    ],
    images: [
      'intranet-axis/intra_1.jpg',
      'intranet-axis/intra_2.jpg',
      'intranet-axis/intra_3.jpg',
      'intranet-axis/intra_4.jpg',
      'intranet-axis/intra_5.jpg',
      'intranet-axis/intra_6.jpg',
    ],
    description_project: 'The AXIS Intranet is an ERP used by every AXIS Immobilier employees to centralize data.\nIt allows customer follow-up from the first contact to the reservation and invoicing of accommodation.',
    description_mission: [
      'Graphical redesign of the ERP',
      'Development of invoicing systems, customer follow-up, stock follow-up, accommodation reservation',
      'Various improvements on the ERP',
    ],
    recommendations: [],
    start: '2017-04-01',
    end: '2017-09-01',
  },
  {
    name: 'Foody Basket',
    logo: 'foody-basket',
    color: '#fd8600',
    skills: [
      'Lua',
      'Corona',
      'Android',
      'iOS',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    url: 'https://play.google.com/store/apps/details?id=fr.hotmail.meddegivet.FoodyBasket',
    images: [
      'foody-basket/in-game1.png',
      'foody-basket/league-fr.png',
      'foody-basket/menu-fr.png',
      'foody-basket/in-game2.png',
      'foody-basket/select-menu-fr.png',
    ],
    description_project: 'Foody basket is a mobile game of junk-food playing basketball. The game has over a dozen characters, all based on famous fast food dishes and fully customizable. Several game modes are available, ranging from single match to a championship system.',
    description_mission: [
      'Development on Android, iOS and Windows',
      'Design, development and deployment',
    ],
    recommendations: [],
    start: '2016-09-01',
    end: '2017-04-01',
  },
  {
    name: 'The Babel Staff',
    logo: 'the-babel-staff',
    color: '#000000',
    skills: [
      'React',
      'Javascript',
      'PHP',
      'Laravel',
      'mySQL',
      'Web',
      'PWA',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    images: [
      'the-babel-staff/the_babel_staff_1.jpg',
      'the-babel-staff/the_babel_staff_2.jpg',
      'the-babel-staff/the_babel_staff_3.jpg',
      'the-babel-staff/the_babel_staff_4.jpg',
      'the-babel-staff/the_babel_staff_5.jpg',
    ],
    description_project: 'The Babel Community is the largest coworking and coliving residence brand in France.',
    description_mission: [
      "THE BABEL STAFF est une web-app à destination du staff de la résidence (serveur, cuisine, service ménage ...) qui leur permet de gérer leurs taches journalière sous forme de ToDo. Développement de la totalité de l'application",
      'Design, development and deployment',
    ],
    recommendations: [],
    start: '2018-08-01',
    end: '2019-05-01',
    isVisible: false,
  },
  {
    name: 'Presta diagnostic',
    logo: 'prestadiagnostic',
    color: '#cfe7f8',
    skills: [
      'Javascript',
      'PHP',
      'mySQL',
      'Laravel',
      'jQuery',
      'PHPUnit',
      'Web',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    images: [
      'prestadiagnostic/prestadiagnostic_2.png',
      'prestadiagnostic/prestadiagnostic_1.png',
      'prestadiagnostic/prestadiagnostic_3.png',
    ],
    description_project: '"Prestadiagnostic is an internet platform allowing you to put yourself in direct contact with real estate diagnosticians near you."',
    description_mission: [
      'Development of an algorithm for linking a user and real estate diagnosticians',
      'Development of a property valuation algorithm',
      'Google Analytics integration',
      'Monetico module integration',
      'Design, development and deployment',
    ],
    recommendations: [],
    start: '2020-06-01',
    end: '2021-07-01',
  },
  {
    name: 'Agora',
    logo: 'agora',
    color: '#f9f9f9',
    skills: [
      'Kotlin',
      'Android',
      'Git',
    ],
    companies: [
      'school',
    ],
    url: 'https://github.com/mehdidotcafe/Agora',
    images: [
      'agora/5.png',
      'agora/1.png',
      'agora/2.png',
      'agora/3.png',
      'agora/4.png',
    ],
    description_project: 'Agora is a web and mobile platform whose objective is to connect people with different and complementary skills who want to create new ideas.\nWith Agora, you can build your team around your project, or join a team already existing by offering your know-how.\nThe application provides the necessary tools for the smooth running of a project: a retro-planning, storage, a task manager...',
    description_mission: [
      'Android app development',
      'Development of OAUTH2 authentication and project search forms',
      'Development of project and user pages',
      'Design, development and deployment',
    ],
    recommendations: [],
    start: '2017-09-01',
    end: '2019-03-01',
  },
  {
    name: 'Toocamp',
    logo: 'toocamp',
    color: '#0e4a68',
    skills: [
      'Javascript',
      'NodeJS',
      'mySQL',
      'Web',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    url: 'https://www.toocamp.com/',
    images: [
      'toocamp/toocamp_1.jpg',
      'toocamp/toocamp_2.jpg',
      'toocamp/toocamp_3.jpg',
      'toocamp/toocamp_4.jpg',
      'toocamp/toocamp_5.png',
    ],
    description_project: '"Toocamp is a content and services website dedicated to camping holidays.\nIts mission: to do everything to facilitate the search and then the choice of a campsite for holidaymakers.\nHow? Thanks to content produced by our teams, a selection of promotional offers offered by campsites and tour operators, a search engine to compare most offers on the market, photos, videos, articles, Internet users\' opinions, and finally, thanks to our selection of campsites"',
    description_mission: [
      'Implementation of website internationalization',
    ],
    recommendations: [],
    start: '2018-06-01',
    end: '2018-08-01',
  },
  {
    name: 'Fivorites',
    logo: 'fivorites',
    color: '#FFFFFF',
    skills: [
      'Javascript',
      'NodeJS',
      'mySQL',
      'Web',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    images: [
      'fivorites/fivorites_1.jpg',
      'fivorites/fivorites_2.jpg',
      'fivorites/fivorites_3.jpg',
      'fivorites/fivorites_4.jpg',
    ],
    description_project: '"Have you read a great book, seen a great movie and you want to let your friends know? Create your Top 5, Share it with your friends and find out what they liked!\nFivorites allows you to enter the TOP 5 movies, series, books, music and comics of your life and the moment."',
    description_mission: [
      'Development of social network data acquisition (albums, series) via content fetching scripts on Deezer and iTunes APIs',
    ],
    recommendations: [],
    start: '2018-09-01',
    end: '2018-11-01',
  },
  {
    name: 'The Colivers',
    logo: 'the-colivers',
    color: '#d75347',
    skills: [
      'Javascript',
      'PHP',
      'mySQL',
      'Web',
      'Git',
    ],
    companies: [
      'freelancer',
    ],
    url: 'https://thecolivers.com/',
    images: [
      'the-colivers/the-colivers_1.jpg',
      'the-colivers/the-colivers_2.jpg',
      'the-colivers/the-colivers_3.jpg',
      'the-colivers/the-colivers_4.jpg',
    ],
    description_project: 'THE COLIVERS is a rental agency for shared apartments.',
    description_mission: [
      "Rebranding and redesign of the old \"L'AUBERGE\" website towards the new brand <a href='https:/thecolivers.com' target='_blank'>THE COLIVERS</a>",
      'Design, development and deployment of the website',
    ],
    recommendations: [],
    start: '2018-02-01',
    end: '2018-03-01',
  },
  {
    name: 'DeezDL',
    logo: 'deezdl',
    color: '#1e2121',
    skills: [
      'Javascript',
      'Chrome',
      'Git',
      'Web',
    ],
    companies: [
      'freelancer',
    ],
    url: 'https://chrome.google.com/webstore/detail/deezdl/ojkgeljdeihmnoamceidbdlcfogjlmmg',
    images: [
      'deezdl/1.png',
      'deezdl/2.png',
    ],
    description_project: '<div>Development of a Google Chrome extension that allows you to download music from Deezer on an external site.</div>',
    recommendations: [],
    isVisible: false,
    start: '2015-03-01',
    end: '2015-05-01',
  },
]

export default projects
