// All content below is sourced directly from the existing portfolio / resume.
// Nothing here is invented — see /Resume PDF and prior index.html for source.

export const profile = {
  name: "Brijesh Sharma",
  preferredName: "Brijesh (Harry) Sharma",
  title: "Senior Enterprise Data Engineer",
  typedRoles: [
    "Senior Data Engineer",
    "Enterprise Data Platform Engineer",
    "Snowflake & dbt Developer",
    "Python Developer",
    "AI/ML Engineer",
    "Analytics Engineer",
  ],
  location: "Columbia, MO (Open to Remote or On-site)",
  phone: "+1 (314) 583-4684",
  email: "harrybrijeshsharma@gmail.com",
  github: "https://github.com/Bsharma4",
  linkedin: "https://www.linkedin.com/in/brijesh-sharma-engineer/",
  medium: "https://medium.com/@brijeshharrysharma",
  // Relative (not absolute) path so it resolves correctly under the GitHub
  // Pages project-page subpath — do not add a leading "/".
  resumeHref: "Resume/Brijesh%20Sharma%20-%20Senior%20Data%20Engineer%20Resume.pdf",
  bio: "Data engineering and analytics professional with 6+ years of experience across insurance, finance, SaaS, sales, and marketing technology environments. Expert in end-to-end pipeline design, cloud data integration, data governance, and analytics — and in designing LLM-powered applications and RAG pipelines, prototyping fast, and shipping secure, production-ready tools. Experienced with embeddings, vector databases, and API integrations that improve business workflows. Strong in Python, Snowflake, dbt, and cloud platforms (AWS, Azure), with expertise in secure API integrations and architecture.",
  bioHighlights: [
    "Leading end-to-end integration of insurance data into the Guidewire platform at Shelter Insurance, improving cross-system accuracy for underwriting, actuarial, and business teams.",
    "Designing and deploying dbt, Snowflake, PostgreSQL, and GitHub workflows that cut migration timelines by 30–60%.",
    "Building LLM-powered applications and RAG pipelines — OpenAI & Claude APIs, embeddings, vector databases (FAISS, Pinecone) — for enterprise data review and analytics.",
    "Reducing pipeline-failure incidents by 40% through automated Python/SQL data models and tests.",
    "Mentoring engineers on data quality and pipeline automation.",
  ],
  experienceYears: "6+ Years",
  degree: "M.S. Computer Science · M.S. Data Analytics (in progress, exp. Dec 2027)",
  languages: "English, Hindi, Punjabi",
  softSkills: "Leadership, Communication, Stakeholder Collaboration, Team Mentoring, Public Speaking",
};

export const education = [
  {
    degree: "Master of Science, Data Analytics",
    period: "Jun 2026 – Present (Expected Dec 2027)",
    school: "Indiana Wesleyan University, Merrillville, IN",
    detail: "Graduate studies in data analytics, statistical analysis, data visualization, machine learning, research methods, and data-driven decision-making.",
  },
  {
    degree: "Master's in Computer Science",
    period: "Aug 2021 – May 2023",
    school: "Saint Louis University (SLU), St. Louis, MO, USA · GPA 3.61/4.0",
    detail: "Coursework: DBMS, Data Engineering, Intro to ML, NLP, Computer Vision, Software Design & Engineering, Algorithms, Computer Security, IOT.",
  },
  {
    degree: "Bachelor's in Computer Science & Engineering",
    period: "Aug 2014 – May 2018",
    school: "Lovely Professional University (LPU), Phagwara, PB, India · CGPA 7.89/9",
    detail: "",
  },
];

export const certifications = [
  "Astronomer Certification for Apache Airflow 3 Fundamentals — Mar 2026",
  "AIDA 181: Big Data Analytics for Risk and Insurance, The Institutes — Sep 2024",
  "Three Quarterly Outstanding Performance Achievement Awards, Shelter Insurance — Dec 2024, Mar 2025, Jan 2026",
  "First Prize, Saint Louis University International Gala & Talent Show — 2022",
  "All-Expenses-Paid Trip to Dubai for Top Team Performer — Aug 2018",
];

// Primary roles (main scroll timeline)
export const experience = [
  {
    role: "Senior Enterprise Data Engineer",
    company: "Shelter Insurance Companies",
    location: "Columbia, MO",
    period: "Jul 2025 – Sep 2026",
    points: [
      "Led end-to-end ownership for the integration of insurance data into the Guidewire platform, enabling enterprise-wide access for underwriting, actuarial, and business teams and improving cross-system data accuracy.",
      "Designed and deployed dbt, Snowflake, PostgreSQL, and GitHub workflows across multiple projects, cutting migration timelines by 30–60%.",
      "Mentored junior engineers on data quality and pipeline automation.",
    ],
  },
  {
    role: "Enterprise Data Engineer",
    company: "Shelter Insurance Companies",
    location: "Columbia, MO",
    period: "May 2024 – Jun 2025",
    points: [
      "Prototyped LLM-assisted normalized data reports with validation and knowledge lookup using embeddings and RAG, accelerating enterprise reviews and analyst throughput.",
      "Developed and automated ETL processes with data models and tests in Python/SQL, reducing pipeline-failure incidents by 40%.",
      "Built advanced Snowflake and Tableau dashboards enabling faster conversion, underwriting, and claims analysis.",
      "Managed and optimized large-scale data pipelines supporting enterprise data integration.",
    ],
  },
  {
    role: "Data Engineer",
    company: "NextGen Invent + JPMorgan Chase",
    location: "Syosset, NY",
    period: "Jun 2023 – Mar 2024",
    points: [
      "Built ETL pipelines and BI dashboards for Dynamics 360 sales data, improving forecasting by 20%.",
      "Deployed AI-driven dashboards used daily by the sales team, reducing churn by 50%.",
      "Built a reusable reporting framework across client accounts to summarize client information and sales notes and surface opportunities inside dashboards.",
    ],
  },
];

