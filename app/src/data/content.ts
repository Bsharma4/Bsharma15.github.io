// All content below is sourced directly from the existing portfolio / resume.
// Nothing here is invented — see /Resume PDF and prior index.html for source.

export const profile = {
  name: "Brijesh Sharma",
  preferredName: "Brijesh (Harry) Sharma",
  title: "Senior Data Engineer",
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
  resumeHref: "/Resume/Brijesh%20Sharma%20-%20Senior%20Data%20Engineer%20Resume.pdf",
  bio: "Senior Data Engineer who builds reliable enterprise data platforms for industries where accuracy, security, and trust directly affect business decisions. Over 6+ years, I've delivered enterprise data pipelines, governed data models, analytics, and AI-enabled prototypes across insurance, SaaS, sales, and marketing. Hands-on with Python, SQL, Snowflake, dbt, PostgreSQL, Git/GitHub, AWS, and Azure — known for improving pipeline reliability, accelerating migrations, protecting sensitive data, and translating business requirements into trusted data products for underwriting, actuarial, claims, and commercial teams.",
  bioHighlights: [
    "Delivering enterprise-scale ETL/ELT pipelines and governed data models using Python, SQL, Snowflake, dbt, and PostgreSQL.",
    "Leading Guidewire insurance-data integrations for underwriting, actuarial, and claims teams with strict PII controls and validation.",
    "Reducing migration timelines by 30–60% and pipeline-failure incidents by 40% through automated testing and reusable data models.",
    "Building analytics and BI assets in Tableau, Power BI, and Qlik, plus AI/ML work spanning scikit-learn, TensorFlow/Keras, and RAG/embeddings with FAISS and Pinecone.",
    "Mentoring and training engineers, including onboarding six transition resources during platform migrations.",
  ],
  experienceYears: "6+ Years",
  degree: "M.S. Computer Science (M.S. Data Analytics in progress)",
};

export const education = [
  {
    degree: "Master of Science, Data Analytics",
    period: "Jun 2026 – Present (In Progress)",
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
];

// Primary roles (main scroll timeline)
export const experience = [
  {
    role: "Senior Enterprise Data Engineer",
    company: "Shelter Insurance Companies",
    location: "Columbia, MO",
    period: "Jul 2025 – Aug 2026",
    points: [
      "Owned end-to-end integration of insurance data into the Guidewire ecosystem, improving trusted access for underwriting, actuarial, claims, and business teams.",
      "Designed and delivered Snowflake, dbt, PostgreSQL, and GitHub workflows across multiple initiatives, reducing migration timelines by 30–60%.",
      "Strengthened data quality, validation, and pipeline automation practices while mentoring junior engineers and training six transition resources.",
    ],
  },
  {
    role: "Enterprise Data Engineer",
    company: "Shelter Insurance Companies",
    location: "Columbia, MO",
    period: "May 2024 – Jul 2025",
    points: [
      "Developed Python/SQL ETL processes, reusable data models, and automated tests that reduced pipeline-failure incidents by 40%.",
      "Prototyped an LLM-assisted workflow for COBOL-to-normalized-data review, combining validation and retrieval-based knowledge lookup to accelerate analyst review.",
      "Built Snowflake and Tableau reporting assets that enabled faster underwriting and claims analysis while supporting large-scale data integrations.",
    ],
  },
  {
    role: "Data Engineer",
    company: "NextGen Invent",
    location: "Syosset, NY",
    period: "Jun 2023 – Mar 2024",
    points: [
      "Built ETL pipelines and BI dashboards for Dynamics 360 sales data, improving forecasting by 20%.",
      "Deployed AI-assisted dashboards used by sales teams and contributed to a 50% reduction in churn.",
      "Created a reusable reporting framework that summarized client information and sales notes to surface opportunities across accounts.",
    ],
  },
];

// Earlier roles (collapsed / secondary timeline entries) — real, from resume
export const earlierExperience = [
  {
    role: "AI & Data Solution Specialist",
    company: "NextGen Invent",
    period: "Jun 2020 – Aug 2021",
    points: ["Consolidated sales data into analytics-ready structures and created proposals and contracts that supported recurring data-engineering engagements."],
  },
  {
    role: "Product Specialist",
    company: "LambdaTest",
    period: "Oct 2019 – Mar 2020",
    points: ["Improved BI tools and data models for cross-functional users and researched market opportunities supporting revenue growth."],
  },
  {
    role: "Data Engineer & Analyst – Sales/Marketing",
    company: "Jungleworks & Jugnoo",
    period: "Aug 2017 – Nov 2019",
    points: ["Analyzed customer-usage data to guide product improvements, retention initiatives, and sales growth strategies."],
  },
];

export type SkillGroup = { label: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  { label: "Programming", items: ["Python", "SQL"] },
  { label: "Data Engineering", items: ["ETL/ELT", "dbt", "Dimensional Modeling", "Data Quality", "Pipeline Automation", "REST/API Integration"] },
  { label: "Databases & Platforms", items: ["Snowflake", "PostgreSQL", "SQL Server", "MySQL", "Informatica"] },
  { label: "Cloud", items: ["AWS", "Microsoft Azure"] },
  { label: "Analytics & BI", items: ["Tableau", "Power BI", "Qlik", "Pandas"] },
  { label: "AI / ML", items: ["scikit-learn", "TensorFlow/Keras", "RAG", "Embeddings", "FAISS", "Pinecone"] },
  { label: "Insurance & Governance", items: ["Guidewire Integration", "PII Controls", "Validation", "Reconciliation", "Compliance"] },
  { label: "Collaboration", items: ["Git", "GitHub", "Agile Collaboration", "Code Review"] },
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
      "An AI analytics assistant for insurance agency data. Modeled 213K raw rows into a tested Kimball star schema in SQLite, then added an LLM text-to-SQL layer with a two-layer safety guard and a local (127.0.0.1) web chat that shows the answer, a chart, the results table, and the SQL behind it.",
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
      "Python/Pandas workflow converting semi-structured healthcare data into analysis-ready DataFrames and CSV outputs.",
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
