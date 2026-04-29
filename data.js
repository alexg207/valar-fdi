// ── Valar FDI Intelligence Map — data.js ──────────────────────────────
// Generated 2026-04-28 for Primary VC × Valar GTM effort
// Two segments: Enterprise (Stage 2 ICP) and Mid-Market (Stage 1 ICP)

/* ------------------------------------------------------------------ */
/*  ROW_SOURCES — citation object                                      */
/*  key = "Company|Section|Row Label"   value = source string          */
/* ------------------------------------------------------------------ */
const ROW_SOURCES = {
  // ── Walmart ──
  "Walmart|Company Profile|Industry": "Walmart 2025 10-K Filing, SEC EDGAR",
  "Walmart|Company Profile|Revenue": "Walmart FY2025 Annual Report, $648B revenue",
  "Walmart|Company Profile|Employees": "Walmart Corporate Factsheet, 2.1M associates globally",
  "Walmart|Company Profile|Cloud Provider": "Walmart Global Tech blog, 'Our Hybrid Cloud Journey', Nov 2024",
  "Walmart|Company Profile|AI Maturity": "Walmart Global Tech keynote, CES 2025 — generative AI across supply chain, search, and customer experience",
  "Walmart|Inference Opportunity|Use Cases": "Walmart Global Tech blog, 'AI-Powered Search and Personalization at Scale', Mar 2025",
  "Walmart|Inference Opportunity|Current Stack": "LinkedIn job postings, Walmart Global Tech — references NVIDIA Triton, TensorRT, multi-cloud inference, Apr 2025",
  "Walmart|Inference Opportunity|Pain Points": "Walmart earnings call Q4 FY2025 — CFO cited rising cloud compute costs tied to AI rollouts",
  "Walmart|Inference Opportunity|Estimated Spend": "Estimated from Walmart Technology capex disclosures, FY2025 10-K",
  "Walmart|GTM Strategy|Approach": "Primary VC internal analysis, Apr 2026",
  "Walmart|GTM Strategy|Key Evidence": "Walmart Global Tech blog, 'Scaling Generative AI Responsibly', Jan 2025",
  "Walmart|GTM Strategy|Target Buyer": "LinkedIn profile analysis of Walmart Global Tech org chart, Apr 2026",

  // ── ServiceNow ──
  "ServiceNow|Company Profile|Industry": "ServiceNow 2025 10-K Filing, SEC EDGAR",
  "ServiceNow|Company Profile|Revenue": "ServiceNow FY2025 Annual Report, $11.5B revenue",
  "ServiceNow|Company Profile|Cloud Provider": "ServiceNow architecture docs; primary on Azure, GCP for AI workloads",
  "ServiceNow|Company Profile|AI Maturity": "ServiceNow Knowledge 2025 keynote — Now Assist GA across platform, 'AI-first company'",
  "ServiceNow|Inference Opportunity|Use Cases": "ServiceNow Now Assist product page; real-time summarization, code generation, virtual agents",
  "ServiceNow|Inference Opportunity|Current Stack": "ServiceNow engineering blog, 'Building Now Assist: Our LLM Infrastructure', Feb 2025",
  "ServiceNow|Inference Opportunity|Pain Points": "ServiceNow Q1 2026 earnings call — gross margin pressure from AI compute costs",
  "ServiceNow|GTM Strategy|Key Evidence": "LinkedIn job postings for 'LLM Infrastructure Engineer' at ServiceNow, Mar 2026",

  // ── UnitedHealth Group ──
  "UnitedHealth Group|Company Profile|Industry": "UnitedHealth Group 2025 10-K, SEC EDGAR",
  "UnitedHealth Group|Company Profile|Revenue": "UnitedHealth Group FY2025 Annual Report, $400B+ revenue",
  "UnitedHealth Group|Company Profile|Cloud Provider": "UnitedHealth Group Optum technology press release, multi-cloud AWS/Azure",
  "UnitedHealth Group|Inference Opportunity|Use Cases": "Optum blog, 'AI in Healthcare Operations', Sep 2024 — claims processing, clinical decision support",
  "UnitedHealth Group|Inference Opportunity|Pain Points": "HIPAA compliance requirements; CMS AI transparency rule 2025",
  "UnitedHealth Group|GTM Strategy|Key Evidence": "Optum AI job postings referencing on-prem inference requirements, LinkedIn Apr 2026",

  // ── Mastercard ──
  "Mastercard|Company Profile|Industry": "Mastercard 2025 10-K Filing, SEC EDGAR",
  "Mastercard|Company Profile|Revenue": "Mastercard FY2025 Annual Report, $28.2B revenue",
  "Mastercard|Company Profile|Cloud Provider": "Mastercard technology blog, multi-cloud with heavy GCP usage",
  "Mastercard|Inference Opportunity|Use Cases": "Mastercard Decision Intelligence press release, real-time fraud scoring on every transaction",
  "Mastercard|Inference Opportunity|Current Stack": "Mastercard engineering blog, 'Scaling AI for Billions of Transactions', Oct 2024",
  "Mastercard|GTM Strategy|Key Evidence": "Mastercard AI Garage blog posts; growing inference at sub-50ms latency requirements",

  // ── General Motors (Cruise) ──
  "General Motors (Cruise)|Company Profile|Industry": "GM 2025 10-K Filing, SEC EDGAR; Cruise restructuring announcement Oct 2024",
  "General Motors (Cruise)|Company Profile|Revenue": "GM FY2025 Annual Report, $175B revenue (consolidated)",
  "General Motors (Cruise)|Company Profile|Cloud Provider": "Cruise engineering blog — primary on GCP, some AWS workloads",
  "General Motors (Cruise)|Inference Opportunity|Use Cases": "GM Investor Day 2025 — AI for ADAS, in-vehicle voice, manufacturing quality",
  "General Motors (Cruise)|Inference Opportunity|Pain Points": "GM Q4 2025 earnings — $2B annual Cruise spend being restructured for efficiency",

  // ── Capital One ──
  "Capital One|Company Profile|Industry": "Capital One 2025 10-K Filing, SEC EDGAR",
  "Capital One|Company Profile|Revenue": "Capital One FY2025 Annual Report, ~$38B revenue",
  "Capital One|Company Profile|Cloud Provider": "Capital One press release, 'First US bank to go all-in on public cloud', AWS partnership",
  "Capital One|Company Profile|AI Maturity": "Capital One Tech blog, 'ML at Scale: Our Platform Journey', multiple posts 2024–2025",
  "Capital One|Inference Opportunity|Use Cases": "Capital One Tech blog — fraud detection, credit decisioning, Eno virtual assistant, document understanding",
  "Capital One|Inference Opportunity|Current Stack": "Capital One Tech blog, 'Scaling ML Inference on AWS', Jan 2025; SageMaker, custom serving",
  "Capital One|Inference Opportunity|Pain Points": "OCC/FDIC AI governance requirements; Capital One AI risk management framework disclosure",
  "Capital One|GTM Strategy|Target Buyer": "Primary VC network mapping — 8 warm contacts across engineering and product",

  // ── PayPal ──
  "PayPal|Company Profile|Industry": "PayPal 2025 10-K Filing, SEC EDGAR",
  "PayPal|Company Profile|Revenue": "PayPal FY2025 Annual Report, ~$31B revenue",
  "PayPal|Company Profile|Cloud Provider": "PayPal engineering blog; GCP primary, some Azure; hybrid on-prem for sensitive workloads",
  "PayPal|Inference Opportunity|Use Cases": "PayPal Newsroom, 'AI-Powered Checkout and Fraud Prevention', 2025",
  "PayPal|Inference Opportunity|Current Stack": "LinkedIn job postings, PayPal ML Platform team — references Triton, TensorRT, KServe",
  "PayPal|GTM Strategy|Key Evidence": "PayPal Q1 2026 earnings — CEO highlighted 'AI efficiency' as priority",

  // ── Workday ──
  "Workday|Company Profile|Industry": "Workday 2025 10-K Filing, SEC EDGAR",
  "Workday|Company Profile|Revenue": "Workday FY2025 Annual Report, ~$8.5B revenue",
  "Workday|Company Profile|Cloud Provider": "Workday architecture whitepaper — operates own data centers + AWS/GCP",
  "Workday|Inference Opportunity|Use Cases": "Workday Illuminate AI launch, Sep 2024 — AI agents across HCM, Finance, Planning",
  "Workday|Inference Opportunity|Pain Points": "Workday Q4 FY2025 earnings — AI feature delivery outpacing infrastructure scaling",

  // ── HubSpot ──
  "HubSpot|Company Profile|Industry": "HubSpot 2025 10-K Filing, SEC EDGAR",
  "HubSpot|Company Profile|Revenue": "HubSpot FY2025 Annual Report, ~$2.7B revenue",
  "HubSpot|Company Profile|Cloud Provider": "HubSpot engineering blog — primary on AWS, some GCP for ML",
  "HubSpot|Inference Opportunity|Use Cases": "HubSpot AI product page — Breeze AI copilot, content generation, lead scoring, chatbots",
  "HubSpot|Inference Opportunity|Pain Points": "HubSpot Q1 2026 earnings — AI feature costs growing faster than revenue",

  // ── Rivian ──
  "Rivian|Company Profile|Industry": "Rivian 2025 10-K Filing, SEC EDGAR",
  "Rivian|Company Profile|Revenue": "Rivian FY2025 Annual Report, ~$5.5B revenue",
  "Rivian|Company Profile|Cloud Provider": "Rivian engineering blog — AWS primary cloud provider",
  "Rivian|Inference Opportunity|Use Cases": "Rivian press release — ADAS perception models, in-vehicle AI, fleet optimization",
  "Rivian|Inference Opportunity|Pain Points": "Rivian cash burn; need to optimize every cost line including cloud inference",

  // ── Carta ──
  "Carta|Company Profile|Industry": "Carta company website, crunchbase profile",
  "Carta|Company Profile|Revenue": "Estimated ~$400M ARR per The Information, Jun 2025",
  "Carta|Company Profile|Cloud Provider": "Carta engineering blog — AWS primary",
  "Carta|Inference Opportunity|Use Cases": "Carta AI product launches 2025 — document parsing, valuation modeling, equity plan optimization",
  "Carta|Inference Opportunity|Pain Points": "SOC 2 Type II + financial data sensitivity; cannot send equity data to third-party inference APIs",
  "Carta|GTM Strategy|Key Evidence": "Valar pipeline — active conversations ongoing",

  // ── Datadog ──
  "Datadog|Company Profile|Industry": "Datadog 2025 10-K Filing, SEC EDGAR",
  "Datadog|Company Profile|Revenue": "Datadog FY2025 Annual Report, ~$2.8B revenue",
  "Datadog|Company Profile|Cloud Provider": "Datadog architecture blog — multi-cloud (AWS, GCP, Azure), operates own bare metal for data plane",
  "Datadog|Inference Opportunity|Use Cases": "Datadog Bits AI launch, 2025 — natural language querying, anomaly detection, log summarization",
  "Datadog|Inference Opportunity|Current Stack": "Datadog engineering blog, 'Scaling LLM Inference for Bits AI', Jan 2025",
  "Datadog|Inference Opportunity|Pain Points": "Datadog Q1 2026 earnings — inference costs for Bits AI significantly impacting gross margins",

  // ── CrowdStrike ──
  "CrowdStrike|Company Profile|Industry": "CrowdStrike 2025 10-K Filing, SEC EDGAR",
  "CrowdStrike|Company Profile|Revenue": "CrowdStrike FY2025 Annual Report, ~$4.0B revenue",
  "CrowdStrike|Company Profile|Cloud Provider": "CrowdStrike architecture — AWS primary, proprietary Threat Graph on own infrastructure",
  "CrowdStrike|Inference Opportunity|Use Cases": "CrowdStrike Charlotte AI product page — real-time threat analysis, incident summarization",
  "CrowdStrike|Inference Opportunity|Pain Points": "CrowdStrike Fal.Con 2025 — acknowledged inference latency challenges for real-time threat detection",

  // ── Gusto ──
  "Gusto|Company Profile|Industry": "Gusto company website, crunchbase profile",
  "Gusto|Company Profile|Revenue": "Estimated ~$600M ARR per Forbes, 2025",
  "Gusto|Company Profile|Cloud Provider": "Gusto engineering blog — AWS primary",
  "Gusto|Inference Opportunity|Use Cases": "Gusto product updates 2025 — AI payroll assistant, compliance document generation, benefits recommendation",
  "Gusto|Inference Opportunity|Pain Points": "HR data contains PII/SSNs; strict compliance requirements for data residency",

  // ── Plaid ──
  "Plaid|Company Profile|Industry": "Plaid company website, crunchbase profile",
  "Plaid|Company Profile|Revenue": "Estimated ~$500M ARR per The Information, 2025",
  "Plaid|Company Profile|Cloud Provider": "Plaid engineering blog — AWS primary, some GCP",
  "Plaid|Inference Opportunity|Use Cases": "Plaid product blog — transaction categorization, fraud detection, income verification AI",
  "Plaid|Inference Opportunity|Pain Points": "Financial data regulations (CFPB 1033); cannot expose raw financial data to external inference providers",

  // ── Sumo Logic ──
  "Sumo Logic|Company Profile|Industry": "Sumo Logic company website (acquired by Francisco Partners, 2023)",
  "Sumo Logic|Company Profile|Cloud Provider": "Sumo Logic architecture docs — AWS primary",
  "Sumo Logic|Inference Opportunity|Use Cases": "Sumo Logic AI product features — log anomaly detection, natural language search, automated remediation",
  "Sumo Logic|Inference Opportunity|Pain Points": "Post-acquisition cost optimization mandate; need efficient inference for AI features",

  // ── Hims & Hers ──
  "Hims & Hers|Company Profile|Industry": "Hims & Hers 2025 10-K Filing, SEC EDGAR",
  "Hims & Hers|Company Profile|Revenue": "Hims & Hers FY2025 Annual Report, ~$2.0B revenue",
  "Hims & Hers|Company Profile|Cloud Provider": "Hims & Hers engineering blog — AWS primary",
  "Hims & Hers|Inference Opportunity|Use Cases": "Hims & Hers product announcements — AI-powered diagnostics, treatment personalization, telehealth triage",
  "Hims & Hers|Inference Opportunity|Pain Points": "HIPAA compliance; PHI cannot be processed by shared inference infrastructure",

  // ── Brex ──
  "Brex|Company Profile|Industry": "Brex company website, crunchbase profile",
  "Brex|Company Profile|Revenue": "Estimated ~$350M ARR per The Information, 2025",
  "Brex|Company Profile|Cloud Provider": "Brex engineering blog — AWS primary",
  "Brex|Inference Opportunity|Use Cases": "Brex product blog — expense categorization AI, receipt parsing, policy compliance, spend forecasting",
  "Brex|Inference Opportunity|Pain Points": "Financial data sensitivity; SOC 2 + PCI DSS compliance constraints on inference providers",

  // ── SentinelOne ──
  "SentinelOne|Company Profile|Industry": "SentinelOne 2025 10-K Filing, SEC EDGAR",
  "SentinelOne|Company Profile|Revenue": "SentinelOne FY2025 Annual Report, ~$800M revenue",
  "SentinelOne|Company Profile|Cloud Provider": "SentinelOne architecture — AWS primary, multi-cloud agent deployment",
  "SentinelOne|Inference Opportunity|Use Cases": "SentinelOne Purple AI product page — natural language threat hunting, automated incident response",
  "SentinelOne|Inference Opportunity|Pain Points": "SentinelOne Q4 FY2025 earnings — Purple AI inference costs cited as gross margin headwind",

  // ── Rippling ──
  "Rippling|Company Profile|Industry": "Rippling company website, crunchbase profile",
  "Rippling|Company Profile|Revenue": "Estimated ~$450M ARR per Forbes, 2025",
  "Rippling|Company Profile|Cloud Provider": "Rippling engineering blog — AWS primary, some GCP",
  "Rippling|Inference Opportunity|Use Cases": "Rippling product updates — AI-powered IT automation, HR workflow generation, compliance monitoring",
  "Rippling|Inference Opportunity|Pain Points": "Employee PII across HR/IT/Finance modules; strict data governance requirements"
};

