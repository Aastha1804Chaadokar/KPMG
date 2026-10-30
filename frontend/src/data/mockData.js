/**
 * DPIIT AI/ML-Based Intelligent Procurement Management Solution
 * Mock Data Repository (Frontend Demo Data)
 * 
 * NOTE: All records in this file represent synthetic demo data modeled
 * according to the DPIIT Procurement Workflow and RFP guidelines.
 */

export const DEMO_CREDENTIALS = {
  email: 'procurement.officer@dpiit.gov.in',
  password: 'Demo@User2026',
  role: 'Executive Procurement Officer',
  name: 'Rajesh Verma',
  department: 'Procurement & IT Division, DPIIT',
  designation: 'Director (Procurement & Technical)',
};

export const ALTERNATE_DEMO_USERS = [
  {
    email: 'procurement.officer@dpiit.gov.in',
    name: 'Rajesh Verma',
    role: 'Procurement Officer',
    badge: 'Primary Demo',
    designation: 'Director (Procurement)',
  },
  {
    email: 'fa.approver@dpiit.gov.in',
    name: 'Dr. Anita Sharma',
    role: 'Financial Approver',
    badge: 'JS & FA',
    designation: 'Joint Secretary & Financial Advisor',
  },
  {
    email: 'tech.evaluator@dpiit.gov.in',
    name: 'Vikram Nair',
    role: 'Technical Evaluator',
    badge: 'TEC Member',
    designation: 'Chairperson, Tech Evaluation Comm.',
  },
];

export const DASHBOARD_STATS = [
  {
    id: 'total-tenders',
    title: 'Total Tenders',
    value: '148',
    change: '+12.4%',
    period: 'vs last quarter',
    trend: 'up',
    color: 'blue',
    description: 'Cumulative procurements in FY 2026-27',
  },
  {
    id: 'active-tenders',
    title: 'Active Tenders',
    value: '34',
    change: '8 Closing soon',
    period: 'within 7 days',
    trend: 'neutral',
    color: 'emerald',
    description: 'Published & accepting bids/queries',
  },
  {
    id: 'pending-approvals',
    title: 'Pending Approvals',
    value: '09',
    change: '3 High Priority',
    period: 'requires action',
    trend: 'alert',
    color: 'amber',
    description: 'Indent, BQC, TER & award sanctions',
  },
  {
    id: 'bids-eval',
    title: 'Bids Under Evaluation',
    value: '27',
    change: '14 PQ, 9 Tech, 4 Comm',
    period: 'active stages',
    trend: 'up',
    color: 'indigo',
    description: 'Multi-stage committee evaluations',
  },
];

export const RECENT_TENDERS = [
  {
    tenderId: 'DPIIT/IT/2026/089',
    title: 'AI-Powered Single Window Regulatory Compliance & Analytics Engine',
    department: 'Digital India & Startup India Division',
    status: 'Technical Evaluation',
    statusVariant: 'warning',
    lastUpdated: '30 Oct 2026, 11:30 AM',
    estimatedValue: '₹ 18.50 Cr',
    bidsReceived: 6,
  },
  {
    tenderId: 'DPIIT/INFRA/2026/074',
    title: 'Procurement of Modular Cloud Compute Cluster for Industrial Corridor Geospatial Hub',
    department: 'NICDC & Industrial Corridors',
    status: 'Pre-Bid Queries',
    statusVariant: 'info',
    lastUpdated: '29 Oct 2026, 04:15 PM',
    estimatedValue: '₹ 42.00 Cr',
    bidsReceived: 8,
  },
  {
    tenderId: 'DPIIT/CONS/2026/061',
    title: 'Engagement of Transaction Advisor for PM GatiShakti Multi-Modal Logistics Nodes',
    department: 'Logistics Division',
    status: 'Commercial Evaluation',
    statusVariant: 'warning',
    lastUpdated: '28 Oct 2026, 02:40 PM',
    estimatedValue: '₹ 7.20 Cr',
    bidsReceived: 4,
  },
  {
    tenderId: 'DPIIT/SEC/2026/055',
    title: 'Comprehensive Annual Maintenance & Managed SOC Services for Udyog Bhawan Data Center',
    department: 'Information Security Cell',
    status: 'Active / Published',
    statusVariant: 'success',
    lastUpdated: '27 Oct 2026, 10:00 AM',
    estimatedValue: '₹ 12.80 Cr',
    bidsReceived: 5,
  },
  {
    tenderId: 'DPIIT/HARD/2026/048',
    title: 'Supply & Deployment of High-End Workstations for Patents & Designs Examination Cells',
    department: 'Controller General of Patents, Designs & Trademarks',
    status: 'Contract Awarded',
    statusVariant: 'secondary',
    lastUpdated: '25 Oct 2026, 05:20 PM',
    estimatedValue: '₹ 9.60 Cr',
    bidsReceived: 7,
  },
  {
    tenderId: 'DPIIT/AUD/2026/039',
    title: 'Third-Party Independent Security & Quality Audit for GeM Integrated Services',
    department: 'Procurement Policy Division',
    status: 'Under Drafting',
    statusVariant: 'neutral',
    lastUpdated: '24 Oct 2026, 01:15 PM',
    estimatedValue: '₹ 3.10 Cr',
    bidsReceived: 0,
  },
];

