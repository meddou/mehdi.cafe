import type { Experience } from '@section/experience/Experience'

const experiences: Experience[] = [
  {
    title: 'Freelancer', start: 2017, end: null, subtitle: 'Marseille, France', description: "Développeur passionné titulaire d'un master en informatique et entrepreneur depuis 2017, je suis expert dans le développement d'applications web et de site internet (intranet, application lourde, site à haut volume ...). Je vous accompagne dans la réalisation de votre projet de sa conception à sa mise en production.<br />Je porte un vrai intérêt sur les problématiques d'ergonomie utilisateur, d'optimisation de l'application ainsi que le respect des bonnes pratiques techniques, du clean-code et du TDD.", logo: 'freelance.png', company: 'freelance',
  },
  {
    title: 'Certifié AWS x4', start: 2022, description: '<a target="_blank" href="https://www.credly.com/badges/be7e5536-9e30-43c2-a198-4367d5f97615/public_url">AWS Certified Solutions Architect – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/e749a2f6-1fb0-4f6e-a8fb-5db2e02d9181/public_url">AWS Certified SysOps Administrator – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/a2dc8af6-5098-45a8-8571-68be1e3e2014/public_url">AWS Certified Developer – Associate</a><br /><a target="_blank" href="https://www.credly.com/badges/3f7e4cf4-adec-4b31-9a4d-19e31d12533d/public_url">AWS Certified Cloud Practitioner</a>', logo: 'aws.png', company: 'freelance',
  },
  {
    title: 'TOEIC', start: 2022, description: '970 / 990 <br /><br />  <a target="_blank" href="https://www.etsglobal.org/fr/en/digital-score-report/AF2990DE526BA7ABBAD8E904C93630088612FAFE5CBBFB8C9CBC8F31561462CCNHBITGZ0N0JXTVhOUkN0WHF1ZldhTXhBVHNoZ2lWS2hKQU9rUHJGRERpZyt4V3dp">Certification</a>', logo: 'graduation.png', company: 'freelance',
  },
  {
    title: 'Master en informatique', start: 2019, subtitle: 'Epitech Paris, France', description: "Obtention d'un Master en Informatique à l'issue de ma dernière année à Epitech Paris.\nRéalisation de la version Android d'<a href='/work/Agora'>AGORA</a>, projet de fin d'études qui est une application de mise en relation entre un porteur de projet et un talent pour concrétiser une idée.", logo: 'graduation.png', company: 'school',
  },
  {
    title: 'Epitech Barcelona', start: 2017, end: 2018, subtitle: 'Barcelone, Espagne', description: "Année d'ouverture sur le monde professionnel centrée autour du Marketing et de la Finance à Epitech Barcelone.\nRéalisation d'un projet de fin d'année visant à optimiser le trafic urbain via des sensors placés sur des feux rouges.\nUtilisation de Haskell pour le développement de l'algorithme.", logo: 'graduation.png', company: 'school',
  },
  {
    title: 'Axis Immobilier', start: 2017, subtitle: 'Marseille, France', description: "Développement d'un ERP interne utilisé par l'ensemble des employés de l'entreprise.\nIl centralise les informations de la société et facilite la communication entre les pôles allant de la première prise de contact du client à la facturation du locataire.\nUtilisation de PHP, MySQL et Javascript natif.", logo: 'axis.png', company: 'axis', projectUrl: '/work/Intranet%20AXIS', isVisible: false,
  },
  {
    title: 'Bachelor en informatique', start: 2017, subtitle: 'Epitech Marseille, France', description: "Epitech est une école d'informatique.\nSa pédagogie alternative par l'immersion et et centré autour de projets m'a permit d'être autonome et d'apprendre à apprendre afin d'évoluer en premanance dans un secteur qui change tout autant.\nPremière année: Réalisation de projets en ligne de commande en C.\nDeuxième année: Réalisation de projets (Algorithmes, Jeux Vidéos) incluants Threading, réseau et GUI en C et C++.\nTroisième année: Réalisation de projets avancés (Logiciel VOIP, Jeux Vidéo 3D en réseau, Intelligences artificielles) en C, C++, QT et de projets plus simples (Algorithmes, Jeux 2D) en Java, OCAML.", logo: 'graduation.png', company: 'school',
  },
  {
    title: 'Cloudindus', start: 2015, end: 2017, subtitle: 'Marseille, France', description: "Développement d'un superviseur industriel IoT qui permet d'interagir et consulter ses objets connectés.\nUtilisation de MEAN Stack (MongoDB, Express, AngularJS, Node.js) pour le développement.", logo: 'cloudindus.png', company: 'cloudindus', projectUrl: '/work/Cloudindus', isVisible: false,
  },
  {
    title: 'Lycée Thiers', start: 2014, subtitle: 'Marseille, France', description: 'Baccalauréat Scientifique.', logo: 'graduation.png',
  },
]

export default experiences