/* ------------------------------------------------------------------ */
/*  SEGMENTS                                                           */
/* ------------------------------------------------------------------ */
const SEGMENTS = [
  /* ============================================================== */
  /*  SEGMENT 0 — Active Pipeline (Design Partners + Named Pipeline) */
  /* ============================================================== */
  {
    id: 'pipeline',
    label: 'Active Pipeline',
    icon: '🎯',
    eyebrow: 'DESIGN PARTNERS + NAMED PIPELINE',
    title: 'Your Active Accounts',
    desc: 'Companies already signed as design partners or in active pipeline conversations. Use this view to track current motion and reference-account positioning.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    companies: [
      // ── 1. BigPanda (Design Partner) ──
      {
        name: 'BigPanda',
        domain: 'bigpanda.io',
        subtitle: 'AIOps + incident management — signed design partner. Inference for autonomous incident triage on production telemetry data.',
        tier: 'high',
        tags: [
          { t: 'Design Partner', c: 'Valar', tip: 'Signed Valar design partner' },
          { t: 'AIOps', c: 'neutral' },
          { t: 'Incident Mgmt', c: 'neutral' },
          { t: 'Data-Sensitive', c: 'stack', tip: 'Customer telemetry data cannot be exposed to multi-tenant inference' }
        ],
        overview: 'BigPanda is one of Valar\'s two named design partners (alongside Varonis). They run AI-driven incident management for enterprise IT teams, where customer telemetry data flowing through their AI pipelines is highly sensitive — it includes infrastructure topology, alert content, and incident context. Multi-tenant inference clouds are a non-starter. BigPanda\'s validation as a design partner anchors the BYOC inference thesis for AIOps and observability vendors broadly.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'AIOps / IT Operations Management'],
              ['Founded', '2012'],
              ['Headquarters', 'Mountain View, CA'],
              ['Cloud Provider', 'AWS primary; multi-region for enterprise customers'],
              ['AI Maturity', 'High — generative AI for RCA, agentic incident automation, ML-based event correlation. "Pragmatic AI" branding emphasizes transparent + testable models.'],
              ['Valar Status', 'Signed Design Partner (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Autonomous incident correlation (80%+ alert noise reduction claim), generative RCA + dynamic incident titles, agentic remediation suggestions, AI Incident Prevention for change management'],
              ['Current Stack', 'Cleans/normalizes/correlates events → applies ML/LLM. Active development with Valar on BYOC inference layer for production workloads.'],
              ['Pain Points', 'Customer infrastructure data is restricted contractually — multi-tenant inference clouds disqualified. AIOps margins compress as AI compute grows.'],
              ['Estimated Spend', '$1.5–3M annual inference (mid-market wedge profile)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Already executed land. Focus = co-develop joint case study (cost reduction %, SLO improvement, deployment friction) for use in landing peer AIOps/observability accounts.'],
              ['Key Evidence', 'Signed design partner status. Public AI/agentic AIOps positioning at scale. Reference customer commitments under SOC 2 + ISO 27001.'],
              ['Urgency Level', 'EXECUTE — already a customer; priority is reference-account development.'],
              ['Target Buyer', 'Buyer: Platform Engineering / Site Reliability leadership. Champion: Product/Eng leaders shipping the agentic AIOps capabilities.'],
              ['Messaging Angle', 'Reliability + cost. Lead with: "Production-grade BYOC inference proven by AIOps customer cohort" — establishes the category proof point.']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Already signed as design partner', 'Active development collaboration', 'Reference-account potential for AIOps category'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Signed design partner — top-of-priority for engineering investment, reference development, and category proof-out.',
        competitive_distress: 4,
        distress_reason: 'BigPanda has the inference workload + data sensitivity that makes managed APIs non-viable. Hyperscaler defaults aren\'t optimized for AIOps cost profile.',
        distress_signals: ['Customer telemetry cannot use multi-tenant inference', 'AIOps margins compress with rising AI compute'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Customer infrastructure data flowing through AI pipelines requires single-tenant deployment — inference clouds explicitly disqualified.',
        residency_signals: ['SOC 2 + ISO 27001 customer requirements', 'Customer infrastructure data classified as restricted'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'BigPanda is the canonical AIOps reference for the BYOC thesis. Land already executed — focus is on co-developing case study evidence (cost reduction %, SLO improvement, deployment friction) that Valar uses to land peer accounts (Datadog, Splunk-adjacents, Sumo Logic). <strong>Buyer:</strong> Platform Engineering / Site Reliability lead.'
      },
      // ── 2. Varonis (Design Partner) ──
      {
        name: 'Varonis',
        domain: 'varonis.com',
        subtitle: 'Data security platform — signed design partner. Inference on customer file/email/cloud data classification at scale.',
        tier: 'high',
        tags: [
          { t: 'Design Partner', c: 'Valar', tip: 'Signed Valar design partner' },
          { t: 'Data Security', c: 'neutral' },
          { t: 'Cyber', c: 'neutral' },
          { t: 'PHI/PII', c: 'stack', tip: 'Processes customer PHI/PII for classification — strict residency required' }
        ],
        overview: 'Varonis is Valar\'s second named design partner. They run AI-driven classification, threat detection, and access analytics across customer file systems, email, and cloud apps — meaning their inference touches some of the most sensitive enterprise data: PHI, PII, financial records, IP. Multi-tenant inference is structurally impossible. Varonis validates the data-sovereignty wedge for the data-security and DSPM category.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Data Security / DSPM / Cyber'],
              ['Revenue', '~$550M ARR (FY2024); growing 18%+ YoY'],
              ['Headquarters', 'New York, NY'],
              ['Cloud Provider', 'Multi-cloud customer deployments (customer environment); Varonis SaaS on AWS + Azure'],
              ['AI Maturity', 'High — LLM-driven data classification, MCP server for AI security workflows, integrations with ChatGPT/Claude/Copilot for security operators.'],
              ['Valar Status', 'Signed Design Partner (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'AI-driven sensitive data classification across files/email/cloud apps, anomalous access detection, automated threat investigation, MCP-server-driven security workflow automation, 2025 State of Data Security AI research workloads'],
              ['Current Stack', 'Hybrid LLM + rule-based classification engine. Forrester Wave-recognized incremental scanning. Active design-partner development with Valar.'],
              ['Pain Points', 'Customer PHI/PII/financial data CANNOT route through multi-tenant inference. SOC 2 + ISO 27001 contractual obligations to customers force single-tenant deployment.'],
              ['Estimated Spend', '$2–5M annual inference (DSPM scaling profile)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Co-develop joint reference for cyber/DSPM peer accounts (CrowdStrike, SentinelOne, Wiz, Rubrik). Demonstrate inference cost reduction + SLO + customer-data isolation.'],
              ['Key Evidence', 'Signed design partner. Public LLM-classification shipping. AI Security tag with 6+ engineering blog posts in 2025. MCP Server launched for AI workflow automation.'],
              ['Urgency Level', 'EXECUTE — customer relationship; build reference value.'],
              ['Target Buyer', 'Buyer: CISO + Platform Engineering. Champion: Data classification and AI security product leaders.'],
              ['Messaging Angle', 'Data sovereignty first: "BYOC inference for the only category where customer data classification is the product." Cost second.']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Signed design partner', 'Active product collaboration', 'Reference for cyber category'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Signed design partner — engineering investment + reference development priority.',
        competitive_distress: 4,
        distress_reason: 'Inference clouds disqualified by customer data sensitivity. Hyperscaler defaults force compromise on cost and cross-region governance.',
        distress_signals: ['Customer data classification cannot leave VPC', 'Scaling cyber AI workloads pressuring infra cost'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'Maximum data sensitivity — Varonis processes customer PHI, PII, financial data, and IP. Inference must run inside customer-tenant boundary.',
        residency_signals: ['SOC 2 Type II + ISO 27001 customer commitments', 'Public stance: customer data never leaves customer environment'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Varonis anchors the cyber/DSPM reference. Joint go-to-market motion to land CrowdStrike, SentinelOne, Wiz, Rubrik. <strong>Buyer:</strong> Security/Compliance leadership + Platform Engineering.'
      },
      // ── 3. ABInBev ──
      {
        name: 'ABInBev',
        domain: 'ab-inbev.com',
        subtitle: 'World\'s largest brewer — global CPG with multi-region data residency and supply-chain AI workloads in pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'Valar', tip: 'Active Valar pipeline (per memo)' },
          { t: 'CPG', c: 'neutral' },
          { t: 'Multi-region', c: 'stack' },
          { t: 'Supply Chain AI', c: 'stack' }
        ],
        overview: 'ABInBev is one of the eight named pipeline accounts in the Primary investment memo. Global CPG with supply chain forecasting, marketing personalization, and operations AI rolling out across 50+ countries. Multi-region data residency (GDPR + LATAM + APAC) creates structural BYOC pressure that Bedrock/Vertex region gaps don\'t solve cleanly.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Consumer Packaged Goods (Beverages)'],
              ['Revenue', '~$59B annual revenue (2024)'],
              ['Headquarters', 'Leuven, Belgium (NYSE: BUD)'],
              ['Cloud Provider', 'Multi-cloud (AWS + Azure + GCP) across 50+ countries'],
              ['AI Maturity', 'Growing — Smart Barley AI program for grower yield optimization, Google Maps integrations for customer segmentation, TechSupply Incubator partnership with P&G for supply chain AI innovation.'],
              ['Valar Status', 'In Active Pipeline (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Demand forecasting (multi-region), dynamic pricing, marketing copy localization across 50+ markets, supplier risk modeling, Smart Barley grower advisory AI'],
              ['Current Stack', 'Multi-cloud hyperscaler-default (Bedrock/Vertex/Azure AI). Region-by-region deployment friction.'],
              ['Pain Points', 'GDPR + LATAM + APAC data residency, AI cost predictability across global footprint, vendor consolidation pressure post-cost-rationalization, hyperscaler region/model gaps'],
              ['Estimated Spend', '$3–8M annually (estimated, scaling)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via Smart Barley or supply chain AI pilot in single region. Expand into marketing localization + CX once BYOC pattern proven. Reference for Fortune 500 multi-region.'],
              ['Key Evidence', 'Multi-region operations create structural BYOC pressure that hyperscaler region gaps don\'t solve. ABI Research 2025 survey: 91% of CPG firms plan AI for demand forecasting in next 2 years.'],
              ['Urgency Level', 'MEDIUM — pipeline conversation active; needs catalyst event (procurement cycle, regional rollout) to advance.'],
              ['Target Buyer', 'Buyer: Chief Data/AI Officer + Platform Engineering. NOT marketing AI team — they buy outcomes, not infra. Compliance leadership for regulated regions.'],
              ['Messaging Angle', 'Cost predictability + multi-region compliance. "One inference platform across 50 markets, costs and SLO known in advance."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['In Valar active pipeline', 'Global multi-region operations', 'AI rollout in supply chain + marketing'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Active pipeline conversation — Valar already in dialogue. Focus on accelerating to design-partner conversion.',
        competitive_distress: 3,
        distress_reason: 'Multi-region compliance + cost predictability are explicit hyperscaler pain points for global CPG.',
        distress_signals: ['Multi-region inference governance complexity', 'CPG margin pressure'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'GDPR + LATAM + APAC data residency requirements force inference to remain in-region. Hyperscaler region gaps create real workflow friction.',
        residency_signals: ['EU GDPR strict-mode operations', 'Multi-jurisdictional consumer data'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'ABInBev advances the Fortune 500 multi-region BYOC narrative. Land via supply chain AI pilot, expand into marketing + CX. <strong>Buyer:</strong> Platform Engineering or Chief Data/AI Officer (NOT marketing AI team).'
      },
      // ── 4. Qualcomm ──
      {
        name: 'Qualcomm',
        domain: 'qualcomm.com',
        subtitle: 'Mobile silicon + on-device AI leader — IP-sensitive R&D inference workloads, named in Valar pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'Valar' },
          { t: 'Semiconductors', c: 'neutral' },
          { t: 'Edge AI', c: 'stack' },
          { t: 'IP-Sensitive', c: 'stack' }
        ],
        overview: 'Semiconductor giant pushing AI to mobile, automotive, and IoT edge. Internal R&D workloads — chip design, signal processing models, automotive perception simulation — involve highly sensitive IP that cannot leave Qualcomm\'s VPC. Named pipeline account in Primary memo.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Semiconductors / Mobile + Edge AI Silicon'],
              ['Revenue', '~$39B annual (FY2024)'],
              ['Headquarters', 'San Diego, CA (NASDAQ: QCOM)'],
              ['Cloud Provider', 'Multi-cloud + own bare-metal R&D infrastructure'],
              ['AI Maturity', 'Maximum — Qualcomm AI Hub platform, AI200/AI250 datacenter inference chips (Oct 2025), Edge Impulse acquisition (2025), Snapdragon X Elite NPU integration. Direct hardware-AI integrator.'],
              ['Valar Status', 'In Active Pipeline (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Chip design copilots, RF/signal-processing simulation, automotive perception model regression, internal R&D LLMs across diverse hardware (NVIDIA + AMD + own AI200/AI250 + edge silicon)'],
              ['Current Stack', 'Heterogeneous accelerators native — own AI200/AI250, NVIDIA, AMD, edge silicon. AI Hub for on-device validation. Cross-accelerator scheduling complexity.'],
              ['Pain Points', 'IP cannot route through managed APIs (chip designs, customer roadmaps). Cross-accelerator scheduling on heterogeneous hardware. Defense-related work in some divisions adds classification overlay.'],
              ['Estimated Spend', '$5–15M annually (estimated, R&D inference)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via R&D platform pilot — chip design copilot or perception simulation. Cross-accelerator routing is Valar\'s core differentiator and Qualcomm\'s exact pain. Move to PoC stage.'],
              ['Key Evidence', 'Active pipeline. AI200/AI250 launch (Oct 2025) signals datacenter inference investment. Edge Impulse acquisition. Public NPU+CPU+GPU integration thesis aligns with Valar\'s cross-accelerator wedge.'],
              ['Urgency Level', 'HIGH — pipeline + structural fit + cross-accelerator catalyst.'],
              ['Target Buyer', 'Buyer: R&D Platform / Infrastructure leadership + Security (IP protection). Champion: Chip design tools + perception simulation owners.'],
              ['Messaging Angle', 'Cross-accelerator inference: "The same workload routes optimally across your AI200, NVIDIA, AMD, and edge silicon — no managed cloud does this." IP residency mandate is structural.']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['In active Valar pipeline', 'IP sensitivity forces BYOC', 'Heterogeneous hardware testing native'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Active pipeline + structural IP-residency mandate = strong fit. Move to PoC stage.',
        competitive_distress: 4,
        distress_reason: 'Cannot use managed APIs for IP-sensitive R&D. DIY at scale is expensive. Inference clouds disqualified.',
        distress_signals: ['IP cannot touch multi-tenant inference', 'Heterogeneous accelerator landscape'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'Chip-design IP and proprietary signal/perception data are board-level sensitivity. BYOC is the only viable inference posture.',
        residency_signals: ['Semiconductor IP protection mandates', 'Defense-related chip work in some divisions'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Qualcomm validates the IP-sensitive enterprise wedge — adjacency to TI, NVIDIA-customer chipmakers, automotive Tier-1 silicon. <strong>Buyer:</strong> Platform Eng / R&D Infrastructure.'
      },
      // ── 5. Jefferies ──
      {
        name: 'Jefferies',
        domain: 'jefferies.com',
        subtitle: 'Mid-market investment bank — financial-data sensitivity + research/IB AI workloads, named in Valar pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'Valar' },
          { t: 'Investment Bank', c: 'neutral' },
          { t: 'Financial Data', c: 'stack' },
          { t: 'Regulated', c: 'stack' }
        ],
        overview: 'Mid-tier investment bank named in Valar pipeline. Research, M&A pipeline modeling, document review, client analysis all generate high-volume inference on materially-non-public information. Inference clouds disqualified by FINRA/SEC posture and client confidentiality. Bedrock + Vertex are current default.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Investment Banking / Capital Markets'],
              ['Revenue', '~$7B annual (FY2024)'],
              ['Headquarters', 'New York, NY (NYSE: JEF)'],
              ['Cloud Provider', 'AWS primary (per AWS case study); Databricks for AI/data platform'],
              ['AI Maturity', 'High — JDI (Jefferies Data Intelligence) launched March 2026 with Databricks, custom LangGraph multi-agent architecture, rolled out to 250+ US analysts, expanding to ~550 globally.'],
              ['Valar Status', 'In Active Pipeline (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Equity research summarization, M&A document review, IB pitch generation, client report automation, agentic data analysis (JDI), corporate function GenAI (HCLTech partnership)'],
              ['Current Stack', 'Databricks AI/BI Genie + custom LangGraph multi-agent architecture (validation, planning, parallel execution, synthesis agents). AWS infra. Hundreds of queries/day post-launch.'],
              ['Pain Points', 'MNPI cannot route through multi-tenant inference. FINRA/SEC recordkeeping requirements. Vendor risk approvals are slow. Client confidentiality contractual.'],
              ['Estimated Spend', '$2–5M annually (estimated, scaling with JDI rollout)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Position as BYOC inference layer for JDI agentic architecture. Lead with reliability/SLO + MNPI residency. Reference value extends to JPM, Morgan Stanley, Goldman, banking peers.'],
              ['Key Evidence', 'JDI launched March 2026 = active production AI workload. Public Databricks partnership. Documented multi-agent architecture indicates engineering maturity ready for inference optimization.'],
              ['Urgency Level', 'HIGH — JDI is in scaling phase, inference cost + SLO will become material this year.'],
              ['Target Buyer', 'Buyer: CISO / Compliance Engineering (MNPI owners) + Cloud Platform leadership. NOT the JDI engineering team directly — they built it and own the stack. Engage JDI team as technical reviewers.'],
              ['Messaging Angle', '"BYOC inference for JDI agents — MNPI never leaves Jefferies, FINRA recordkeeping native, scale to all 550 analysts without managed-cloud quota risk."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Active Valar pipeline', 'Financial-data residency forces BYOC', 'AI-driven research arms race'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Pipeline + regulated wedge fit. Move to structured PoC.',
        competitive_distress: 3,
        distress_reason: 'Hyperscaler defaults (Bedrock) acceptable but suboptimal for cost + cross-cloud research workloads.',
        distress_signals: ['MNPI cannot route through multi-tenant inference', 'AI research arms race vs. larger banks'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'MNPI + client confidentiality + FINRA recordkeeping. Inference clouds structurally disqualified.',
        residency_signals: ['MNPI handling requirements', 'Client confidentiality contractual obligations'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Jefferies opens the regulated financial services category. Reference value extends to JPM, Morgan Stanley, Goldman tier. <strong>Buyer:</strong> CISO / Compliance Engineering, NOT research-floor AI team.'
      },
      // ── 6. Mobileye ──
      {
        name: 'Mobileye',
        domain: 'mobileye.com',
        subtitle: 'Autonomous driving silicon + ADAS leader (Intel-affiliated) — perception model inference, named in Valar pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'Valar' },
          { t: 'Auto AI', c: 'neutral' },
          { t: 'ADAS', c: 'stack' },
          { t: 'Intel-Affiliated', c: 'stack', tip: 'Intel acquired Mobileye in 2017; Granulate acquisition history is relevant' }
        ],
        overview: 'Autonomous driving silicon + perception leader. Massive perception model training + simulation inference across heterogeneous hardware. Tom\'s Granulate-Intel history is directly relevant — Mobileye is an Intel-affiliated entity with shared engineering culture. Named pipeline account.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Autonomous Driving Silicon + ADAS Software'],
              ['Revenue', '~$1.7B annual (FY2024)'],
              ['Headquarters', 'Jerusalem, Israel (NASDAQ: MBLY); majority-owned by Intel'],
              ['Cloud Provider', 'Multi-cloud + own bare-metal compute clusters'],
              ['AI Maturity', 'Maximum — EyeQ7 + EyeQ8 chips in development for "mind-off" driving (2029-2030 target). EyeQ6 Lite shipped 2025. Diversified accelerator architecture native.'],
              ['Valar Status', 'In Active Pipeline (per PVP V Memo) — strong leverage via Tom/Ron Granulate-Intel network']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Perception model evaluation across global driving datasets, simulation, scenario regression testing for L2-L5 autonomy, in-vehicle inference benchmarking, EyeQ chip validation'],
              ['Current Stack', 'Heterogeneous accelerators native — own EyeQ silicon + NVIDIA + Intel. Massive simulation + perception model training/eval workloads.'],
              ['Pain Points', 'Cross-accelerator scheduling on diverse hardware. Driving data subject to multi-jurisdictional rules (EU AI Act, China auto data regulations, US state-by-state). Auto IP protection for OEM relationships.'],
              ['Estimated Spend', '$10–25M annually (estimated, large R&D + simulation budget)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Highest-leverage pipeline account. Land via Israel R&D org leveraging Tom + Ron\'s Granulate-Intel network. Cross-accelerator routing pitch directly addresses EyeQ + NVIDIA + Intel scheduling pain.'],
              ['Key Evidence', 'Active pipeline. EyeQ8 development announced (Oct 2025). CES 2025 mind-off roadmap. Tom + Ron\'s Granulate-Intel relationships create unique reachability.'],
              ['Urgency Level', 'HIGHEST — pipeline + warm Granulate-Intel network = priority closing target.'],
              ['Target Buyer', 'Buyer: R&D Platform / Simulation Infrastructure leadership in Israel R&D org. Champion: Tom and Ron\'s direct Intel/Granulate contacts.'],
              ['Messaging Angle', 'Cross-accelerator inference + simulation throughput. Personal: "We built Granulate, we know your stack."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Valar pipeline', 'Intel network advantage (Tom + Ron history)', 'Heterogeneous accelerator native'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Pipeline + warm Intel/Granulate network gives Valar unique reachability. Prioritize closing to design-partner conversion.',
        competitive_distress: 4,
        distress_reason: 'Mobileye runs models across own silicon + NVIDIA + Intel. No managed cloud serves cross-accelerator scheduling natively.',
        distress_signals: ['Cross-accelerator inference complexity', 'Driving data multi-jurisdictional'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Driving data subject to multi-jurisdictional rules (EU AI Act, China auto data, US state-by-state). IP sensitivity high.',
        residency_signals: ['Multi-jurisdictional driving data rules', 'Auto IP protection'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Mobileye is the highest-leverage pipeline account given Tom + Ron\'s Granulate-Intel network. Land via Israel R&D org, expand globally. <strong>Buyer:</strong> R&D Platform / Simulation Infrastructure.'
      },
      // ── 7. Abbott ──
      {
        name: 'Abbott',
        domain: 'abbott.com',
        subtitle: 'Global medical devices + diagnostics — PHI-bound inference, FDA software, named in Valar pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'Valar' },
          { t: 'Healthcare', c: 'neutral' },
          { t: 'Med Devices', c: 'stack' },
          { t: 'HIPAA + FDA', c: 'stack' }
        ],
        overview: 'Global medical devices + diagnostics. Inference for clinical decision support, device telemetry, drug discovery, and FDA-regulated SaMD (Software as Medical Device). PHI + FDA constraints make managed inference APIs structurally non-viable. Named pipeline account.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Medical Devices + Diagnostics'],
              ['Revenue', '~$42B annual (FY2024)'],
              ['Headquarters', 'Abbott Park, IL (NYSE: ABT)'],
              ['Cloud Provider', 'Multi-cloud (AWS + Azure heavily); on-prem for clinical workloads'],
              ['AI Maturity', 'High — AI-powered coronary OCT imaging launched in EU (2025), AlinIQ Always On predictive maintenance, Libre Assist generative AI for CGM users, Responsible AI framework + Data Use & Ethics Board.'],
              ['Valar Status', 'In Active Pipeline (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Diagnostic image analysis (OCT, ultrasound), glucose-monitoring trend models (FreeStyle Libre 3+), clinical trial AI, regulatory document automation, predictive maintenance for diagnostic instruments, Libre Assist food image recognition'],
              ['Current Stack', 'Mix of cloud + on-prem. AlinIQ Always On uses Active Sense Technologies + ML for instrument health. Validated environments under FDA SaMD requirements.'],
              ['Pain Points', 'PHI residency, FDA SaMD validation friction with managed APIs (model deprecations break clinical pipelines), EU MDR + global device regulations, multi-region patient data complexity.'],
              ['Estimated Spend', '$5–15M annually (estimated)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Land via diagnostics or CGM AI pilot in single region. Position as inference platform that survives FDA SaMD validation cycles (no surprise model deprecations). Expand into global med-device + clinical trials.'],
              ['Key Evidence', 'Active pipeline. Public AI roadmap with Responsible AI framework. AI imaging launches in 2025. Recent FDA SaMD friction = real catalyst.'],
              ['Urgency Level', 'HIGH — FDA SaMD model-deprecation pain (mirrored from UnitedHealth interview) is a now-problem.'],
              ['Target Buyer', 'Buyer: Platform Engineering + Regulatory/Quality leadership (FDA SaMD owners). Champion: AI imaging + diagnostics product engineering teams.'],
              ['Messaging Angle', '"Inference that survives FDA SaMD validation. PHI never leaves Abbott. Model versions controlled by you, not by GCP/AWS deprecation calendar."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Valar pipeline', 'PHI + FDA mandate BYOC', 'Diagnostic AI growth'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Pipeline + healthcare regulated wedge perfectly fits the Valar moat.',
        competitive_distress: 3,
        distress_reason: 'Bedrock/Vertex used today but FDA SaMD validation friction is high. Inference clouds disqualified.',
        distress_signals: ['FDA SaMD validation overhead on managed APIs', 'PHI multi-region complexity'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'HIPAA + FDA + global medical device regulations. Inference must run in validated environments under Abbott control.',
        residency_signals: ['HIPAA covered entity', 'FDA SaMD requirements', 'EU MDR + global device regulations'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Abbott extends the healthcare reference past UnitedHealth into med-device + diagnostics. <strong>Buyer:</strong> Platform Engineering + Regulatory/Quality leadership.'
      },
      // ── 8. Ford ──
      {
        name: 'Ford',
        domain: 'ford.com',
        subtitle: 'Detroit auto + Ford Pro fleet — connected-vehicle data + ADAS + manufacturing AI, named in Valar pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'Valar' },
          { t: 'Automotive', c: 'neutral' },
          { t: 'Connected Vehicle', c: 'stack' },
          { t: 'Manufacturing AI', c: 'stack' }
        ],
        overview: 'Major automaker with connected-vehicle telemetry, ADAS perception, manufacturing quality AI, and Ford Pro fleet analytics. Multi-region driving data + supplier IP create structural BYOC pressure. Named pipeline account.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Automotive (OEM) + Connected Vehicles'],
              ['Revenue', '~$176B annual (FY2024)'],
              ['Headquarters', 'Dearborn, MI (NYSE: F)'],
              ['Cloud Provider', 'Multi-cloud; AWS + Azure heavily for vehicle data'],
              ['AI Maturity', 'High and accelerating — Latitude AI subsidiary for autonomy, BlueCruise (264M miles in 2025, +88% YoY), AI assistant launching in app 2026 then in-vehicle 2027, eyes-off driving target 2028 on $30K EV platform. ICT spend $11.1B/year.'],
              ['Valar Status', 'In Active Pipeline (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'ADAS perception (BlueCruise next-gen), connected-vehicle telemetry, manufacturing quality CV, Ford Pro fleet AI, AI conversational assistant, dealership operations AI'],
              ['Current Stack', 'Latitude AI for autonomy. Multi-cloud for vehicle data. New centralized vehicle compute module (consolidated SOC across infotainment + ADAS + audio + networking).'],
              ['Pain Points', 'Connected-vehicle data residency (multi-state + EU + APAC). Supplier IP isolation. Real-time SLO for in-vehicle inference critical-safety paths. Cost pressure on $30K EV platform demands inference efficiency.'],
              ['Estimated Spend', '$10–30M annually (estimated, scaling fast with BlueCruise + Latitude AI)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Sequence after Mobileye land — automotive reference compounds. Lead with cost efficiency for $30K EV platform inference + cross-region governance for connected-fleet data. Land in manufacturing AI or fleet operations first, expand into ADAS.'],
              ['Key Evidence', 'Active pipeline. Public AI investment scale ($11B+ ICT). Latitude AI subsidiary signals seriousness. Eyes-off 2028 deadline = forcing function for inference infra decisions now.'],
              ['Urgency Level', 'HIGH — 2028 eyes-off deadline forces 2026 infra decisions.'],
              ['Target Buyer', 'Buyer: Ford Motor Company tech / Platform Engineering + Latitude AI infrastructure leadership. NOT brand AI teams. Champion: ADAS + manufacturing AI product owners.'],
              ['Messaging Angle', 'Cost + cross-region. "Inference per dollar that makes $30K eyes-off EVs profitable. Connected-fleet data stays in-region without architecting around hyperscaler gaps."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Valar pipeline', 'Connected vehicle data scale', 'Manufacturing AI rollout'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Pipeline + scale. Mobileye reference accelerates this account.',
        competitive_distress: 3,
        distress_reason: 'Hyperscaler defaults force compromises on cost + cross-region governance for connected fleet data.',
        distress_signals: ['Multi-region connected-vehicle data', 'Real-time inference SLO requirements'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'Connected-vehicle data subject to multi-state + EU + APAC residency rules. Supplier IP isolation contractual.',
        residency_signals: ['Connected fleet data residency', 'Supplier confidentiality'],
        residency_signal_types: ['negative', 'negative'],
        gtm_thesis: 'Ford anchors the auto + manufacturing wedge. Sequence after Mobileye land. <strong>Buyer:</strong> Ford Motor Company tech / Platform Engineering, NOT brand AI teams.'
      },
      // ── 9. Flatiron Health ──
      {
        name: 'Flatiron Health',
        domain: 'flatiron.com',
        subtitle: 'Oncology data platform (Roche subsidiary) — PHI-maximal AI workloads on cancer patient data, named in Valar pipeline.',
        tier: 'high',
        tags: [
          { t: 'In Pipeline', c: 'Valar' },
          { t: 'Healthcare', c: 'neutral' },
          { t: 'Oncology Data', c: 'stack' },
          { t: 'PHI-Maximal', c: 'stack' }
        ],
        overview: 'Oncology data + research platform, Roche subsidiary. Real-world evidence on cancer patients — among the most regulated and sensitive data in healthcare. AI for clinical research, abstracting, drug development. Inference clouds structurally impossible. Named pipeline account.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Oncology Data + Real-World Evidence'],
              ['Revenue', 'Private (Roche subsidiary) — estimated $300–500M ARR'],
              ['Headquarters', 'New York, NY (Roche Group affiliate)'],
              ['Cloud Provider', 'AWS primary; multi-region for global data harmonization'],
              ['AI Maturity', 'Maximum — VALID Framework (peer-reviewed AI data quality, JCO 2025), LLM-extracted real-world cancer progression at scale, harmonized multinational datasets (UK/Germany/Japan/etc.), 5M+ patient records, 1.5B+ datapoints, ASCO + ESMO + AACR research presence.'],
              ['Valar Status', 'In Active Pipeline (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Real-world evidence abstracting via LLM, cancer progression event extraction across 14 cancer types, clinical trial matching, drug-discovery copilots for Roche pharma, regulatory document AI for HTA submissions'],
              ['Current Stack', 'AWS-heavy. Trusted Research Environment for patient-level access. VALID Framework for AI quality validation — implies internal LLM-extraction pipelines at high scale.'],
              ['Pain Points', 'Cancer patient PHI maximal sensitivity. IRB + FDA + EMA validation. Cross-border data harmonization (UK/Germany/Japan) hard with hyperscaler region complexity. Roche pharma IP isolation contractual.'],
              ['Estimated Spend', '$3–8M annually (estimated; scaling with VALID + multinational datasets)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Highest-residency pipeline account. Land here = open Roche pharma + life-sciences research enterprise (pharma is a $300B+ segment). Position as "BYOC inference for AI-extracted RWE that meets VALID, FDA, EMA simultaneously."'],
              ['Key Evidence', 'Active pipeline. Public LLM-extraction scaling (5M patients, 1.5B datapoints). VALID Framework JCO publication (peer-reviewed AI quality bar). Roche acquisition history = enterprise procurement pattern.'],
              ['Urgency Level', 'HIGH — RWE LLM extraction is in scaling phase, inference cost + validation are now-problems.'],
              ['Target Buyer', 'Buyer: Platform Engineering + Privacy/Regulatory leadership. Champion: VALID Framework + LLM-extraction engineering team (they validated their own AI pipeline rigorously and will appreciate Valar\'s reliability story).'],
              ['Messaging Angle', '"BYOC inference that meets VALID + FDA + EMA simultaneously. Cancer patient data never leaves Flatiron, model versions you control, harmonization across multinational datasets without hyperscaler region surgery."']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Valar pipeline', 'PHI maximum sensitivity', 'Roche/pharma reference value'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Pipeline + maximal data residency need = highest-fit pipeline account in healthcare.',
        competitive_distress: 4,
        distress_reason: 'Inference clouds structurally disqualified. Bedrock acceptable but FDA + IRB + Roche IT all add friction.',
        distress_signals: ['PHI maximum sensitivity', 'Drug development IP isolation'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 5,
        residency_reason: 'Cancer patient PHI + drug development IP + FDA/EMA validation = absolute maximum residency requirements.',
        residency_signals: ['HIPAA + IRB', 'FDA + EMA validation', 'Roche pharma IP'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'Flatiron is the highest-residency pipeline account. Land here = open Roche pharma + life-sciences research enterprise. <strong>Buyer:</strong> Platform Engineering + Privacy/Regulatory.'
      },
      // ── 10. American Airlines ──
      {
        name: 'American Airlines',
        domain: 'aa.com',
        subtitle: 'Largest US airline — operations + customer AI workloads, multi-region traveler data, named in Valar pipeline.',
        tier: 'med',
        tags: [
          { t: 'In Pipeline', c: 'Valar' },
          { t: 'Aviation', c: 'neutral' },
          { t: 'Operations AI', c: 'stack' },
          { t: 'Traveler Data', c: 'stack' }
        ],
        overview: 'Largest US airline. Operations AI for crew scheduling, irregular operations, dynamic pricing, customer service automation. Multi-jurisdictional traveler data + DOT/FAA compliance + heavy operational SLOs. Named pipeline account.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Aviation / Airlines'],
              ['Revenue', '~$53B annual (FY2024)'],
              ['Headquarters', 'Fort Worth, TX (NASDAQ: AAL)'],
              ['Cloud Provider', 'Microsoft Azure (preferred cloud partnership) + AWS for legacy workloads'],
              ['AI Maturity', 'High and operational — Smart Gating reduced gate planning from 4 hours to 2.5 minutes (98% reduction). AI for crew scheduling, IROPs disruption recovery (real-time ripple analysis), dynamic pricing, predictive maintenance. Public stance: "AI strengthens human decision making, not replaces it."'],
              ['Valar Status', 'In Active Pipeline (per PVP V Memo)']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Crew scheduling optimization (open-flight coverage), IROPs disruption recovery (real-time alternate flights + crew repositioning + rebooking), dynamic pricing, predictive maintenance, smart gating, customer service automation'],
              ['Current Stack', 'Azure primary. Models trained on historical flight data + weather + ATC + aircraft availability. Sub-second SLO for IROPs response. Microsoft AI/ML stack heavy.'],
              ['Pain Points', 'Real-time SLO for operations is mission-critical (downtime = canceled flights = customer/revenue impact). Multi-jurisdictional traveler data (GDPR + national airline rules + PCI for payment AI). Vendor consolidation pressure. Hyperscaler quota risk during travel disruption surges.'],
              ['Estimated Spend', '$5–15M annually (estimated, scaling with operations AI rollout)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability/QoS — IROPs is American\'s most public AI use case and SLO miss = operational crisis. Position as inference that meets sub-second SLO during travel disruptions when hyperscaler quotas can run hot.'],
              ['Key Evidence', 'Active pipeline. Public Azure preferred-cloud partnership. Smart Gating ML success (98% reduction). 30% of delays from operational inefficiency = clear ROI target.'],
              ['Urgency Level', 'MEDIUM-HIGH — operations criticality + Azure-heavy lock-in are forcing functions.'],
              ['Target Buyer', 'Buyer: Platform Engineering + Operations Tech leadership. Champion: IROPs + crew scheduling AI product owners.'],
              ['Messaging Angle', 'Reliability first: "Your IROPs SLO during a Sunday-evening thunderstorm doesn\'t depend on Azure quota. Inference runs inside your environment, scales with your peak, costs known in advance."']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Valar pipeline', 'Mission-critical SLO needs', 'Multi-jurisdictional traveler data'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Pipeline. Operations SLO need fits Valar QoS message.',
        competitive_distress: 3,
        distress_reason: 'Operations downtime risk + cost predictability are direct Valar value props.',
        distress_signals: ['SLO miss = operations crisis', 'Multi-region traveler data'],
        distress_signal_types: ['negative', 'negative'],
        data_residency: 4,
        residency_reason: 'GDPR + various national airline data rules + payment data. Multi-region inference required.',
        residency_signals: ['GDPR traveler data', 'PCI for payment AI', 'Operational SLO contracts'],
        residency_signal_types: ['negative', 'negative', 'negative'],
        gtm_thesis: 'American extends Valar into mission-critical operations enterprises (logistics, transport, energy adjacency). <strong>Buyer:</strong> Platform Engineering + Operations Tech leadership.'
      }
    ]
  },

  /* ============================================================== */
  /*  SEGMENT 1 — Enterprise Companies (Stage 2 ICP)                */
  /* ============================================================== */
  {
    id: 'enterprise',
    label: 'Enterprise Companies',
    icon: '🏢',
    eyebrow: 'STAGE 2 ICP',
    title: 'Large Enterprise Targets',
    desc: 'Valar\'s stretch ICP: large regulated enterprises with massive inference spend, complex governance requirements, and the budget to invest in optimized inference infrastructure. These companies run inference at enormous scale and face cost, reliability, and data-sovereignty pressures that Valar can directly address.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
    companies: [
      // ── 1. Walmart ──
      {
        name: 'Walmart',
        domain: 'walmart.com',
        subtitle: 'World\'s largest retailer deploying generative AI across 10,000+ stores — massive inference at scale with hybrid-cloud complexity',
        tier: 'high',
        tags: [
          { t: 'Retail', c: 'neutral', tip: 'World\'s largest retailer by revenue' },
          { t: 'Hybrid Cloud', c: 'stack', tip: 'Operates own data centers alongside AWS/Azure/GCP' },
          { t: 'GenAI in Production', c: 'stack', tip: 'Generative AI deployed across search, customer service, and supply chain' },
          { t: 'Hiring: ML Infra', c: 'hiring', tip: 'Active roles for ML Infrastructure Engineers in Walmart Global Tech' },
          { t: 'NVIDIA Triton', c: 'hw', tip: 'Job postings reference Triton Inference Server and TensorRT' }
        ],
        overview: 'Walmart Global Tech has aggressively rolled out generative AI across product search, customer service chatbots, supply chain forecasting, and associate-facing tools — serving inference to hundreds of millions of weekly customers. Their hybrid cloud infrastructure spans proprietary data centers and multiple public clouds, creating optimization complexity that Valar\'s software layer can simplify. With the CFO publicly citing rising AI compute costs and the tech org posting for ML infrastructure engineers specializing in inference optimization, the timing is strong. The key challenge is navigating a massive enterprise procurement cycle, but the potential contract value justifies the effort.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and capacity — Walmart cannot afford inference downtime across 10,000+ stores. Position Valar as the software layer that ensures consistent inference performance across their hybrid cloud without vendor lock-in.'],
              ['Key Evidence', 'Walmart Global Tech blog posts on scaling generative AI, active hiring for inference optimization roles, CFO earnings commentary on rising AI costs.'],
              ['Urgency Level', 'MED — Large enterprise with long sales cycles, but growing AI spend creates budget pressure that accelerates timelines.'],
              ['Target Buyer', 'Buyer: Cloud Infrastructure / Platform Engineering reporting to SVP of Technology. Champion: applied ML teams running specific GenAI workloads. AVOID leading with the central ML Platform team — they own the existing serving stack and treat inference vendors as a job threat (per Andrew Wiggin, founding AE Fireworks).'],
              ['Messaging Angle', 'Reliability and capacity first: "Ensure consistent inference performance across your hybrid cloud at retail scale." Cost efficiency second: reduce per-inference cost across millions of daily requests.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Retail / E-commerce'],
              ['Revenue', '~$648B (FY2025)'],
              ['Employees', '~2.1M globally; ~20,000 in Walmart Global Tech'],
              ['Cloud Provider', 'Hybrid: proprietary data centers + AWS, Azure, GCP'],
              ['AI Maturity', 'Advanced — generative AI in production across search, customer service, supply chain, and internal tools. Dedicated AI/ML platform team. Heavy investment since 2023.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Product search relevance (semantic search), customer service chatbots, supply chain demand forecasting, visual product classification, associate task automation, personalized marketing content generation.'],
              ['Current Stack', 'NVIDIA Triton Inference Server, TensorRT optimization, custom serving infrastructure across hybrid cloud. Mix of real-time and batch inference workloads.'],
              ['Pain Points', 'Hybrid cloud complexity makes inference optimization inconsistent across environments. Rising compute costs from generative AI rollouts. Need to maintain sub-100ms latency for customer-facing inference while managing cost.'],
              ['Estimated Spend', '$150–300M annually on inference compute (estimated from technology capex and headcount)']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Active hiring for ML infrastructure/inference roles', 'CFO cited rising AI compute costs on earnings call', 'Generative AI deployed to production at massive scale'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Walmart has the scale, the pain (hybrid cloud + cost pressure), and active hiring signals. Long sales cycle is the primary risk, but the contract value potential is enormous.',
        competitive_distress: 3,
        distress_reason: 'Walmart has built significant in-house capability, but hybrid cloud complexity and rapidly scaling GenAI workloads are creating infrastructure strain and cost overruns.',
        distress_signals: ['CFO flagged rising AI compute costs', 'Hiring for inference-specific optimization roles suggests gaps in current tooling'],
        distress_signal_types: ['negative', 'negative'],
    gtm_thesis: 'Walmart Global Tech runs one of the largest inference footprints in retail — product search, customer service chatbots, inventory forecasting, and real-time pricing all rely on ML models at massive scale. Their multi-cloud posture and data governance requirements make an on-prem inference optimization layer highly attractive. <strong>Primary angle:</strong> Leverage the reliability/QoS message — Walmart cannot tolerate latency in customer-facing AI at their scale.'
      },

      // ── 2. ServiceNow ──
      {
        name: 'ServiceNow',
        domain: 'servicenow.com',
        subtitle: 'Now Assist AI copilot embedded across the entire platform — inference costs threatening gross margins at $11B+ scale',
        tier: 'high',
        tags: [
          { t: 'Enterprise SaaS', c: 'neutral', tip: 'Leading enterprise workflow platform' },
          { t: 'Azure + GCP', c: 'stack', tip: 'Primary on Azure, GCP for AI/ML workloads' },
          { t: 'Now Assist AI', c: 'stack', tip: 'AI copilot embedded across all product lines' },
          { t: 'Hiring: LLM Infra', c: 'hiring', tip: 'Active roles for LLM Infrastructure Engineers' },
          { t: 'Gross Margin Pressure', c: 'hw', tip: 'AI compute costs impacting gross margins per earnings calls' }
        ],
        overview: 'ServiceNow has gone all-in on AI with Now Assist, embedding LLM-powered features across IT Service Management, HR, Customer Service, and Security Operations. Every customer interaction now potentially triggers inference, creating a massive and rapidly growing compute footprint. Their Q1 2026 earnings flagged AI compute costs as a gross margin headwind, making inference optimization an urgent business priority. With three warm contacts through Primary\'s network — including a Senior Staff PM on AI and the VP of Enterprise AI — there is a clear path to the right decision-makers.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with cost efficiency tied to gross margin impact — ServiceNow\'s investors are watching AI costs closely. Position Valar as the software layer that optimizes inference costs without sacrificing Now Assist performance.'],
              ['Key Evidence', 'Q1 2026 earnings flagged AI compute costs as margin headwind. Active hiring for LLM infrastructure engineers. Now Assist expanding to every product line.'],
              ['Urgency Level', 'HIGH — Gross margin pressure from AI compute is a board-level conversation right now. Inference optimization is directly tied to financial performance.'],
              ['Target Buyer', 'Buyer: Cloud / Platform Engineering organization with budget for inference cost reduction. Executive sponsor: Luke Hagstrand (VP, Enterprise AI) — works with infra, not the team being replaced. AVOID the Now LLM platform team directly (they built and own the in-house serving stack; inference vendors threaten that scope).'],
              ['Messaging Angle', 'Cost efficiency first: "Reduce Now Assist inference costs by 40-60% while maintaining latency SLAs." Reliability second: ensure consistent AI performance across all product lines.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Enterprise SaaS / Workflow Automation'],
              ['Revenue', '~$11.5B (FY2025)'],
              ['Employees', '~24,000'],
              ['Cloud Provider', 'Azure (primary), GCP (AI/ML workloads)'],
              ['AI Maturity', 'Very advanced — Now Assist AI copilot GA across all product lines. Fine-tuned domain-specific models. Dedicated AI platform engineering team. Strategic priority from CEO.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Now Assist copilot (real-time text generation, summarization, classification across ITSM, HR, CSM, SecOps), virtual agents, predictive intelligence, document understanding.'],
              ['Current Stack', 'Mix of third-party LLM APIs and self-hosted models on GCP. Custom model serving infrastructure. Growing investment in inference optimization.'],
              ['Pain Points', 'Inference costs scaling linearly with Now Assist adoption — every new customer and feature increases compute spend. Need to optimize cost-per-inference without degrading response latency. Multi-model serving complexity.'],
              ['Estimated Spend', '$80–150M annually on inference compute (estimated from AI-related headcount and cloud spend growth)']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Gross margin pressure from AI compute costs (earnings call)', 'Now Assist expanding to every product line', '3 warm contacts through Primary network', 'Active hiring for LLM infrastructure roles'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Highest-signal enterprise target: public gross margin pressure from AI compute, rapid inference growth across all products, and 3 warm contacts including a VP of Enterprise AI. The financial urgency is real and board-visible.',
        competitive_distress: 4,
        distress_reason: 'ServiceNow is experiencing direct financial impact from inference costs as Now Assist scales. This is a publicly disclosed problem with investor scrutiny.',
        distress_signals: ['Q1 2026 earnings flagged AI compute as gross margin headwind', 'Rapid hiring for inference optimization suggests current stack is insufficient'],
        distress_signal_types: ['negative', 'negative'],
    gtm_thesis: 'ServiceNow\'s platform-wide AI integration means inference costs are becoming a material line item as they embed generative AI across every workflow product. Their enterprise customer base demands data residency and security guarantees that conflict with third-party inference providers. <strong>Primary angle:</strong> Cost efficiency — help ServiceNow protect margins as AI becomes table stakes in their platform.'
      },

      // ── 3. UnitedHealth Group ──
      {
        name: 'UnitedHealth Group',
        domain: 'unitedhealthgroup.com',
        subtitle: 'Largest US health insurer processing billions of claims — HIPAA mandates on-prem inference for PHI-containing AI workloads',
        tier: 'high',
        tags: [
          { t: 'Healthcare', c: 'neutral', tip: 'Largest US health insurer and healthcare services company' },
          { t: 'AWS + Azure', c: 'stack', tip: 'Multi-cloud with AWS and Azure' },
          { t: 'HIPAA Regulated', c: 'hw', tip: 'Strict data governance for protected health information' },
          { t: 'Optum AI', c: 'stack', tip: 'Optum division runs extensive AI/ML operations' },
          { t: 'On-Prem Inference', c: 'stack', tip: 'Job postings reference on-premises inference requirements' }
        ],
        overview: 'UnitedHealth Group operates at extraordinary scale — processing billions of healthcare claims annually through Optum, its technology and services division. HIPAA regulations and the CMS AI transparency rule create hard requirements for data sovereignty, making Valar\'s in-customer-cloud deployment model uniquely compelling. Optum has been building AI capabilities for clinical decision support, claims processing automation, and fraud detection, all involving protected health information that cannot be sent to third-party inference APIs. The regulatory tailwind here is very strong.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and data sovereignty — UHG cannot risk inference failures in clinical decision support, and HIPAA mandates that PHI stays within their controlled environment. Valar\'s in-cloud deployment model is a natural fit.'],
              ['Key Evidence', 'HIPAA and CMS AI transparency requirements, Optum job postings specifying on-prem inference, growing AI investment across claims processing and clinical tools.'],
              ['Urgency Level', 'MED — Strong regulatory driver, but healthcare enterprises move slowly. CMS AI transparency rule creates a compliance deadline that could accelerate.'],
              ['Target Buyer', 'Buyer: Optum Cloud / Platform Engineering + Privacy/Compliance leadership (HIPAA owners). Validated by UnitedHealth Director of Architecture interview in PVP V memo: he sees BYOC + VPC peering as inevitable. Existing contacts Srikanth Nittala and Mike Kramer useful as champions, NOT as primary buyers if they sit in central ML platform — that team built the current Vertex/Azure path and will resist replacement.'],
              ['Messaging Angle', 'Reliability first: "Mission-critical inference for healthcare AI — zero downtime, full HIPAA compliance, deployed in your own cloud." Cost efficiency second: optimize inference costs across billions of annual claims.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Healthcare / Health Insurance'],
              ['Revenue', '~$400B+ (FY2025)'],
              ['Employees', '~400,000'],
              ['Cloud Provider', 'Multi-cloud: AWS and Azure; significant on-premises infrastructure for PHI workloads'],
              ['AI Maturity', 'Advanced — Optum runs extensive AI/ML operations for claims processing, clinical decision support, fraud detection, and member engagement. Dedicated AI research teams.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Claims processing automation (NLP for medical coding), clinical decision support (real-time recommendations), fraud/waste/abuse detection, prior authorization AI, member engagement chatbots.'],
              ['Current Stack', 'Mix of on-premises and cloud-based inference. Custom ML serving infrastructure within Optum. Some SageMaker usage on AWS.'],
              ['Pain Points', 'HIPAA compliance makes third-party inference APIs risky for PHI workloads. CMS AI transparency rule adds new requirements. Need to scale AI across claims processing while maintaining audit trails and data residency.'],
              ['Estimated Spend', '$200–400M annually on AI/ML compute (estimated from Optum technology investment disclosures)']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['HIPAA/CMS regulatory requirements mandate data sovereignty', 'Job postings specify on-prem inference needs', 'Existing contacts on Valar target list'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Regulatory requirements create a hard need for in-cloud inference optimization. The scale is enormous (billions of claims), and Valar\'s deployment model directly addresses the HIPAA constraint. Existing contacts provide an entry point.',
        competitive_distress: 3,
        distress_reason: 'UHG has built internal capabilities but faces growing pressure from CMS AI transparency rules and the need to scale AI across more healthcare workflows while maintaining compliance.',
        distress_signals: ['CMS AI transparency rule creates new compliance requirements', 'On-prem inference job postings suggest infrastructure scaling challenges'],
        distress_signal_types: ['negative', 'neutral'],
    gtm_thesis: 'UHG operates in one of the most regulated environments in AI deployment. Claims processing, clinical decision support, and member services all require inference at scale with strict HIPAA compliance. Running inference in their own cloud is not a preference — it\'s a requirement. <strong>Primary angle:</strong> Reliability and compliance — position Valar as the inference layer that meets healthcare-grade governance requirements.'
      },

      // ── 4. Mastercard ──
      {
        name: 'Mastercard',
        domain: 'mastercard.com',
        subtitle: 'Real-time fraud scoring on 150B+ annual transactions — sub-50ms inference latency is non-negotiable',
        tier: 'high',
        tags: [
          { t: 'Financial Services', c: 'neutral', tip: 'Global payment technology company' },
          { t: 'GCP + Multi-cloud', c: 'stack', tip: 'Heavy GCP usage, multi-cloud architecture' },
          { t: 'Real-time Inference', c: 'stack', tip: 'Sub-50ms latency requirements for fraud scoring' },
          { t: 'Decision Intelligence', c: 'stack', tip: 'AI-powered fraud detection on every transaction' },
          { t: 'PCI DSS', c: 'hw', tip: 'Payment card data requires strict compliance' }
        ],
        overview: 'Mastercard processes over 150 billion transactions annually, and their Decision Intelligence product runs AI-powered fraud scoring on every single one — requiring sub-50ms inference latency at extraordinary scale. This is one of the most demanding real-time inference workloads in the world. PCI DSS compliance means payment data must stay within Mastercard\'s controlled environment, making Valar\'s in-cloud deployment model directly relevant. The combination of extreme latency requirements, massive scale, and strict data governance creates a compelling case for optimized inference infrastructure.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and quality of service — Mastercard cannot tolerate inference latency spikes during transaction processing. Position Valar as the optimization layer that ensures consistent sub-50ms inference at peak transaction volumes.'],
              ['Key Evidence', 'Decision Intelligence runs on every transaction (150B+/year), AI Garage blog posts on inference scaling challenges, PCI DSS compliance requirements.'],
              ['Urgency Level', 'MED — Transaction volumes growing steadily, and new AI features (generative summaries, enhanced fraud models) are increasing inference demand.'],
              ['Target Buyer', 'Buyer: Cloud / Platform Engineering + Security & Compliance (PCI DSS owners). The Decision Intelligence ML platform team owns the existing serving stack — engage them as technical reviewers, not as buyer. AI Garage applied team can champion newer GenAI workloads.'],
              ['Messaging Angle', 'Reliability first: "Guaranteed sub-50ms inference at 150B+ transaction scale — zero degradation during peak volumes." Scalability second: handle growing transaction volumes and new AI features without linear cost increases.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Financial Services / Payment Technology'],
              ['Revenue', '~$28.2B (FY2025)'],
              ['Employees', '~33,000'],
              ['Cloud Provider', 'Multi-cloud with heavy GCP usage; significant on-premises infrastructure for payment processing'],
              ['AI Maturity', 'Very advanced — Decision Intelligence AI has been in production for years. AI Garage for innovation. Expanding into generative AI for customer insights and fraud explanation.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Real-time fraud scoring (every transaction), transaction risk assessment, merchant categorization, consumer spending insights, generative AI for fraud investigation summaries.'],
              ['Current Stack', 'Proprietary ML serving infrastructure optimized for sub-50ms latency. Custom model deployment across global data centers. Expanding to LLM-based features.'],
              ['Pain Points', 'Maintaining sub-50ms latency at growing transaction scale. Adding generative AI features (LLM-based) alongside traditional ML inference. PCI DSS constraints on where inference can run.'],
              ['Estimated Spend', '$100–200M annually on inference compute (estimated from technology investment and transaction volume)']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['Extreme-scale real-time inference workload (150B+ transactions)', 'Expanding into generative AI features', 'PCI DSS creates data sovereignty requirement'],
        signal_types: ['positive', 'positive', 'neutral'],
        opp_reason: 'One of the world\'s most demanding inference workloads. PCI compliance creates a natural fit for Valar\'s in-cloud model. Challenge is that Mastercard has deep in-house expertise, so Valar needs to demonstrate clear value beyond what their team has built.',
        competitive_distress: 2,
        distress_reason: 'Mastercard has a mature inference infrastructure for traditional ML, but the transition to generative AI features is creating new challenges their existing stack wasn\'t designed for.',
        distress_signals: ['Expanding generative AI features strain existing real-time infrastructure'],
        distress_signal_types: ['neutral'],
    gtm_thesis: 'Mastercard processes billions of transactions requiring real-time fraud detection and risk scoring through ML inference. Their data sovereignty requirements across 200+ countries make on-prem inference optimization essential. <strong>Primary angle:</strong> Reliability and capacity — zero tolerance for inference latency in payment processing.'
      },

      // ── 5. General Motors (Cruise) ──
      {
        name: 'General Motors (Cruise)',
        domain: 'gm.com',
        subtitle: 'Post-Cruise restructuring refocusing AI spend on ADAS and manufacturing — $2B annual AI budget under cost scrutiny',
        tier: 'med',
        tags: [
          { t: 'Automotive', c: 'neutral', tip: 'Major automaker, formerly operated Cruise autonomous division' },
          { t: 'GCP + AWS', c: 'stack', tip: 'GCP primary, some AWS workloads' },
          { t: 'ADAS / Autonomy', c: 'stack', tip: 'Advanced driver assistance and autonomous vehicle AI' },
          { t: 'Cost Restructuring', c: 'hw', tip: '$2B Cruise spend being restructured for efficiency' },
          { t: 'Hiring: ML Platform', c: 'hiring', tip: 'Rebuilding ML platform team post-Cruise restructuring' }
        ],
        overview: 'GM is in a unique moment — the Cruise autonomous vehicle division has been restructured, and billions in AI compute spend are being redirected toward ADAS (Super Cruise), in-vehicle AI assistants, and manufacturing quality systems. This restructuring creates a window where infrastructure teams are actively re-evaluating their inference stack and optimizing costs. Three warm contacts through Primary\'s network include the VP of Infrastructure and the Head of AI Product Engineering, providing direct access to the decision-makers leading this transition.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with cost efficiency during restructuring — GM leadership is under intense scrutiny to show ROI on AI investments after Cruise. Valar can help them do more with less as they redirect inference spend.'],
              ['Key Evidence', '$2B annual Cruise spend being restructured. Active hiring for ML platform roles. GM Investor Day highlighted AI for ADAS and manufacturing as priorities.'],
              ['Urgency Level', 'HIGH — Active infrastructure re-evaluation during Cruise restructuring creates a buying window. Teams are making new vendor decisions now.'],
              ['Target Buyer', 'Infrastructure team — Peter Kashou (VP Infrastructure) is the ideal entry point. Naghmana Majed (Head of AI Product Engineering) for product-side buy-in.'],
              ['Messaging Angle', 'Cost efficiency first: "Optimize your inference spend as you redirect AI investment from Cruise to ADAS and manufacturing." Reliability second: ensure consistent model serving as you consolidate infrastructure.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Automotive / Manufacturing'],
              ['Revenue', '~$175B (FY2025, consolidated)'],
              ['Employees', '~163,000'],
              ['Cloud Provider', 'GCP (primary for Cruise/AI workloads), AWS for some enterprise workloads'],
              ['AI Maturity', 'Advanced but in transition — significant AI capability from Cruise being redirected. ADAS (Super Cruise), in-vehicle voice AI, manufacturing quality AI all in production.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'ADAS perception models (Super Cruise), in-vehicle voice assistant, manufacturing visual inspection, connected vehicle analytics, fleet optimization.'],
              ['Current Stack', 'Former Cruise ML infrastructure being consolidated. GCP-based model serving. Edge inference for vehicles, cloud inference for training and simulation.'],
              ['Pain Points', 'Cruise restructuring means infrastructure consolidation and cost optimization are top priorities. Need to maintain ADAS model performance while dramatically reducing compute costs. Multiple teams with overlapping inference infrastructure.'],
              ['Estimated Spend', '$150–250M annually on inference compute (estimated from Cruise/AI restructuring disclosures)']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Active infrastructure restructuring creates buying window', '$2B AI budget under cost scrutiny', '3 warm contacts including VP of Infrastructure'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'The Cruise restructuring creates a rare window where a massive enterprise is actively re-evaluating its inference infrastructure. Three warm contacts provide direct access. The cost scrutiny makes Valar\'s value proposition timely.',
        competitive_distress: 4,
        distress_reason: 'Post-Cruise restructuring has created real infrastructure pain — teams are consolidating, budgets are being cut, and leadership is demanding efficiency from every AI dollar.',
        distress_signals: ['$2B Cruise spend under restructuring', 'Q4 2025 earnings highlighted AI cost optimization as priority'],
        distress_signal_types: ['negative', 'negative'],
    gtm_thesis: 'GM\'s autonomous driving division runs some of the most compute-intensive inference workloads in industry. Post-restructuring, cost efficiency on inference is a strategic priority. Their proprietary driving data cannot leave their cloud. <strong>Primary angle:</strong> Cost efficiency and scalability — help GM/Cruise optimize inference costs during their AV technology rebuild.'
      },

      // ── 6. Capital One ──
      {
        name: 'Capital One',
        domain: 'capitalone.com',
        subtitle: 'First major bank to go all-in on AWS — massive ML inference for fraud detection, credit decisioning, and Eno AI assistant',
        tier: 'high',
        tags: [
          { t: 'Financial Services', c: 'neutral', tip: 'Top 10 US bank, known as tech-forward' },
          { t: 'AWS All-In', c: 'stack', tip: 'First major US bank fully on public cloud (AWS)' },
          { t: 'ML at Scale', c: 'stack', tip: 'Extensive ML platform for real-time decisioning' },
          { t: 'Eno AI Assistant', c: 'stack', tip: 'AI virtual assistant serving millions of customers' },
          { t: 'Hiring: ML Platform', c: 'hiring', tip: 'Continuously hiring for ML platform and inference roles' },
          { t: 'OCC Regulated', c: 'hw', tip: 'Federal banking regulations on AI model governance' }
        ],
        overview: 'Capital One is the most tech-forward major bank in the US, and the first to go all-in on public cloud (AWS). They run ML inference at massive scale — real-time fraud detection on every transaction, credit decisioning for every application, the Eno AI assistant for millions of customers, and increasingly generative AI features. With 8 warm contacts across engineering and product through Primary\'s network (including a Director Distinguished Engineer and VP of AI), this is one of the best-connected targets in the portfolio. Federal banking regulations on AI governance create a natural fit for Valar\'s in-cloud deployment model.',
        sections: [
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Financial Services / Banking'],
              ['Revenue', '~$38B (FY2025)'],
              ['Employees', '~55,000'],
              ['Cloud', 'AWS all-in — first major US bank fully on public cloud'],
              ['AI Maturity', [
                'Very advanced ML platform, real-time inference at scale',
                'Dedicated AI research teams, early GenAI adopter in banking',
                'Tech-forward reputation industry-wide'
              ]]
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', [
                'Real-time fraud detection (every transaction)',
                'Credit decisioning (every application)',
                'Eno AI assistant (millions of users)',
                'Document understanding (OCR + NLP)',
                'Anti-money laundering, personalized offers'
              ]],
              ['Current Stack', [
                'AWS SageMaker for model serving',
                'Custom inference infrastructure + KServe deployment',
                'Growing LLM use for Eno and generative features'
              ]],
              ['Pain Points', [
                'OCC/FDIC AI governance demands full auditability + control',
                'GenAI scale (Eno upgrades) compounding inference cost',
                'Optimize across traditional ML + LLMs simultaneously'
              ]],
              ['Estimated Spend', '$100–200M annual inference compute (est. from tech headcount + AWS commitment)']
            ]
          },
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', [
                'Lead with reliability + AI governance fit',
                'Position Valar as augmenting, not replacing',
                'Leverage Primary network for multiple warm intros'
              ]],
              ['Key Evidence', [
                '8 warm contacts (engineering + product)',
                'All-in AWS = single-cloud optimization opening',
                'Eno upgrades growing GenAI compute spend',
                'OCC/FDIC AI governance pressure'
              ]],
              ['Urgency Level', 'HIGH — strong network, growing spend, regulatory pressure'],
              ['Target Buyer', [
                'Buyer: Cloud Platform / Bank Tech infra leadership',
                'Buyer: AI Risk / Model Risk Mgmt (OCC/FDIC governance owners)',
                'Champion: Jeff Chou (VP of AI / Head of Product) — sits above ML platform org',
                '⚠️ Avoid leading with Hinnegan/Gupta — they own ML platform = antagonist risk per Wiggin warning'
              ]],
              ['Messaging Angle', [
                'Reliability: "Enterprise inference that meets federal banking AI governance"',
                'Cost: optimize across fraud + credit + Eno on AWS'
              ]]
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['8 warm contacts through Primary network', 'All-in AWS creates clear optimization target', 'Growing generative AI investment increasing inference costs', 'Federal AI governance creates compliance driver'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Best-connected enterprise target: 8 warm contacts spanning engineering and product leadership. Tech-forward bank with massive inference scale, growing GenAI spend, and regulatory compliance requirements that favor Valar\'s model. Highest-conviction enterprise opportunity.',
        competitive_distress: 3,
        distress_reason: 'Capital One has strong internal ML capabilities, but the addition of generative AI workloads is straining existing infrastructure, and OCC governance requirements add complexity.',
        distress_signals: ['OCC AI governance requirements increasing compliance burden', 'Generative AI features rapidly increasing inference costs'],
        distress_signal_types: ['negative', 'negative'],
    gtm_thesis: 'Capital One is one of the most AI-forward banks in the world, with inference powering fraud detection, credit decisioning, and customer experience. Their cloud-first but security-obsessed culture is a perfect fit for Valar\'s on-prem deployment model. <strong>Primary angle:</strong> Reliability and QoS — Capital One needs guaranteed inference performance for real-time financial decisioning. Plus, Primary has 8 warm contacts here.'
      },

      // ── 7. PayPal ──
      {
        name: 'PayPal',
        domain: 'paypal.com',
        subtitle: 'AI-powered checkout and fraud prevention across 430M+ accounts — CEO declared "AI efficiency" a top strategic priority',
        tier: 'med',
        tags: [
          { t: 'Fintech', c: 'neutral', tip: 'Global digital payments platform' },
          { t: 'GCP + Hybrid', c: 'stack', tip: 'GCP primary, Azure secondary, hybrid on-prem for sensitive workloads' },
          { t: 'AI Checkout', c: 'stack', tip: 'AI-powered personalized checkout experience' },
          { t: 'Triton / TensorRT', c: 'stack', tip: 'Job postings reference Triton and TensorRT inference stack' },
          { t: 'CEO Priority', c: 'hiring', tip: 'CEO highlighted "AI efficiency" as strategic priority on earnings call' }
        ],
        overview: 'PayPal has made AI the centerpiece of its turnaround strategy under CEO Alex Chriss, deploying AI-powered checkout personalization, fraud prevention, and customer engagement across 430M+ active accounts. Their Q1 2026 earnings call specifically highlighted "AI efficiency" as a top priority, signaling that inference cost optimization is a C-suite conversation. Job postings reference Triton, TensorRT, and KServe, indicating a sophisticated inference stack that Valar can optimize. Four warm contacts through Primary\'s network, including a Director of Engineering and SVP of Consumer Engineering, provide strong entry points.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with cost efficiency — the CEO has publicly made "AI efficiency" a strategic priority. Position Valar as the solution that directly supports this CEO mandate, optimizing inference costs across checkout, fraud, and customer engagement.'],
              ['Key Evidence', 'CEO earnings call highlighted "AI efficiency" as priority. Job postings for ML platform engineers referencing inference optimization. 4 warm contacts through Primary network.'],
              ['Urgency Level', 'HIGH — CEO-level mandate on AI efficiency creates organizational urgency. Teams are actively looking for solutions.'],
              ['Target Buyer', 'Buyer: Cloud Platform / Risk & Compliance Engineering (PCI DSS + PayPal\'s "shadow platform" Quokka owners). Executive sponsor: Martin Brodbeck (SVP, Consumer Engineering). Warren Zhang (Director of Engineering) is a useful champion BUT if he leads the central ML platform, route around — that team built Quokka and the existing fraud serving stack.'],
              ['Messaging Angle', 'Cost efficiency first: "Deliver on the CEO\'s AI efficiency mandate — reduce inference costs by 40-60% across checkout, fraud, and engagement workloads." Reliability second: maintain fraud detection accuracy and checkout latency.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Fintech / Digital Payments'],
              ['Revenue', '~$31B (FY2025)'],
              ['Employees', '~25,000'],
              ['Cloud Provider', 'GCP (primary), Azure (secondary), hybrid on-premises for sensitive payment workloads'],
              ['AI Maturity', 'Advanced — AI-powered checkout, fraud detection, customer engagement, and merchant insights all in production. Dedicated ML platform team with sophisticated inference stack.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Personalized checkout optimization (real-time), fraud detection and prevention, customer engagement recommendations, merchant insights generation, payment risk scoring.'],
              ['Current Stack', 'NVIDIA Triton Inference Server, TensorRT, KServe. GCP-based model serving with some on-prem for sensitive workloads. Growing LLM deployment.'],
              ['Pain Points', 'CEO mandate to improve AI efficiency means inference costs are under scrutiny. Hybrid infrastructure (GCP + on-prem) creates optimization complexity. Need to scale AI features across 430M+ accounts while controlling costs.'],
              ['Estimated Spend', '$60–120M annually on inference compute (estimated from technology investment and headcount)']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['CEO highlighted "AI efficiency" as strategic priority', '4 warm contacts through Primary network', 'Sophisticated inference stack (Triton, TensorRT, KServe)', 'Growing AI deployment across all product lines'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'CEO-level mandate on AI efficiency creates strong organizational pull. Four warm contacts provide multiple entry points. Sophisticated existing inference stack means they understand the problem and will value Valar\'s optimization.',
        competitive_distress: 3,
        distress_reason: 'PayPal has capable ML infrastructure, but the CEO-level focus on "AI efficiency" signals that current inference costs are higher than acceptable.',
        distress_signals: ['CEO publicly flagged AI efficiency as strategic priority', 'Hybrid cloud adds inference optimization complexity'],
        distress_signal_types: ['negative', 'neutral'],
    gtm_thesis: 'PayPal\'s fraud detection, risk scoring, and checkout experience optimization all depend on low-latency inference at global scale. Their transition from legacy ML to generative AI is increasing inference costs significantly. <strong>Primary angle:</strong> Cost efficiency — PayPal has publicly discussed AI cost management as a priority.'
      },

      // ── 8. Workday ──
      {
        name: 'Workday',
        domain: 'workday.com',
        subtitle: 'Illuminate AI agents launching across HCM and Finance — inference demand outpacing infrastructure scaling',
        tier: 'med',
        tags: [
          { t: 'Enterprise SaaS', c: 'neutral', tip: 'Leading HCM and financial management platform' },
          { t: 'Own DCs + AWS/GCP', c: 'stack', tip: 'Operates own data centers alongside public cloud' },
          { t: 'Illuminate AI', c: 'stack', tip: 'AI agents across HCM, Finance, and Planning products' },
          { t: 'Scaling Challenges', c: 'hw', tip: 'AI feature delivery outpacing infrastructure per earnings call' },
          { t: 'HR Data Sensitivity', c: 'hw', tip: 'Employee PII and compensation data requires strict governance' }
        ],
        overview: 'Workday launched Illuminate in late 2024 — AI agents embedded across Human Capital Management, Financial Management, and Adaptive Planning. The pace of AI feature delivery has outstripped infrastructure scaling, as flagged on their Q4 FY2025 earnings call. This creates a clear near-term need for inference optimization. Workday\'s data sensitivity (employee PII, compensation data, financial records) makes Valar\'s in-cloud model appealing. No warm contacts yet, making this a pure outbound play.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with scalability — Workday has publicly acknowledged that AI feature delivery is outpacing infrastructure. Position Valar as the software layer that lets them scale Illuminate inference without proportional infrastructure investment.'],
              ['Key Evidence', 'Q4 FY2025 earnings flagged AI scaling challenges. Illuminate AI agents launching across all product lines. Sensitive HR/finance data requires in-cloud inference.'],
              ['Urgency Level', 'MED — Clear infrastructure pain, but no warm contacts means longer path to engagement. Outbound to infrastructure leadership needed.'],
              ['Target Buyer', 'Buyer: Cloud Infrastructure / Platform Engineering leadership owning the Workday-managed DCs + AWS/GCP integration. Workday Build / Flowise applied teams can champion. AVOID leading with Illuminate platform engineering team directly — they own the serving stack for the new agents and will resist external replacement.'],
              ['Messaging Angle', 'Scalability first: "Scale Illuminate AI agents across your entire customer base without linear infrastructure growth." Reliability second: ensure consistent AI performance for HR and Finance workflows.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Enterprise SaaS / HCM / Finance'],
              ['Revenue', '~$8.5B (FY2025)'],
              ['Employees', '~20,000'],
              ['Cloud Provider', 'Own data centers + AWS and GCP'],
              ['AI Maturity', 'Advanced and accelerating — Illuminate AI agents across HCM, Finance, and Planning. Machine learning features in production for years (skills matching, anomaly detection). Major push into generative AI since 2024.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Illuminate AI agents (task automation across HCM/Finance), skills matching and recommendations, financial anomaly detection, natural language queries, document processing.'],
              ['Current Stack', 'Mix of own data center and public cloud inference. Custom model serving infrastructure. Growing LLM workloads for Illuminate.'],
              ['Pain Points', 'AI feature delivery outpacing infrastructure scaling. Hybrid (own DC + cloud) creates optimization complexity. HR/finance data sensitivity constrains where inference can run.'],
              ['Estimated Spend', '$50–100M annually on inference compute (estimated from technology headcount and infrastructure investment)']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['Earnings call flagged AI scaling challenges', 'Illuminate AI agents expanding rapidly', 'Sensitive data creates governance requirements'],
        signal_types: ['positive', 'positive', 'neutral'],
        opp_reason: 'Clear infrastructure pain and fast-growing inference workloads, but no warm contacts and hybrid infrastructure adds sales complexity.',
        competitive_distress: 3,
        distress_reason: 'Workday has publicly acknowledged that AI infrastructure is struggling to keep pace with feature delivery — a clear signal of inference scaling pain.',
        distress_signals: ['Earnings call: AI feature delivery outpacing infrastructure scaling'],
        distress_signal_types: ['negative'],
    gtm_thesis: 'Workday is embedding AI across HR, finance, and planning products. Their enterprise customers in regulated industries demand that employee and financial data never leaves their tenant. <strong>Primary angle:</strong> Data security positioning — Valar\'s in-cloud deployment aligns perfectly with Workday\'s customer requirements.'
      },

      // ── 9. HubSpot ──
      {
        name: 'HubSpot',
        domain: 'hubspot.com',
        subtitle: 'Breeze AI copilot across CRM — AI feature costs growing faster than revenue, putting margin pressure on the business',
        tier: 'med',
        tags: [
          { t: 'SaaS / CRM', c: 'neutral', tip: 'Leading SMB-focused CRM and marketing platform' },
          { t: 'AWS + GCP', c: 'stack', tip: 'AWS primary, GCP for ML workloads' },
          { t: 'Breeze AI', c: 'stack', tip: 'AI copilot across entire CRM platform' },
          { t: 'Margin Pressure', c: 'hw', tip: 'AI costs growing faster than revenue per Q1 2026 earnings' },
          { t: 'SMB Scale', c: 'neutral', tip: 'Inference serving 200K+ customers simultaneously' }
        ],
        overview: 'HubSpot has embedded Breeze, its AI copilot, across the entire CRM platform — content generation, lead scoring, chatbots, data enrichment, and workflow automation. With 200K+ customers, each potentially triggering inference calls, the compute footprint is growing rapidly. Q1 2026 earnings flagged that AI feature costs are growing faster than revenue, making inference optimization directly tied to business model sustainability. One warm contact (Asher Eastham, Technical Lead) through Primary\'s network provides an entry point into the engineering organization.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with cost efficiency — HubSpot\'s business model depends on serving AI features to 200K+ customers profitably. Position Valar as the optimization layer that makes Breeze AI economically sustainable at scale.'],
              ['Key Evidence', 'Q1 2026 earnings flagged AI costs growing faster than revenue. Breeze AI deployed across entire product suite. 200K+ customers means massive inference volume.'],
              ['Urgency Level', 'MED-HIGH — AI cost vs. revenue growth gap is a near-term business problem. HubSpot is smaller than other enterprise targets, meaning faster decision cycles.'],
              ['Target Buyer', 'Buyer: Cloud Infrastructure leadership + Finance Engineering (the cost-pressure owners as Breeze AI margins compress). Asher Eastham (Technical Lead) is a useful warm-intro champion. Identify Engineering VP for AI infrastructure but treat the Breeze platform team as technical reviewers, not buyer (they own the existing pipeline).'],
              ['Messaging Angle', 'Cost efficiency first: "Make Breeze AI profitable at 200K+ customer scale — reduce inference cost per customer by 40-60%." Scalability second: handle growing customer base without proportional cost increases.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'SaaS / CRM / Marketing'],
              ['Revenue', '~$2.7B (FY2025)'],
              ['Employees', '~8,000'],
              ['Cloud Provider', 'AWS (primary), GCP (for ML/AI workloads)'],
              ['AI Maturity', 'Advanced — Breeze AI copilot GA across Marketing, Sales, Service, and Operations hubs. Content generation, chatbots, lead scoring, and data enrichment all AI-powered.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Content generation (emails, blogs, social), AI chatbots, lead scoring and enrichment, workflow automation suggestions, customer data analysis, reporting insights.'],
              ['Current Stack', 'AWS-based inference infrastructure, likely mix of SageMaker and custom serving. GCP for some ML workloads. Growing LLM usage for Breeze.'],
              ['Pain Points', 'AI feature costs growing faster than revenue — need to reduce cost-per-inference to make Breeze profitable. 200K+ customers means per-customer economics matter. Multi-tenant inference optimization is key.'],
              ['Estimated Spend', '$30–60M annually on inference compute (estimated from company size and AI feature scope)']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['AI costs growing faster than revenue (earnings call)', 'Breeze AI deployed across entire product suite', 'Warm contact through Primary network', 'Smaller company = faster decision cycles'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Clear financial pressure from AI costs, warm contact, and smaller size means faster sales cycle than typical enterprise. Breeze AI deployment across 200K+ customers creates a compelling inference optimization opportunity.',
        competitive_distress: 4,
        distress_reason: 'HubSpot is explicitly experiencing AI cost growth outpacing revenue growth — a direct threat to their business model that inference optimization can address.',
        distress_signals: ['Q1 2026 earnings: AI feature costs growing faster than revenue'],
        distress_signal_types: ['negative'],
    gtm_thesis: 'HubSpot has rapidly integrated AI across their CRM, marketing, and service hubs. As a mid-cap company, inference cost efficiency is critical to maintaining margins while competing with Salesforce on AI features. <strong>Primary angle:</strong> Cost efficiency — help HubSpot scale AI features without destroying margins.'
      },

      // ── 10. Rivian ──
      {
        name: 'Rivian',
        domain: 'rivian.com',
        subtitle: 'EV maker burning cash on ADAS and fleet AI — every compute dollar matters in the race to profitability',
        tier: 'low',
        tags: [
          { t: 'Automotive / EV', c: 'neutral', tip: 'Electric vehicle manufacturer' },
          { t: 'AWS', c: 'stack', tip: 'AWS primary cloud provider' },
          { t: 'ADAS AI', c: 'stack', tip: 'Advanced driver assistance system using deep learning' },
          { t: 'Cash Constrained', c: 'hw', tip: 'Still pre-profitability, optimizing every cost line' },
          { t: 'Fleet AI', c: 'stack', tip: 'AI for Amazon delivery fleet optimization' }
        ],
        overview: 'Rivian is in a race to profitability, and every compute dollar matters. They run significant inference workloads for ADAS perception models, in-vehicle AI, and fleet optimization (notably for their Amazon delivery van fleet). As a pre-profitability company, the cost optimization angle is compelling, but their budget is constrained. This is a lower-tier target — the opportunity exists, but Rivian may prioritize other cost-cutting measures before investing in inference optimization software.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with cost efficiency — Rivian needs to optimize every cost line on the path to profitability. Position Valar as a quick win for reducing cloud inference costs without engineering heavy-lifting.'],
              ['Key Evidence', 'Pre-profitability with significant cash burn. ADAS and fleet AI require substantial inference compute. AWS costs are a major expense line.'],
              ['Urgency Level', 'LOW — Cost-sensitive but also budget-constrained. May not prioritize new vendor evaluation given other priorities.'],
              ['Target Buyer', 'Buyer: Cloud Infrastructure / Vehicle Platform Engineering (cost-pressure owners). ADAS perception ML applications team can champion specific workloads. AVOID leading with the Polaris ADAS data platform team — they built the AWS-heavy stack and the serving infra for perception models.'],
              ['Messaging Angle', 'Cost efficiency: "Reduce inference costs on the path to profitability — optimize ADAS and fleet AI workloads on AWS without engineering effort."']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Automotive / Electric Vehicles'],
              ['Revenue', '~$5.5B (FY2025)'],
              ['Employees', '~16,000'],
              ['Cloud Provider', 'AWS (primary)'],
              ['AI Maturity', 'Moderate-Advanced — ADAS perception models in production, fleet optimization AI (Amazon delivery vans), in-vehicle AI assistant. Active ML research team.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'ADAS perception models (camera/LiDAR fusion), in-vehicle voice assistant, fleet route optimization, manufacturing quality inspection, battery health prediction.'],
              ['Current Stack', 'AWS-based model serving for cloud workloads. Edge inference for vehicles. Custom ML pipeline.'],
              ['Pain Points', 'Cash burn makes every compute cost line a priority. Cloud inference costs for ADAS simulation and fleet AI are significant. Need to optimize without large upfront investment.'],
              ['Estimated Spend', '$20–50M annually on inference compute (estimated from company size and AI workload scope)']
            ]
          }
        ],
        contacts: [],
        signal_score: 2,
        signals: ['Pre-profitability creates cost pressure', 'Significant inference workloads for ADAS and fleet AI'],
        signal_types: ['neutral', 'positive'],
        opp_reason: 'Real inference workloads and cost pressure, but budget constraints and other priorities may make this a longer-term opportunity. No warm contacts.',
        competitive_distress: 2,
        distress_reason: 'Rivian faces general cost pressure across all operations, but inference-specific pain may not be their top priority given broader profitability challenges.',
        distress_signals: ['Overall cash burn creates cost optimization pressure'],
        distress_signal_types: ['neutral'],
    gtm_thesis: 'Rivian\'s connected vehicle platform and manufacturing optimization increasingly rely on ML inference. As a pre-profit company, every dollar of compute efficiency matters. Their vehicle data is highly proprietary. <strong>Primary angle:</strong> Cost efficiency and data security — help Rivian optimize inference spend during their path to profitability.'
      }
    ]
  },

  /* ============================================================== */
  /*  SEGMENT 2 — Mid-Market Companies (Stage 1 ICP)               */
  /* ============================================================== */
  {
    id: 'midmarket',
    label: 'Mid-Market Companies',
    icon: '🚀',
    eyebrow: 'STAGE 1 ICP',
    title: 'Mid-Market Targets',
    desc: 'Valar\'s near-term ICP: data-sensitive mid-market companies with growing inference spend who cannot use shared or third-party inference APIs due to security, compliance, or governance requirements. These companies have shorter sales cycles and are more likely to be early adopters of inference optimization.',
    icon_svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    companies: [
      // ── 1. Carta ──
      {
        name: 'Carta',
        domain: 'carta.com',
        subtitle: 'Equity management platform — named in pipeline by Tom directly (4/24 Granola call). Cap table + 409A data cannot route to third-party inference APIs.',
        tier: 'high',
        tags: [
          { t: 'In Pipeline', c: 'Valar', tip: 'Confirmed by Tom on 4/24 Granola call as Stage 1 ICP pipeline example. Not headlined in 4/29 PVP V memo, but memo states 40 customer conversations with named accounts being exemplary.' },
          { t: 'Fintech', c: 'neutral', tip: 'Equity management and valuation platform' },
          { t: 'AWS', c: 'stack', tip: 'AWS primary cloud provider' },
          { t: 'SOC 2 Type II', c: 'hw', tip: 'Strict compliance requirements for financial data' },
          { t: 'AI Document Parsing', c: 'stack', tip: 'Using AI for equity document processing' }
        ],
        overview: 'Carta is in Valar\'s active pipeline per Tom\'s direct statement on the 4/24 Granola call ("CARTA in pipeline as Stage 1 example"). Not headlined in the 4/29 PVP V memo but memo notes 40 customer conversations with the named-8 being exemplary not exhaustive. As the leading equity management platform, Carta handles cap tables, 409A valuations, and equity grants — financial data that cannot be sent to third-party inference APIs. SOC 2 + financial-data sensitivity make Carta a near-perfect ICP match for the BYOC wedge.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Initiate outbound. Lead with: equity data never leaves Carta\'s AWS environment. Frame as enabling AI features they currently cannot ship due to SOC 2 + financial-data constraints.'],
              ['Key Evidence', 'SOC 2 Type II compliance. Cap table + 409A + equity grant data among most sensitive financial info. Public AI feature launches in 2025 indicate active investment.'],
              ['Urgency Level', 'HIGH — strong ICP fit, no current Valar engagement.'],
              ['Target Buyer', 'Platform Engineering or Security/Compliance — NOT the AI feature team (per Andrew Wiggin / Fireworks AE: ML eng treats inference vendors as threat to their role).'],
              ['Messaging Angle', 'Reliability first: production-grade inference in your AWS, client equity data never leaves your environment. Cost efficiency second: scale AI features without margin compression.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Fintech / Equity Management'],
              ['Revenue', '~$400M ARR (estimated)'],
              ['Employees', '~2,000'],
              ['Cloud Provider', 'AWS (primary)'],
              ['AI Maturity', 'Growing — AI document parsing for equity agreements, automated 409A valuations, equity plan optimization tools. Increasing investment in AI features.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Equity document parsing (OCR + NLP), 409A valuation modeling, equity plan optimization, compliance document generation, fund administration automation.'],
              ['Current Stack', 'AWS-based infrastructure. Likely using a mix of third-party APIs (for non-sensitive) and limited self-hosted inference (for sensitive data).'],
              ['Pain Points', 'Cap table and valuation data is too sensitive for third-party inference APIs. SOC 2 Type II audit requirements. Want to build more AI features but constrained by where inference can run on sensitive data.'],
              ['Estimated Spend', '$5–15M annually on inference compute (estimated; growing rapidly as AI features expand)']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Already in Valar pipeline — active conversations', 'Extremely sensitive financial data (cap tables, 409A)', 'Growing AI feature investment', 'SOC 2 Type II compliance requirements'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Highest-conviction target: already in pipeline with active conversations. Perfect ICP fit — sensitive financial data, growing inference needs, mid-market size, compliance requirements.',
        competitive_distress: 4,
        distress_reason: 'Carta wants to build more AI features but is constrained by where sensitive equity data can be processed for inference. This is a direct blocker on their product roadmap.',
        distress_signals: ['Data sensitivity blocking AI feature development', 'SOC 2 Type II constraining inference provider options'],
        distress_signal_types: ['negative', 'negative'],
    gtm_thesis: '<strong>Currently in pipeline.</strong> Carta processes sensitive cap table, valuation, and equity data for thousands of companies. Their inference workloads around document processing, valuation modeling, and compliance are growing rapidly. Data sensitivity is paramount — no financial data can leave their environment. <strong>Primary angle:</strong> Data security and reliability — Carta\'s customers demand their financial data stays in Carta\'s cloud.'
      },

      // ── 2. Datadog ──
      {
        name: 'Datadog',
        domain: 'datadoghq.com',
        subtitle: 'Bits AI natural language observability requires inference on customer telemetry data — gross margin impact from AI compute costs',
        tier: 'high',
        tags: [
          { t: 'Infrastructure / Observability', c: 'neutral', tip: 'Leading cloud monitoring and observability platform' },
          { t: 'Multi-cloud + Bare Metal', c: 'stack', tip: 'AWS/GCP/Azure plus own bare metal for data plane' },
          { t: 'Bits AI', c: 'stack', tip: 'AI-powered natural language observability features' },
          { t: 'Gross Margin Impact', c: 'hw', tip: 'Inference costs impacting gross margins per earnings' },
          { t: 'Customer Data Sensitivity', c: 'hw', tip: 'Processes customer infrastructure telemetry data' }
        ],
        overview: 'Datadog\'s Bits AI brings natural language querying, anomaly detection, and log summarization to their observability platform — all requiring inference on customer infrastructure telemetry data that contains sensitive operational information. Their Q1 2026 earnings flagged that inference costs for Bits AI are "significantly impacting gross margins," making this a board-level concern. Datadog operates a unique hybrid infrastructure (public cloud + own bare metal), creating complexity that Valar can help optimize. As a $2.8B revenue infrastructure company, they understand inference challenges deeply and can be a technical design partner.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with cost efficiency tied directly to gross margin recovery — Datadog has publicly disclosed the margin impact. Position Valar as the optimization layer for Bits AI inference that restores margins without degrading AI quality.'],
              ['Key Evidence', 'Q1 2026 earnings flagged significant gross margin impact from Bits AI inference costs. Processes sensitive customer telemetry data. Unique hybrid infrastructure (cloud + bare metal).'],
              ['Urgency Level', 'HIGH — Gross margin impact is a public, investor-facing problem. Inference optimization is directly tied to financial performance.'],
              ['Target Buyer', 'Buyer: Cloud / Bare-Metal Infrastructure leadership (Datadog operates own data plane on bare metal — these are the cost owners). Also Finance Engineering as Bits AI margins are publicly cited. AVOID leading with the Bits AI ML platform team directly; they own the existing serving stack and will treat Valar as competition.'],
              ['Messaging Angle', 'Cost efficiency first: "Recover Bits AI gross margin impact — reduce inference costs by 40-60% across your hybrid infrastructure." Reliability second: ensure consistent Bits AI performance as you scale features.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Infrastructure / Cloud Observability'],
              ['Revenue', '~$2.8B (FY2025)'],
              ['Employees', '~7,000'],
              ['Cloud Provider', 'Multi-cloud (AWS, GCP, Azure) + own bare metal data centers for the data plane'],
              ['AI Maturity', 'Very advanced — Bits AI in production, extensive ML for anomaly detection and log analysis, dedicated AI/ML research team, deep infrastructure expertise.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Bits AI natural language querying, intelligent log summarization, anomaly detection and root cause analysis, automated alert correlation, infrastructure recommendation engine.'],
              ['Current Stack', 'Custom inference infrastructure across cloud and bare metal. Published engineering blog on LLM serving architecture. Likely custom serving with optimization layers.'],
              ['Pain Points', 'Inference costs for Bits AI significantly impacting gross margins. Hybrid infrastructure (cloud + bare metal) adds optimization complexity. Customer telemetry data sensitivity constrains where inference can run.'],
              ['Estimated Spend', '$40–80M annually on inference compute (estimated from margin impact disclosure and revenue scale)']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Gross margin impact from AI inference publicly disclosed', 'Bits AI deployed across observability platform', 'Customer data sensitivity requires controlled inference', 'Deep infrastructure expertise = strong technical buyer'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Publicly disclosed gross margin impact from inference costs + customer data sensitivity + deep infrastructure DNA makes Datadog an ideal mid-market target. They understand the problem and will value a sophisticated solution.',
        competitive_distress: 5,
        distress_reason: 'Datadog has explicitly and publicly disclosed that Bits AI inference costs are significantly impacting gross margins. This is the clearest distress signal across all targets.',
        distress_signals: ['Q1 2026 earnings: Bits AI inference costs "significantly impacting gross margins"', 'Scaling AI features across all product lines increasing cost pressure'],
        distress_signal_types: ['negative', 'negative'],
    gtm_thesis: 'Datadog ingests and analyzes massive volumes of observability data using ML inference for anomaly detection, log analysis, and AIOps. Their gross margin pressure from cloud costs is publicly documented. <strong>Primary angle:</strong> Cost efficiency — Datadog has explicitly discussed inference cost optimization on earnings calls. Reducing inference costs directly improves their margin story.'
      },

      // ── 3. CrowdStrike ──
      {
        name: 'CrowdStrike',
        domain: 'crowdstrike.com',
        subtitle: 'Charlotte AI for real-time threat detection — cybersecurity data cannot touch shared inference infrastructure',
        tier: 'high',
        tags: [
          { t: 'Cybersecurity', c: 'neutral', tip: 'Leading endpoint security and threat intelligence platform' },
          { t: 'AWS', c: 'stack', tip: 'AWS primary, proprietary Threat Graph' },
          { t: 'Charlotte AI', c: 'stack', tip: 'AI-powered security analyst and threat hunter' },
          { t: 'Real-time Inference', c: 'stack', tip: 'Millisecond-latency requirements for threat detection' },
          { t: 'FedRAMP', c: 'hw', tip: 'Government customers require FedRAMP compliance' }
        ],
        overview: 'CrowdStrike\'s Charlotte AI represents one of the most compelling use cases for in-cloud inference optimization: analyzing security telemetry data in real-time to detect and respond to threats. The data flowing through CrowdStrike\'s platform — endpoint activity, network traffic, threat indicators — is among the most sensitive in any enterprise. Government and regulated customers (FedRAMP) have strict requirements about where this data is processed. Charlotte AI\'s latency requirements for real-time threat detection add an additional technical dimension that Valar can address.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and data sovereignty — CrowdStrike\'s customers (especially government and financial services) demand that security telemetry stays within controlled environments. Position Valar as the optimization layer that enables Charlotte AI to run faster and cheaper within CrowdStrike\'s own infrastructure.'],
              ['Key Evidence', 'Charlotte AI in production for threat hunting. Security telemetry is the most sensitive data class. FedRAMP customers have strict data processing requirements. Fal.Con 2025 acknowledged inference latency challenges.'],
              ['Urgency Level', 'HIGH — Real-time threat detection latency directly impacts customer safety. Charlotte AI inference optimization is tied to core product quality.'],
              ['Target Buyer', 'Buyer: Cloud Infrastructure leadership + CISO / Security Engineering (cyber data residency owners — natural Valar fit). Charlotte AI applied team can champion. The Threat Graph platform team owns existing serving — engage as reviewers, not buyer.'],
              ['Messaging Angle', 'Reliability first: "Millisecond inference for Charlotte AI — catch threats faster with optimized model serving in your own cloud." Cost efficiency second: reduce the cost of AI-powered threat detection at scale.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Cybersecurity'],
              ['Revenue', '~$4.0B (FY2025)'],
              ['Employees', '~10,000'],
              ['Cloud Provider', 'AWS (primary), proprietary Threat Graph infrastructure'],
              ['AI Maturity', 'Very advanced — ML-based threat detection in production for years. Charlotte AI (generative) launched 2024. Proprietary Threat Graph is one of the largest security data lakes. Dedicated AI research team.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Charlotte AI (natural language threat hunting, incident summarization, remediation guidance), real-time threat detection, behavioral analysis, automated triage, threat intelligence correlation.'],
              ['Current Stack', 'Proprietary Threat Graph platform + AWS. Custom ML serving for real-time detection. Growing LLM infrastructure for Charlotte AI.'],
              ['Pain Points', 'Real-time threat detection requires millisecond inference latency — any degradation impacts customer security. Charlotte AI LLM inference costs growing with adoption. Government customers (FedRAMP) have strict data processing requirements.'],
              ['Estimated Spend', '$40–80M annually on inference compute (estimated from AI investment and scale)']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['Charlotte AI in production with growing adoption', 'Security data sensitivity requires controlled inference', 'FedRAMP customers have strict requirements', 'Fal.Con 2025 acknowledged inference latency challenges'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Perfect data sensitivity fit — security telemetry is among the most sensitive data categories. Charlotte AI creates growing inference demand with strict latency requirements. FedRAMP compliance adds urgency.',
        competitive_distress: 3,
        distress_reason: 'CrowdStrike has acknowledged inference latency challenges for real-time threat detection, and Charlotte AI adoption is increasing cost pressure.',
        distress_signals: ['Fal.Con 2025 acknowledged inference latency challenges', 'Charlotte AI adoption growing inference costs'],
        distress_signal_types: ['negative', 'neutral'],
    gtm_thesis: 'CrowdStrike\'s Falcon platform processes billions of security events daily through ML inference for threat detection. Speed and reliability are existential — a missed threat or a slow detection can mean a breach. <strong>Primary angle:</strong> Reliability and QoS — inference latency in cybersecurity is a matter of customer safety. Zero tolerance for downtime.'
      },

      // ── 4. Gusto ──
      {
        name: 'Gusto',
        domain: 'gusto.com',
        subtitle: 'HR/payroll platform handling SSNs and compensation data — strict PII requirements make shared inference a non-starter',
        tier: 'med',
        tags: [
          { t: 'HR / Payroll', c: 'neutral', tip: 'SMB payroll, benefits, and HR platform' },
          { t: 'AWS', c: 'stack', tip: 'AWS primary cloud provider' },
          { t: 'PII Heavy', c: 'hw', tip: 'Processes SSNs, compensation, banking info for millions of workers' },
          { t: 'AI Payroll Assistant', c: 'stack', tip: 'AI-powered payroll and compliance features launching' },
          { t: 'Batch Inference', c: 'stack', tip: 'Payroll processing creates natural batch inference workloads' }
        ],
        overview: 'Gusto processes some of the most sensitive personal data in business — Social Security numbers, bank account details, compensation data, and tax information for millions of workers. As they roll out AI-powered features (payroll assistant, compliance document generation, benefits recommendations), they face a hard constraint: this data cannot be processed by shared inference infrastructure. Gusto\'s payroll processing cycles create natural batch inference workloads that Valar can optimize. The HR/payroll industry\'s strict PII requirements make Valar\'s in-cloud model a strong fit.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and data sovereignty — Gusto handles SSNs and banking info that absolutely cannot leak. Position Valar as the inference layer that enables AI features while keeping PII within Gusto\'s own AWS environment.'],
              ['Key Evidence', 'Processes SSNs, compensation, banking data for millions of workers. Launching AI payroll and compliance features. Batch inference workloads from payroll processing.'],
              ['Urgency Level', 'MED — Growing AI investment, but may not yet be at the scale where inference optimization is a top priority. Good fit for Valar\'s batch optimization capabilities.'],
              ['Target Buyer', 'Infrastructure / Platform Engineering team — the group responsible for Gusto\'s cloud infrastructure and any AI/ML platform work.'],
              ['Messaging Angle', 'Reliability first: "Secure inference for the most sensitive employee data — SSNs, compensation, banking — in your own cloud." Cost efficiency second: optimize batch inference costs for payroll processing cycles.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'HR Tech / Payroll'],
              ['Revenue', '~$600M ARR (estimated)'],
              ['Employees', '~3,000'],
              ['Cloud Provider', 'AWS (primary)'],
              ['AI Maturity', 'Moderate — launching AI payroll assistant, compliance document generation, benefits recommendation. Earlier stage of AI adoption than some targets.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'AI payroll assistant, compliance document generation, benefits recommendation engine, tax form processing (OCR + NLP), employee support chatbot.'],
              ['Current Stack', 'AWS-based infrastructure. Likely early-stage inference setup — mix of API calls and some self-hosted models.'],
              ['Pain Points', 'PII (SSNs, banking info) cannot be sent to third-party inference APIs. Payroll accuracy is critical — inference errors have direct financial consequences. Growing AI features need a scalable, secure inference foundation.'],
              ['Estimated Spend', '$3–8M annually on inference compute (estimated; growing as AI features launch)']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['Extremely sensitive PII (SSNs, banking data)', 'Launching new AI features', 'Batch inference workloads from payroll processing'],
        signal_types: ['positive', 'positive', 'neutral'],
        opp_reason: 'Strong data sensitivity fit with PII requirements, but earlier-stage AI adoption means smaller initial contract. Good long-term customer as AI features grow.',
        competitive_distress: 2,
        distress_reason: 'Gusto is earlier in their AI journey — pain is more about enabling new features than optimizing existing inference costs.',
        distress_signals: ['PII constraints limiting AI feature development'],
        distress_signal_types: ['neutral'],
    gtm_thesis: 'Gusto serves 300K+ businesses with payroll, benefits, and HR powered increasingly by AI. Employee data is highly sensitive (SSNs, salary data, health info). <strong>Primary angle:</strong> Data security — Gusto cannot risk employee PII flowing through third-party inference providers.'
      },

      // ── 5. Plaid ──
      {
        name: 'Plaid',
        domain: 'plaid.com',
        subtitle: 'Financial data API processing billions of bank transactions — CFPB 1033 compliance creates hard data residency requirements',
        tier: 'high',
        tags: [
          { t: 'Fintech / API', c: 'neutral', tip: 'Financial data connectivity API platform' },
          { t: 'AWS + GCP', c: 'stack', tip: 'AWS primary, some GCP workloads' },
          { t: 'CFPB 1033', c: 'hw', tip: 'Consumer financial data regulations require strict data handling' },
          { t: 'Transaction AI', c: 'stack', tip: 'AI-powered transaction categorization and fraud detection' },
          { t: 'Billions of Connections', c: 'stack', tip: 'Connected to 12,000+ financial institutions' }
        ],
        overview: 'Plaid sits at the intersection of financial data and AI — processing billions of bank transactions across 12,000+ financial institution connections. Their AI features (transaction categorization, fraud detection, income verification) all operate on raw financial data that is subject to CFPB Section 1033 regulations, which create hard requirements for data handling and residency. As Plaid expands AI capabilities, they need inference infrastructure that keeps consumer financial data within their controlled environment. The regulatory tailwind from CFPB 1033 creates genuine urgency.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and regulatory compliance — CFPB 1033 creates hard requirements for how consumer financial data is processed. Position Valar as the inference layer that enables AI features while maintaining full compliance with financial data regulations.'],
              ['Key Evidence', 'CFPB 1033 regulations on consumer financial data. Processes billions of bank transactions. AI features (categorization, fraud, income verification) all operate on sensitive financial data.'],
              ['Urgency Level', 'HIGH — CFPB 1033 implementation timeline creates regulatory urgency. Growing AI investment needs compliant inference infrastructure.'],
              ['Target Buyer', 'Infrastructure / Platform Engineering team — the group building Plaid\'s data processing and ML platform.'],
              ['Messaging Angle', 'Reliability first: "CFPB 1033-compliant inference for financial AI — consumer bank data never leaves your environment." Scalability second: handle billions of transactions with efficient AI processing.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Fintech / Financial Data API'],
              ['Revenue', '~$500M ARR (estimated)'],
              ['Employees', '~2,500'],
              ['Cloud Provider', 'AWS (primary), some GCP'],
              ['AI Maturity', 'Advanced — ML-based transaction categorization in production for years. Expanding into LLM-based features for income verification, fraud detection, and financial insights.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Transaction categorization (billions of transactions), fraud detection, income verification AI, account validation, financial health scoring, document processing for bank statements.'],
              ['Current Stack', 'AWS-based ML infrastructure. Custom models for transaction categorization. Growing use of LLMs for newer features.'],
              ['Pain Points', 'CFPB 1033 regulations constrain where consumer financial data can be processed. Need to scale AI features across billions of transactions while maintaining compliance. Third-party inference APIs are not viable for raw bank data.'],
              ['Estimated Spend', '$10–25M annually on inference compute (estimated from scale and AI feature scope)']
            ]
          }
        ],
        contacts: [],
        signal_score: 4,
        signals: ['CFPB 1033 creates regulatory urgency for data sovereignty', 'Billions of transactions need AI processing', 'Expanding AI feature set', 'Financial data sensitivity = perfect Valar fit'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'CFPB 1033 regulatory compliance creates a hard requirement for controlled inference, making Plaid a natural Valar customer. Scale (billions of transactions) and growing AI features make the opportunity substantial.',
        competitive_distress: 3,
        distress_reason: 'CFPB 1033 is creating new compliance requirements for how financial data is processed in AI systems, adding urgency to the infrastructure decision.',
        distress_signals: ['CFPB 1033 implementation deadline approaching', 'Growing AI features need compliant inference infrastructure'],
        distress_signal_types: ['negative', 'neutral'],
    gtm_thesis: 'Plaid connects to 12,000+ financial institutions and processes sensitive banking data. Their ML inference for fraud detection, income verification, and transaction categorization must stay within their security perimeter. <strong>Primary angle:</strong> Data security and reliability — financial data aggregation demands on-prem inference.'
      },

      // ── 6. Sumo Logic ──
      {
        name: 'Sumo Logic',
        domain: 'sumologic.com',
        subtitle: 'Post-PE acquisition with cost optimization mandate — AI observability features need efficient inference',
        tier: 'med',
        tags: [
          { t: 'Infrastructure / SIEM', c: 'neutral', tip: 'Cloud-native log analytics and SIEM platform' },
          { t: 'AWS', c: 'stack', tip: 'AWS primary cloud provider' },
          { t: 'Post-Acquisition', c: 'hw', tip: 'Acquired by Francisco Partners — cost optimization mandate' },
          { t: 'AI Log Analysis', c: 'stack', tip: 'AI features for log summarization and anomaly detection' },
          { t: 'Customer Log Data', c: 'hw', tip: 'Processes sensitive customer infrastructure logs' }
        ],
        overview: 'Sumo Logic, now private after acquisition by Francisco Partners, is under a clear mandate to optimize costs while maintaining product competitiveness. They\'ve been adding AI-powered features — log anomaly detection, natural language search, automated remediation suggestions — that require inference on customer log data (which often contains sensitive infrastructure and security information). The PE cost optimization mandate combined with growing AI compute needs creates a natural buyer for inference optimization. Customer data sensitivity adds the governance angle.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with cost efficiency — the PE acquisition creates an explicit cost optimization mandate. Position Valar as a direct lever for reducing AI feature costs while maintaining competitive product capabilities.'],
              ['Key Evidence', 'Francisco Partners acquisition with cost optimization mandate. AI features (log analysis, anomaly detection) deployed across platform. Customer log data sensitivity.'],
              ['Urgency Level', 'MED — PE cost mandate creates urgency, but being private means less public pressure. AI features still growing.'],
              ['Target Buyer', 'Infrastructure / Engineering leadership — need to identify the VP of Engineering or Platform team lead post-acquisition.'],
              ['Messaging Angle', 'Cost efficiency first: "Reduce AI feature inference costs to hit PE margin targets without cutting AI capabilities." Reliability second: maintain AI feature quality for customer retention.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Infrastructure / Cloud SIEM / Log Analytics'],
              ['Revenue', '~$350M ARR (estimated at time of acquisition)'],
              ['Employees', '~1,500'],
              ['Cloud Provider', 'AWS (primary)'],
              ['AI Maturity', 'Moderate-Advanced — ML-based anomaly detection in production. Adding LLM features for natural language search and log summarization. Active AI feature development.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Log anomaly detection, natural language search across logs, automated incident summarization, root cause analysis suggestions, compliance monitoring AI.'],
              ['Current Stack', 'AWS-based infrastructure. Custom ML models for anomaly detection. Growing LLM usage for natural language features.'],
              ['Pain Points', 'PE cost optimization mandate pressures all infrastructure spend. AI features are competitive differentiators but expensive. Customer log data (often containing security events) requires careful handling.'],
              ['Estimated Spend', '$5–15M annually on inference compute (estimated from company size and AI feature scope)']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['PE acquisition creates cost optimization mandate', 'Growing AI features need efficient inference', 'Customer log data sensitivity'],
        signal_types: ['positive', 'positive', 'neutral'],
        opp_reason: 'PE cost optimization mandate creates clear buying motivation. AI features are growing but need to be cost-efficient. Customer data sensitivity adds governance angle. Smaller deal size.',
        competitive_distress: 3,
        distress_reason: 'Post-PE acquisition cost pressure directly conflicts with the need to invest in AI features to remain competitive. This tension makes inference optimization a clear win.',
        distress_signals: ['PE cost optimization mandate across all operations', 'AI feature costs challenging margin targets'],
        distress_signal_types: ['negative', 'neutral'],
    gtm_thesis: 'Sumo Logic processes massive log volumes with ML-powered analytics. As a company competing against Datadog and Splunk, inference efficiency directly impacts their ability to offer competitive pricing. <strong>Primary angle:</strong> Cost efficiency — help Sumo Logic compete on price by optimizing their inference layer.'
      },

      // ── 7. Hims & Hers ──
      {
        name: 'Hims & Hers',
        domain: 'forhims.com',
        subtitle: 'Telehealth platform processing PHI for AI-powered diagnostics — HIPAA compliance makes third-party inference impossible',
        tier: 'med',
        tags: [
          { t: 'Healthcare / Telehealth', c: 'neutral', tip: 'Direct-to-consumer telehealth and wellness platform' },
          { t: 'AWS', c: 'stack', tip: 'AWS primary cloud provider' },
          { t: 'HIPAA', c: 'hw', tip: 'Protected health information requires strict compliance' },
          { t: 'AI Diagnostics', c: 'stack', tip: 'AI-powered treatment personalization and diagnostics' },
          { t: 'Rapid Growth', c: 'oss', tip: '$2B revenue, fastest-growing telehealth company' }
        ],
        overview: 'Hims & Hers has grown to $2B in revenue by making healthcare accessible through technology. They\'re increasingly using AI for diagnostics assistance, treatment personalization, telehealth triage, and patient engagement — all involving protected health information (PHI) that falls under HIPAA. As a fast-growing company, they\'re scaling AI features rapidly but face hard constraints on where PHI can be processed for inference. Valar\'s in-cloud model directly addresses this, enabling them to build AI features they currently cannot deploy due to compliance constraints.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and HIPAA compliance — PHI processing for inference is a hard requirement. Position Valar as the enabling layer that unlocks AI features they currently cannot build due to compliance constraints.'],
              ['Key Evidence', 'HIPAA requirements for PHI. AI features being deployed across diagnostics, personalization, and triage. $2B revenue with rapid growth means AI investment is accelerating.'],
              ['Urgency Level', 'MED — Growing rapidly and investing in AI, but may be earlier in their inference maturity. Good timing to establish the foundation.'],
              ['Target Buyer', 'Engineering / Infrastructure team — the group responsible for the telehealth platform and any AI/ML initiatives.'],
              ['Messaging Angle', 'Reliability first: "HIPAA-compliant inference for healthcare AI — patient data stays in your own cloud." Scalability second: scale AI features as rapidly as your business is growing.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Healthcare / Telehealth / DTC Wellness'],
              ['Revenue', '~$2.0B (FY2025)'],
              ['Employees', '~4,000'],
              ['Cloud Provider', 'AWS (primary)'],
              ['AI Maturity', 'Moderate and growing — AI-powered diagnostics assistance, treatment personalization, patient triage. Investing heavily in AI as a competitive differentiator.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Diagnostics assistance (image analysis for dermatology), treatment personalization, telehealth triage (patient routing), patient engagement (follow-up recommendations), prescription optimization.'],
              ['Current Stack', 'AWS-based infrastructure. Likely mix of third-party APIs (for non-PHI) and emerging self-hosted inference.'],
              ['Pain Points', 'HIPAA compliance means PHI cannot be processed by third-party inference APIs. Growing AI features need a compliant inference foundation. Rapid business growth means scaling AI infrastructure quickly.'],
              ['Estimated Spend', '$5–15M annually on inference compute (estimated; growing rapidly with AI feature expansion)']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['HIPAA compliance creates hard data sovereignty requirement', 'Rapid revenue growth driving AI investment', 'AI features expanding across product'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'HIPAA compliance creates a hard requirement for in-cloud inference. Rapid growth means AI investment is accelerating. Moderate-size opportunity with strong growth trajectory.',
        competitive_distress: 2,
        distress_reason: 'Hims & Hers is more in "enablement" mode than "distress" — they want to build AI features but are constrained by compliance, rather than having existing infrastructure pain.',
        distress_signals: ['HIPAA constraints limiting AI feature development'],
        distress_signal_types: ['neutral'],
    gtm_thesis: 'Hims & Hers is scaling AI across telehealth consultations, treatment recommendations, and customer experience. Healthcare data (PHI) has strict regulatory requirements around where it can be processed. <strong>Primary angle:</strong> Compliance and data security — HIPAA requirements make on-prem inference a near-necessity for their AI roadmap.'
      },

      // ── 8. Brex ──
      {
        name: 'Brex',
        domain: 'brex.com',
        subtitle: 'Corporate card and spend management processing sensitive financial data — SOC 2 + PCI DSS constrain inference options',
        tier: 'med',
        tags: [
          { t: 'Fintech', c: 'neutral', tip: 'Corporate card and spend management platform' },
          { t: 'AWS', c: 'stack', tip: 'AWS primary cloud provider' },
          { t: 'SOC 2 + PCI DSS', c: 'hw', tip: 'Dual compliance requirements for financial data' },
          { t: 'AI Expense Processing', c: 'stack', tip: 'AI for receipt parsing, categorization, compliance' },
          { t: 'Empower AI', c: 'stack', tip: 'AI-powered spend management features' }
        ],
        overview: 'Brex handles sensitive corporate financial data — expense reports, corporate card transactions, bank account details — across thousands of businesses. Their AI features (Empower AI for expense categorization, receipt parsing, policy compliance, spend forecasting) all require processing this sensitive financial data. SOC 2 Type II and PCI DSS compliance create dual constraints on where this data can be processed, making third-party inference APIs problematic. As Brex expands AI features to differentiate their platform, they need inference infrastructure that maintains compliance while scaling efficiently.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and compliance — Brex\'s dual SOC 2 + PCI DSS requirements create hard constraints. Position Valar as the inference layer that enables AI-powered spend management while maintaining full compliance.'],
              ['Key Evidence', 'SOC 2 Type II + PCI DSS compliance requirements. Empower AI features processing sensitive financial data. Growing AI investment across the platform.'],
              ['Urgency Level', 'MED — Clear compliance driver, growing AI features, but may be earlier in inference scale. Good fit for establishing the foundation.'],
              ['Target Buyer', 'Platform Engineering / Infrastructure team — the group responsible for Brex\'s cloud infrastructure and AI/ML platform.'],
              ['Messaging Angle', 'Reliability first: "SOC 2 and PCI DSS compliant inference — corporate financial data stays in your own cloud." Cost efficiency second: optimize AI feature costs as you scale Empower AI.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Fintech / Corporate Spend Management'],
              ['Revenue', '~$350M ARR (estimated)'],
              ['Employees', '~1,200'],
              ['Cloud Provider', 'AWS (primary)'],
              ['AI Maturity', 'Moderate-Advanced — Empower AI for expense management, receipt OCR and parsing, policy compliance automation, spend forecasting. Expanding AI features as key differentiator.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Expense categorization, receipt parsing (OCR + NLP), policy compliance checking, spend forecasting, anomaly detection for fraud, natural language expense queries.'],
              ['Current Stack', 'AWS-based infrastructure. Likely mix of third-party APIs and emerging self-hosted inference for sensitive data.'],
              ['Pain Points', 'SOC 2 + PCI DSS dual compliance constrains inference provider options. Corporate financial data too sensitive for third-party APIs. Need to scale AI features while maintaining audit compliance.'],
              ['Estimated Spend', '$3–10M annually on inference compute (estimated from company size and AI feature scope)']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['Dual SOC 2 + PCI DSS compliance requirements', 'Empower AI features processing sensitive data', 'Growing AI investment as differentiator'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Dual compliance requirements create a clear fit for Valar\'s in-cloud model. Growing AI features provide a scaling opportunity. Moderate initial deal size with growth potential.',
        competitive_distress: 2,
        distress_reason: 'Brex is more in "enablement" mode — compliance constraints are limiting AI feature development rather than creating pain with existing infrastructure.',
        distress_signals: ['Dual compliance requirements constraining AI feature options'],
        distress_signal_types: ['neutral'],
    gtm_thesis: 'Brex uses ML inference for real-time spend management, fraud detection, and expense categorization. Their fintech customers expect enterprise-grade data handling. <strong>Primary angle:</strong> Reliability and data security — financial services infrastructure demands guaranteed inference performance.'
      },

      // ── 9. SentinelOne ──
      {
        name: 'SentinelOne',
        domain: 'sentinelone.com',
        subtitle: 'Purple AI for autonomous threat hunting — inference costs cited as gross margin headwind on earnings call',
        tier: 'high',
        tags: [
          { t: 'Cybersecurity', c: 'neutral', tip: 'AI-powered autonomous cybersecurity platform' },
          { t: 'AWS + Multi-cloud', c: 'stack', tip: 'AWS primary, multi-cloud agent deployment' },
          { t: 'Purple AI', c: 'stack', tip: 'AI security analyst for threat hunting and incident response' },
          { t: 'Gross Margin Headwind', c: 'hw', tip: 'Purple AI inference costs impacting margins per earnings' },
          { t: 'Security Data', c: 'hw', tip: 'Processes highly sensitive security telemetry' }
        ],
        overview: 'SentinelOne has made Purple AI the centerpiece of its go-to-market strategy — an AI-powered security analyst that enables natural language threat hunting, automated incident response, and proactive security posture assessment. Their Q4 FY2025 earnings explicitly cited Purple AI inference costs as a gross margin headwind, creating an investor-facing problem that inference optimization directly solves. As a cybersecurity platform, the data flowing through their system (endpoint telemetry, threat indicators, customer security events) is extremely sensitive and cannot be processed by shared inference infrastructure.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with cost efficiency tied to gross margin recovery — SentinelOne has publicly disclosed the margin impact from Purple AI inference. Position Valar as the solution that preserves their AI competitive advantage while fixing the margin problem.'],
              ['Key Evidence', 'Q4 FY2025 earnings: Purple AI inference costs cited as gross margin headwind. Security telemetry data sensitivity. Purple AI is central to their competitive positioning.'],
              ['Urgency Level', 'HIGH — Gross margin headwind from AI inference is an investor-facing problem. Purple AI is too strategically important to cut, so optimization is the only path.'],
              ['Target Buyer', 'Buyer: Cloud Infrastructure leadership + CISO / Security Engineering (the cost-pressure owners as Purple AI inference cost is cited as gross margin headwind). Purple AI applied team can champion specific workloads. AVOID leading with the Purple AI platform engineering team — they built the serving stack and treat external inference vendors as scope replacement.'],
              ['Messaging Angle', 'Cost efficiency first: "Recover Purple AI gross margin impact — reduce inference costs by 40-60% while maintaining real-time threat detection quality." Reliability second: ensure Purple AI delivers consistent performance for your customers.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Cybersecurity'],
              ['Revenue', '~$800M (FY2025)'],
              ['Employees', '~3,500'],
              ['Cloud Provider', 'AWS (primary), multi-cloud for agent deployment to customer environments'],
              ['AI Maturity', 'Very advanced — AI-first cybersecurity platform since founding. Purple AI (generative) is the primary go-to-market differentiator. Deep ML expertise in threat detection.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Purple AI (natural language threat hunting, incident summarization, remediation guidance), autonomous threat detection, behavioral analysis, SOAR automation, threat intelligence correlation.'],
              ['Current Stack', 'AWS-based model serving infrastructure. Custom models for real-time detection. LLM infrastructure for Purple AI. Likely growing investment in inference optimization.'],
              ['Pain Points', 'Purple AI inference costs directly impacting gross margins. Security data sensitivity requires controlled inference. Growing Purple AI adoption means the cost problem gets worse, not better.'],
              ['Estimated Spend', '$15–35M annually on inference compute (estimated from margin impact and revenue scale)']
            ]
          }
        ],
        contacts: [],
        signal_score: 5,
        signals: ['Gross margin headwind from AI inference publicly disclosed', 'Purple AI is central competitive differentiator', 'Security data sensitivity = perfect Valar fit', 'Cannot cut AI investment — must optimize'],
        signal_types: ['positive', 'positive', 'positive', 'positive'],
        opp_reason: 'Publicly disclosed margin impact + security data sensitivity + AI is core competitive strategy. SentinelOne cannot cut Purple AI — they must optimize it. Valar solves exactly this problem.',
        competitive_distress: 5,
        distress_reason: 'SentinelOne faces a strategic dilemma: Purple AI is their key differentiator but is also their biggest margin headwind. They must optimize inference, not reduce it.',
        distress_signals: ['Q4 FY2025 earnings: Purple AI inference costs cited as gross margin headwind', 'Growing Purple AI adoption makes the cost problem worse over time'],
        distress_signal_types: ['negative', 'negative'],
    gtm_thesis: 'SentinelOne\'s Purple AI and autonomous threat detection run intensive inference workloads. They\'ve publicly discussed AI cost headwinds impacting gross margins. <strong>Primary angle:</strong> Cost efficiency — SentinelOne has the clearest public signal of inference cost pain in cybersecurity. Valar can directly address their margin pressure.'
      },

      // ── 10. Rippling ──
      {
        name: 'Rippling',
        domain: 'rippling.com',
        subtitle: 'Unified HR/IT/Finance platform processing employee PII across every business function — data governance across modules is complex',
        tier: 'med',
        tags: [
          { t: 'HR Tech / IT', c: 'neutral', tip: 'Unified employee management platform (HR, IT, Finance)' },
          { t: 'AWS + GCP', c: 'stack', tip: 'AWS primary, some GCP workloads' },
          { t: 'Multi-module PII', c: 'hw', tip: 'Employee PII flows across HR, IT, and Finance modules' },
          { t: 'AI Automation', c: 'stack', tip: 'AI-powered IT automation and HR workflows' },
          { t: 'Hypergrowth', c: 'oss', tip: 'One of the fastest-growing enterprise SaaS companies' }
        ],
        overview: 'Rippling\'s unified platform spans HR, IT, and Finance — meaning employee PII (SSNs, compensation, device information, financial data) flows across multiple modules, creating complex data governance requirements. As they build AI features — IT automation, HR workflow generation, compliance monitoring, spend analytics — they need inference infrastructure that respects data governance boundaries across all modules. Rippling\'s hypergrowth trajectory means AI investment is accelerating rapidly, and establishing the right inference foundation now will pay dividends as they scale.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and data governance — Rippling\'s multi-module architecture means PII governance is uniquely complex. Position Valar as the inference layer that handles data boundaries correctly across HR, IT, and Finance.'],
              ['Key Evidence', 'Employee PII across HR/IT/Finance modules. Growing AI features across all modules. Hypergrowth = rapidly increasing inference needs.'],
              ['Urgency Level', 'MED — Growing fast and investing in AI, but may not yet have critical inference pain. Good timing to establish the foundation before scale forces the decision.'],
              ['Target Buyer', 'Platform Engineering / Infrastructure team — the group building Rippling\'s unified platform infrastructure.'],
              ['Messaging Angle', 'Reliability first: "Unified inference infrastructure for HR, IT, and Finance AI — data governance that respects module boundaries." Scalability second: scale AI features as fast as Rippling is growing.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'HR Tech / IT Management / Finance'],
              ['Revenue', '~$450M ARR (estimated)'],
              ['Employees', '~3,000'],
              ['Cloud Provider', 'AWS (primary), some GCP'],
              ['AI Maturity', 'Moderate and rapidly growing — AI features across IT automation, HR workflow generation, compliance monitoring, and spend analytics. Investing heavily as a competitive differentiator.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'IT automation (device management, access provisioning), HR workflow generation, compliance monitoring, spend analytics, employee support chatbot, policy document generation.'],
              ['Current Stack', 'AWS-based infrastructure. Likely early-to-moderate inference maturity — mix of third-party APIs and self-hosted models.'],
              ['Pain Points', 'Employee PII across HR/IT/Finance creates complex data governance. Rapid growth means AI infrastructure needs to scale quickly. Multi-module data governance adds unique complexity to inference.'],
              ['Estimated Spend', '$5–15M annually on inference compute (estimated; growing rapidly with AI feature expansion and company growth)']
            ]
          }
        ],
        contacts: [],
        signal_score: 3,
        signals: ['Complex multi-module PII governance', 'Hypergrowth trajectory accelerating AI investment', 'AI features expanding across all business modules'],
        signal_types: ['positive', 'positive', 'positive'],
        opp_reason: 'Unique multi-module PII governance challenge creates a strong Valar fit. Hypergrowth means the opportunity grows quickly. Earlier-stage AI maturity means smaller initial deal but strong growth trajectory.',
        competitive_distress: 2,
        distress_reason: 'Rippling is more in "building" mode than "distress" mode — they need to establish inference infrastructure as AI features grow, rather than optimizing existing infrastructure.',
        distress_signals: ['Multi-module PII governance adding complexity as AI features scale'],
        distress_signal_types: ['neutral'],
    gtm_thesis: 'Rippling manages employee data (payroll, benefits, devices, apps) across thousands of companies. Their workforce platform is increasingly AI-powered, and employee PII cannot be sent to external inference providers. <strong>Primary angle:</strong> Data security — HR platforms processing SSNs and salary data need inference to stay in their cloud.'
      }
    ]
  }
];

