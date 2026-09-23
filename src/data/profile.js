/**
 * Portfolio content.
 * Edit this file and save. The page reads everything from here.
 * Wording follows the latest CV: Data Portfolio CA DS EN (PDF dated May 2026).
 * Put a portrait in public/ and set photo to "/photo.jpg", or leave it empty.
 */

export const profile = {
  name: "Chihab Akaoui",
  role: "Senior Data Scientist and Analytics Engineer",
  location: "Lille, France",
  email: "akaoui1993@gmail.com",
  // Paste a Calendly or Cal.com link here to replace the Google Calendar invite.
  calendar: "",
  linkedin: "https://www.linkedin.com/in/chihab-akaoui/",
  github: "https://github.com/AKChihab",
  cv: "chihab-akaoui-cv.pdf",
  photo: "",
  headline: "I build customer knowledge a marketing team can use.",
  lede: "I work on customer knowledge for marketing and retail: who is valuable, who is ready to buy, which media pays back, and what a promotion actually changes.",
  about: [
    "I am a data scientist and analytics engineer in Lille. The core of the work is lifetime value, appetite scoring, marketing mix, and the incremental effect of promotions.",
    "I stay on the engineering side of the same question. SQL and Python to frame it. dbt, Airflow or Spark so the data can be trusted. A model when it changes a decision. Power BI or Streamlit so the team can use the result.",
    "Lately I also use LLMs on concrete tasks: assistants, RAG, and reading legacy code. MLOps is the part I am extending on purpose.",
  ],
  now: {
    title: "Data Scientist",
    company: "Leroy Merlin",
    meta: "Lille, since May 2025",
    focus:
      "Customer value, purchase behavior, marketing mix, and promotional impact, with ADEO data science.",
  },
  facts: [
    {
      label: "Since 2018",
      text: "Applied data work across marketing, credit risk, and mobility.",
    },
    {
      label: "3 industries",
      text: "Retail and e-commerce, banking and insurance, energy and mobility.",
    },
    {
      label: "End to end",
      text: "Pipelines, models, and the dashboard a team can actually open.",
    },
  ],
  expertise: [
    {
      title: "Analytical solutions",
      text: "Statistical modeling, behavioral analysis, and predictive models for marketing, CRM, and e-commerce. LTV, appetite, segmentation, uplift, journeys.",
    },
    {
      title: "Marketing data science",
      text: "Customer lifetime value, promotional impact, marketing mix, incremental revenue, campaign performance, and media contribution.",
    },
    {
      title: "Data engineering",
      text: "ETL with dbt, Airflow, and Spark. GCP and Azure environments built for analytics and for ML pipelines.",
    },
    {
      title: "Dashboards",
      text: "Power BI and Streamlit, built so a non-technical team can follow performance without waiting on a notebook.",
    },
    {
      title: "CRM and digital",
      text: "Targeting, retention, web analytics, and campaign tracking. Adobe Campaign, Adobe Analytics, Google Analytics.",
    },
    {
      title: "Causal modeling",
      text: "Causal approaches, including graph-based models, to estimate commercial and promotional impact before the spend is locked.",
    },
    {
      title: "Machine learning and LLMs",
      text: "Classical ML, plus fine-tuning, RAG, and prompt work with Hugging Face, OpenAI, and Azure AI Search.",
    },
  ],
  industries: [
    {
      name: "Retail and e-commerce",
      text: "Customer knowledge, purchase journeys, promotions, CRM, media, LTV, segmentation, scoring.",
    },
    {
      name: "Banking and insurance",
      text: "Credit risk, CRM, customer analytics, SAS migration, and AI-assisted reading of legacy flows.",
    },
    {
      name: "Energy and mobility",
      text: "Fleet management, connected vehicles, charging stations, and the data behind electrification.",
    },
  ],
  experience: [
    {
      title: "Data Scientist",
      company: "Leroy Merlin",
      logo: "logos/leroy-merlin.svg",
      logoDark: "logos/leroy-merlin-dark.svg",
      current: true,
      start: "May 2025",
      end: "Present",
      where: "Lille",
      summary:
        "Customer knowledge and marketing: value, purchase behavior, media performance, and promotional impact, in contact with ADEO data science.",
      highlights: [
        "Point of contact on data inside the marketing team, between business, data, and external partners.",
        "Scores for lifetime value, appetite, segmentation, uplift, and campaign response.",
        "Marketing mix modeling to estimate incremental revenue by media channel.",
        "Causal modeling of promotional investment, including graph-based approaches.",
        "Recommendation models and purchase-journey detection.",
        "Power BI and Data Studio, plus follow-up on industrialisation and GCP cost.",
      ],
      stack:
        "Python, SQL, TensorFlow, scikit-learn, GCP (BigQuery, Vertex AI, Compute Engine, GCS), Power BI, Data Studio, Git, MLflow, dbt, Terraform",
    },
    {
      title: "Data Engineer and Data Scientist",
      company: "Allianz Benelux",
      logo: "logos/allianz.svg",
      start: "Oct 2025",
      end: "Jan 2026",
      where: "Remote",
      summary:
        "Modernisation of legacy SAS flows: read the programs, rebuild the lineage, and prepare a Snowflake and dbt target.",
      highlights: [
        "Translation of SAS programs, macros, inputs, and outputs toward Snowflake and dbt.",
        "Lineage and dependency review to set the migration order.",
        "AI-assisted reading of SAS, with OpenAI, for metadata and dependencies.",
        "Validation principles so Snowflake and dbt outputs can be compared with SAS.",
      ],
      stack: "Python, SQL, SAS, dbt, Snowflake, Git, Azure, OpenAI",
    },
    {
      title: "Data Analyst and Engineer",
      company: "TotalEnergies",
      logo: "logos/totalenergies.png",
      start: "May 2023",
      end: "Jan 2025",
      where: "Lille",
      summary:
        "Fleet and connected-vehicle data for the energy transition: pipelines, operational dashboards, and models for trips, consumption, and charging.",
      highlights: [
        "ETL with dbt and Airflow, exploration in Azure Synapse, on a data fabric setup.",
        "Streamlit and Power BI for smart vehicles, partner tracking, and invoicing.",
        "Ingestion between AWS SQS and Azure Service Bus.",
        "Models for travel, consumption, charging profiles, and range, used for fraud checks and fleet electrification.",
        "APIs, and migration of partner data from OEMs and charging stations.",
      ],
      stack:
        "Python, SQL, Databricks, Power BI, APIs, dbt, Azure (Synapse, Key Vault, Data Factory), Airflow, SQS, Git",
    },
    {
      title: "Expert Data Analyst",
      company: "Crédit Agricole du Nord",
      logo: "logos/credit-agricole.svg",
      start: "Jul 2022",
      end: "Apr 2023",
      where: "Lille",
      summary:
        "Marketing performance and customer scores for the regional bank, plus a SAS and datamart migration.",
      highlights: [
        "Automated dashboards for web traffic and commercial activity.",
        "Scores aimed at customer interest and attrition.",
        "Reading of the customer base, relationship intensity, leads, and satisfaction.",
        "Migration of SAS processes and the datamart.",
      ],
      stack: "SAS, SQL, Python, MicroStrategy, Excel",
    },
    {
      title: "Data Analyst and Scientist",
      company: "Banque Populaire du Nord",
      logo: "logos/banque-populaire.svg",
      start: "Oct 2018",
      end: "Jun 2022",
      where: "Lille",
      summary:
        "Customer, digital, and CRM analytics for the retail bank, from scoring models to campaign measurement.",
      highlights: [
        "Predictive models: scoring, segmentation, NLP, and a recommendation engine.",
        "Digital campaigns with A/B tests and web analytics in Adobe Campaign and Adobe Analytics.",
        "Work on solicitation performance for CRM campaigns.",
        "Reports for decision-makers, and training in the data and marketing community.",
      ],
      stack:
        "SAS, SQL, Python, Adobe Campaign, Adobe Analytics, Power BI, Git, Excel",
    },
    {
      title: "Statistician Engineer",
      company: "Cofidis",
      logo: "logos/cofidis.svg",
      start: "Mar 2018",
      end: "Sep 2018",
      where: "Lille",
      summary:
        "Credit granting on the partner-risk side: acceptance, exposure, and a split between client risk and vendor risk.",
      highlights: [
        "A granting setup balancing acceptance rate and risk exposure.",
        "Segmentation of store-partner risk, and metrics to separate client risk from vendor risk.",
      ],
      stack: "SAS, SQL, R, Excel, Qlik",
    },
  ],
  earlier: [
    {
      title: "Data online rater",
      company: "Appen",
      when: "Jan 2018 - Jun 2019",
      where: "Remote",
      summary: "Evaluation of Facebook ad relevance, and feedback for targeting.",
    },
    {
      title: "Sales agent",
      company: "Makinox SARL",
      when: "May 2015 - Aug 2016",
      where: "Nador",
      summary:
        "Production follow-up, client relations, and supplier coordination. Odoo and Excel.",
    },
  ],
  projects: [
    {
      period: "2024 - 2025",
      title: "AI agents and LLM apps",
      text: "Agents with OpenAI, Microsoft, Hugging Face, and LangChain, deployed on Azure to automate tasks and improve user interaction.",
      links: [
        {
          label: "LangChain notebooks",
          href: "https://github.com/AKChihab/LangChain-App",
        },
        {
          label: "RAG notebooks",
          href: "https://github.com/AKChihab/RAG",
        },
      ],
    },
    {
      period: "2020 - 2023",
      title: "Crypto trading bot",
      text: "A Python bot with API feeds for live market data and automated backtests.",
      links: [],
    },
    {
      period: "2018 - 2021",
      title: "Crypto tax dashboard",
      text: "A dashboard to prepare cryptocurrency tax reporting.",
      links: [],
    },
  ],
  projectNote: "Also built small shops on Shopify and Etsy.",
  stack: [
    {
      group: "Languages",
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
      group: "Decide and ship",
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
      title: "Master in Statistical Engineering",
      school: "Faculté des Sciences de Lille",
    },
    {
      years: "2014 - 2015",
      title: "Bachelor in Applied Mathematics",
      school: "Faculté de Casablanca",
    },
    {
      years: "2011 - 2013",
      title: "Preparatory classes MP",
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
    { name: "French", level: "Bilingual" },
    { name: "Arabic", level: "Bilingual" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Basic" },
  ],
  activities: "Trail running, boxing, and markets.",
  ui: {
    skip: "Skip to content",
    nav: [
      { id: "work", label: "Work" },
      { id: "expertise", label: "Expertise" },
      { id: "projects", label: "Projects" },
      { id: "background", label: "Background" },
      { id: "contact", label: "Contact" },
    ],
    bring: "What I bring",
    work: "Work",
    earlier: "Earlier",
    how: "How I work",
    projects: "Projects",
    projectsLead: "Side work, separate from client delivery.",
    background: "Background",
    education: "Education",
    languages: "Languages",
    certificates: "Certificates",
    earlierCertificates: "Earlier certificates",
    contact: "Contact",
    contactLead: "For a role, a mission, or a technical exchange.",
    download: "Download CV",
    downloadName: "Chihab-Akaoui-CV.pdf",
    book: "Book 15 min",
    bookHint: "Next working days, 12:00-14:00 or 17:00-19:00. I confirm by email.",
    bookClose: "Close",
    bookSubject: "15 min call",
    bookBody: "Hi Chihab,\n\nI would like a 15 minute call.\n\n",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    themeLight: "Switch to light",
    themeDark: "Switch to black",
    pageTitle: "Chihab Akaoui, Senior Data Scientist",
    pageDescription:
      "Chihab Akaoui is a senior data scientist and analytics engineer in Lille. Customer value, marketing mix, causal promotion impact, and the pipelines behind them.",
  },
};
