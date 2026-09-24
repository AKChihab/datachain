/**
 * Version française.
 * Le ton suit le CV de mai (Portfolio CA Data Analyst Fr).
 * Les faits suivent la version anglaise, y compris Allianz Benelux,
 * le retail, et la modélisation causale, absents de ce PDF.
 */

export const profileFr = {
  name: "Chihab Akaoui",
  company: "Datachain",
  role: "Data scientist senior et analytics engineer",
  location: "Lille, France",
  email: "akaoui1993@gmail.com",
  calendar: "",
  linkedin: "https://www.linkedin.com/in/chihab-akaoui/",
  github: "https://github.com/AKChihab",
  cv: "chihab-akaoui-cv-fr.pdf",
  photo: "",
  headline: "Je construis l'analyse qu'une équipe métier peut utiliser.",
  lede: "Je travaille avec le métier sur la décision, et je construis la donnée derrière. Le travail actuel porte sur la valeur client et les promotions dans le retail. Avant ça: le risque crédit, le CRM bancaire, et les flottes connectées.",
  about: [
    "Je suis data scientist et analytics engineer à Lille. Je préfère une équipe mixte, proche de la décision, à une équipe plateforme qui ne livre que des pipelines.",
    "Je reste du côté engineering de la même question. SQL et Python pour la poser. dbt, Airflow ou Spark pour que la donnée soit fiable. Un modèle quand il change une décision. Power BI ou Streamlit pour que l'équipe s'en serve.",
    "En ce moment j'utilise aussi les LLM sur des tâches concrètes: assistants, RAG, et lecture de code historique. Le MLOps, c'est la partie que j'étends volontairement.",
  ],
  now: {
    title: "Data scientist",
    company: "Leroy Merlin",
    meta: "Lille, depuis mai 2025",
    focus:
      "Valeur client, comportement d'achat, marketing mix et impact des promotions, avec la data science ADEO.",
  },
  facts: [
    {
      label: "Depuis 2018",
      text: "Du travail data appliqué, du marketing au risque crédit et à la mobilité.",
    },
    {
      label: "3 secteurs",
      text: "Retail et e-commerce, banque et assurance, énergie et mobilité.",
    },
    {
      label: "De bout en bout",
      text: "Pipelines, modèles, et le tableau de bord qu'une équipe peut ouvrir.",
    },
  ],
  expertise: [
    {
      title: "Solutions analytiques",
      text: "Modélisation statistique, analyse comportementale et modèles prédictifs pour le marketing, le CRM et l'e-commerce. LTV, appétence, segmentation, uplift, parcours.",
    },
    {
      title: "Data science marketing",
      text: "LTV, impact des promotions, marketing mix, revenu incrémental, performance des campagnes et contribution des médias.",
    },
    {
      title: "Data engineering",
      text: "ETL avec dbt, Airflow et Spark. Environnements GCP et Azure construits pour l'analytique et pour les pipelines ML.",
    },
    {
      title: "Tableaux de bord",
      text: "Power BI et Streamlit, pour qu'une équipe non technique suive la performance sans attendre un notebook.",
    },
    {
      title: "CRM et digital",
      text: "Ciblage, fidélisation, web analytics et suivi de campagnes. Adobe Campaign, Adobe Analytics, Google Analytics.",
    },
    {
      title: "Modélisation causale",
      text: "Approches causales, y compris par graphes, pour estimer l'impact commercial et promotionnel avant de figer la dépense.",
    },
    {
      title: "Machine learning et LLM",
      text: "ML classique, plus du fine-tuning, du RAG et du travail de prompt avec Hugging Face, OpenAI et Azure AI Search.",
    },
  ],
  industries: [
    {
      name: "Retail et e-commerce",
      text: "Connaissance client, parcours d'achat, promotions, CRM, média, LTV, segmentation, scoring.",
    },
    {
      name: "Banque et assurance",
      text: "Risque de crédit, CRM, analytique client, migration SAS, et lecture assistée des flux historiques.",
    },
    {
      name: "Énergie et mobilité",
      text: "Gestion de flotte, véhicules connectés, bornes de recharge, et la donnée derrière l'électrification.",
    },
  ],
  experience: [
    {
      title: "Data scientist",
      company: "Leroy Merlin",
      logo: "logos/leroy-merlin.svg",
      logoDark: "logos/leroy-merlin-dark.svg",
      current: true,
      start: "mai 2025",
      end: "aujourd'hui",
      where: "Lille",
      summary:
        "Connaissance client et marketing: valeur, comportement d'achat, performance média et impact des promotions, en lien avec la data science ADEO.",
      highlights: [
        "Interlocuteur data dans l'équipe marketing, entre le métier, la data et les partenaires externes.",
        "Scores de LTV, d'appétence, de segmentation, d'uplift et de réponse aux campagnes.",
        "Mix marketing pour estimer le revenu incrémental par canal média.",
        "Modélisation causale de l'investissement promotionnel, y compris des approches par graphes.",
        "Modèles de recommandation et détection des parcours d'achat.",
        "Power BI et Data Studio, plus le suivi de l'industrialisation et du coût GCP.",
      ],
      stack:
        "Python, SQL, TensorFlow, scikit-learn, GCP (BigQuery, Vertex AI, Compute Engine, GCS), Power BI, Data Studio, Git, MLflow, dbt, Terraform",
    },
    {
      title: "Data engineer et data scientist",
      company: "Allianz Benelux",
      logo: "logos/allianz.svg",
      start: "oct. 2025",
      end: "janv. 2026",
      where: "À distance",
      summary:
        "Modernisation des flux SAS historiques: lire les programmes, reconstruire le lignage, et préparer une cible Snowflake et dbt.",
      highlights: [
        "Traduction des programmes SAS, macros, entrées et sorties vers Snowflake et dbt.",
        "Revue du lignage et des dépendances pour fixer l'ordre de migration.",
        "Lecture du SAS assistée par IA, avec OpenAI, pour les métadonnées et les dépendances.",
        "Principes de validation pour comparer les sorties Snowflake et dbt avec le SAS.",
      ],
      stack: "Python, SQL, SAS, dbt, Snowflake, Git, Azure, OpenAI",
    },
    {
      title: "Analyste et ingénieur data",
      company: "TotalEnergies",
      logo: "logos/totalenergies.png",
      start: "mai 2023",
      end: "janv. 2025",
      where: "Lille",
      summary:
        "Données de flotte et de véhicules connectés pour la transition énergétique: pipelines, tableaux de bord opérationnels, et modèles de trajets, de consommation et de recharge.",
      highlights: [
        "ETL avec dbt et Airflow, exploration dans Azure Synapse, sur un montage data fabric.",
        "Streamlit et Power BI pour les véhicules connectés, le suivi des partenaires et la facturation.",
        "Ingestion entre AWS SQS et Azure Service Bus.",
        "Modèles de trajets, de consommation, de profils de recharge et d'autonomie, utilisés pour la fraude et l'électrification des flottes.",
        "APIs, et migration des données partenaires (constructeurs et bornes de recharge).",
      ],
      stack:
        "Python, SQL, Databricks, Power BI, APIs, dbt, Azure (Synapse, Key Vault, Data Factory), Airflow, SQS, Git",
    },
    {
      title: "Expert data analyst",
      company: "Crédit Agricole du Nord",
      logo: "logos/credit-agricole.svg",
      start: "juil. 2022",
      end: "avr. 2023",
      where: "Lille",
      summary:
        "Performance marketing et scores clients pour la banque régionale, plus une migration SAS et du datamart.",
      highlights: [
        "Tableaux de bord automatisés pour le trafic web et l'activité commerciale.",
        "Scores cibles sur l'intérêt client et l'attrition.",
        "Lecture de la base client, de l'intensité relationnelle, des leads et de la satisfaction.",
        "Migration des processus SAS et du datamart.",
      ],
      stack: "SAS, SQL, Python, MicroStrategy, Excel",
    },
    {
      title: "Data analyst et scientist",
      company: "Banque Populaire du Nord",
      logo: "logos/banque-populaire.svg",
      start: "oct. 2018",
      end: "juin 2022",
      where: "Lille",
      summary:
        "Analytique client, digitale et CRM pour la banque de détail, du scoring à la mesure des campagnes.",
      highlights: [
        "Modèles prédictifs: scoring, segmentation, NLP, et un moteur de recommandation.",
        "Campagnes digitales avec tests A/B et web analytics dans Adobe Campaign et Adobe Analytics.",
        "Travail sur la performance des sollicitations pour les campagnes CRM.",
        "Rapports pour les décideurs, et formations dans la communauté data et marketing.",
      ],
      stack: "SAS, SQL, Python, Adobe Campaign, Adobe Analytics, Power BI, Git, Excel",
    },
    {
      title: "Ingénieur statisticien",
      company: "Cofidis",
      logo: "logos/cofidis.svg",
      start: "mars 2018",
      end: "sept. 2018",
      where: "Lille",
      summary:
        "Octroi de crédit côté risque partenaires: acceptation, exposition, et séparation du risque client et du risque fournisseur.",
      highlights: [
        "Un dispositif d'octroi qui équilibre taux d'acceptation et exposition au risque.",
        "Segmentation du risque des partenaires magasins, et métriques pour séparer le risque client du risque fournisseur.",
      ],
      stack: "SAS, SQL, R, Excel, Qlik",
    },
  ],
  earlier: [
    {
      title: "Évaluateur data",
      company: "Appen",
      when: "janv. 2018 - juin 2019",
      where: "À distance",
      summary: "Évaluation de la pertinence des publicités Facebook, et retours pour le ciblage.",
    },
    {
      title: "Agent commercial",
      company: "Makinox SARL",
      when: "mai 2015 - août 2016",
      where: "Nador",
      summary: "Suivi de production, relations clients, et coordination fournisseurs. Odoo et Excel.",
    },
  ],
  projects: [
    {
      period: "2024 - 2025",
      title: "Agents IA et applications LLM",
      text: "Agents avec OpenAI, Microsoft, Hugging Face et LangChain, déployés sur Azure pour automatiser des tâches et améliorer l'interaction avec les utilisateurs.",
      links: [
        {
          label: "Notebooks LangChain",
          href: "https://github.com/AKChihab/LangChain-App",
        },
        {
          label: "Notebooks RAG",
          href: "https://github.com/AKChihab/RAG",
        },
      ],
    },
    {
      period: "2020 - 2023",
      title: "Bot de trading crypto",
      text: "Un bot Python sur des données de marché crypto en direct, avec des backtests automatisés.",
      links: [],
    },
    {
      period: "2018 - 2021",
      title: "Tableau de bord fiscal crypto",
      text: "Un tableau de bord qui transforme l'activité crypto en déclaration fiscale.",
      links: [],
    },
  ],
  projectNote: "Aussi des petites boutiques sur Shopify et Etsy.",
  stack: [
    {
      group: "Langages",
      items: ["Python", "SQL", "SAS", "R"],
    },
    {
      group: "Pipelines",
      items: ["dbt", "Airflow", "Spark", "Databricks", "Azure Data Factory"],
    },
    {
      group: "Cloud",
      items: [
        "BigQuery",
        "Vertex AI",
        "Dataflow",
        "Azure Synapse",
        "Azure AI Foundry",
        "Snowflake",
        "AWS S3",
        "SQS",
        "Docker",
      ],
    },
    {
      group: "Décider et livrer",
      items: [
        "Power BI",
        "Streamlit",
        "Data Studio",
        "MicroStrategy",
        "MLflow",
        "GitHub Actions",
        "Terraform",
      ],
    },
  ],
  education: [
    {
      years: "2016 - 2018",
      title: "Master en ingénierie statistique",
      school: "Faculté des Sciences de Lille",
    },
    {
      years: "2014 - 2015",
      title: "Licence en mathématiques appliquées",
      school: "Faculté de Casablanca",
    },
    {
      years: "2011 - 2013",
      title: "Classes préparatoires MP",
      school: "Oujda",
    },
  ],
  certifications: [
    { year: "2025", name: "BigQuery for Data Analysts, Google Cloud" },
    { year: "2025", name: "Multi AI Agent Systems with CrewAI, DeepLearning.AI" },
    { year: "2025", name: "Advanced Data Engineering, Coursera" },
    { year: "2025", name: "Operationalizing LLMs on Azure, Coursera" },
    { year: "2025", name: "Introduction to Generative AI, Coursera" },
    { year: "2024", name: "Python Essentials for MLOps, Coursera" },
    { year: "2024", name: "Machine Learning in Production, DeepLearning.AI" },
    { year: "2022", name: "GCP Modernizing Data Lakes and Data Warehouses, Coursera" },
    { year: "2022", name: "GCP Smart Analytics, Machine Learning and AI, Coursera" },
    { year: "2022", name: "Blockchain Scalability and Distributed Systems, Coursera" },
    { year: "2022", name: "Introduction to Blockchain for Financial Services, Coursera" },
    { year: "2022", name: "Bitcoin and Cryptocurrency Technologies, Coursera" },
    { year: "2021", name: "AWS Cloud Technical Essentials, Coursera" },
    { year: "2021", name: "Supply Chain Finance and Blockchain Technology, Coursera" },
    { year: "2021", name: "Python for Financial Analysis and Algorithmic Trading, Udemy" },
    { year: "2020", name: "Scala and Spark for Big Data and Machine Learning, Udemy" },
    { year: "2020", name: "Python for Data Science and Machine Learning Bootcamp, Udemy" },
    { year: "2019", name: "Machine Learning, Coursera" },
    { year: "2019", name: "Foundations of Marketing Analytics, Coursera" },
    { year: "2019", name: "Foundations of Strategic Business Analytics, Coursera" },
    { year: "2018", name: "Python Core, Sololearn" },
    { year: "2018", name: "SQL, Sololearn" },
  ],
  languages: [
    { name: "Français", level: "Bilingue" },
    { name: "Arabe", level: "Bilingue" },
    { name: "Anglais", level: "Courant" },
    { name: "Espagnol", level: "Basique" },
  ],
  activities: "Trail, boxe, et marchés.",
  ui: {
    skip: "Aller au contenu",
    nav: [
      { id: "work", label: "Expérience" },
      { id: "expertise", label: "Expertise" },
      { id: "projects", label: "Projets" },
      { id: "background", label: "Parcours" },
      { id: "contact", label: "Contact" },
    ],
    bring: "Ce que j'apporte",
    work: "Expérience",
    earlier: "Avant",
    how: "Comment je travaille",
    projects: "Projets",
    projectsLead: "À côté des missions client, y compris les marchés et la crypto.",
    background: "Parcours",
    education: "Formation",
    languages: "Langues",
    certificates: "Certificats",
    earlierCertificates: "Certificats plus anciens",
    contact: "Contact",
    contactLead: "Pour un poste, une mission, ou un échange technique.",
    download: "Télécharger le CV",
    downloadName: "Chihab-Akaoui-CV-FR.pdf",
    flowRaw: "Raw",
    flowInsight: "Insight",
    book: "Réserver 15 min",
    bookHint: "Prochains jours ouvrés, 12:00-14:00 ou 17:00-19:00. Je confirme par e-mail.",
    bookClose: "Fermer",
    bookSubject: "Appel de 15 min",
    bookBody: "Bonjour Chihab,\n\nJe voudrais un appel de 15 min.\n\n",
    email: "E-mail",
    linkedin: "LinkedIn",
    github: "GitHub",
    themeLight: "Passer en clair",
    themeDark: "Passer en noir",
    pageTitle: "Chihab Akaoui, data scientist senior",
    pageDescription:
      "Chihab Akaoui est data scientist senior et analytics engineer à Lille. Il travaille avec le métier sur la décision, du retail au risque crédit et aux flottes connectées.",
  },
};