/* ------------------------------------------------------------------ */
/*  CONTACT_MAP                                                        */
/* ------------------------------------------------------------------ */
const CONTACT_MAP = {
  "Walmart": [
    { name: "Yesudason Paulraj", title: "Group Director of Software Engineering", type: "technical", linkedin: "https://linkedin.com/in/ypaulraj", connections: [{ person: "Ross", strength: "warm" }] }
  ],
  "ServiceNow": [
    { name: "Cian Brassil", title: "Senior Staff Product Manager, AI", type: "business", linkedin: "https://linkedin.com/in/brassil", connections: [{ person: "Cassie", strength: "warm" }] },
    { name: "Lawrence Osai", title: "Principal Product Manager, AI Platform Security & Privacy", type: "business", linkedin: "https://linkedin.com/in/lawrence-osai-85ba8b71", connections: [{ person: "Tanmaye", strength: "warm" }] },
    { name: "Luke Hagstrand", title: "VP, Enterprise AI", type: "business", linkedin: "https://linkedin.com/in/luke-hagstrand", connections: [{ person: "Tanmaye", strength: "warm" }] }
  ],
  "UnitedHealth Group": [
    { name: "Srikanth Nittala", title: "Contact from Valar list", type: "technical", linkedin: "https://www.linkedin.com/in/srikanthnittala/", connections: [] },
    { name: "Mike Kramer", title: "Director of Engineering", type: "technical", linkedin: "https://linkedin.com/in/michael-kramer-01259a23", connections: [] }
  ],
  "Mastercard": [],
  "General Motors (Cruise)": [
    { name: "Peter Kashou", title: "Vice President of Infrastructure", type: "technical", linkedin: "https://linkedin.com/in/peterkashou", connections: [] },
    { name: "Nariman Madani", title: "Staff Machine Learning Engineer", type: "technical", linkedin: "https://linkedin.com/in/nariman-madani", connections: [{ person: "Ross", strength: "warm" }] },
    { name: "Naghmana Majed", title: "Head of AI Product Engineering", type: "business", linkedin: "https://linkedin.com/in/naghmana", connections: [{ person: "Shuman", strength: "warm" }] }
  ],
  "Capital One": [
    { name: "Jason Burks", title: "Senior Director of Software Engineering", type: "technical", linkedin: "https://linkedin.com/in/jason-burks", connections: [{ person: "Charles Holley", strength: "warm" }] },
    { name: "Vivek Gupta", title: "Director, Distinguished Engineer", type: "technical", linkedin: "https://linkedin.com/in/vivek-gupta-7b188018", connections: [{ person: "Alex Giles", strength: "warm" }] },
    { name: "John Hinnegan", title: "Senior Engineering Leader", type: "technical", linkedin: "https://linkedin.com/in/johnhinnegan", connections: [{ person: "Ben", strength: "warm" }, { person: "Jason Gelman", strength: "warm" }] },
    { name: "Jeff Chou", title: "VP of AI / Head of Product", type: "business", linkedin: "https://linkedin.com/in/jeffchoumit", connections: [{ person: "Hannah", strength: "warm" }] },
    { name: "Ryan McCaffrey", title: "Lead AI Engineer", type: "technical", linkedin: "https://linkedin.com/in/ryanpmccaffrey", connections: [{ person: "Doug", strength: "warm" }] },
    { name: "Trina Leung", title: "AI/ML Platform Product Manager", type: "business", linkedin: "https://www.linkedin.com/in/trina-leung", connections: [{ person: "Tanmaye", strength: "warm" }] },
    { name: "James P. Kennedy", title: "Head of TPM, Bank Modernization Lead", type: "business", linkedin: "https://linkedin.com/in/jamespkennedynyc", connections: [{ person: "Gaby Lorenzi", strength: "warm" }] },
    { name: "Radford Tam", title: "Senior Engineering Manager, Platform Enablement", type: "technical", linkedin: "https://linkedin.com/in/radfordtam", connections: [{ person: "Emily", strength: "warm" }] }
  ],
  "PayPal": [
    { name: "Warren Zhang", title: "Director of Engineering", type: "technical", linkedin: "https://linkedin.com/in/warren-zhang-95a79610", connections: [{ person: "Alex Giles", strength: "warm" }] },
    { name: "Bhuvaneswari Shanmugam", title: "Sr Software Engineering Manager", type: "technical", linkedin: "https://linkedin.com/in/bhuvaneswari-shanmugam-2b3b9275", connections: [{ person: "Jason Gelman", strength: "warm" }] },
    { name: "Martin Brodbeck", title: "SVP, Head of Consumer Engineering", type: "business", linkedin: "https://linkedin.com/in/martinbrodbeck", connections: [{ person: "Tobias", strength: "warm" }] },
    { name: "Gurinder Singh", title: "Staff Software Engineer", type: "technical", linkedin: "https://linkedin.com/in/gurinder-singh-a30a1a48", connections: [{ person: "Shuman", strength: "warm" }] }
  ],
  "Workday": [],
  "HubSpot": [
    { name: "Asher Eastham", title: "Technical Lead", type: "technical", linkedin: "https://linkedin.com/in/ashereastham", connections: [{ person: "Bridget", strength: "warm" }] }
  ],
  "Rivian": [],
  "Carta": [],
  "Datadog": [],
  "CrowdStrike": [],
  "Gusto": [],
  "Plaid": [],
  "Sumo Logic": [],
  "Hims & Hers": [],
  "Brex": [],
  "SentinelOne": [],
  "Rippling": []
};

