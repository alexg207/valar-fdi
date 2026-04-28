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
              ['Target Buyer', 'Infrastructure team within Walmart Global Tech — specifically the ML Platform and Cloud Infrastructure groups reporting to the SVP of Technology.'],
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
              ['Target Buyer', 'AI Platform Infrastructure team — the group responsible for serving Now Assist models across the platform. Luke Hagstrand (VP, Enterprise AI) is the ideal executive sponsor.'],
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
              ['Target Buyer', 'Optum Technology infrastructure team — specifically the AI/ML platform group. Srikanth Nittala and Mike Kramer are on Valar\'s existing contact list.'],
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
              ['Target Buyer', 'AI Platform Engineering team — the infrastructure group behind Decision Intelligence. Also the AI Garage innovation team for newer generative AI workloads.'],
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
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Lead with reliability and governance — Capital One needs inference infrastructure that meets OCC/FDIC AI governance requirements while scaling to handle every transaction and credit decision. Leverage the extensive Primary network to get multiple warm introductions.'],
              ['Key Evidence', '8 warm contacts across engineering and product. All-in on AWS creates single-cloud optimization opportunity. Growing generative AI investment (Eno upgrades). OCC AI governance requirements.'],
              ['Urgency Level', 'HIGH — Strong network, growing inference spend, regulatory pressure. Multiple entry points through Primary contacts.'],
              ['Target Buyer', 'ML Platform team — John Hinnegan (Senior Engineering Leader) or Vivek Gupta (Director, Distinguished Engineer) for technical evaluation. Jeff Chou (VP of AI/Head of Product) for executive sponsorship.'],
              ['Messaging Angle', 'Reliability first: "Enterprise-grade inference infrastructure that meets federal banking AI governance requirements." Cost efficiency second: optimize inference costs across fraud, credit, and Eno workloads on AWS.']
            ]
          },
          {
            title: 'Company Profile',
            rows: [
              ['Industry', 'Financial Services / Banking'],
              ['Revenue', '~$38B (FY2025)'],
              ['Employees', '~55,000'],
              ['Cloud Provider', 'AWS (all-in — first major US bank fully on public cloud)'],
              ['AI Maturity', 'Very advanced — extensive ML platform, real-time inference at scale, dedicated AI research teams, early adopter of generative AI in banking. Known industry-wide for tech-forward approach.']
            ]
          },
          {
            title: 'Inference Opportunity',
            rows: [
              ['Use Cases', 'Real-time fraud detection (every transaction), credit decisioning (every application), Eno AI assistant (millions of users), document understanding (OCR + NLP), anti-money laundering, personalized offers.'],
              ['Current Stack', 'AWS SageMaker for model serving, custom inference infrastructure, KServe-based deployment. Growing use of LLMs for Eno and generative features.'],
              ['Pain Points', 'OCC/FDIC AI governance requirements demand full auditability and control. Scaling generative AI (Eno upgrades) significantly increasing inference costs. Need to optimize across multiple model types (traditional ML + LLMs).'],
              ['Estimated Spend', '$100–200M annually on inference compute (estimated from technology headcount and AWS commitment)']
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
              ['Target Buyer', 'ML Platform team — Warren Zhang (Director of Engineering) for technical entry. Martin Brodbeck (SVP, Consumer Engineering) for executive sponsorship.'],
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
              ['Target Buyer', 'Cloud Infrastructure and AI Platform teams — need to identify the VP of Infrastructure or AI Platform lead.'],
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
              ['Target Buyer', 'AI Platform / Infrastructure team — Asher Eastham (Technical Lead) for warm introduction. Need to identify the engineering VP responsible for AI infrastructure.'],
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
              ['Target Buyer', 'Cloud Infrastructure or ML Platform team — need outbound identification of the right technical leader.'],
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
        subtitle: 'Actually in Valar\'s pipeline — equity management platform that cannot send sensitive cap table data to third-party inference APIs',
        tier: 'high',
        tags: [
          { t: 'Fintech', c: 'neutral', tip: 'Equity management and valuation platform' },
          { t: 'AWS', c: 'stack', tip: 'AWS primary cloud provider' },
          { t: 'In Pipeline', c: 'oss', tip: 'Active conversations with Valar ongoing' },
          { t: 'SOC 2 Type II', c: 'hw', tip: 'Strict compliance requirements for financial data' },
          { t: 'AI Document Parsing', c: 'stack', tip: 'Using AI for equity document processing' }
        ],
        overview: 'Carta is already in Valar\'s active pipeline, making this the highest-conviction mid-market opportunity. As the leading equity management platform, Carta handles extremely sensitive financial data — cap tables, 409A valuations, equity grants — that absolutely cannot be sent to third-party inference APIs. They\'ve been launching AI features for document parsing, valuation modeling, and equity plan optimization, all of which require inference on sensitive financial data. The combination of active pipeline status, clear data sensitivity requirements, and growing AI investment makes this the top priority in the mid-market segment.',
        sections: [
          {
            title: 'GTM Strategy',
            rows: [
              ['Approach', 'Continue active pipeline engagement. Emphasize that Valar\'s in-cloud deployment means Carta\'s sensitive equity data never leaves their AWS environment. Focus on enabling AI features they currently cannot build due to data sensitivity constraints.'],
              ['Key Evidence', 'Active pipeline — Valar is already in conversations. SOC 2 Type II compliance requirements. Cap table and 409A data is among the most sensitive financial information.'],
              ['Urgency Level', 'HIGHEST — Already in pipeline. Priority is to close, not to generate interest.'],
              ['Target Buyer', 'Already engaged — continue with current contacts. Infrastructure and AI/ML teams.'],
              ['Messaging Angle', 'Reliability first: "Production-grade inference in your own AWS — your clients\' equity data never leaves your environment." Cost efficiency second: optimize inference costs as AI features scale across your customer base.']
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
              ['Target Buyer', 'AI/ML Infrastructure team — the group responsible for serving Bits AI models. Also the bare metal infrastructure team for optimization across their data plane.'],
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
              ['Target Buyer', 'Cloud Infrastructure and AI Platform teams — the engineering groups behind Charlotte AI and the Threat Graph data platform.'],
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
              ['Target Buyer', 'AI Platform / Infrastructure team — the engineering group behind Purple AI inference serving. Also cloud infrastructure team for overall optimization.'],
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
/*  PRIMARY_TEAM                                                       */
/* ------------------------------------------------------------------ */
const PRIMARY_TEAM = ['Alex Giles', 'Charles Holley', 'Gaby Lorenzi', 'Jason Gelman', 'Tobias', 'Ross', 'Cassie', 'Tanmaye', 'Ben', 'Hannah', 'Doug', 'Emily', 'Bridget', 'Shuman'];

/* ------------------------------------------------------------------ */
/*  Exports                                                            */
/* ------------------------------------------------------------------ */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ROW_SOURCES, SEGMENTS, CONTACT_MAP, PRIMARY_TEAM };
}