// Earlier roles (collapsed / secondary timeline entries) — real, from resume
export const earlierExperience = [
  {
    role: "AI & Data Solution Specialist",
    company: "NextGen Invent",
    period: "Jun 2020 – Aug 2021",
    points: [
      "Modeled and consolidated sales datasets into analytics-ready structures, boosting project wins.",
      "Created proposals and contracts for data engineering projects that secured recurring engagements for the data team.",
    ],
  },
  {
    role: "Product Specialist",
    company: "LambdaTest",
    period: "Oct 2019 – Mar 2020",
    points: ["Enhanced BI tools and data models, improving accessibility for cross-functional teams."],
  },
  {
    role: "Data Analyst – Marketing & Sales",
    company: "Jungleworks & Jugnoo",
    period: "Aug 2017 – Nov 2019",
    points: [
      "Analyzed customer usage data to guide product improvements and increase retention.",
      "Partnered with sales to optimize growth strategies and recurring revenue.",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  { label: "Applied AI & LLMs", items: ["OpenAI API", "Claude API", "Embeddings", "Vector DBs (FAISS, Pinecone)", "RAG", "NLP", "Fine-tuning"] },
  { label: "Programming & Build", items: ["Python", "SQL", "C/C++", "JavaScript/TypeScript", "dbt", "Git/GitHub"] },
  { label: "Data Engineering", items: ["ETL/ELT", "Data Modeling", "Data Quality Testing", "Pipeline Automation"] },
  { label: "Data Platforms", items: ["Snowflake", "PostgreSQL"] },
  { label: "Cloud & Governance", items: ["AWS", "Microsoft Azure", "Security", "Compliance", "Governance"] },
  { label: "Analytics & BI", items: ["Tableau", "Power BI", "Qlik", "Text & Image Processing"] },
];

export type Project = {
  name: string;
  period?: string;
  summary: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Insurance Agency AI Performance Analyst",
    period: "Proof of concept, 2026 — public Kaggle data",
    summary:
      "An AI analytics assistant for insurance agency data. Modeled 213,328 raw rows into a tested Kimball star schema in SQLite, then added an LLM text-to-SQL layer (16 data checks, 12 evaluation cases) with a two-layer safety guard and a local (127.0.0.1) web chat that shows the answer, a chart, the results table, and the SQL behind it.",
    stack: ["Python", "SQLite", "Kimball Modeling", "LLM Text-to-SQL", "Google Gemini API", "HTML/CSS/JS"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/Bsharma4/insurance-agency-ai-analyst" },
      { label: "Data Model", href: "https://github.com/Bsharma4/insurance-agency-ai-analyst/blob/main/docs/data_model.md" },
    ],
  },
  {
    name: "Car Price Prediction Data Pipeline",
    summary:
      "Python, Dagster, scikit-learn, and PostgreSQL pipeline achieving 92% model accuracy and exposing predictions through an internal service.",
    stack: ["Python", "Dagster", "scikit-learn", "PostgreSQL"],
    links: [
      { label: "Read the Article", href: "https://medium.com/@brijeshharrysharma/building-a-data-pipeline-for-car-price-prediction-using-dagster-6da3c42eda71" },
      { label: "GitHub Repo", href: "https://github.com/Bsharma4/DE-Project2-DAG-AIrflow" },
    ],
  },
  {
    name: "Healthcare JSON-to-Analytics Pipeline",
    summary:
      "Python/Pandas workflow converting semi-structured healthcare data into analysis-ready DataFrames and CSV outputs for downstream AI-powered analysis.",
    stack: ["Python", "Pandas"],
    links: [{ label: "GitHub Repo", href: "https://github.com/Bsharma4/DataEngineering/tree/main/project1(HealthcareJSONtoCSV)" }],
  },
  {
    name: "Welsh-Language Sentiment Analysis",
    summary: "NLP classification using embeddings and Naive Bayes, achieving an 86% F1 score.",
    stack: ["Python", "NLP", "Embeddings", "Naive Bayes"],
    links: [{ label: "GitHub Repo", href: "https://github.com/Bsharma4/Sentiment-Analysis" }],
  },
  {
    name: "Facial Expression Recognition",
    summary: "TensorFlow/Keras CNN with OpenCV, achieving 94% accuracy.",
    stack: ["TensorFlow/Keras", "OpenCV", "CNN"],
    links: [{ label: "Read the Article", href: "https://medium.com/@brijeshharrysharma/learning-facial-expression-recognition-from-basics-59befd01cc67" }],
  },
];