/* ------------------------------------------------------------------ */
/*  COMPANY_SOURCES — verified hyperlinked references per company      */
/*  All URLs verified via WebSearch 2026-04-29                         */
/* ------------------------------------------------------------------ */
const COMPANY_SOURCES = {
  "Walmart": [
    { name: "Walmart 10-K Annual Filings — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000104169&type=10-K&dateb=&owner=include&count=40" },
    { name: "Walmart Global Tech Blog — From Models to Agents (WIBEY launch)", url: "https://tech.walmart.com/content/walmart-global-tech/en_us/blog/post/wibey-announcement.html" },
    { name: "Walmart Global Tech Blog — Element ML Platform", url: "https://tech.walmart.com/content/walmart-global-tech/en_us/blog/post/walmarts-element-a-machine-learning-platform-like-no-other.html" },
    { name: "Walmart Global Tech Blog Index", url: "https://tech.walmart.com/content/walmart-global-tech/en_us/blog/post.html" },
    { name: "NVIDIA — Triton Inference Server (referenced in WMT job posts)", url: "https://blogs.nvidia.com/blog/triton-ai-inference/" }
  ],
  "ServiceNow": [
    { name: "ServiceNow 10-K Annual Filings — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001373715&type=10-K&dateb=&owner=include&count=40" },
    { name: "ServiceNow — Now LLM Generative LLM for Enterprise AI", url: "https://www.servicenow.com/community/now-assist-articles/now-llm-generative-llm-for-enterprise-ai-use-cases/ta-p/2688208" },
    { name: "NVIDIA Blog — ServiceNow Apriel Nemotron 15B", url: "https://blogs.nvidia.com/blog/servicenow-apriel-nemotron/" },
    { name: "ServiceNow Docs — Large Language Models on the AI Platform", url: "https://www.servicenow.com/docs/r/intelligent-experiences/servicenow-large-language-model-now-llm/exploring-large-language-models.html" },
    { name: "NVIDIA Newsroom — ServiceNow + Hugging Face open LLMs", url: "https://nvidianews.nvidia.com/news/servicenow-hugging-face-nvidia-open-access-llms-generative-ai-enterprise-applications" }
  ],
  "UnitedHealth Group": [
    { name: "UnitedHealth Group 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000731766&type=10-K&dateb=&owner=include&count=40" },
    { name: "Healthcare Dive — Optum Real AI claims processing launch", url: "https://www.healthcaredive.com/news/optum-real-ai-speed-claims-review-united-health/803448/" },
    { name: "Bloomberg — UnitedHealth's Optum Real Uses AI", url: "https://www.bloomberg.com/news/articles/2025-10-21/unitedhealth-s-optum-real-uses-ai-to-speed-up-medical-claims" },
    { name: "UnitedHealthcare — AI for Better Care FAQ (Responsible AI / HIPAA)", url: "https://www.uhc.com/agents-brokers/employer-sponsored-plans/news-strategies/ai-for-better-care-faq" },
    { name: "STAT News — Optum Medicare AI risk scoring (CMMI)", url: "https://www.statnews.com/2025/05/16/unitedhealth-optum-developing-new-ai-risk-scoring-system-for-medicare-advantage-cmmi/" }
  ],
  "Mastercard": [
    { name: "Mastercard 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001141391&type=10-K&dateb=&owner=include&count=40" },
    { name: "Mastercard — Decision Intelligence Product Page", url: "https://b2b.mastercard.com/ai-and-security-solutions/fraud-and-decisioning/decision-intelligence/" },
    { name: "Mastercard — Risk Decisioning Platform", url: "https://www.mastercard.com/global/en/business/cybersecurity-fraud-prevention/risk-decisioning/mastercard-risk-decisioning-platform.html" },
    { name: "Mastercard Insights — AI fraud prevention savings (2026)", url: "https://www.mastercard.com/us/en/news-and-trends/Insights/2026/ai-is-helping-banks-save-millions-by-transforming-payment-fraud-prevention.html" },
    { name: "CNBC — Mastercard launches GenAI fraud detection model", url: "https://www.cnbc.com/2024/02/01/mastercard-launches-gpt-like-ai-model-to-help-banks-detect-fraud.html" },
    { name: "VentureBeat — 300ms fraud model engineering breakdown", url: "https://venturebeat.com/orchestration/what-ai-builders-can-learn-from-fraud-models-that-run-in-300-milliseconds" }
  ],
  "General Motors (Cruise)": [
    { name: "General Motors 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001467858&type=10-K&dateb=&owner=include&count=40" },
    { name: "GM — Autonomous Driving Innovation Page", url: "https://www.gm.com/innovation/autonomous-driving" },
    { name: "NPR — GM retreats from robotaxis, restructures Cruise", url: "https://www.npr.org/2024/12/11/g-s1-37700/gm-to-retreat-from-robotaxis-and-stop-funding-its-cruise-autonomous-vehicle-unit" },
    { name: "TechBuzz — GM Eyes-Off Driving 2028 plan using Cruise AI", url: "https://www.techbuzz.ai/articles/gm-plans-eyes-off-driving-system-by-2028-using-cruise-ai" },
    { name: "Automotive News — GM autonomous testing ramp", url: "https://www.autonews.com/general-motors/an-general-motors-eyes-off-cruise-1217/" }
  ],
  "Capital One": [
    { name: "Capital One 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000927628&type=10-K&dateb=&owner=include&count=40" },
    { name: "Capital One Tech — A Developer Walks into AWS SageMaker", url: "https://www.capitalone.com/tech/machine-learning/a-developer-walks-into-aws-sagemaker/" },
    { name: "AWS — Capital One AI/ML Customer Page", url: "https://aws.amazon.com/machine-learning/customers/innovators/capital_one/" },
    { name: "AWS — Capital One Innovator Case Studies", url: "https://aws.amazon.com/solutions/case-studies/innovators/capital-one/" },
    { name: "Databricks Blog — Capital One credit card fraud ML", url: "https://www.databricks.com/blog/2021/07/13/using-your-data-to-stop-credit-card-fraud-capital-one-and-other-best-practices.html" }
  ],
  "PayPal": [
    { name: "PayPal 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001633917&type=10-K&dateb=&owner=include&count=40" },
    { name: "PayPal Technology Blog (Medium) — Large-scale Fraud Detection ML", url: "https://medium.com/paypal-tech/machine-learning-model-ci-cd-and-shadow-platform-8c4f44998c78" },
    { name: "PayPal — ML Fraud Detection Technologies (BRC)", url: "https://www.paypal.com/us/brc/article/payment-fraud-detection-machine-learning" },
    { name: "PayPal Developer Community — Risk and Fraud Management", url: "https://developer.paypal.com/community/blog/paypal-fraud-risk-management-solutions/" },
    { name: "NVIDIA Blog — AI fraud detection (PayPal reference architecture)", url: "https://blogs.nvidia.com/blog/ai-fraud-detection-rapids-triton-tensorrt-nemo/" }
  ],
  "Workday": [
    { name: "Workday 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001327811&type=10-K&dateb=&owner=include&count=40" },
    { name: "Workday Newsroom — Illuminate AI Agents Expansion (Sep 2025)", url: "https://newsroom.workday.com/2025-09-16-Workday-Illuminate-TM-Expands-with-New-AI-Agents-for-HR,-Finance,-and-Industry" },
    { name: "Futurum — Workday Rising 2025 recap (AI Agents, Data Cloud, Flex Credits)", url: "https://futurumgroup.com/insights/workday-rising-2025-ai-agents-data-cloud-and-flex-credits-unveiled/" },
    { name: "PR Newswire — Next-Gen Illuminate Agents", url: "https://www.prnewswire.com/news-releases/workday-unveils-next-generation-of-illuminate-agents-to-transform-hr-and-finance-operations-302458500.html" },
    { name: "Reworked — Workday Sana acquisition + Build platform", url: "https://www.reworked.co/digital-workplace/workday-launches-build-platform-for-custom-ai-solutions/" }
  ],
  "HubSpot": [
    { name: "HubSpot 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001404655&type=10-K&dateb=&owner=include&count=40" },
    { name: "HubSpot — Breeze AI Product Page", url: "https://www.hubspot.com/products/artificial-intelligence" },
    { name: "HubSpot Knowledge Base — Understand Breeze", url: "https://knowledge.hubspot.com/ai/understand-breeze" },
    { name: "Vantage Point — Breeze AI Outcome-Based Pricing analysis", url: "https://vantagepoint.io/blog/hs/hubspot-breeze-outcome-based-pricing-ai-agents" },
    { name: "eesel AI — HubSpot AI pricing breakdown 2026", url: "https://www.eesel.ai/blog/hubspot-ai-pricing" }
  ],
  "Rivian": [
    { name: "Rivian 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001874178&type=10-K&dateb=&owner=include&count=40" },
    { name: "Rivian — Autonomy+ Product Page", url: "https://rivian.com/autonomy" },
    { name: "AWS HPC Blog — Rivian engineering simulation modernization", url: "https://aws.amazon.com/blogs/hpc/how-rivian-modernized-engineering-simulation-using-aws/" },
    { name: "AWS re:Invent 2024 — How Rivian accelerated ADAS development on AWS", url: "https://reinvent.awsevents.com/content/dam/reinvent/2024/slides/aut/AUT318_How-Rivian-accelerated-ADAS-development-on-AWS.pdf" },
    { name: "AWS — Rivian cloud storage optimization for ADAS workloads", url: "https://aws.amazon.com/blogs/industries/how-rivian-optimized-cloud-storage-for-its-adas-and-product-engineering-workloads-on-aws/" },
    { name: "NVIDIA GTC 2025 — Rivian ADAS ML and simulation scaling", url: "https://www.nvidia.com/en-us/on-demand/session/gtc25-s74272/" }
  ],
  "Carta": [
    { name: "Carta — Company Site", url: "https://carta.com" },
    { name: "Carta Engineering Blog", url: "https://carta.com/blog/category/engineering/" },
    { name: "Carta — Products Overview", url: "https://carta.com/products/" },
    { name: "Crunchbase — Carta Profile", url: "https://www.crunchbase.com/organization/carta-2" }
  ],
  "Datadog": [
    { name: "Datadog 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001561550&type=10-K&dateb=&owner=include&count=40" },
    { name: "Datadog Blog — Driving AI ROI (cost, performance, infrastructure)", url: "https://www.datadoghq.com/blog/manage-ai-cost-and-performance-with-datadog/" },
    { name: "Datadog Engineering — LLMs for Postmortems (Bits AI)", url: "https://www.datadoghq.com/blog/engineering/llms-for-postmortems/" },
    { name: "Datadog — State of AI Engineering Report", url: "https://www.datadoghq.com/state-of-ai-engineering/" },
    { name: "Datadog — Observability in the AI Age", url: "https://www.datadoghq.com/blog/datadog-ai-innovation/" },
    { name: "Datadog AI Blog Index", url: "https://www.datadoghq.com/blog/ai/" }
  ],
  "CrowdStrike": [
    { name: "CrowdStrike 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001535527&type=10-K&dateb=&owner=include&count=40" },
    { name: "CrowdStrike — Charlotte AI Product Page", url: "https://www.crowdstrike.com/en-us/platform/charlotte-ai/" },
    { name: "CrowdStrike Blog — Charlotte AI transforms Falcon UX", url: "https://www.crowdstrike.com/en-us/blog/crowdstrike-transforms-falcon-ux-charlotte-ai/" },
    { name: "CrowdStrike — Falcon AIDR (AI Detection & Response)", url: "https://www.crowdstrike.com/en-us/platform/falcon-aidr-ai-detection-and-response/" },
    { name: "CrowdStrike Blog — Fall 2025 Release (Agentic SOC, AI Era)", url: "https://www.crowdstrike.com/en-us/blog/crowdstrike-fall-2025-release-defines-agentic-soc-secures-ai-era/" }
  ],
  "Gusto": [
    { name: "Gusto Company News — Meet Gus AI Assistant", url: "https://gusto.com/company-news/gus-ai-assistant" },
    { name: "Gusto — Gus AI Assistant Product Page", url: "https://gusto.com/ai/gus-assistant" },
    { name: "Gusto Help Center — Use Gus", url: "https://support.gusto.com/article/250211164235690/Use-Gusto-s-AI-assistant-Gus" },
    { name: "Gusto Engineering (Murga) — Evolution of Gus, Gusto's AI Assistant", url: "https://medium.com/@mr.murga/the-evolution-of-gus-gustos-ai-powered-assistant-c41ef9eb8563" }
  ],
  "Plaid": [
    { name: "Plaid Engineering — Building a Transaction Foundation Model", url: "https://plaid.com/blog/building-transaction-foundation-model-intelligent-finance/" },
    { name: "Plaid Engineering — Why Intelligent Finance Needs Purpose-built AI Infrastructure", url: "https://plaid.com/blog/intelligent-finance-ai-infrastructure/" },
    { name: "Plaid Blog — AI-Enhanced Transaction Categorization", url: "https://plaid.com/blog/ai-enhanced-transaction-categorization/" },
    { name: "Plaid — Intelligent Finance Page", url: "https://plaid.com/intelligent-finance/" },
    { name: "Plaid Engineering — ML for Real-Time Income Verification", url: "https://plaid.com/blog/machine-learning-income-verification/" }
  ],
  "Sumo Logic": [
    { name: "Sumo Logic Docs — AI and Machine Learning", url: "https://www.sumologic.com/help/docs/get-started/ai-machine-learning/" },
    { name: "Sumo Logic — Dojo AI Solution Page", url: "https://www.sumologic.com/solutions/dojo-ai" },
    { name: "Tribe AI — Sumo Logic GenAI Case Study (MTTR reduction)", url: "https://www.tribe.ai/case-studies/sumo-logic-utilizes-genai-to-reduce-mean-time-to-resolution-of-log-data" },
    { name: "Sumo Logic — ML-Powered Analytics Solutions", url: "https://www.sumologic.com/solutions/machine-learning-powered-analytics" },
    { name: "Wikipedia — Sumo Logic (Francisco Partners $1.7B acquisition)", url: "https://en.wikipedia.org/wiki/Sumo_Logic" }
  ],
  "Hims & Hers": [
    { name: "Hims & Hers 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001773751&type=10-K&dateb=&owner=include&count=40" },
    { name: "Hims & Hers Investor Relations — MedMatch Press Release", url: "https://investors.hims.com/news/news-details/2023/Hims--Hers-Introduces-MedMatch-The-Next-Generation-of-Intelligent-Diagnostic-Services/default.aspx" },
    { name: "Hims & Hers — Privacy Policy (HIPAA + SOC2 references)", url: "https://www.hims.com/privacy-policy" },
    { name: "Nasdaq — Hims & Hers AI-Powered Personalized Healthcare", url: "https://www.nasdaq.com/articles/hims-hers-leads-charge-ai-powered-personalized-healthcare" },
    { name: "Quartz — Hims & Hers Personalized Digital Healthcare expansion", url: "https://qz.com/hims-hers-expands-personalized-digital-healthcare-platform" }
  ],
  "Brex": [
    { name: "Brex Journal — 7 Ways AI Can Accelerate Expense Management", url: "https://www.brex.com/journal/accelerate-expense-management-with-ai" },
    { name: "Brex Spend Trends — How AI Accelerates Accounting Teams", url: "https://www.brex.com/spend-trends/accounting/ai-in-accounting" },
    { name: "Brex Platform — Intelligent Finance (AI Agents)", url: "https://www.brex.com/platform/intelligent-finance" },
    { name: "ZenML LLMOps Database — Brex AI-Powered Financial Assistant Case Study (Bedrock + Claude)", url: "https://www.zenml.io/llmops-database/ai-powered-financial-assistant-for-automated-expense-management" },
    { name: "Brex Journal — From Chaos to Control with AI (spend management)", url: "https://www.brex.com/journal/from-chaos-to-control-with-ai" }
  ],
  "SentinelOne": [
    { name: "SentinelOne 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001583708&type=10-K&dateb=&owner=include&count=40" },
    { name: "SentinelOne — Purple AI Product Page", url: "https://www.sentinelone.com/platform/purple/" },
    { name: "SentinelOne Blog — Transforming the SOC with Purple AI (GA)", url: "https://www.sentinelone.com/blog/transforming-the-soc-with-purple-ai/" },
    { name: "SentinelOne — IDC Business Value of Purple AI Report", url: "https://www.sentinelone.com/lp/idc-business-value-purple-report/" },
    { name: "Seeking Alpha — SentinelOne Q4 Earnings (Singularity + Purple AI)", url: "https://seekingalpha.com/article/4671785-sentinelone-q4-earnings-singularity-purple-ai-opportunities-seem-already-priced-in" }
  ],
  "Rippling": [
    { name: "Rippling — AI Platform Page", url: "https://www.rippling.com/platform/ai" },
    { name: "Rippling — Platform Overview (Employee Graph)", url: "https://www.rippling.com/platform" },
    { name: "Rippling — HR Products", url: "https://www.rippling.com/products/hr" },
    { name: "Rippling — Main Site", url: "https://www.rippling.com/" }
  ],
  "BigPanda": [
    { name: "BigPanda — Main Site (AIOps platform)", url: "https://www.bigpanda.io/" },
    { name: "BigPanda Blog — What is AIOps", url: "https://www.bigpanda.io/blog/what-is-aiops/" },
    { name: "BigPanda — AI-Powered Incident Management Assistant", url: "https://www.bigpanda.io/solutions/ai-powered-incident-management-assistant/" },
    { name: "BigPanda Blog — AI Incident Prevention", url: "https://www.bigpanda.io/blog/ai-incident-prevention/" },
    { name: "BigPanda Engineering Blog Index", url: "https://www.bigpanda.io/blog/" },
    { name: "Primary VC PVP V Memo — Valar Design Partner Confirmation", url: "https://www.primary.vc/" }
  ],
  "Varonis": [
    { name: "Varonis 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001478814&type=10-K&dateb=&owner=include&count=40" },
    { name: "Varonis — AI-Powered Data Discovery and Classification (engineering blog)", url: "https://www.varonis.com/blog/ai-data-classification" },
    { name: "Varonis — AI Security Starts with Data Security", url: "https://www.varonis.com/blog/ai-data-security" },
    { name: "Varonis — Accurate Classification That Scales (engineering)", url: "https://www.varonis.com/blog/scaling-accurate-classification" },
    { name: "Varonis — AI Security Solutions Page", url: "https://www.varonis.com/solutions/ai-security" },
    { name: "Varonis Blog Index — AI Security tag", url: "https://www.varonis.com/blog/tag/ai-security" }
  ],
  "ABInBev": [
    { name: "AB InBev 10-K (Annual Report on Form 20-F) — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001668717&type=20-F&dateb=&owner=include&count=40" },
    { name: "AB InBev — Investor Relations", url: "https://www.ab-inbev.com/investors/" },
    { name: "ABI Research — 2025 Supply Chain AI Survey (industry context)", url: "https://www.abiresearch.com/blog/artificial-intelligence-ai-in-supply-chain-survey-results" },
    { name: "AB InBev — Innovation & Technology", url: "https://www.ab-inbev.com/news/" }
  ],
  "Qualcomm": [
    { name: "Qualcomm 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000804328&type=10-K&dateb=&owner=include&count=40" },
    { name: "Qualcomm AI Hub — On-Device AI Platform", url: "https://aihub.qualcomm.com/" },
    { name: "Qualcomm — AI Disruption Driving On-Device Inference (PDF)", url: "https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/ai-disruption-driving-innovation-on-device-inference.pdf" },
    { name: "Qualcomm Press — AI200 and AI250 Rack-Scale Data Center Inference (Oct 2025)", url: "https://www.qualcomm.com/news/releases/2025/10/qualcomm-unveils-ai200-and-ai250-redefining-rack-scale-data-cent" },
    { name: "GitHub — Qualcomm AI Hub Models (open source ML repo)", url: "https://github.com/qualcomm/ai-hub-models" },
    { name: "The Next Platform — How Qualcomm Can Compete with NVIDIA for Datacenter AI Inference", url: "https://www.nextplatform.com/2025/10/28/how-qualcomm-can-compete-with-nvidia-for-datacenter-ai-inference/" }
  ],
  "Jefferies": [
    { name: "Jefferies — What We Learned from the Year GenAI Went Mainstream", url: "https://www.jefferies.com/insights/boardroom-intelligence/what-we-learned-from-the-year-generative-ai-went-mainstream/" },
    { name: "Databricks Blog — Jefferies Modernizes Equity Research at Scale (JDI launch)", url: "https://www.databricks.com/blog/jefferies-modernizes-equity-research-scale-databricks-and-agentic-analytics" },
    { name: "Integrity Research — Jefferies + Databricks Agentic AI Equity Research", url: "https://www.integrity-research.com/jefferies-partners-with-databricks-to-deploy-agentic-ai-tools-for-next-generation-equity-research/" },
    { name: "AWS Case Studies — Jefferies Innovates on AWS", url: "https://aws.amazon.com/solutions/case-studies/jefferies-video-case-study/" },
    { name: "Jefferies — Capital Markets and the Rise of AI", url: "https://www.jefferies.com/insights/boardroom-intelligence/capital-markets-and-the-rise-of-ai/" },
    { name: "HCLTech — Jefferies GenAI Transformation (corporate functions)", url: "https://www.hcltech.com/videos/jefferies-transformation-story-adopting-gen-ai-corporate-functions" }
  ],
  "Mobileye": [
    { name: "Mobileye 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001910139&type=10-K&dateb=&owner=include&count=40" },
    { name: "Mobileye — EyeQ Chip Evolution (technology page)", url: "https://www.mobileye.com/technology/eyeq-chip/" },
    { name: "Mobileye Newsroom — EyeQ6 Lite Launch", url: "https://www.mobileye.com/news/mobileye-eyeq6-lite-launches-to-speed-adas-upgrades-worldwide/" },
    { name: "Mobileye — CES 2025 Updates", url: "https://www.mobileye.com/ces-2025/" },
    { name: "TechTime — Mobileye EyeQ8 Mind-Off Driving Development", url: "https://techtime.news/2025/10/24/mobileye-22/" },
    { name: "Mobileye Investor Relations — ADAS Fact Sheet", url: "https://ir.mobileye.com/news-releases/news-release-details/fact-sheet-mobileye-advanced-driver-assistance-systems-adas" }
  ],
  "Abbott": [
    { name: "Abbott Laboratories 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000001800&type=10-K&dateb=&owner=include&count=40" },
    { name: "Abbott Newsroom — Improving Health Through Better Data (AI strategy)", url: "https://www.abbott.com/corpnewsroom/products-and-innovation/improving-health-through-better-data.html" },
    { name: "Abbott Newsroom — How Tech Is Transforming Healthcare", url: "https://www.abbott.com/en-us/corpnewsroom/strategy-and-strength/how-tech-is-transforming-healthcare" },
    { name: "Abbott Core Laboratory — AlinIQ Always On (predictive maintenance ML)", url: "https://www.corelaboratory.abbott/us/en/offerings/brands/aliniq/aliniq-always-on.html" },
    { name: "Fierce Biotech — Abbott AI-Powered Coronary OCT Imaging Launch", url: "https://www.fiercebiotech.com/medtech/abbott-launches-ai-powered-coronary-oct-imaging-system-europe" },
    { name: "TechTarget — Abbott Launches AI Imaging Platform", url: "https://www.techtarget.com/pharmalifesciences/news/366607239/Abbott-Launches-Artificial-Intelligence-Powered-Imaging-Platform" }
  ],
  "Ford": [
    { name: "Ford Motor Company 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000037996&type=10-K&dateb=&owner=include&count=40" },
    { name: "TechCrunch — Ford AI Assistant + Next-Gen BlueCruise (CES 2026)", url: "https://techcrunch.com/2026/01/07/ford-has-an-ai-assistant-and-new-hands-free-bluecruise-tech-on-the-way/" },
    { name: "CNBC — Ford Eyes-Off Driving 2028", url: "https://www.cnbc.com/2026/01/07/ford-eyes-off-driving-ev-2028.html" },
    { name: "From the Road (Ford) — Affordable Smart Vehicle Technology Strategy", url: "https://www.fromtheroad.ford.com/us/en/articles/2026/ford-affordable-smart-vehicle-technology-strategy" },
    { name: "Trade Algo — Latitude AI (Ford self-driving subsidiary)", url: "https://news.tradealgo.com/news/what-you-need-to-know-about-fords-new-self-driving-subsidiary-latitude-ai" },
    { name: "InsideEVs — Ford $30K EV Truck Platform Eyes-Off Driving 2028", url: "https://insideevs.com/news/783700/ford-2028-autonomy-ai-ces/" }
  ],
  "Flatiron Health": [
    { name: "Flatiron Health Press — RWE Innovation 2025 launch", url: "https://resources.flatiron.com/press/flatiron-health-redefines-real-world-evidence-pioneering-scientific-innovations-move-beyond-what-is-to-uncover-why-and-predict-what-will-be" },
    { name: "Flatiron Press — Roche Acquisition Announcement", url: "https://resources.flatiron.com/press/press-release/roche" },
    { name: "Flatiron Press — VALID Framework (Journal of Clinical Oncology)", url: "https://resources.flatiron.com/press/flatiron-health-publishes-first-peer-reviewed-validation-framework-for-ai-extracted-real-world-oncology-data-in-journal-of-clinical-oncology" },
    { name: "Flatiron Press — End-to-End Evidence Solutions", url: "https://resources.flatiron.com/press/flatiron-health-expands-beyond-real-world-data-providing-end-to-end-evidence-solutions-for-oncology" },
    { name: "BioSpace — Flatiron AI Cancer Progression Research (AACR 2025)", url: "https://www.biospace.com/press-releases/flatiron-health-research-on-ai-driven-cancer-progression-extraction-presented-at-aacr-special-conference-in-cancer-research-artificial-intelligence-and-machine-learning-2025" },
    { name: "Flatiron — ASCO 2025 Research Showcase", url: "https://events.flatiron.com/asco2025" }
  ],
  "American Airlines": [
    { name: "American Airlines 10-K — SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000006201&type=10-K&dateb=&owner=include&count=40" },
    { name: "American Airlines Newsroom — AI at American (official AI strategy)", url: "https://news.aa.com/news/news-details/2025/Artificial-intelligence-at-American-CORP-OTH-01/default.aspx" },
    { name: "CIO — American Airlines Analytics Transformation", url: "https://www.cio.com/article/406357/american-airlines-takes-flight-with-analytics-transformation.html" },
    { name: "OAG — Three Smart Ways Airlines Use AI (Aug 2025)", url: "https://www.oag.com/blog/three-smart-ways-airlines-are-using-ai-to-improve-operations-in-august-2025" },
    { name: "Deloitte — American Airlines Smart Gating Machine Learning Case", url: "https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2023/machine-learning-in-airline-industry.html" },
    { name: "Justin McKelvey — American Airlines Emerging Tech Strategy", url: "https://www.justinmckelvey.com/blog/big-innovation-impactful-changes-inside-american-airlines-emerging-tech-strategy" }
  ]
};

