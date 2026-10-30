# DPIIT AI/ML-Based Intelligent Procurement Management Solution

**Ministry of Commerce and Industry | Department for Promotion of Industry and Internal Trade (DPIIT)**  
**Government of India**

---

## 🎯 Day 1 Milestone Overview
Day 1 establishes the enterprise-grade frontend foundation for the DPIIT Intelligent Procurement Management Portal, built in strict compliance with General Financial Rules (GFR 2017), Central Vigilance Commission (CVC) guidelines, and the DPIIT AI/ML Procurement RFP workflow.

### 🌟 Implemented Features
1. **Project Setup & Architecture**:
   - Modern React.js (v19) with Vite (v8)
   - Tailwind CSS (v4) with enterprise government color palette (Deep Navy Blue `#0f2e5a`, `#1e3a8a`, subtle slate greys, crisp whites)
   - React Router DOM (v7) with protected route guards and breadcrumb synchronization
   - Lucide React iconography mapped to all procurement stages
2. **Official Login Page**:
   - DPIIT branding with National Emblem seal representation
   - Username/Email & Password fields with interactive show/hide toggle
   - Remember Me state retention
   - Dedicated "Frontend Demo Credentials" quick-fill buttons
   - Explicit disclaimer regarding demo authentication (no false security claims)
3. **Application Shell & Layout**:
   - **Collapsible Left Sidebar** with expand/collapse toggle, active route highlighting, and multi-level accordion submenus
   - **Top Navigation Bar** with Government of India header strip, interactive search (Ctrl+K), notification center with unread counter, role switcher, and sign-out
   - **Breadcrumb Navigation Strip** with live route tracking and secure portal seal
4. **Procurement Management Dashboard**:
   - **Statistic Cards**: Total Tenders, Active Tenders, Pending Approvals, Bids Under Evaluation
   - **Quick Actions**: Fast-track triggers for PR Indents, RFP Drafting, Bid Vault, and AI Assistant
   - **Recent Tenders Table**: Filterable by keyword, with status pills and modal inspection
   - **Pending Approvals Table**: With role attribution, priority indicators, and interactive review modal
   - **Recent Activities Timeline**: Audit trail covering indent generation, clarifications, sanction orders, and scoring updates
5. **Placeholder Pages for Future Stages**:
   - Modular placeholder views for all 18 procurement sub-modules with RFP stage mapping, upcoming feature checklists, and FastAPI backend readiness notices.

---

## 🚀 How to Run the Application

### Option 1: From the Root Directory
```bash
# Run the development server
npm run dev
```

### Option 2: From the `frontend` Directory
```bash
cd frontend
npm run dev
```

The Vite dev server will start (typically at `http://localhost:5173`).

### Building for Production
```bash
# From workspace root
npm run build

# Or from frontend/
cd frontend
npm run build
```

---

## 🔑 Demo Access Credentials
Use the pre-configured credentials displayed on the login page:
- **Email**: `procurement.officer@dpiit.gov.in`
- **Password**: `Demo@User2026`
*(Or use the 1-click "Quick Fill" button on the login screen)*

---

## 📂 Project Structure
```
d:\KPMG\
├── package.json              # Workspace root scripts
├── README.md                 # Project documentation
└── frontend/                 # React + Vite application
    ├── index.html            # Government portal HTML entry
    ├── package.json          # Frontend dependencies
    ├── vite.config.js        # Vite & Tailwind configuration
    └── src/
        ├── App.jsx           # Master route registry & auth guards
        ├── main.jsx          # React DOM entry
        ├── index.css         # Tailwind CSS styling
        ├── context/
        │   └── AuthContext.jsx       # Demo session & user state management
        ├── data/
        │   └── mockData.js           # Synthetic procurement data conforming to RFP
        ├── components/
        │   ├── common/               # Reusable UI primitives
        │   │   ├── Badge.jsx         # Status indicators
        │   │   ├── Button.jsx        # Enterprise button variants
        │   │   ├── Card.jsx          # Modular card components
        │   │   └── Modal.jsx         # Interactive inspection & action dialogs
        │   ├── layout/               # Application shell
        │   │   ├── AppLayout.jsx     # Master responsive wrapper
        │   │   ├── Header.jsx        # Top navigation & user controls
        │   │   ├── Sidebar.jsx       # Collapsible multi-level navigation
        │   │   └── SearchModal.jsx   # Ctrl+K global search palette
        │   └── dashboard/            # Dashboard modules
        │       ├── StatCard.jsx
        │       ├── QuickActions.jsx
        │       ├── RecentActivities.jsx
        │       ├── RecentTendersTable.jsx
        │       └── PendingApprovalsTable.jsx
        └── pages/
            ├── auth/
            │   └── LoginPage.jsx     # Official portal login
            ├── dashboard/
            │   └── DashboardPage.jsx # Core procurement dashboard
            └── placeholders/
                └── ModulePlaceholder.jsx # Structured placeholder view for future modules
```

---

## 📋 RFP Module Mapping
| Module Category | Sub-Module | Route | Status |
| :--- | :--- | :--- | :--- |
| **Overview** | Dashboard | `/dashboard` | ✅ Complete (Day 1) |
| **Procurement Management** | PR / Indent | `/procurement/pr-indent` | 🚧 Day 2 Roadmap |
| | Estimate Management | `/procurement/estimates` | 🚧 Day 2 Roadmap |
| | BQC Management | `/procurement/bqc` | 🚧 Day 2 Roadmap |
| **Tender Management** | Tender Drafting | `/tenders/drafting` | 🚧 Day 2 Roadmap |
| | Tender List | `/tenders/list` | 🚧 Day 2 Roadmap |
| | Pre-Bid Queries | `/tenders/pre-bid-queries` | 🚧 Day 2 Roadmap |
| | Corrigendum | `/tenders/corrigendum` | 🚧 Day 2 Roadmap |
| **Bid Management** | Bid Submissions | `/bids/submissions` | 🚧 Day 3 Roadmap |
| | Document Processing | `/bids/document-processing` | 🚧 Day 3 Roadmap |
| **Bid Evaluation** | Prequalification (PQ) | `/evaluation/pq` | 🚧 Day 3 Roadmap |
| | Technical Evaluation (TQ) | `/evaluation/technical` | 🚧 Day 3 Roadmap |
| | Commercial Evaluation | `/evaluation/commercial` | 🚧 Day 3 Roadmap |
| | Comparative Statement | `/evaluation/comparative-statement` | 🚧 Day 3 Roadmap |
| | QCBS | `/evaluation/qcbs` | 🚧 Day 3 Roadmap |
| **Post Evaluation** | PBG Management | `/post-evaluation/pbg` | 🚧 Day 4 Roadmap |
| | Contract Management | `/post-evaluation/contracts` | 🚧 Day 4 Roadmap |
| **AI Assistant** | AI Co-Pilot | `/ai-assistant` | 🚧 Day 4 Roadmap |
| **Analytics & Admin** | Reports & Analytics | `/reports` | 🚧 Day 5 Roadmap |
| | Administration | `/admin` | 🚧 Day 5 Roadmap |
