import { SITE_CONFIG } from '@/constants'

export const healthcareCaseStudyRoute = '/projects/healthcare-ai-system'

export const healthcareCaseStudySections = [
  { id: 'case-hero', label: 'Hero' },
  { id: 'project-overview', label: 'Overview' },
  { id: 'problem-statement', label: 'Problem' },
  { id: 'system-goals', label: 'Goals' },
  { id: 'architecture-overview', label: 'Architecture' },
  { id: 'microservices-design', label: 'Services' },
  { id: 'backend-engineering', label: 'Backend' },
  { id: 'ai-processing-pipeline', label: 'AI Pipeline' },
  { id: 'ocr-workflow', label: 'OCR' },
  { id: 'machine-learning-integration', label: 'ML' },
  { id: 'database-design', label: 'Database' },
  { id: 'api-communication-flow', label: 'API Flow' },
  { id: 'cloud-devops-infrastructure', label: 'Cloud' },
  { id: 'docker-cicd-workflow', label: 'CI/CD' },
  { id: 'security-scalability', label: 'Security' },
  { id: 'challenges-learning', label: 'Learning' },
  { id: 'system-outcome', label: 'Outcome' },
  { id: 'technology-ecosystem', label: 'Stack' },
  { id: 'github-deployment-direction', label: 'Deployment' },
  { id: 'future-improvements', label: 'Future' },
  { id: 'case-study-cta', label: 'CTA' },
]

export const healthcareCaseStudyNav = [
  { label: 'Overview', sectionId: 'project-overview' },
  { label: 'Architecture', sectionId: 'architecture-overview' },
  { label: 'AI Flow', sectionId: 'ai-processing-pipeline' },
  { label: 'DevOps', sectionId: 'cloud-devops-infrastructure' },
  { label: 'Outcome', sectionId: 'system-outcome' },
  { label: 'Home', href: '/' },
]