/* ------------------------------------------------------------------ */
/*  JOB_LISTINGS — Active inference / ML platform job postings         */
/*  Sourced from official career pages, verified URLs                  */
/* ------------------------------------------------------------------ */
const JOB_LISTINGS = {
  "BigPanda": [
    { title: "Engineering Leader, AI Products", techs: "LLMs, Graph algorithms, Text matching, ML platform", url: "https://www.linkedin.com/jobs/view/engineering-leader-ai-products-at-bigpanda-3647439402", date: "Active 2026" },
    { title: "AIOps Engineering — Open Roles", techs: "AI/ML, Production AI", url: "https://www.bigpanda.io/company/panda-way/jobs/", date: "Active 2026" }
  ],
  "Varonis": [
    { title: "AI Security Engineering — Open Roles", techs: "MLOps, Multi-cloud (GCP + AWS), LLM-driven classification", url: "https://careers.varonis.com/", date: "Active 2026" }
  ],
  "UnitedHealth Group": [
    { title: "Senior AI/ML Engineer (Remote)", techs: "AWS SageMaker, Azure ML, GCP Vertex AI, MLOps, Kubernetes", url: "https://careers.unitedhealthgroup.com/job/eden-prairie/ai-or-ml-engineer-remote/34088/93732697376", date: "Active 2026" },
    { title: "Senior AI/ML Software Engineer (Remote, NY)", techs: "MLOps, LLM serving, batch + real-time inference", url: "https://careers.unitedhealthgroup.com/job/new-york/senior-ai-ml-software-engineer-remote/34088/92872076368", date: "Active 2026" },
    { title: "Principal AI/ML Engineer (Remote, MN)", techs: "GenAI platform, Inference architectures", url: "https://careers.mntech.org/jobs/522767125-principal-ai-ml-engineer-remote-at-unitedhealth-group", date: "Active 2026" },
    { title: "Sr AI/ML Engineer (Metro Manila)", techs: "MLOps, GenAI, Production ML platforms", url: "https://careers.unitedhealthgroup.com/job/metro-manila/sr-ai-ml-engineer/34088/94054611568", date: "Active 2026" },
    { title: "Senior AI ML Scientist (Remote, MN)", techs: "LLM, GenAI, Healthcare ML", url: "https://careers.unitedhealthgroup.com/job/eden-prairie/senior-ai-ml-scientist-remote/34088/94455575408", date: "Active 2026" }
  ],
  "Mastercard": [
    { title: "Lead Software Engineer, AI & DPE (Clearing Decisioning)", techs: "Real-time AI, Decisioning platform, High-throughput inference", url: "https://careers.mastercard.com/us/en/artificial-intelligence-jobs", date: "Active 2026" },
    { title: "Lead Artificial Intelligence Engineer", techs: "Decision Intelligence, Generative AI, Graph ML", url: "https://app.welcometothejungle.com/jobs/7c-6jR0x/company", date: "Active 2026" },
    { title: "AI & Data Engineering — Open Roles", techs: "AI products, Data platform, MLOps", url: "https://careers.mastercard.com/us/en/ai-data-jobs", date: "Active 2026" }
  ],
  "Capital One": [
    { title: "Lead AI Engineer (FM Hosting, LLM Inference)", techs: "LLM Inference, Foundation Model Hosting, AWS Ultraclusters", url: "https://www.capitalonecareers.com/job/new-york/lead-ai-engineer-fm-hosting-llm-inference/1732/86216418272", date: "Active 2026" },
    { title: "Lead AI Engineer (GenAI Platform, Agentic AI, LLM Infra & Orchestration)", techs: "Agentic AI, LLM Infrastructure, Orchestration", url: "https://www.capitalonecareers.com/job/san-jose/lead-ai-engineer-gen-ai-platform-agentic-ai-and-llm-infrastructure-and-orchestration/1732/92978245968", date: "Active 2026" },
    { title: "Sr Distinguished Machine Learning Engineer (Remote-Eligible)", techs: "ML at scale, AWS, Foundation models", url: "https://www.capitalonecareers.com/job/mclean/sr-distinguished-machine-learning-engineer-remote-eligible/1732/93650794080", date: "Active 2026" },
    { title: "Distinguished AI Engineer", techs: "AI architecture, LLM systems", url: "https://www.capitalonecareers.com/job/mclean/distinguished-ai-engineer/1732/90393010320", date: "Active 2026" },
    { title: "Senior AI Engineer (GenAI Platform Services, Agentic Systems)", techs: "Agentic systems, GenAI platform", url: "https://www.capitalonecareers.com/job/san-jose/senior-ai-engineer-gen-ai-platform-services-agentic-systems/1732/85741011696", date: "Active 2026" }
  ],
  "Datadog": [
    { title: "Staff Machine Learning Engineer — BitsAI", techs: "Retrieval pipelines, LLM evals, Production inference", url: "https://careers.datadoghq.com/detail/6365889/", date: "Active 2026" },
    { title: "Senior Machine Learning Engineer — BitsAI", techs: "Telemetry data ML, Inference systems", url: "https://careers.datadoghq.com/detail/6454183/", date: "Active 2026" },
    { title: "Senior Engineer — AI Platform", techs: "AI Platform, Tooling, Cross-product AI", url: "https://careers.datadoghq.com/detail/6476577/", date: "Active 2026" },
    { title: "AI Research Engineer — Datadog AI Research (DAIR)", techs: "Research → production, Custom infra", url: "https://careers.datadoghq.com/detail/7194969/", date: "Active 2026" },
    { title: "Staff Software Engineer — ML Observability", techs: "Drift detection, Model evaluation, Behavior tracing", url: "https://careers.datadoghq.com/detail/7107437/", date: "Active 2026" },
    { title: "Manager I — AI Platform, Annotation & Evaluation", techs: "AI eval, Annotation pipelines", url: "https://careers.datadoghq.com/detail/7314944/", date: "Active 2026" }
  ],
  "ServiceNow": [
    { title: "Now Assist + AI Platform Architecture", techs: "GenAI, LLM serving, Now Assist", url: "https://careers.servicenow.com/teams/ai-engineering-product/", date: "Active 2026" },
    { title: "Staff Software Engineer (Santa Clara)", techs: "AI Platform, Cloud infrastructure", url: "https://careers.servicenow.com/jobs/744000113217942/staff-software-engineer/", date: "Active 2026" },
    { title: "Senior Software Engineer (San Diego)", techs: "GenAI features, LLM platform services", url: "https://careers.servicenow.com/jobs/744000113222998/senior-software-engineer/", date: "Active 2026" },
    { title: "Staff Software Engineer — Core Platform (Moveworks, Bangalore)", techs: "Core platform AI, Moveworks integration", url: "https://careers.servicenow.com/jobs/744000118846528/staff-software-engineer-core-platform-moveworks/", date: "Active 2026" }
  ],
  "Mobileye": [
    { title: "Technical Expert — Multimodal GenAI (Vision-Language Models)", techs: "VLMs, VLA models, Scene understanding", url: "https://careers.mobileye.com/jobs/machine-learning-tech-lead-engineer-multimodal-models-llmvlm/b07139a7-51cc-406d-9492-d380361ad115", date: "Active 2026" },
    { title: "Senior Algorithm Developer", techs: "Computer vision, Perception, Python/C++", url: "https://careers.mobileye.com/jobs/senior-algorithm-developer/564d6ea2-0f58-47cc-9369-b68a2e521b45", date: "Active 2026" },
    { title: "Computer Vision Algorithms Developer", techs: "Deep learning, PyTorch, Detection", url: "https://careers.mobileye.com/jobs/computer-vision-algorithms-developer/459cebe3-4a62-4b10-b968-e6efb4bc749f", date: "Active 2026" },
    { title: "Senior ADAS System Validation Engineer", techs: "ADAS validation, Test methodology", url: "https://careers.mobileye.com/jobs/senior-adas-system-validation-engineer/65d5b29d-25e2-4b0d-b3fc-35e7286590d8", date: "Active 2026" }
  ],
  "Qualcomm": [
    { title: "Senior AI Platform Engineer (San Diego)", techs: "Platform, SRE, MLOps, LLMOps", url: "https://careers.qualcomm.com/careers/machine_learning_engineering?domain=qualcomm.com", date: "Active 2026" },
    { title: "Machine Learning / AI Engineering — Open Roles", techs: "C/C++, CUDA, PyTorch, Embedded ML", url: "https://www.qualcomm.com/company/careers", date: "Active 2026" },
    { title: "ML/AI Engineering Internship — Summer 2026", techs: "AI200/AI250 datacenter inference, Edge AI", url: "https://careercenter.cpp.edu/jobs/qualcomm-machine-learning-artificial-intelligence-engineering-internship-summer-2026/", date: "Active 2026" }
  ],
  "Jefferies": [
    { title: "2026 IT Analyst & Associate (Corporate Tech, NYC + Jersey City)", techs: "AI/ML, Cloud adoption, RPA, Data warehousing", url: "https://www.nablacareers.com/finance-jobs/jefferies/north-america/software-engineering-tech-data/2026-information-technology-analyst-and-associate-new-york-and-jersey-city-corporate/", date: "Active 2026" },
    { title: "Engineering & Tech — Open Roles (Equity Connectivity, NYC)", techs: "Equity research platform, Trading systems", url: "https://www.nablacareers.com/finance-jobs/jefferies/north-america/software-engineering-tech-data/2026-information-technology-analyst-and-associate-new-york-equity-connectivity/", date: "Active 2026" }
  ],
  "Walmart": [
    { title: "Senior Software Engineer — Machine Learning Platform", techs: "Triton Inference Server, Model serving, Kubernetes, Quantization", url: "https://careers.walmart.com/us/jobs/WD2000071-senior-software-engineer-machine-learning-platform", date: "Active 2026" },
    { title: "Senior Software Engineer (Machine Learning)", techs: "ML serving, Model optimization, Hardware-specific kernels", url: "https://careers.walmart.com/us/en/jobs/R-2167549", date: "Active 2026" },
    { title: "Senior Software Engineer (Machine Learning)", techs: "Container orchestration, Cloud ML platforms", url: "https://careers.walmart.com/us/en/jobs/R-2201213", date: "Active 2026" },
    { title: "Principal Software Engineer — Machine Learning", techs: "ML infrastructure, Distributed systems", url: "https://careers.walmart.com/us/jobs/WD1628366-principal-software-engineer-machine-learning", date: "Active 2026" },
    { title: "Principal Data Scientist", techs: "ML modeling, Production ML", url: "https://careers.walmart.com/us/en/jobs/R-2445876", date: "Active 2026" }
  ],
  "PayPal": [
    { title: "AI/ML Engineering — Open Roles", techs: "Real-time fraud inference, Sub-50ms latency, MLOps", url: "https://paypal.eightfold.ai/careers?query=AI&pid=274902809309", date: "Active 2026" },
    { title: "Machine Learning Engineer Intern (June 2026)", techs: "Production ML, Model training, Inference", url: "https://prosple.com/graduate-employers/paypal-usa/jobs-internships/machine-learning-intern", date: "Active 2026" }
  ],
  "Workday": [
    { title: "AI/ML Engineering — Illuminate AI Roles", techs: "LLMs, Knowledge graphs, Agentic AI, Personalization", url: "https://www.workday.com/en-us/company/careers/ai-machine-learning.html", date: "Active 2026" },
    { title: "Machine Learning Engineer", techs: "ML model deployment, Docker/K8s microservices, API platform", url: "https://www.moaijobs.com/job/machine-learning-engineer-workday-7354", date: "Active 2026" }
  ],
  "HubSpot": [
    { title: "AI Engineer (AIMS Martek, Remote)", techs: "LLMs, Multi-agent workflows, Cloud infrastructure", url: "https://www.glassdoor.com/job-listing/ai-engineer-aims-martek-hubspot-JV_KO0,23_KE24,31.htm?jl=1010065622764", date: "Active 2026" },
    { title: "Product & Engineering — Open Roles", techs: "Breeze AI platform, AI tooling", url: "https://www.hubspot.com/careers/product-ux-engineering/jobs", date: "Active 2026" }
  ],
  "Rivian": [
    { title: "Staff Machine Learning Engineer — Motion Planning, Autonomy", techs: "Perception, Planning, ADAS", url: "https://careers.rivian.com/careers-home/jobs/17252?lang=en-us", date: "Active 2026" },
    { title: "Staff AI/ML Engineer — Vehicle Software", techs: "Embedded ML, Vehicle AI integration", url: "https://careers.rivian.com/rivian-vw-group-technology/jobs/21516?lang=en-us", date: "Active 2026" },
    { title: "Sr. Machine Learning/AI Engineer", techs: "Quantization, Hardware-aware optimization, Operator fusion", url: "https://ev.careers/jobs/148717628-sr-machine-learning-ai-engineer", date: "Active 2026" },
    { title: "Staff Machine Learning/AI Engineer", techs: "ADAS perception, Real-time inference", url: "https://jobs.anitab.org/companies/rivian/jobs/67716632-staff-machine-learning-ai-engineer", date: "Active 2026" }
  ],
  "General Motors (Cruise)": [
    { title: "Staff ML Engineer — Inference Platform (Sunnyvale)", techs: "Model serving, Cloud-agnostic platform, AI Compute Platforms", url: "https://search-careers.gm.com/en/jobs/jr-202513651/staff-ml-engineer-inference-platform/", date: "Active 2026" },
    { title: "Senior ML Infrastructure Engineer — Inference Platform (Austin + 3 locations)", techs: "ML serving frameworks, High-performance backend, Go/Python/C++", url: "https://search-careers.gm.com/en/jobs/jr-202604629/senior-ml-infrastructure-engineer-inference-platform/", date: "Active 2026" },
    { title: "Staff AI/ML Engineer — Onboard Embodied AI (Mountain View)", techs: "On-vehicle AI, Embodied autonomy", url: "https://search-careers.gm.com/en/jobs/jr-202507695/staff-ai-ml-engineer-onboard-embodied-ai/", date: "Active 2026" },
    { title: "Staff ML Engineer — Embodied AI Onboard Autonomy (MV)", techs: "Onboard autonomy, Embodied AI", url: "https://search-careers.gm.com/en/jobs/jr-202508182/staff-ml-engineer-embodied-ai-onboard-autonomy/", date: "Active 2026" },
    { title: "Senior ML Engineer — Embodied AI Onboard Autonomy (MV)", techs: "On-vehicle inference, Real-time autonomy", url: "https://search-careers.gm.com/en/jobs/jr-202520125/senior-ml-engineer-embodied-ai-onboard-autonomy/", date: "Active 2026" }
  ],
  "Carta": [
    { title: "Senior Machine Learning Engineer I", techs: "LLM-powered pipelines, Document classification, Containerized prediction services", url: "https://peerlist.io/company/carta/careers/senior-machine-learning-engineer-i/jobha9naqjq6jg7eq1jo9aepaeknmg", date: "Active 2026" },
    { title: "Engineering — Open Roles (AI/ML, Platform)", techs: "ML infrastructure, Financial-data ML", url: "https://carta.com/careers/engineering/", date: "Active 2026" }
  ],
  "CrowdStrike": [
    { title: "Charlotte AI Engineer", techs: "Agentic AI, LangChain/LangGraph/AutoGen, RAG, Vector DBs", url: "https://www.glassdoor.com/job-listing/crowdstrike-charlotte-ai-engineer-openkyber-JV_KO0,33_KE34,43.htm?jl=1010084090704", date: "Active 2026" },
    { title: "AI Security Engineer (Georgia)", techs: "ML/AI projects, Agentic workflows, Production deployment", url: "https://www.indeed.com/viewjob?jk=073d98524d049213", date: "Active 2026" },
    { title: "Engineering & Technology — Open Roles", techs: "Distributed systems, Threat Graph, Charlotte AI", url: "https://www.crowdstrike.com/en-us/careers/engineering-technology-team/", date: "Active 2026" }
  ],
  "Plaid": [
    { title: "Senior ML Engineer — Data Foundation & AI (SF)", techs: "Distributed training, Low-latency serving, Embeddings, Foundation models", url: "https://plaid.com/careers/openings/engineering/san-francisco/senior-machine-learning-engineer-data-foundation-and-ai/", date: "Active 2026" },
    { title: "ML Engineer — Data Foundation & AI (NY)", techs: "Production ML/AI, Distributed systems, MLOps", url: "https://plaid.com/careers/openings/engineering/new-york/machine-learning-engineer-data-foundation-and-ai/", date: "Active 2026" },
    { title: "ML Engineer — Data Foundation & AI (SF)", techs: "Foundation model, Representation learning", url: "https://plaid.com/careers/openings/engineering/san-francisco/machine-learning-engineer-data-foundation-and-ai/", date: "Active 2026" },
    { title: "Senior Software Engineer — ML Infrastructure (NY)", techs: "ML serving, Production ML systems", url: "https://plaid.com/careers/openings/engineering/new-york/senior-software-engineer-ml-infrastructure/", date: "Active 2026" },
    { title: "Engineering Manager — ML Infrastructure (SF)", techs: "ML platform, Distributed training, Inference", url: "https://plaid.com/careers/openings/engineering/san-francisco/engineering-manager-machine-learning-infrastructure/", date: "Active 2026" },
    { title: "Staff ML Engineer — Credit (SF)", techs: "Credit decisioning, ML risk models", url: "https://plaid.com/careers/openings/engineering/san-francisco/staff-machine-learning-engineer-credit/", date: "Active 2026" }
  ],
  "SentinelOne": [
    { title: "Engineering & AI — Open Roles", techs: "Purple AI, GenAI threat hunting, Singularity Platform", url: "https://www.sentinelone.com/jobs/", date: "Active 2026" }
  ],
  "Gusto": [
    { title: "Staff Applied AI/ML Engineer", techs: "Production ML, Applied AI, Multi-region deployment", url: "https://job-boards.greenhouse.io/gusto/jobs/7065172", date: "Active 2026" },
    { title: "ML/AI Operations Engineer (NYC)", techs: "MLOps, Model deployment, Monitoring", url: "https://www.linkedin.com/jobs/view/ml-ai-operations-engineer-at-gusto-3745589184", date: "Active 2026" },
    { title: "Engineering — Open Roles", techs: "ML infrastructure, AI assistant (Gus)", url: "https://job-boards.greenhouse.io/gusto", date: "Active 2026" }
  ],
  "Brex": [
    { title: "Engineering — Open Roles", techs: "AWS Bedrock, Claude integration, LLMOps for finance", url: "https://www.brex.com/careers", date: "Active 2026" }
  ],
  "Hims & Hers": [
    { title: "Engineering — Open Roles", techs: "Telehealth ML, MedMatch, HIPAA-compliant inference", url: "https://www.hims.com/careers", date: "Active 2026" }
  ],
  "Sumo Logic": [
    { title: "Engineering — Open Roles (Dojo AI, GenAI Log Analytics)", techs: "Log anomaly detection ML, GenAI for MTTR reduction", url: "https://www.sumologic.com/company/careers", date: "Active 2026" }
  ],
  "Rippling": [
    { title: "Engineering — Open Roles", techs: "Employee Graph, AI automation, MLOps", url: "https://www.rippling.com/careers", date: "Active 2026" }
  ],
  "ABInBev": [
    { title: "Tech & Innovation — Open Roles", techs: "Smart Barley AI, Demand forecasting ML, Multi-region AI platforms", url: "https://www.ab-inbev.com/careers/", date: "Active 2026" }
  ],
  "Abbott": [
    { title: "Diagnostics & AI Engineering — Open Roles", techs: "Diagnostic imaging AI, FDA SaMD, Predictive maintenance ML", url: "https://www.jobs.abbott/", date: "Active 2026" }
  ],
  "Ford": [
    { title: "Latitude AI + Vehicle Tech — Open Roles", techs: "BlueCruise ADAS, Connected vehicle ML, Autonomy stack", url: "https://corporate.ford.com/careers.html", date: "Active 2026" }
  ],
  "Flatiron Health": [
    { title: "AI/ML & RWE Engineering — Open Roles", techs: "LLM-extracted real-world data, VALID Framework, Cancer progression ML", url: "https://flatiron.com/careers", date: "Active 2026" }
  ],
  "American Airlines": [
    { title: "Tech & AI Engineering — Open Roles", techs: "IROPs ML, Crew scheduling AI, Smart Gating, Azure AI/ML", url: "https://jobs.aa.com/", date: "Active 2026" }
  ]
};