export const PENDING_APPROVALS = [
  {
    referenceId: 'APR-2026-1182',
    procurementStage: 'BQC Specification Clearance',
    tenderRef: 'DPIIT/AI/2026/092',
    department: 'Digital India & Startup India',
    assignedTo: 'Dr. Anita Sharma',
    role: 'JS & Financial Advisor',
    pendingSince: '2 days ago',
    priority: 'High',
  },
  {
    referenceId: 'APR-2026-1175',
    procurementStage: 'Technical Evaluation Report (TER)',
    tenderRef: 'DPIIT/IT/2026/089',
    department: 'IT Directorate',
    assignedTo: 'Rajesh Verma',
    role: 'Director (Procurement)',
    pendingSince: '3 days ago',
    priority: 'High',
  },
  {
    referenceId: 'APR-2026-1160',
    procurementStage: 'Pre-Bid Corrigendum #2 Approval',
    tenderRef: 'DPIIT/INFRA/2026/074',
    department: 'NICDC & Industrial Corridors',
    assignedTo: 'Tender Committee Chair',
    role: 'TEC Chairperson',
    pendingSince: '18 hours ago',
    priority: 'Medium',
  },
  {
    referenceId: 'APR-2026-1144',
    procurementStage: 'PBG Verification & Contract Signing',
    tenderRef: 'DPIIT/HARD/2026/048',
    department: 'CGPDTM Directorate',
    assignedTo: 'Legal & Finance Cell',
    role: 'Under Secretary (Finance)',
    pendingSince: '4 days ago',
    priority: 'Low',
  },
];

export const RECENT_ACTIVITIES = [
  {
    id: 'act-1',
    type: 'tender_created',
    title: 'Tender DPIIT/AI/2026/092 drafted',
    description: 'Initial indent and BQC criteria generated by AI Assistant for Automated RFP Scrutiny System',
    timestamp: '25 mins ago',
    author: 'S. K. Gupta',
    badge: 'Tender Drafting',
  },
  {
    id: 'act-2',
    type: 'doc_uploaded',
    title: 'Pre-Bid Query Clarifications uploaded',
    description: 'Consolidated response sheet addressing 47 vendor queries uploaded for Corrigendum-1 issuance',
    timestamp: '2 hours ago',
    author: 'Ramesh Chandra',
    badge: 'Pre-Bid Corrigendum',
  },
  {
    id: 'act-3',
    type: 'approval_completed',
    title: 'Administrative Approval & Expenditure Sanction accorded',
    description: 'Sanction approved for ₹18.50 Cr for Cloud Architecture Expansion',
    timestamp: '4 hours ago',
    author: 'Dr. Anita Sharma',
    badge: 'Approval',
  },
  {
    id: 'act-4',
    type: 'eval_updated',
    title: 'Technical Evaluation matrix updated',
    description: 'Prequalification scoring verified for 6 participating bidders under Tender #DPIIT/IT/2026/089',
    timestamp: 'Yesterday at 05:45 PM',
    author: 'Vikram Nair',
    badge: 'Evaluation',
  },
];

