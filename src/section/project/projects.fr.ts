import type { Project } from '@section/project/Project'

const projects: Project[] = [
  {
    name: 'arte',
    logo: 'arte',
    logoType: 'svg',
    color: '#fd4600',
    skills: [
      'React',
      'Next',
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
    description_project: '"Média européen public responsable, ARTE s\'engage sur des thématiques chères aux citoyens et citoyennes d\'Europe : la lutte contre les inégalités, qu’elles soient sociales, culturelles, économiques, géographiques, liées au genre ou au handicap, ainsi que le développement durable."',
    description_mission: [
      'Refonte du frontend du site internet <a href=\'https://my.arte.tv\' target=\'_blank\'>my.arte.tv</a> en collection de composant',
      'Développement et optimisation de l\'API utilisateur (historique de visualisation, suggestion de contenu, édition de compte ...) traitant 3 millions requêtes / jour',
      'Migration du système d\'authentification (IAM, OPENID) ARTE de LoginRadius vers Keycloak',
      'Contribution à la stratégie de mise en cache des contenus, de design de base de données, d\'architecture logicielle et de qualité de code',
      'Optimisation du player vidéo utilisé sur <a href=\'https://arte.tv\' target=\'_blank\'>arte.tv</a>',
      'Accompagnement d\'une équipe externe en charge de la refonte de l\'API utilisateur vers Symfony',
    ],
    recommendations: [],
    start: '2020-08-01',
    end: '2022-04-01',
  },
  {
    name: 'kwote',
    logo: 'kwote',
    logoType: 'svg',
    color: '#987654',
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
    description_project: '"Kwote est un gestionnaire de risque à destination des ETI et PME.\nIl s\'appuie sur les data des entreprises, grâce à sa connexion avec leurs systèmes d\'information offrant à l\'utilisateur - directeur financier, credit manager ou dirigeant - des outils de gestion du risque client et de pilotage de la performance des contrats d\'assurance-crédit associés à une brique de services dont des solutions de financement disruptives, de recouvrement en ligne, du scoring basé sur le comportement de paiement..."',
    description_mission: [
      'Développement de "COLLECT", un module de relance de factures impayées comportant un système de planification d\'actions de scénarios de relance (email, sms, courrier ...) ainsi qu\'un éditeur de modèle de relance. Le module traite 10 000 actions / mois en moyenne',
      'Divers remaniements techniques visant à améliorer la testabilité, la scalabilité ainsi que la qualité du code',
      'Développement d\'un module de reporting agrégeant des données clés pour les clients',
      'Développement d\'un module d\'espace de travail collaboratif',
      'Développement de divers connecteurs vers des APIs externes (ATRADUIS, Euler Hermes)',
      'Diverses montées de version d\'Angular',
    ],
    recommendations: [],
    start: '2018-08-01',
    end: '2021-10-01',
  },
  {
    name: 'pfizer',
    logo: 'centaur',
    logoType: 'svg',
    color: '#FFFFFF',
    skills: [
      'Typescript',
      'Javascript',
      'React',
      'Nest',
      'NodeJS',
      'AWS',
      'neo4j',
      'mySQL',
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
    description_project: 'Pfizer est une entreprise pharmaceutique internationale.\n\nDéveloppement d’une plateforme permettant la mise en place et le suivi d’essais cliniques à travers le monde via l’analyse, la consolidation et la restitution graphique de données clés générées par IA.',
    description_mission: [
      'Développement de nouveaux modules accompagnant les utilisateurs dans leur prise de décision au quotidien',
      'Refonte de l’architecture cloud de la plateforme dans le but d’améliorer sa fiabilité ainsi que ses performances',
      'Optimisation de base de données (normalisation, indexation …) contribuant à améliorer ses performances',
      'Mise en place d’outils DevOps (monitoring, alerting, dashboards …) ayant pour but de baisser le taux d’erreur ainsi que leur délai de résolution',
      '',
      'Développement de "Simple Search", un moteur de recherche alimenté par IA permettant aux utilisateurs de visualiser des données clées provenant de multiples sources à partir d\'une recherche textuelle',
      'Réalisation et application d\'un audit technique visant à baisser grandement la dette technique, améliorer la qualité et lisibilité du code ainsi que l\'architecture logicielle',
      'Refonte et amélioration de plusieurs interfaces utilisateurs visant à simplifier l\'ergonomie et l’expérience utilisateur',
      'Développement de fonctionnalités sur divers modules de la plateforme dans le but d’améliorer la prise de décision des utilisateurs au quotidien',
    ],
    recommendations: [],
    start: '2022-04-01',
    end: '2023-12-23',
  },
  {
    name: 'Arkema',
    logo: 'arkema',
    logoType: 'svg',
    color: '#299d80',
    skills: [
      'AWS',
      'NodeJS',
      'Typescript',
      'Javascript',
      'Terraform',
      'Gitlab',
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
    description_project: 'Arkema est une entreprise internationale spécialisée dans les produits chimiques.\n\nDéveloppement d’architectures cloud ETL permettant l\'échange d\'informations clés entre différentes applications de l\'entreprise à travers le monde.',
    description_mission: [
      'Développement et maintien de "Magellan", un projet en charge de la supply-chain de l\'entreprise traitant plus d\'1 million de message par mois',
      'Gestion complète du projet, allant de la prise en compte des besoins utilisateurs, aux choix techniques ainsi qu\'à leur implémentation',
      'Contribution à l\'architecture technique cloud des différents flux de l\'entreprise',
      'Configuration d\'outils DevOps afin de monitorer des indicateurs clés (taux de succèss, temps de traitement ...)',
    ],
    recommendations: [],
    start: '2023-05-22',
    end: '2023-08-04',
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
    description_project: "\"Le site matemeup.com a pour but de centraliser les outils nécessaires aux joueurs e-sport et plus globalement aux joueurs de jeux vidéos, de faciliter la création de liens et les rencontres tout en promouvant la sphère gaming qui s'y rapporte (diffuseurs, casteurs, vidéastes...).\"",
    description_mission: [
      "Développement d'un outil de matching de joueur qui comporte un système de salon textuel et vocal avec la possibilité d'en créer, modifier et en supprimer",
      "Développement d'un chat en temps réel",
      "Développement d'un fil d'actualité où les utilisateurs peuvent publier du texte et des images",
      'Conception, développement et mise en production',
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
    description_project: "\"Le site matemeup.com a pour but de centraliser les outils nécessaires aux joueurs e-sport et plus globalement aux joueurs de jeux vidéos, de faciliter la création de liens et les rencontres tout en promouvant la sphère gaming qui s'y rapporte (diffuseurs, casteurs, vidéastes...).\"",
    description_mission: [
      "Développement d'un fil d'actualité où les utilisateurs peuvent publier du texte et des images",
      "Développement d'un chat en temps réel",
      "Développement d'un système d'authentification",
      'Conception, développement et mise en production des applications iOS et Android',
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
      'Github',
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
    description_project: "Cloudindus est un superviseur industriel permettant la configuration d'objets IoT. L'application permet à des particuliers aussi bien qu'à des professionnels d’interagir et consulter l'état de leurs objets connectés entre eux sur leur réseau. Les interactions entre les objets peuvent être définies et visualisées par l'utilisateur via l'interface de l'application.",
    description_mission: [
      "Réalisation d'un moteur permettant la mise à jour récursive de l'état d'un objet connecté selon l'état d'autres objets",
      "Developpement du systeme de visualisation l'état d'un objet connecté via une représentation graphique (SVG) sur l'application",
      "Développement de la gestion de profil de l'utilisateur",
      "Mise en place de l'internationalisation du site internet",
      'Conception, développement et mise en production',
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
    url: 'https://thebabelcommunity.com',
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
    description_project: 'The Babel Community est la plus grande marque de résidence de coworking et coliving en France.',
    description_mission: [
      'Mise en place de la présence numérique de la marque The Babel Community',
      'Développement et déploiement du site vitrine de la marque <a href="https://thebabelcommunity.com" target="_blank">The Babel Community</a>',
      'Développement et déploiement d\'une webapp permettant d\'interagir avec les différents services de la résidence incluant notamment la réservation d\'une table au restaurant ou d\'un cours de sport',
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
    description_project: 'The Babel Community est la plus grande marque de résidence de coworking et coliving en France.',
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
      'AWS',
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
    description_project: "Album Quiz | Rap Français est un quiz qui consiste à trouver un artiste depuis un titre d'album.<br/>Le jeu est centré autour de la musique urbaine Française.<br/>Plus de 3500 albums disponibles à travers 30 ans.",
    description_mission: [
      'Développement du jeu sur Android, iOS',
      'Conception, développement et mise en production du jeu',
    ],
    recommendations: [],
    start: '2019-03-01',
    end: '2019-11-01',
  },
  {
    name: 'AXIS',
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
    description_project: "L'Intranet AXIS est un outil utilisé par la totalité des employés d'AXIS Immobilier pour centraliser les informations.\nIl permet le suivi des clients de la première prise de contact jusqu'à la réservation et facturation d'un logement.",
    description_mission: [
      "Refonte graphique de l'ERP",
      'Développement de systèmes de facturation, suivi de client, suivi de stock, réservation de logement',
      "Diverses améliorations sur l'ERP",
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
    description_project: "Foody basket est un jeu mobile de junk-food jouant au basketball. Le jeu possède plus d'une dizaine de personnages, tous basés de célèbres plats de fast-food et entièrement customisables. Plusieurs modes de jeu sont disponibles, allant du match simple à un système de championnat.",
    description_mission: [
      'Développement du jeu sur Android, iOS et Windows',
      'Conception, développement et mise en production du jeu',
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
    description_project: 'The Babel Community est la plus grande marque de résidence de coworking et coliving en France.',
    description_mission: [
      "THE BABEL STAFF est une web-app à destination du staff de la résidence (serveur, cuisine, service ménage ...) qui leur permet de gérer leurs taches journalière sous forme de ToDo. Développement de la totalité de l'application",
      'Conception, développement et mise en production',
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
    description_project: '"Prestadiagnostic est une plateforme internet vous permettant une mise en relation directe avec des diagnostiqueurs immobiliers proches de chez vous."',
    description_mission: [
      'Développement d\'un algorithme de mise en relation entre un utilisateur et des diagnostiqueurs immobiliers',
      'Développement d\'un algorithme d\'estimation de bien',
      'Intégration Google Analytics',
      'Intégration module Monetico',
      'Conception, développement et mise en production',
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
    description_project: "Agora est une plateforme web et mobile dont l'objectif est de mettre en relation des personnes qui ont des compétences différentes et complémentaires voulant créer de nouvelles idées. Avec Agora, vous pouvez former votre équipe autour de votre projet, ou rejoindre une équipe déjà formée en proposant votre savoir-faire.\nL'application fournit les outils nécessaires pour le bon déroulement d'un projet : un rétro-planning, du stockage, un gestionnaire de tâches ...",
    description_mission: [
      "Développement de l'application Android",
      "Développement des formulaires d'authentification OAUTH2 et de recherche de projet",
      "Développement des pages de projets et d'utilisateurs",
      'Conception, développement et mise en production',
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
    description_project: "\"Portail du groupe Webedia, Toocamp est un site de contenus et services aux internautes, dédié aux vacances en camping.\nSa mission : tout faire pour faciliter la recherche puis le choix d'un camping pour les vacanciers.\nComment ? Grâce à des contenus produits par nos équipes, à une sélection des offres promotionnelles proposées par les campings et les tours opérateurs, à un moteur de recherche pour comparer la plupart des offres du marché, à des photos, vidéos, articles, avis internautes, et enfin grâce à nos sélections de campings.\"",
    description_mission: [
      "Mise en place de l'internationalisation du site internet",
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
    description_project: '"Vous avez lu un super livre, vu un super film et vous avez envie de le faire savoir à vos amis ? Créez votre Top 5, Partagez-le avec vos amis et découvrez ce qu’ils ont aimés !\nFivorites vous permet de saisir le TOP 5 films, séries, livres, musiques et BD de votre vie et du moment."',
    description_mission: [
      'Réalisation de la data acquisition des (albums, séries) du réseau social via des scripts de récupération de contenu sur les API Deezer et iTunes',
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
    description_project: 'THE COLIVERS est une agence de location d\'appartement en colocation.',
    description_mission: [
      'Rebranding et refonte du design de l\'ancien site L\'AUBERGE vers la nouvelle marque <a href=\'https:/thecolivers.com\' target=\'_blank\'>THE COLIVERS</a>',
      'Conception, développement et mise en production du site internet',
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
    description_project: "<div>Réalisation d'une extension Google Chrome qui permet de télécharger de la musique de Deezer sur un site externe</div>",
    recommendations: [],
    isVisible: false,
    start: '2015-03-01',
    end: '2015-05-01',
  },
]

export default projects