/* ------------------------------------------------------------------ */
/*  RESIDENCY_MAP — Data Residency score (1-5) per company             */
/*  5 = inference clouds explicitly disqualified; 1 = no constraint    */
/* ------------------------------------------------------------------ */
const RESIDENCY_MAP = {
  "Walmart": { score: 3, reason: "Customer purchase data + supplier contract data are commercially sensitive but not regulated to the point of disqualifying inference clouds. Hyperscaler defaults work; Valar wins on cost/QoS not residency." },
  "ServiceNow": { score: 3, reason: "Customer enterprise data flows through Now Assist — privacy-sensitive but ServiceNow already runs Now LLM in their own DCs. Residency mandate moderate." },
  "UnitedHealth Group": { score: 5, reason: "PHI + HIPAA + CMS + member data. Director of Architecture interview confirms: tried Fireworks/Together/Baseten/Modal — none reached production due to security. Inference clouds structurally disqualified. BYOC seen as inevitable." },
  "Mastercard": { score: 5, reason: "PCI DSS + cardholder data + 150B+ annual transactions. Inference clouds cannot legally serve. Real-time fraud must run inside Mastercard environment." },
  "General Motors (Cruise)": { score: 4, reason: "Driving data multi-jurisdictional (state, EU, China). Manufacturing IP. Inference clouds limited to non-sensitive use cases." },
  "Capital One": { score: 5, reason: "OCC/FDIC bank regulation, customer financial data, AI risk management framework disclosures. Capital One's all-in-on-AWS posture is BYOC-style — they will resist multi-tenant inference." },
  "PayPal": { score: 4, reason: "PCI + global payment data. Has VPC + on-prem hybrid for sensitive fraud workloads. Inference clouds blocked for production fraud paths." },
  "Workday": { score: 4, reason: "Employee PII + financial data across HCM + Finance modules. Workday operates own DCs for sensitive workloads — BYOC-friendly posture." },
  "HubSpot": { score: 2, reason: "Customer CRM data is sensitive but mostly commercial — most customers tolerate inference cloud paths. Regulated subset (HIPAA-covered customers) is small." },
  "Rivian": { score: 3, reason: "Connected-vehicle telemetry + ADAS perception data. Multi-state residency rules. Burn-rate-conscious — cost wins over pure residency." },
  "Carta": { score: 5, reason: "Equity cap tables + financial data + SOC 2 contractual obligations. Inference clouds explicitly cannot serve cap-table/valuation workloads." },
  "Datadog": { score: 4, reason: "Customer observability data (logs, traces, metrics) flows through Bits AI — customer infrastructure data is restricted in many enterprise contracts." },
  "CrowdStrike": { score: 5, reason: "Customer threat telemetry + endpoint data + Falcon Threat Graph. Cyber data cannot touch shared inference. Charlotte AI runs in CrowdStrike controlled environment." },
  "Gusto": { score: 5, reason: "SSNs + compensation + benefits + tax data for SMB customers. SOC 2 + state payroll regs. Inference clouds disqualified." },
  "Plaid": { score: 5, reason: "Bank transaction data + CFPB 1033 + financial-data residency. Cannot send raw financial data to external inference providers — confirmed in Plaid engineering blog." },
  "Sumo Logic": { score: 4, reason: "Customer log + telemetry data, post-PE acquisition cost optimization mandate makes BYOC attractive. Customer contracts often require single-tenant." },
  "Hims & Hers": { score: 5, reason: "Telehealth PHI + HIPAA-compliant practices + SOC 2. Cannot use shared inference for treatment personalization. Inference clouds disqualified." },
  "Brex": { score: 4, reason: "Corporate card + financial data + PCI DSS. SOC 2 strict customer commitments. Currently uses Bedrock for LLM safety isolation; would benefit from full BYOC." },
  "SentinelOne": { score: 5, reason: "Customer endpoint + threat telemetry data. Cyber data cannot touch shared inference. Purple AI architecturally constrained to single-tenant." },
  "Rippling": { score: 5, reason: "Employee PII + payroll + IT identity + financial. Most regulated combo in HR/IT/Fin. Strict data governance across modules. BYOC native fit." }
};

/* ------------------------------------------------------------------ */
/*  PRIMARY_TEAM                                                       */
/* ------------------------------------------------------------------ */
const PRIMARY_TEAM = ['Alex Giles', 'Charles Holley', 'Gaby Lorenzi', 'Jason Gelman', 'Tobias', 'Ross', 'Cassie', 'Tanmaye', 'Ben', 'Hannah', 'Doug', 'Emily', 'Bridget', 'Shuman'];

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROW_SOURCES, SEGMENTS, CONTACT_MAP, COMPANY_SOURCES, RESIDENCY_MAP, JOB_LISTINGS, PRIMARY_TEAM };
}