export const healthcareCaseStudy = {
  route: healthcareCaseStudyRoute,
  githubUrl: SITE_CONFIG.links.github,
  seo: {
    title: SITE_CONFIG.seo.caseStudyTitle,
    description: SITE_CONFIG.seo.caseStudyDescription,
  },
  hero: {
    eyebrow: 'Case Study / AI Healthcare Platform',
    category: 'Backend engineering, AI integration, OCR, DevOps automation',
    title: 'AI-Based Healthcare Management System with DevOps Automation',
    summary:
      'A production-oriented healthcare platform concept that connects Spring Boot APIs, an independent FastAPI AI service, OCR-driven report processing, relational data modeling, Dockerized delivery, and cloud deployment planning.',
    tags: [
      'Spring Boot REST APIs',
      'FastAPI AI service',
      'Tesseract OCR',
      'Random Forest',
      'Docker',
      'Jenkins CI/CD',
      'AWS direction',
    ],
    metrics: [
      {
        label: 'System style',
        value: 'Microservice-ready',
        detail: 'Backend and AI workloads separated by API boundaries.',
      },
      {
        label: 'Automation focus',
        value: 'CI/CD aware',
        detail: 'Build, container, and deployment flow designed as part of the system.',
      },
      {
        label: 'AI scope',
        value: 'Practical ML',
        detail: 'OCR extraction and model-assisted predictions for structured outputs.',
      },
    ],
  },
  overview: {
    eyebrow: 'Project Overview',
    title: 'A healthcare workflow platform designed around real engineering boundaries.',
    description:
      'The project treats healthcare management as a system design problem: structured records live in the backend, medical documents pass through an OCR and AI workflow, and deployment concerns are designed alongside the application instead of being added at the end.',
    cards: [
      {
        title: 'Healthcare Management Core',
        description:
          'Patient, doctor, appointment, report, billing, and prediction domains are modeled as separate backend concerns with API-first access.',
        meta: 'Domain-driven modules',
      },
      {
        title: 'AI-Assisted Report Handling',
        description:
          'Uploaded reports move through OCR extraction, cleaning, feature preparation, prediction, and response formatting.',
        meta: 'OCR + ML service',
      },
      {
        title: 'Deployment-Aware Architecture',
        description:
          'Docker, Jenkins, AWS EC2, S3, IAM, and RDS are treated as part of the platform direction, not just hosting notes.',
        meta: 'Cloud-ready workflow',
      },
    ],
  },
  problem: {
    eyebrow: 'Problem Statement',
    title: 'Healthcare workflows often fail at the handoff between records, reports, and operations.',
    description:
      'The engineering challenge is not only storing healthcare data. It is reducing manual movement between unstructured reports, operational records, prediction logic, and deployment steps while keeping the system understandable.',
    items: [
      'Manual report review slows down clinical and administrative workflows.',
      'Patient, doctor, billing, appointment, and diagnostic records often sit in disconnected tools.',
      'Medical reports arrive as images or documents, which makes structured processing difficult.',
      'AI logic becomes fragile when it is mixed directly into the main backend.',
      'Deployment steps become error-prone when build, container, and release workflows are not planned.',
    ],
  },
  goals: [
    {
      title: 'Centralize Workflows',
      description:
        'Create a backend foundation for managing core healthcare records through predictable REST APIs.',
      meta: 'Management system',
    },
    {
      title: 'Assist Report Processing',
      description:
        'Use OCR to extract text from reports before passing cleaned data into the prediction workflow.',
      meta: 'OCR extraction',
    },
    {
      title: 'Separate AI Workloads',
      description:
        'Keep the ML service independently deployable so model changes do not destabilize the main API.',
      meta: 'FastAPI service',
    },
    {
      title: 'Prepare for Scale',
      description:
        'Design service boundaries, containers, and cloud resources so the platform can evolve beyond a single process.',
      meta: 'System architecture',
    },
    {
      title: 'Automate Delivery',
      description:
        'Connect GitHub, Jenkins, Docker, and cloud deployment direction into one repeatable release flow.',
      meta: 'DevOps automation',
    },
    {
      title: 'Keep Outputs Useful',
      description:
        'Return structured prediction results and extracted report data that can be saved, reviewed, and surfaced in the UI.',
      meta: 'Operational output',
    },
  ],
  architecture: {
    eyebrow: 'Architecture Overview',
    title: 'Layered platform architecture with a clean AI service boundary.',
    description:
      'The architecture is intentionally split into experience, business logic, AI processing, storage, and delivery layers. That separation keeps healthcare operations stable while allowing OCR and prediction logic to evolve independently.',
    layers: [
      {
        title: 'Frontend Layer',
        label: 'User Experience',
        description:
          'Dashboards, report upload screens, patient workflows, and status views communicate through REST endpoints.',
        stack: ['React direction', 'Forms', 'Dashboards', 'Upload UI'],
        tone: 'blue',
      },
      {
        title: 'Spring Boot Backend',
        label: 'Core API',
        description:
          'Controllers validate requests, services coordinate business logic, repositories persist healthcare data, and API responses remain predictable.',
        stack: ['Controllers', 'Services', 'Repositories', 'DTOs'],
        tone: 'green',
      },
      {
        title: 'FastAPI AI Service',
        label: 'AI Boundary',
        description:
          'A separate Python service accepts report payloads, runs OCR and preprocessing, then returns model outputs to the backend.',
        stack: ['FastAPI', 'Python', 'OCR endpoints', 'ML inference'],
        tone: 'violet',
      },
      {
        title: 'OCR Pipeline',
        label: 'Document Processing',
        description:
          'Report images are normalized, passed through Tesseract, cleaned, and transformed into structured text fields.',
        stack: ['Tesseract', 'Preprocess', 'Text cleanup', 'Extraction'],
        tone: 'amber',
      },
      {
        title: 'ML Layer',
        label: 'Prediction Logic',
        description:
          'Random Forest and Decision Tree models support practical healthcare analysis from cleaned features.',
        stack: ['Random Forest', 'Decision Tree', 'Feature mapping', 'Prediction'],
        tone: 'rose',
      },
      {
        title: 'Database Layer',
        label: 'Relational Store',
        description:
          'Patient, doctor, appointment, billing, report, and prediction tables keep operational data queryable.',
        stack: ['MySQL / RDS', 'Relationships', 'Indexes', 'Auditable records'],
        tone: 'slate',
      },
      {
        title: 'Container Layer',
        label: 'Runtime Isolation',
        description:
          'Backend, AI service, and supporting runtime dependencies are containerized for repeatable environments.',
        stack: ['Dockerfiles', 'Images', 'Networks', 'Environment variables'],
        tone: 'blue',
      },
      {
        title: 'CI/CD Pipeline',
        label: 'Delivery Automation',
        description:
          'GitHub changes trigger Jenkins builds, image creation, validation, and deployment handoff.',
        stack: ['GitHub', 'Jenkins', 'Build stages', 'Deploy stage'],
        tone: 'green',
      },
      {
        title: 'Cloud Direction',
        label: 'Infrastructure',
        description:
          'EC2 hosts services, S3 supports report object storage, IAM protects access, and RDS provides managed relational persistence.',
        stack: ['AWS EC2', 'S3', 'IAM', 'RDS'],
        tone: 'amber',
      },
    ],
    flows: [
      'Frontend submits healthcare workflow requests to Spring Boot APIs.',
      'Backend delegates report analysis to the FastAPI AI service.',
      'AI service runs OCR, preprocessing, and ML prediction.',
      'Backend persists structured records and returns user-facing results.',
    ],
  },
  microservices: {
    eyebrow: 'Microservices Design',
    title: 'The AI workload is isolated from the core healthcare API.',
    description:
      'The design avoids forcing every responsibility into one backend. The main API owns healthcare workflows, while the AI service owns document processing and model inference.',
    services: [
      {
        title: 'Healthcare Backend Service',
        label: 'Spring Boot',
        description:
          'Owns API routing, validation, healthcare records, appointment flows, billing records, and persistence coordination.',
        stack: ['REST APIs', 'Service layer', 'Repository layer', 'MySQL'],
        tone: 'green',
      },
      {
        title: 'AI Processing Service',
        label: 'FastAPI',
        description:
          'Owns report upload handling, OCR extraction, preprocessing, model loading, prediction, and structured result formatting.',
        stack: ['Python', 'Tesseract', 'Scikit-learn', 'JSON responses'],
        tone: 'violet',
      },
      {
        title: 'Deployment Boundary',
        label: 'Docker',
        description:
          'Each service can be built and configured independently, which makes local testing and deployment more predictable.',
        stack: ['Container images', 'Networks', 'Env vars', 'Health checks'],
        tone: 'amber',
      },
    ],
    communication: [
      {
        label: 'Request',
        detail: 'Backend sends report metadata and file reference to the AI endpoint.',
      },
      {
        label: 'Process',
        detail: 'AI service extracts text, cleans inputs, and executes the selected model.',
      },
      {
        label: 'Response',
        detail: 'Structured prediction and confidence-oriented metadata are returned to the backend.',
      },
      {
        label: 'Persist',
        detail: 'Backend stores report, prediction, and workflow state in the relational database.',
      },
    ],
  },
  backend: {
    eyebrow: 'Backend Engineering',
    title: 'Spring Boot backend structured for predictable healthcare APIs.',
    description:
      'The backend is presented as a modular API layer rather than a script-heavy project. Controllers manage request boundaries, services coordinate rules, repositories isolate persistence, and DTOs keep payloads controlled.',
    modules: [
      {
        title: 'Controller Layer',
        description:
          'Handles REST endpoints for patients, doctors, appointments, reports, billing, and prediction requests.',
        meta: 'HTTP boundary',
      },
      {
        title: 'Service Layer',
        description:
          'Coordinates validation, workflow rules, AI service calls, record updates, and response shaping.',
        meta: 'Business logic',
      },
      {
        title: 'Repository Layer',
        description:
          'Encapsulates database access so relational tables can evolve without leaking persistence details.',
        meta: 'Data access',
      },
      {
        title: 'DTO + Validation Layer',
        description:
          'Keeps request and response contracts explicit for safer API communication and frontend integration.',
        meta: 'API contract',
      },
    ],
    flow: [
      'Request enters controller',
      'DTO validation runs',
      'Service executes workflow',
      'Repository persists data',
      'Response returns structured result',
    ],
  },
  aiPipeline: {
    eyebrow: 'AI Processing Pipeline',
    title: 'Report analysis moves through a practical AI pipeline.',
    description:
      'The AI workflow is intentionally implementation-focused: it accepts healthcare reports, extracts usable text, prepares model features, generates predictions, and returns a structured response.',
    stages: [
      {
        label: 'Report Upload',
        detail: 'User uploads a report through the platform or references a stored report object.',
        meta: 'Input',
      },
      {
        label: 'OCR Extraction',
        detail: 'Tesseract reads text from report images after basic preprocessing.',
        meta: 'Document AI',
      },
      {
        label: 'Preprocessing',
        detail: 'Extracted text is cleaned, normalized, and mapped into usable feature inputs.',
        meta: 'Feature prep',
      },
      {
        label: 'ML Prediction',
        detail: 'Random Forest or Decision Tree model runs practical healthcare classification or risk prediction.',
        meta: 'Inference',
      },
      {
        label: 'Result Generation',
        detail: 'Prediction output is formatted for storage, review, and user-facing display.',
        meta: 'Structured output',
      },
    ],
  },
  ocrWorkflow: {
    eyebrow: 'OCR Workflow',
    title: 'Tesseract OCR turns unstructured reports into system-readable text.',
    description:
      'The OCR workflow is treated as a pipeline with observable stages. The goal is not to overclaim medical intelligence, but to create a reliable bridge between document-heavy workflows and structured application logic.',
    stages: [
      {
        label: 'Image Upload',
        detail: 'Accept report image or scanned document input with metadata.',
        meta: 'File boundary',
      },
      {
        label: 'Preprocessing',
        detail: 'Normalize image quality where possible before extraction.',
        meta: 'Cleaner input',
      },
      {
        label: 'Text Extraction',
        detail: 'Run Tesseract OCR to produce raw report text.',
        meta: 'OCR engine',
      },
      {
        label: 'Cleaning',
        detail: 'Remove noisy characters, normalize spacing, and prepare fields.',
        meta: 'Text hygiene',
      },
      {
        label: 'Structured Output',
        detail: 'Return extractable values and raw text for audit-friendly review.',
        meta: 'API response',
      },
    ],
  },
  machineLearning: {
    eyebrow: 'Machine Learning Integration',
    title: 'Practical model integration without pretending the project is medical research.',
    description:
      'The ML layer is positioned as an engineering integration: load trained models, pass cleaned inputs, produce predictions, and expose results through an API. The emphasis is on service design, data flow, and operational readiness.',
    models: [
      {
        title: 'Random Forest',
        description:
          'Useful for baseline tabular prediction workflows where multiple structured features contribute to the output.',
        meta: 'Ensemble baseline',
      },
      {
        title: 'Decision Tree',
        description:
          'Useful as an interpretable comparison model for understanding how features influence a prediction path.',
        meta: 'Readable baseline',
      },
      {
        title: 'Prediction API',
        description:
          'Keeps model execution behind a consistent request and response contract so the backend can consume it safely.',
        meta: 'Service contract',
      },
    ],
    flow: [
      'Cleaned OCR output',
      'Feature mapping',
      'Model selection',
      'Prediction response',
      'Backend persistence',
    ],
  },
  database: {
    eyebrow: 'Database Design',
    title: 'Relational data model for healthcare operations and AI outputs.',
    description:
      'The database direction centers on traceability. Reports, predictions, appointments, and billing records remain connected to patients and doctors so the platform can answer operational questions later.',
    entities: [
      {
        title: 'Patients',
        label: 'Core entity',
        description: 'Identity, contact, medical profile, report history, appointment references.',
        fields: ['patient_id', 'profile', 'contacts', 'medical_notes'],
        tone: 'green',
      },
      {
        title: 'Doctors',
        label: 'Care provider',
        description: 'Doctor profile, specialization, assigned appointments, patient interactions.',
        fields: ['doctor_id', 'specialization', 'availability', 'appointments'],
        tone: 'blue',
      },
      {
        title: 'Appointments',
        label: 'Workflow event',
        description: 'Patient and doctor scheduling records with status and notes.',
        fields: ['appointment_id', 'patient_id', 'doctor_id', 'status'],
        tone: 'amber',
      },
      {
        title: 'Reports',
        label: 'Document record',
        description: 'Uploaded medical report metadata, OCR text, storage reference, and processing status.',
        fields: ['report_id', 'patient_id', 'ocr_text', 'storage_url'],
        tone: 'violet',
      },
      {
        title: 'Billing',
        label: 'Finance record',
        description: 'Billing entries connected to patient visits, reports, or appointment events.',
        fields: ['bill_id', 'patient_id', 'amount', 'payment_status'],
        tone: 'rose',
      },
      {
        title: 'Predictions',
        label: 'AI output',
        description: 'Prediction result, model metadata, report reference, and generated timestamp.',
        fields: ['prediction_id', 'report_id', 'model_name', 'result'],
        tone: 'slate',
      },
    ],
    relationships: [
      'Patient -> Appointments -> Doctor',
      'Patient -> Reports -> Predictions',
      'Patient -> Billing',
      'Reports -> OCR text -> AI prediction',
    ],
  },
  apiFlow: {
    eyebrow: 'API Communication Flow',
    title: 'The platform communicates through explicit request and response boundaries.',
    description:
      'The API flow shows how a user action becomes backend validation, AI processing, persistence, and a response that the frontend can render without guessing.',
    stages: [
      {
        label: 'Frontend',
        detail: 'Submits form, upload, or workflow request.',
        meta: 'Client',
      },
      {
        label: 'Spring Boot Backend',
        detail: 'Validates request and coordinates healthcare workflow.',
        meta: 'API',
      },
      {
        label: 'FastAPI AI Service',
        detail: 'Runs OCR, preprocessing, and model inference.',
        meta: 'AI',
      },
      {
        label: 'Database',
        detail: 'Stores reports, predictions, records, and state.',
        meta: 'Persistence',
      },
      {
        label: 'Response',
        detail: 'Returns structured result to the interface.',
        meta: 'JSON',
      },
    ],
  },
  infrastructure: {
    eyebrow: 'Cloud & DevOps Infrastructure',
    title: 'Cloud direction designed like an infrastructure dashboard.',
    description:
      'The deployment plan separates compute, object storage, identity, database, containers, and automation. It is intentionally realistic for a growing backend project.',
    nodes: [
      {
        title: 'AWS EC2',
        label: 'Compute',
        description: 'Hosts Dockerized backend and AI service workloads during the deployment phase.',
        stack: ['Linux host', 'Docker runtime', 'Security groups'],
        tone: 'amber',
      },
      {
        title: 'AWS S3',
        label: 'Object storage',
        description: 'Stores uploaded report files separately from relational records.',
        stack: ['Report files', 'Bucket policies', 'Storage URLs'],
        tone: 'blue',
      },
      {
        title: 'IAM',
        label: 'Access control',
        description: 'Defines least-privilege access for services, storage, and deployment operations.',
        stack: ['Roles', 'Policies', 'Scoped credentials'],
        tone: 'rose',
      },
      {
        title: 'RDS',
        label: 'Managed database',
        description: 'Provides a cloud-ready relational database direction for healthcare records.',
        stack: ['MySQL', 'Backups', 'Connection config'],
        tone: 'green',
      },
      {
        title: 'Docker',
        label: 'Runtime packaging',
        description: 'Packages backend and AI service environments into repeatable containers.',
        stack: ['Images', 'Networks', 'Env files'],
        tone: 'violet',
      },
      {
        title: 'Jenkins',
        label: 'Automation',
        description: 'Builds, validates, containerizes, and prepares deployment from GitHub changes.',
        stack: ['Pipeline', 'Build stages', 'Deploy stage'],
        tone: 'slate',
      },
    ],
  },
  deployment: {
    eyebrow: 'Docker & CI/CD Workflow',
    title: 'Delivery flow from source code to containerized deployment.',
    description:
      'The pipeline is designed to reduce manual release mistakes by turning code changes into repeatable builds, images, and deployment steps.',
    stages: [
      {
        label: 'Code',
        detail: 'Feature changes are implemented in backend, AI service, or frontend modules.',
        meta: 'Local work',
      },
      {
        label: 'GitHub',
        detail: 'Source changes are versioned and become the trigger point for automation.',
        meta: 'Repository',
      },
      {
        label: 'Jenkins',
        detail: 'Pipeline installs dependencies, runs checks, and coordinates build stages.',
        meta: 'CI engine',
      },
      {
        label: 'Docker',
        detail: 'Service images are built with isolated dependencies and runtime configuration.',
        meta: 'Container',
      },
      {
        label: 'Deployment',
        detail: 'Images are shipped to the target host or cloud runtime with environment configuration.',
        meta: 'Release',
      },
    ],
  },
  securityScalability: {
    eyebrow: 'Security & Scalability',
    title: 'Security and scale are handled as architecture concerns.',
    description:
      'The project direction keeps the security story grounded: protect API boundaries, keep secrets outside source code, isolate services, and prepare each layer to scale independently.',
    items: [
      {
        title: 'Secure API Boundaries',
        description:
          'Authentication concepts, validation, scoped endpoints, and predictable DTOs keep request handling controlled.',
        meta: 'API hardening',
      },
      {
        title: 'Environment-Based Configuration',
        description:
          'Database URLs, service endpoints, storage credentials, and deployment values are kept outside source code.',
        meta: 'Secret hygiene',
      },
      {
        title: 'Container Isolation',
        description:
          'Backend and AI dependencies remain isolated, reducing conflicts and making service replacement safer.',
        meta: 'Runtime safety',
      },
      {
        title: 'Independent Scaling',
        description:
          'The AI service can scale separately from the healthcare API when report processing demand grows.',
        meta: 'Service scale',
      },
    ],
  },
  challenges: {
    eyebrow: 'Challenges & Learning',
    title: 'The hard parts were integration boundaries, not only writing endpoints.',
    description:
      'This case study is strongest when it shows what the project taught: how to plan boundaries, move data safely between services, and think about deployment before the final stage.',
    items: [
      {
        title: 'AI and Backend Integration',
        description:
          'Designing the communication between Spring Boot and FastAPI required clearer request contracts and predictable failure handling.',
      },
      {
        title: 'OCR Output Quality',
        description:
          'Raw OCR text is noisy, so preprocessing and structured extraction matter as much as the OCR call itself.',
      },
      {
        title: 'Database Modeling',
        description:
          'Healthcare records need relationships that preserve context across patients, reports, predictions, appointments, and billing.',
      },
      {
        title: 'Deployment Thinking',
        description:
          'Docker and CI/CD forced the system to be configured repeatably instead of relying on a single local setup.',
      },
    ],
  },
  outcome: {
    eyebrow: 'System Outcome',
    title: 'The result is a credible blueprint for an AI-assisted healthcare platform.',
    description:
      'The project demonstrates backend structure, AI service integration, OCR workflow design, relational modeling, and deployment awareness in one coherent engineering story.',
    metrics: [
      {
        label: 'Architecture clarity',
        value: '5 layers',
        detail: 'Experience, API, AI, data, and delivery concerns are separated.',
      },
      {
        label: 'Core domains',
        value: '6 entities',
        detail: 'Patients, doctors, appointments, reports, billing, and predictions.',
      },
      {
        label: 'Delivery model',
        value: '5 stages',
        detail: 'Code, GitHub, Jenkins, Docker, and deployment direction.',
      },
      {
        label: 'Learning value',
        value: 'High signal',
        detail: 'Shows practical architecture thinking across backend, AI, and DevOps.',
      },
    ],
  },
  technologyEcosystem: {
    eyebrow: 'Technology Ecosystem',
    title: 'A grouped engineering stack for backend, AI, cloud, DevOps, data, and frontend work.',
    description:
      'The stack is organized by responsibility so the project reads like a platform, not a disconnected list of tools.',
    groups: [
      {
        title: 'Backend',
        description: 'Core healthcare APIs and business workflows.',
        tools: ['Java', 'Spring Boot', 'REST APIs', 'Validation', 'DTOs'],
        tone: 'green',
      },
      {
        title: 'AI/ML',
        description: 'Document processing and prediction service.',
        tools: ['Python', 'FastAPI', 'Tesseract OCR', 'Random Forest', 'Decision Tree'],
        tone: 'violet',
      },
      {
        title: 'Cloud',
        description: 'Hosting, storage, access, and managed persistence direction.',
        tools: ['AWS EC2', 'AWS S3', 'IAM', 'RDS'],
        tone: 'amber',
      },
      {
        title: 'DevOps',
        description: 'Automation and repeatable runtime delivery.',
        tools: ['Docker', 'Jenkins', 'GitHub', 'CI/CD', 'Environment config'],
        tone: 'blue',
      },
      {
        title: 'Database',
        description: 'Relational healthcare records and prediction traceability.',
        tools: ['MySQL', 'Relational schema', 'Indexes', 'Relationships'],
        tone: 'slate',
      },
      {
        title: 'Frontend',
        description: 'Healthcare dashboards and workflow surfaces.',
        tools: ['React direction', 'Forms', 'Upload UI', 'Dashboard patterns'],
        tone: 'rose',
      },
    ],
  },
  githubDeployment: {
    eyebrow: 'GitHub & Deployment Direction',
    title: 'Source control is public, live deployment remains an architecture direction.',
    description:
      "The case study links to Priyamvad Ranjan's GitHub profile and presents the deployment plan honestly as a production direction when a live deployment is not available.",
    cards: [
      {
        title: 'GitHub Profile',
        description:
          'Repository work, project evolution, and future code artifacts can be explored from the GitHub profile.',
        cta: 'Open GitHub',
        href: SITE_CONFIG.links.github,
      },
      {
        title: 'Deployment Architecture Direction',
        description:
          'The intended deployment path is GitHub -> Jenkins -> Docker image -> EC2 runtime, with S3 for reports and RDS for relational data.',
        cta: 'Review architecture',
        href: '#cloud-devops-infrastructure',
      },
    ],
  },
  future: {
    eyebrow: 'Future Improvements',
    title: 'The next version can move toward cloud-native operations and richer healthcare intelligence.',
    description:
      'The future direction keeps the project grounded in engineering growth: better observability, more reliable model workflows, and clearer production operations.',
    items: [
      {
        title: 'Real-Time Analytics',
        description:
          'Add dashboards for appointment trends, report status, and operational throughput.',
        meta: 'Product insight',
      },
      {
        title: 'Advanced AI Models',
        description:
          'Evaluate stronger models only after improving data quality, validation, and measurable baselines.',
        meta: 'Model maturity',
      },
      {
        title: 'Cloud-Native Scaling',
        description:
          'Move toward managed container services, load balancing, autoscaling, and stronger environment separation.',
        meta: 'Infrastructure growth',
      },
      {
        title: 'IoT Integrations',
        description:
          'Explore device-driven inputs for vitals or monitoring workflows through secure ingestion APIs.',
        meta: 'Connected care',
      },
      {
        title: 'Monitoring Systems',
        description:
          'Add logs, health checks, alerts, and pipeline observability for production-style operations.',
        meta: 'Reliability',
      },
      {
        title: 'Production DevOps',
        description:
          'Add registry management, deployment rollback, secret management, and staged release environments.',
        meta: 'Release maturity',
      },
    ],
  },
  cta: {
    eyebrow: 'Case Study Complete',
    title: 'A technical portfolio page built to prove architecture thinking.',
    description:
      'This project now communicates backend engineering, AI integration, OCR workflow design, database modeling, and DevOps awareness as one coherent product case study.',
    actions: [
      {
        label: 'View GitHub',
        href: SITE_CONFIG.links.github,
        external: true,
      },
      {
        label: 'Back to portfolio',
        href: '/',
      },
    ],
  },
}
