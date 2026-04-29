# Valar FDI — Full Context Dump

Generated: 2026-04-28 · Updated 2026-04-29 with PVP V Memo
Sources: Slack (group DM, 1:1 DMs, #valar-fdi channel), Granola transcript, Google Sheets, **Valar PVP V Memo (Brian Schechter + Gaby Lorenzi, 4/29/2026)**

---

## What Valar Does

**One line (from memo):** Bring-your-own-cloud (BYOC) inference optimization platform.

Aim: **"Databricks of inference."** Installs in customer's own cloud as orchestration + optimization layer above open-source serving engines (vLLM, SGLang, TRT-LLM). Dynamically routes workloads to cheapest available compute (NVIDIA, AMD, Trainium, TPU) that meets SLO. Kernel-level optimizations per model + hardware. **Claims: 50–80% lower inference cost without data leaving customer environment.**

Expansion path: cost/reliability wedge → batch/agentic workload scheduling → workflow orchestration → multi-pipeline governance → centralized cost dashboards. Goal = full enterprise AI control plane.

**Stealth.** No public web presence, no Crunchbase, no press coverage.

## Round + Investment

- **$20M round** at **$70M post-money valuation**
- Primary investing **$10M for 14% ownership**
- 5 term sheets active
- PVP point: **Brian Schechter**

## Team

- **Tom Amsterdam** (CEO, NYC) — Israeli PMO strategic ops → CPO/COO at Granulate (sold to Intel for $650M) → CEO of MethodIQ ($0 → $50M ARR sales-led enterprise motion)
- **Ron Gruner** (CTO, Israel) — built Granulate runtime optimization engine from scratch as VP R&D, carried through Intel acquisition. Comes out of **Unit 8200 Aram program** (elite low-level systems R&D). Owns the differentiated tech: QoS engine, SLO-aware scheduler, workload profiler, runtime optimizer, capacity orchestrator.
- **6 ex-Granulate engineers** committed to join post-raise
- **Granulate playbook is the model:** runtime optimization wedge → infrastructure control plane → co-sell with cloud providers

## The Valar Bet (explicit ICP qualifier)

Enterprises running **>$1.5M annual inference spend** will pay **$150K–$800K+ ACV** to run inside their own cloud with lower cost, faster speed, SLO met.
- **Mid-market land:** $150K ACV
- **Enterprise expand:** $800K+ ACV
- **Expansion:** per-token pricing as more workloads run through platform

## Real Pipeline (per memo, NOT speculative)

**Design partners (signed):**
- BigPanda
- Varonis

**Pipeline (named in memo):**
- ABInBev, Qualcomm, Jefferies, Mobileye, Abbott, Ford, Flatiron, American Airlines

**Upcoming Primary FDI calls:** Databook, New York Times, Shutterstock

**40 potential customers chatted with to date.**

## Market Context (memo)

- Inference market: **$100B (2026) → $255B (2030)**
- **40% of data center workloads will be inference by 2030** (vs 20% today)
- Three generations of inference complexity in 3 years: prompt/response → reasoning models (10–50x token consumption) → mixture-of-experts (3–5x cost variance based on infra fit)
- Agentic workloads = orders of magnitude more compute per task

## Competitive Landscape (memo)

| Category | Players | Why they fail |
|----------|---------|---------------|
| **Hyperscalers** | AWS Bedrock, GCP Vertex, Azure AI Foundry | No SLO, opaque cost, quota limits, no cross-cloud, regional model gaps. Win regulated by default, not on merit |
| **Inference clouds** | Fireworks ($315M ARR, $4B val), Together ($300M ARR, $3.3B val, has VPC), Baseten, Modal, Groq, Cerebras | Multi-tenant data co-mingling, can't clear regulated compliance. NVIDIA supply constraints passed through. Only Together has VPC option |
| **GPU clouds** | Crusoe, Coreweave, Nebius | Own hardware + sell compute, different model |
| **DIY** | vLLM/SGLang on own K8s | Needs 4–8 MLOps engineers, fragmented capacity, no SLO, every traffic spike = fire drill. **Inferact** (vLLM productized) is direct competitor — Omer says Tom's approach stronger |

**Startups to monitor:** Contextual, Poetiq

## Key Risks (memo)

1. **Customer not ready** — inference demand hasn't exploded for them yet
2. **Middleware risk** — sitting on hyperscalers, hyperscalers may build BYOC themselves (memo argues they won't because it cannibalizes managed compute revenue)
3. **Inference clouds pivot to BYOC** — Together already has VPC deployment

## Buyer Insights (memo appendix)

### From UnitedHealth Group, Director of Architecture
- **Currently on:** GCP Vertex AI + Azure for production. RAG-based benefits queries (Medicare, Medicaid, commercial)
- **Tried:** Fireworks, Together, Baseten, Modal — **none reached production** due to security
- **Hyperscaler pain:** opaque cost, model deprecations break HIPAA pipelines, cold start latency at peak, GCP vendor lock-in, multi-region compliance hell
- **Sees BYOC + VPC peering as inevitable** — "data never leaves the firewall"
- UHG isn't there yet but will be at next cost/scale inflection

### From Andrew Wiggin (founding AE, Fireworks)
- **AI-native customers** = fast cycles, low-quality revenue
- **Digital natives + enterprise** = long cycles, strategic
- ⚠️ **CRITICAL: ML engineering teams are antagonists** — they see inference vendors as threat to their role
- **Real buyer = platform engineering OR security/compliance function**, NOT ML eng
- GPU shortages pushing enterprises toward inference providers as GPU aggregators (hyperscalers stocked out)
- "Performance claims aren't durable differentiation — need a problem statement where 90% of buyers immediately say yes"

### From Het Trivedi (ex-FDE, Baseten — bearish)
- **Data gravity** keeps workloads on hyperscaler
- Real competition = AWS/GCP/Azure, not other inference startups
- Only reason enterprises switch = **cost**
- **Switching cost is high**
- "Databricks for inference" positioning is overused, space is underdifferentiated

### From Anupreet Walia (VP Eng, Baseten)
- **Hard problems** in agentic infra: inference routing, data locality across calls, state management across heterogeneous hardware
- These need forward-deployed engineering, not just a platform
- **First 2–3 customers define PMF** — Valar's design partners (BigPanda, Varonis) are the test

## Investment Thesis (memo)

1. Tom + Ron's Granulate experience = right team for this product
2. **BYOC is largely unmet** by existing players
3. Time is now — enterprise inference scaling but staying in own cloud

## Gotta Believes (memo)

1. NOW is the moment enterprises need BYOC/multi-cloud inference (driven by data residency, compliance, cost predictability, agentic workloads)
2. Hyperscalers + GPU clouds **won't** build BYOC cross-accelerator control plane (cannibalizes their compute revenue)
3. Valar can deliver jaw-dropping CX with minimal friction to value, drives cost down, creates lock-in

## How Valar Came to Primary

- Gaby was doing diligence with **Omer (CTO of Atero)** about Lucas's company
- Omer redirected: "Don't look at Lucas's business. Look at Valar."
- Original inference dashboard Charles built was for **Lucas/Zhijian's team** — different founders
- Valar founder is **Tom** ("Amsterdam Tom", email: amsterdam.tom@gmail.com)

## Market Segmentation

- **Neo clouds / inference providers** (Baseten, Modal, Together, etc.) = **competitors**
- **AI natives** (Perplexity, Decagon, etc.) = **potential customers** (stretch/long-term)
- **Non-AI-native enterprises** = **primary ICP** (near-term)

## Valar's ICP (Two Stages)

### Stage 1 — Mid-Market (NOW, design partnerships)
Data-sensitive, easier to convert:
- Cybersecurity companies
- Infrastructure companies (logs/monitoring/production management)
- Healthcare startups
- Fintech (CARTA specifically in pipeline)
- HR companies doing batch/agentic inference
- Companies that are regulated or have proprietary data concerns
- "Not AI-native" — growing inference spend but not cloud-native AI companies

### Stage 2 — Large Enterprise (LATER, needs product maturity)
- Top 10 insurance, top 10 finance
- Document processing, embeddings, summarization, lead enrichment
- Bank of America, Mastercard-tier companies
- Walmart, ServiceNow, UnitedHealth Group, GM/Cruise, Capital One, PayPal, Workday, HubSpot, Rivian

## Buyer Personas & Messaging

**Best targets (ranked):**
1. Infrastructure teams (MOST receptive)
2. AI teams
3. Data teams (some fingerprints)
4. NOT security/governance teams

**Messaging angles (ranked):**
1. Reliability, capacity, quality of service (MOST effective)
2. Cost efficiency / cost reduction
3. Scalability to support growth

AI teams care less about cost, more about reliability/scale.

## Key People

| Person | Role | Notes |
|--------|------|-------|
| Tom ("Amsterdam Tom") | Valar founder | amsterdam.tom@gmail.com |
| Lucas | Original founder (different company) | Charles built dashboard for him originally |
| Zhijian | Original co-founder with Lucas | Dashboard was for their team first |
| Omer | CTO of Atero | Referred Gaby to Valar |
| Gaby Lorenzi | Primary VC (deals/investment) | Leading the Valar FDI effort, currently OOO in Paris |
| Charles Holley | Primary VC (GTM eng) | Built inference market map, syncing with Alex |
| Alex Giles | Primary VC (GTM eng) | You — demoed to Tom on 4/24, building v2 |
| Jason Gelman | Primary VC | In #valar-fdi channel |
| Brian | Primary VC | In #valar-fdi channel |

## Meeting: Valar / Primary GTM (4/24/2026, 4:30 PM)

**Attendees:** Alex Giles, Gaby Lorenzi, Tom (Valar)

### What Was Covered
1. **Alex intro** — Explained Primary GTM team: two pillars (top-of-funnel sales + GTM engineering). Mentioned Plural/Capital One/Palo Alto Networks success stories. Explained Clay/Lemlist stack, always-on signals, intelligence hubs.

2. **Tom's ICP deep dive:**
   - Stage 1 (now): Mid-market, data-sensitive. Cyber, infra, healthcare, fintech, HR.
   - Stage 2 (later): Top 10 insurance/finance, regulated industries.
   - CARTA in pipeline as Stage 1 example.
   - Targeting AI teams and infrastructure teams (infra most receptive).
   - Best angles: reliability/QoS > cost > scalability.

3. **Dashboard demo** — Alex walked through Charles's inference market map:
   - Competitor intelligence: inference stack, hiring signals, blog content, Primary network contacts
   - Customer intelligence: model serving, foundation models, vector DB, code execution
   - Network mapping: LinkedIn connections overlaid
   - Showed Baseten and Perplexity as examples
   - Covered both neo cloud (competitor) and AI native (customer) sections

4. **Next steps agreed:**
   - Gaby sending handful of potential customer intros over weekend
   - Primary to build full customer intelligence platform based on Valar's ICP
   - Focus on non-AI-native companies

### Tom's Exact Quotes on ICP
- "We see our ICP as a two step approach. We have our target market that we want to nail. But we understand those are the second stage with higher maturity product."
- "First stage... those are like the design partnerships... companies that are in the mid market, have data sensitivity, are easier to convert"
- "Most receptive were infrastructure teams... Best angle was reliability, capacity, quality of service, second angle was cost efficiency"

## Deliverable: V2 Dashboard (Due Wed 4/30 at 3:30 PM)

From Gaby in #valar-fdi (4/27):
- Identify 20-30 companies in initial + stretch ICP (10 stretch already in spreadsheet)
- For ~10 companies in initial ICP, build out dashboard with their data
- Deliver to Tom Wednesday EOD
- Valar coming in Wednesday at 3:30 PM
- Still doing diligence calls Monday and Wednesday

Charles said: "Alex let's sync on this tomorrow morning" (Monday 4/28 — today)

Gaby: "I think the first task is just the company list generation based on his ICP and then to gather the data on them"

## Key Documents & Links

| Resource | URL |
|----------|-----|
| Inference market map (v1) | https://inference-market-map.vercel.app/ |
| Valar FDI dashboard (v2) | https://valar-fdi.vercel.app |
| Valar Outbound spreadsheet | https://docs.google.com/spreadsheets/d/1mWyMzJhr3GGQanvxNz7CJwP81y-L5ZYoYmSpl-fZjq4/ |
| FDI briefing doc | fdi-briefing.docx (shared by Charles in DMs, file ID: F0AV8EV7KEY) |
| Granola transcript | https://notes.granola.ai/t/c407ef50-eca3-44d2-909e-1a38b0800e42-009c2hma |
| GitHub repo | https://github.com/alexg207/valar-fdi |
| Slack channel | #valar-fdi (C0B05EQV7SS) |
| Group DM | C09JDT426KA (Alex, Charles, Gaby) |

## Spreadsheet Data: Valar's 10 Target Companies (Stretch ICP)

All marked "Valar pick":
1. Walmart
2. ServiceNow
3. UnitedHealth Group (contact: Srikanth Nittala)
4. Mastercard
5. General Motors (Cruise)
6. Capital One
7. PayPal
8. Workday
9. HubSpot
10. Rivian

## Spreadsheet Data: Outbound Prospects (30 contacts)

| Name | Company | Title | Email | LinkedIn |
|------|---------|-------|-------|----------|
| David Justus | Panasonic Well | Head of AI and Data Platform | david@enovum.net | /in/davidjustus/ |
| Steve Sarkisian | LA Times | Senior Director, Architecture & Infrastructure | steve.sarkisian@gmail.com | /in/steve-sarkisian/ |
| Courtney Totten | Shutterstock | CTO | courtney.totten@shutterstock.com | /in/courtneytotten/ |
| Ram Rai | JPMorgan | Vice President, Platform Engineering | ram.rai@logisutra.com | /in/irnlogic/ |
| Sadeq Zabihi | DocuSign | Senior Director of Engineering | zabihi.sadeq@gmail.com | /in/sadeqzabihi/ |
| Frank Wittkampf | Databook | Vice President, Applied AI | frank.wittkampf@databook.com | /in/wittkampf/ |
| Nick Hardy | Ro | Vice President of Data | hardy@ro.co | /in/nick-hardy/ |
| Courtney Malone | Visa | Senior Director, Architecture | courtney@courtneymalone.com | /in/courtneyrmalone/ |
| Ratnik Gandhi | Florida Blue | Senior Director, AI | ratnik.gandhi@gmail.com | /in/ratnik/ |
| Brad Chivukula | Guardant Health | Vice President, Software Engineering | bharadwajc@gmail.com | /in/bharadwajc/ |
| Greg Bates | Coca-Cola | VP of AI | g.bates1991@gmail.com | /in/gregory-bates-56393279/ |
| Kevin Evans | Nordstrom | SVP, Platform & Data | kevin.evans@gmail.com | /in/kevin-evans/ |
| Velu Sekkilar | Experian | Vice President, Platform Architecture & Engineering | velu.sekkilar@gmail.com | /in/velu-sekkilar/ |
| Peter Smulovics | Morgan Stanley | Executive Director | peter.smulovics@morganstanley.com | /in/smulovicspeter/ |
| Guy Sayar | Barclays | Head of Engineering & Architecture | guy.sayar@gmail.com | /in/sayar/ |
| Jake McGraw | Global Payments | VP of Engineering | jmcgraw1@gmail.com | /in/jakemcgraw/ |
| Dani Matzlavi | Blackhawk Network | VP of Engineering | matzlavi@gmail.com | /in/danimatzlavi/ |
| Mike Kramer | UnitedHealth Group | Director of Engineering | kramer240@gmail.com | /in/michael-kramer-01259a23/ |
| Surendar Nagarajan | Finastra | Director of Development Operations | surendarn20@gmail.com | /in/surendar-nagarajan-15412317/ |
| Matthew Gardner | Morgan Stanley | Executive Director | matthewrobertgardner@gmail.com | /in/matthew-gardner-9a83632/ |
| Vinh Tran | RBC | Head of Cloud Engineering and Distinguished Engineer | vinh.tran@westabbey.ca | /in/vinh-tran-1721a121/ |
| Khozema Ujjainwala | ServiceTitan | Senior Director of Engineering (Platformization) | kujjainwala@servicetitan.com | /in/khozy/ |
| Gregg Altschul | FanDuel | Vice President of Engineering | gregg.altschul@fanduel.com | /in/gregg-altschul/ |
| Boris Nossovskoi | CIBC | Director of Cloud and Delivery | boris.nossovskoi@gmail.com | /in/boris-nossovskoi-508a1a3/ |
| Peter Kashou | Cruise | Vice President of Infrastructure | pkashou@gmail.com | /in/peterkashou/ |
| Tomasz Uscinski | Proctor & Gamble | Director of Cloud Hosting and Kubernetes Platform | utomek@gmail.com | /in/tomasz-uscinski-9832b11/ |
| Joey Adarkwah | NYT | Head of Core Platforms Engineering | joey@adarkwah.com | /in/joeyadarkwah/ |
| Ted Lifset | JPMorgan | Senior Director of Engineering | tslifset@yahoo.com | /in/tedlifset/ |
| Stephen Burrows | MSCI Inc. | Executive Director, Platform Engineering & DevOp Tooling | stephen.m.burrows@gmail.com | /in/stephenmburrows/ |
| Nandakumar Umapathy | NY Life Insurance | Corporate Vice President, Cloud Platform & DevOps | u.nandakumar@gmail.com | /in/nandakumar-umapathy-402a898/ |

## Spreadsheet Data: Primary Network Connections into Target Companies

| Contact | Company | Title | LinkedIn | Primary Connection |
|---------|---------|-------|----------|-------------------|
| Warren Zhang | PayPal | Director of Engineering | /in/warren-zhang-95a79610 | Alex |
| Vivek Gupta | Capital One | Director, Distinguished Engineer | /in/vivek-gupta-7b188018 | Alex |
| John Hinnegan | Capital One | Senior Engineering Leader | /in/johnhinnegan | Ben, Gelman |
| Asher Eastham | HubSpot | Technical Lead | /in/ashereastham | Bridget |
| Cian Brassil | ServiceNow | Senior Staff Product Manager, AI | /in/brassil | Cassie |
| Jason Burks | Capital One | Senior Director of Software Engineering | /in/jason-burks | Charles |
| Ryan McCaffrey | Capital One | Lead AI Engineer | /in/ryanpmccaffrey | Doug |
| Radford Tam | Capital One | Senior Engineering Manager, Platform Enablement | /in/radfordtam | Emily |
| James P. Kennedy | Capital One | Head of TPM, Bank Modernization Lead | /in/jamespkennedynyc | Gaby |
| Bhuvaneswari Shanmugam | PayPal | Sr Software Engineering Manager | /in/bhuvaneswari-shanmugam-2b3b9275 | Gelman |
| Jeff Chou | Capital One | VP of AI / Head of Product | /in/jeffchoumit | Hannah |
| Nariman Madani | Cruise | Staff Machine Learning Engineer | /in/nariman-madani | Ross |
| Yesudason Paulraj | Walmart | Group Director of Software Engineering | /in/ypaulraj | Ross |
| Gurinder Singh | PayPal | Staff Software Engineer | /in/gurinder-singh-a30a1a48 | Shuman |
| Naghmana Majed | Cruise | Head of AI Product Engineering | /in/naghmana | Shuman |
| Lawrence Osai | ServiceNow | Principal Product Manager, AI Platform Security & Privacy | /in/lawrence-osai-85ba8b71 | Tanmaye |
| Luke Hagstrand | ServiceNow | VP, Enterprise AI | /in/luke-hagstrand | Tanmaye |
| Niel Teng Hu | Cruise | Senior Machine Learning Engineer II | /in/tenghu | Tanmaye |
| Trina Leung | Capital One | AI/ML Platform Product Manager | /in/trina-leung | Tanmaye |
| Martin Brodbeck | PayPal | SVP, Head of Consumer Engineering | /in/martinbrodbeck | Tobias |

## Slack Timeline (Key Events)

| Date | Event |
|------|-------|
| 4/7 | Group DM created for Tabs warm intro work (earlier project in same channel) |
| 4/24 ~1:00 PM | Charles creates group DM, shares inference market map + briefing doc |
| 4/24 ~1:08 PM | Gaby explains Valar — Omer/Atero referral, software layer, ICP |
| 4/24 ~3:11 PM | Gaby asks Alex to chat at 4pm for impromptu meeting with Tom |
| 4/24 ~3:26 PM | Gaby shares run of show for meeting |
| 4/24 ~3:30 PM | Charles confirms Baseten/Perplexity as good demo companies |
| 4/24 ~4:16 PM | Alex asks clarifying Q: are dashboard companies customers or competitors? |
| 4/24 ~4:21 PM | Gaby clarifies: inference providers = competitors, AI natives = customers |
| 4/24 4:30 PM | Meeting with Tom (Valar / Primary GTM) |
| 4/24 ~4:49 PM | Post-meeting celebration. Gaby: "WOOHOOO GREAT STUFF ALEX!" |
| 4/24 ~4:54 PM | Gaby asks about v2 dashboard with Tom's ICP companies by Wednesday |
| 4/24 ~5:00 PM | Gaby shares Valar Outbound spreadsheet with 10 target companies |
| 4/24 ~6:00 PM | Gaby asks about Plural intro to Capital One (Jason Burks via Charles) |
| 4/25 ~9:50 AM | Gaby decides to route Capital One intro through Sam |
| 4/27 ~7:11 PM | Gaby creates #valar-fdi channel |
| 4/27 ~7:14 PM | Gaby scopes deliverable: 20-30 companies, dashboard for ~10, due Wed EOD |
| 4/27 ~7:20 PM | Gaby links Granola transcript for ICP reference |
| 4/27 ~7:20 PM | Charles: "Alex let's sync on this tomorrow morning" |

## Additional Context from Charles 1:1 DMs

- Charles built the inference dashboard originally for Lucas/Zhijian (not Tom)
- Charles flagged: "The main flag in the briefing doc is that the founder you'd potentially be meeting isn't Lucas or Zhijian"
- Charles prepped Alex: "Feeling good about the dashboard? The signals should all have links, the job postings specifically should route to Sumble"
- Post-meeting Charles: "I know the dashboard was not 100% the right fit for this use case so I appreciate you making it work"
- Charles asked about next steps: rebuilding dashboard to be more relevant to Valar's business
- Charles + Joe also doing separate FDI for cyber deal (meeting founders Tuesday)
- Charles and Alex discussing building Google Drive folders for every project
- Charles has data in Obsidian, setting up agents to auto-ingest Granola calls

## Other Active FDI Efforts (Context)

- **Zero** — materials for meeting on Monday 4/27. Nick sent materials. Gelman and Cassie joining.
- **Cyber deal** — Charles + Joe doing FDI, meeting founders Tuesday
- **Dandelion** — Joe doing similar work