export const NOTIFICATIONS_DATA = [
  {
    id: 'notif-1',
    title: 'Corrigendum #2 Published',
    message: 'Tender #DPIIT/INFRA/2026/074 bid submission deadline extended to 15 Nov 2026.',
    time: '10 mins ago',
    unread: true,
    type: 'corrigendum',
  },
  {
    id: 'notif-2',
    title: 'PQ Evaluation Pending Approval',
    message: 'Technical committee submitted evaluation scores for 4 eligible bidders.',
    time: '1 hour ago',
    unread: true,
    type: 'approval',
  },
  {
    id: 'notif-3',
    title: 'PBG Verification Received',
    message: 'Original PBG bank confirmation confirmed via SFMS for Tender #048.',
    time: 'Yesterday',
    unread: false,
    type: 'contract',
  },
  {
    id: 'notif-4',
    title: 'AI Compliance Scan Ready',
    message: 'Draft RFP for Geospatial Hub scanned: 0 compliance violations found against GFR 2017.',
    time: '2 days ago',
    unread: false,
    type: 'ai',
  },
];

export const MODULE_DESCRIPTIONS = {
  'pr-indent': {
    title: 'Purchase Requisition (PR) / Indent Management',
    category: 'Procurement Management',
    description: 'Create, review, and track departmental procurement requisitions, technical specifications, and budgetary approvals before formal tender initiation.',
    rfpStage: 'Pre-Tender Stage 1: Indent & Budget Sanction',
    features: [
      'Digital Indent creation with itemized BoQ (Bill of Quantities)',
      'Budgetary clearance verification & Financial Concurrence',
      'AI-assisted specification generation from past government standard RFPs',
      'Multi-level departmental approval routing and delegation matrix'
    ]
  },
  'estimates': {
    title: 'Estimate Management & Market Rate Discovery',
    category: 'Procurement Management',
    description: 'Compute realistic cost estimates adhering to GFR 2017 rules, historical GeM price analytics, and commercial market rate comparisons.',
    rfpStage: 'Pre-Tender Stage 2: Estimate Discovery',
    features: [
      'Historical rate benchmark retrieval from CPP Portal & GeM',
      'AI price trend prediction and inflation adjustment models',
      'Justification sheet auto-compilation for Finance Committee',
      'Detailed cost breakdown analysis for services and goods'
    ]
  },
  'bqc': {
    title: 'Bidder Qualification Criteria (BQC) Management',
    category: 'Procurement Management',
    description: 'Formulate, validate, and standardize mandatory eligibility criteria, financial turnover thresholds, and technical past performance benchmarks.',
    rfpStage: 'Pre-Tender Stage 3: Eligibility Formulation',
    features: [
      'Turnover and net worth eligibility rules conforming to CVC guidelines',
      'Past project experience criteria builder with similarity grading',
      'AI-based restrictive clause detection to ensure fair competition',
      'Make in India (MII) and MSME exemption policy validation'
    ]
  },
  'drafting': {
    title: 'Tender Drafting & RFP Builder',
    category: 'Tender Management',
    description: 'Author standard two-envelope and single-envelope RFPs utilizing approved DPIIT templates, General Conditions of Contract (GCC), and Special Conditions (SCC).',
    rfpStage: 'Tender Formulation Stage 1',
    features: [
      'Clause-by-clause RFP builder with version control',
      'AI-driven GFR compliance and anti-bias verification',
      'Automated SLA and penalty schedule generation',
      'Export to official bilingual (English / Hindi) gazette format'
    ]
  },
  'list': {
    title: 'Tender Master Directory & Repository',
    category: 'Tender Management',
    description: 'Centralized view of all archived, active, published, and upcoming procurement tenders across all DPIIT directorates.',
    rfpStage: 'Tender Management Overview',
    features: [
      'Advanced multi-criteria search by CPPP ID, Directorate, or Stage',
      'Real-time status tracking from NIT publication to Contract Award',
      'Integrated document vault with digital signature validation',
      'Audit log and timeline tracking for transparency'
    ]
  },
  'pre-bid-queries': {
    title: 'Pre-Bid Queries & Clarifications Management',
    category: 'Tender Management',
    description: 'Receive, categorize, and draft committee responses to prospective bidder queries prior to the formal bid submission deadline.',
    rfpStage: 'Tender Management Stage 2: Vendor Consultation',
    features: [
      'Automated semantic clustering of duplicate bidder queries',
      'AI-suggested query responses based on RFP clauses',
      'Departmental subject-matter expert review workflow',
      'One-click Corrigendum-ready query-response matrix compilation'
    ]
  },
  'corrigendum': {
    title: 'Corrigendum & Addendum Publisher',
    category: 'Tender Management',
    description: 'Draft, approve, and officially publish amendments to tender schedules, BoQs, and specification terms with audit traceability.',
    rfpStage: 'Tender Management Stage 3: Amendment Lifecycle',
    features: [
      'Side-by-side clause diff viewer (Original vs Amended)',
      'Automated extension calculation for mandatory submission windows',
      'Multi-signatory approval workflow before publication',
      'CPPP and GeM API broadcast dispatcher readiness'
    ]
  },
  'submissions': {
    title: 'Bid Submissions & Vault Management',
    category: 'Bid Management',
    description: 'Encrypted electronic repository for vendor technical and financial bid packs with cryptographic timestamping and dual-key decryption.',
    rfpStage: 'Bid Intake Stage 1: Secure Submission',
    features: [
      'Dual-key bid opening authorization protocol',
      'Tender Fee and EMD (Earnest Money Deposit) exemption verification',
      'Integrity hash check for uploaded zip packages',
      'Bid opening summary generation (Commercial & Technical envelopes)'
    ]
  },
  'document-processing': {
    title: 'Document Processing & OCR Extraction Engine',
    category: 'Bid Management',
    description: 'AI-driven automated ingestion, OCR extraction, and document indexing of bidder financial balance sheets, CA certificates, and GST returns.',
    rfpStage: 'Bid Intake Stage 2: AI Parsing',
    features: [
      'Intelligent extraction of CA audited balance sheets and turnover',
      'GSTIN, PAN, and MSME certificate verification against Gov databases',
      'Client completion certificate OCR and project value verification',
      'Document authenticity and anomaly detection score'
    ]
  },
  'pq': {
    title: 'Prequalification (PQ) Evaluation',
    category: 'Bid Evaluation',
    description: 'Screen all submitted bids against mandatory non-financial and non-technical baseline criteria (EMD, power of attorney, legal solvency, blacklisting).',
    rfpStage: 'Evaluation Stage 1: Eligibility Screening',
    features: [
      'Automated pass/fail matrix against BQC rules',
      'Debarment and blacklisting check across Central Vigilance Portal',
      'MSME/MII relaxation application and record keeping',
      'Preliminary rejection justification generation'
    ]
  },
  'technical': {
    title: 'Technical Evaluation (TQ) & Scoring',
    category: 'Bid Evaluation',
    description: 'Assess technical specifications, solution architectures, project methodologies, key personnel credentials, and vendor demo scores.',
    rfpStage: 'Evaluation Stage 2: Technical Assessment',
    features: [
      'Weighted scoring grid according to RFP criteria',
      'Multi-evaluator blind scoring aggregation',
      'AI compliance matrix comparison between Bid and Tender BoQ',
      'Technical Evaluation Report (TER) generation for approval'
    ]
  },
  'commercial': {
    title: 'Commercial Evaluation & Price Bid Opening',
    category: 'Bid Evaluation',
    description: 'Open and evaluate financial bids of technically qualified vendors, verify taxes/duties, and establish L1 rankings or comparative metrics.',
    rfpStage: 'Evaluation Stage 3: Financial Scrutiny',
    features: [
      'Automated BoQ arithmetic error check and tax normalization',
      'Abnormally low bid detection conforming to CVC guidelines',
      'L1 ranking determination with preference for domestic manufacturers',
      'Price impact analysis and savings calculator'
    ]
  },
  'comparative-statement': {
    title: 'Comparative Statement (CS) Generator',
    category: 'Bid Evaluation',
    description: 'Generate standardized tabular comparative statements summarizing bidder compliance, technical marks, and evaluated prices for committee sign-off.',
    rfpStage: 'Evaluation Stage 4: Comparative Reporting',
    features: [
      'Side-by-side multi-vendor parameter comparison',
      'Export to signed PDF and spreadsheet for Finance Committee',
      'Audit log of committee modifications and dissenting notes',
      'Summary recommendation note for competent authority'
    ]
  },
  'qcbs': {
    title: 'QCBS (Quality and Cost-Based Selection) Calculator',
    category: 'Bid Evaluation',
    description: 'Compute final composite scores combining technical merit and commercial pricing under designated 70:30 or 80:20 formulaic models.',
    rfpStage: 'Evaluation Stage 5: QCBS Finalization',
    features: [
      'Dynamic weightage assignment (e.g., 70:30 or 80:20)',
      'Formula verification: S = (Tb / Tmax * Tw) + (Cmin / Cb * Cw)',
      'Tie-breaker resolution rules according to RFP terms',
      'Final ranking statement with audit-ready scoring sheets'
    ]
  },
  'pbg': {
    title: 'Performance Bank Guarantee (PBG) Management',
    category: 'Post Evaluation',
    description: 'Track receipt, SFMS bank confirmation, validity periods, and timely renewal or release of performance guarantees submitted by winning contractors.',
    rfpStage: 'Post-Award Stage 1: Security & Compliance',
    features: [
      'SFMS confirmation tracking with issuing banks',
      'Automatic expiry reminder alerts (60/30/15 days prior)',
      'PBG amendment and extension workflow',
      'Encashment and release recommendation sign-off'
    ]
  },
  'contracts': {
    title: 'Contract Management & SLA Monitoring',
    category: 'Post Evaluation',
    description: 'Generate formal contracts, track milestone deliverables, review vendor invoice clearances, and monitor vendor SLA adherence.',
    rfpStage: 'Post-Award Stage 2: Contract Execution',
    features: [
      'Digital contract generation and digital signature integration',
      'Milestone-linked payment certificate issuance',
      'SLA breach penalty deduction calculations',
      'Contract amendment and extension ledger'
    ]
  },
  'ai-assistant': {
    title: 'DPIIT AI Procurement Assistant & Co-Pilot',
    category: 'AI & Decision Support',
    description: 'Interactive generative AI assistant trained on General Financial Rules (GFR 2017), CVC procurement manuals, DPIIT policies, and GeM guidelines.',
    rfpStage: 'AI Co-Pilot Support Across All Stages',
    features: [
      'Natural language query answering on GFR and procurement circulars',
      'RFP clause drafting from simple prompts',
      'Bidder query automated response suggestion',
      'Procurement risk analysis and non-compliance flagging'
    ]
  },
  'reports': {
    title: 'Reports & Procurement Analytics',
    category: 'Intelligence & Reporting',
    description: 'Executive dashboards, cycle-time analytics, procurement savings reports, and compliance monitoring across all DPIIT wings.',
    rfpStage: 'MIS & Executive Oversight',
    features: [
      'Procurement cycle time tracking (Indent to Contract Award)',
      'Directorate-wise procurement budget utilization vs expenditure',
      'Vendor participation and competition index metrics',
      'Exportable MIS reports for Parliamentary and Ministry reviews'
    ]
  },
  'admin': {
    title: 'System Administration & Security Governance',
    category: 'Administration',
    description: 'Role-based access control (RBAC), user directory management, audit trail logs, security configurations, and API integrations.',
    rfpStage: 'System Configuration & Governance',
    features: [
      'User management with role hierarchies (Approver, Evaluator, Secretary)',
      'Digital signature (DSC / e-Sign) certificate bindings',
      'Comprehensive tamper-evident system audit trail',
      'FastAPI backend connectivity and integration settings'
    ]
  }
};

