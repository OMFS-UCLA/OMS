import Link from "next/link";
import { notFound } from "next/navigation";
import {
  slugifySegment,
  subtopicContent,
} from "../../components/subtopicData";
import ReactMarkdown from "react-markdown";
import { loadGeneratedChapter } from "@/app/lib/generatedContent";

function buildDefaultDetails(subtopicTitle, chapter, nextChapter) {
  return {
    duration: "18-25 min",
    level: "Foundational",
    tags: [subtopicTitle, "Clinical Recall", "Board Prep"],
    progress: 40,
    objectives: [
      `Differentiate the core mechanisms in ${chapter.title.toLowerCase()}.`,
      `Apply high-yield concepts from ${chapter.title.toLowerCase()} to case-based reasoning.`,
      "Connect foundational science to OMFS clinical decisions.",
    ],
    pearl:
      "When you're stuck, anchor your answer to function first, then structure, then pathology.",
    rapidMapTitle: `${chapter.title} (rapid map)`,
    rapidMapNotes: chapter.desc,
    clinicalConnection:
      "Clinical connection: use this framework to structure oral exam reasoning and perioperative planning.",
    resources: ["Express Review PDF", "Resident Note Sheet", "Practice MCQs"],
    quickCheck: [
      "Which statement is most accurate for this topic?",
      "What is the highest-yield concept for exams?",
      "Which mechanism links this topic to OMFS care?",
    ],
    nextTopic: nextChapter?.title || "Return to Basic Sciences",
  };
}

const chapterOverrides = {
  "cell-biology/cell-structure-and-organization": {
    duration: "18-25 min",
    level: "Foundational",
    tags: ["Cell Biology", "Anatomy of the Cell", "Boards"],
    progress: 40,
    objectives: [
      "Differentiate major eukaryotic organelles and their core functions.",
      "Explain how cytoskeletal elements support shape, transport, and motility.",
      "Connect ECM and junction biology to healing and disease.",
    ],
    pearl:
      "When questions feel similar, ask: Which organelle failure best explains the phenotype?",
    rapidMapTitle: "Organelles (rapid map)",
    rapidMapNotes:
      "Membrane systems, nucleus, mitochondria, cytoskeleton, and extracellular matrix at a glance.",
    clinicalConnection:
      "Clinical connection: mitochondrial dysfunction and cytoskeletal disruption can directly affect healing and tissue resilience.",
    resources: [
      "Express: Cell Structure Review",
      "Resident Flashcards",
      "Annotated Cell Atlas",
    ],
    quickCheck: [
      "Which organelle is primarily responsible for ATP production?",
      "What cytoskeletal filament is dominant in intracellular transport?",
      "Which adhesion structure anchors cells to extracellular matrix?",
    ],
    nextTopic: "Cell Membrane & Transport",
  },
  "inflammation-healing/chronic-inflammation": {
    duration: "22-30 min",
    level: "Intermediate",
    tags: ["Inflammation and Healing", "Pathology", "Board Prep"],
    progress: 55,
    objectives: [
      "Differentiate persistent triggers that sustain chronic inflammation.",
      "Recognize cellular mediators driving tissue injury and remodeling.",
      "Connect chronic inflammation mechanisms to OMFS healing outcomes.",
    ],
    pearl:
      "Chronic inflammation persists when the trigger is not removed and repair signals become maladaptive.",
    rapidMapTitle: "Chronic Inflammation (rapid map)",
    rapidMapNotes:
      "Persistent stimulus -> macrophage and lymphocyte recruitment -> mediator release -> tissue destruction and fibrosis.",
    clinicalConnection:
      "Clinical connection: unresolved inflammation can delay wound closure, increase fibrosis, and worsen postoperative outcomes.",
    resources: [
      "High-Yield Inflammation PDF",
      "Resident Quick Notes",
      "Case-Based MCQs",
    ],
    quickCheck: [
      "Which cell type most strongly drives chronic inflammatory signaling?",
      "How does persistent cytokine release affect tissue architecture?",
      "What clinical findings suggest fibrosis-dominant remodeling?",
    ],
    nextTopic: "Mediators of Inflammation",
  },
  "inflammation-healing/mediators-of-inflammation": {
    duration: "20-28 min",
    level: "Intermediate",
    tags: ["Inflammation and Healing", "Mediators", "Clinical Recall"],
    progress: 50,
    objectives: [
      "Differentiate key inflammatory mediators and their primary effects.",
      "Understand how mediator cascades amplify tissue response.",
      "Apply mediator pathways to OMFS postoperative inflammation patterns.",
      "Connect mediator signaling to resolution versus chronicity outcomes.",
    ],
    pearl:
      "When analyzing inflammation, identify the trigger first, then map the dominant mediators and target cells.",
    rapidMapTitle: "Mediators of Inflammation (rapid map)",
    rapidMapNotes:
      "Trigger -> mediator release (histamine, prostaglandins, cytokines) -> vascular/cellular response -> tissue outcomes.",
    clinicalConnection:
      "Clinical connection: mediator profiling helps predict swelling intensity, pain trajectory, and risk of delayed resolution.",
    resources: [
      "Mediator Pathway Cheat Sheet",
      "Resident Summary Notes",
      "Clinical Scenarios Pack",
    ],
    quickCheck: [
      "Which mediator most rapidly increases vascular permeability?",
      "How do prostaglandins influence pain and fever signaling?",
      "Which cytokines are associated with chronic inflammatory drift?",
    ],
    nextTopic: "Phases of Wound Healing",
  },
  "inflammation-healing/impaired-healing": {
    duration: "24-32 min",
    level: "Clinical",
    tags: ["Inflammation and Healing", "Healing Risks", "Clinical Recall"],
    progress: 62,
    objectives: [
      "Identify major local and systemic causes of impaired healing.",
      "Recognize ischemia, infection, and inflammation imbalance patterns.",
      "Connect delayed healing findings to OMFS treatment planning.",
    ],
    pearl:
      "If healing is delayed, evaluate perfusion, bioburden, and host systemic factors first.",
    rapidMapTitle: "Impaired Healing (rapid map)",
    rapidMapNotes:
      "Trigger persistence + poor perfusion + systemic burden -> delayed granulation and remodeling.",
    clinicalConnection:
      "Clinical connection: early detection of impaired healing patterns improves timing of debridement, antimicrobial strategy, and follow-up intervals.",
    resources: [
      "Healing Risk Checklist",
      "OMFS Wound Protocol",
      "Delayed-Healing Cases",
    ],
    quickCheck: [
      "Which factor most strongly limits oxygen delivery to tissue?",
      "How does infection alter wound progression phases?",
      "Which systemic conditions most increase delayed healing risk?",
    ],
    nextTopic: "Healing in OMFS",
  },
  "inflammation-healing/healing-in-omfs": {
    duration: "20-30 min",
    level: "Clinical Application",
    tags: ["Inflammation and Healing", "OMFS", "Clinical Integration"],
    progress: 72,
    objectives: [
      "Integrate healing biology into OMFS perioperative planning.",
      "Recognize early signs of delayed healing and intervention thresholds.",
      "Apply inflammation-resolution principles to postoperative follow-up.",
    ],
    pearl:
      "Professional wound care in OMFS is proactive: identify risk early, optimize local environment, and reassess frequently.",
    rapidMapTitle: "Healing in OMFS (rapid map)",
    rapidMapNotes:
      "Risk stratification -> operative planning -> postoperative surveillance -> targeted intervention -> recovery optimization.",
    clinicalConnection:
      "Clinical connection: structured healing pathways reduce complications, improve patient recovery, and support predictable outcomes.",
    resources: [
      "OMFS Healing Protocol",
      "Postoperative Monitoring Checklist",
      "Complication Escalation Guide",
    ],
    quickCheck: [
      "Which postoperative signs suggest healing delay instead of normal inflammation?",
      "How should perfusion and infection risk modify follow-up timing?",
      "When is early intervention preferred over watchful waiting?",
    ],
    nextTopic: "Return to Inflammation and Healing",
  },
};

function ChronicInflammationLayout({
  subtopic,
  subtopicData,
  chapter,
  chapterImage,
}) {
  const generated = loadGeneratedChapter(subtopic.slug, chapter.slug); //*NEW
  const chapterItems = subtopicData.chapters.map((item) => ({
    ...item,
    slug: slugifySegment(item.title),
  }));
  const relatedTopics = chapterItems.filter((item) => item.title !== chapter.title).slice(0, 4);
  const sideRelated = relatedTopics.slice(0, 2);
  const cardRelated = relatedTopics.slice(2, 4);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(14,165,233,0.12),transparent_32%),linear-gradient(180deg,#fbfdff_0%,#f4f7ff_52%,#eef4ff_100%)] pb-14">
      <div className="border-b border-white/70 bg-white/45 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm font-medium text-slate-500">
          <Link href="/basic-sciences" className="hover:text-slate-800">Basic Sciences</Link>
          <span className="mx-2">›</span>
          <Link href={`/basic-sciences/${subtopic}`} className="hover:text-slate-800">
            {subtopicData.title}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700">{chapter.title}</span>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pt-8 lg:grid-cols-[290px_1fr]">
        <aside className="space-y-6">
          <div className="rounded-[1.9rem] border border-white/70 bg-white/60 p-3 shadow-[0_20px_60px_-35px_rgba(30,64,175,0.55)] backdrop-blur-xl">
            <ul className="space-y-1.5 text-[1.2rem] leading-tight text-slate-700">
              {chapterItems.map((item) => {
                const active = item.title === chapter.title;
                return (
                <li key={item.title}>
                    <Link
                      href={`/basic-sciences/${subtopic}/${item.slug}`}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
                        active
                          ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900 shadow-sm"
                          : "hover:bg-white/80"
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-[1.7rem] border border-white/70 bg-white/55 p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.5)] backdrop-blur-xl">
            <h3 className="text-3xl font-semibold text-slate-900">Related</h3>
            <div className="mt-3 space-y-3">
              {sideRelated.map((item) => (
                <Link
                  key={item.title}
                  href={`/basic-sciences/${subtopic}/${item.slug}`}
                  className="block rounded-2xl bg-white/75 px-4 py-3 text-xl text-slate-700 ring-1 ring-slate-200/70 transition hover:bg-white"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/60 p-8 shadow-[0_30px_80px_-45px_rgba(29,78,216,0.65)] backdrop-blur-xl md:p-10">
            <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-blue-300/25 blur-3xl" />
            <div className="absolute -bottom-16 right-10 h-44 w-44 rounded-full bg-cyan-200/30 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <h1 className="text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
                  {chapter.title}
                </h1>
                <p className="mt-5 max-w-2xl text-2xl leading-relaxed text-slate-600 md:text-[1.85rem]">
                  In this lesson, we explore persistent inflammatory triggers, immune-cell activity, and tissue remodeling patterns that define chronic inflammation.
                </p>
              </div>
              <div
                className="min-h-[340px] rounded-[1.8rem] bg-cover bg-center shadow-[0_20px_40px_-30px_rgba(37,99,235,0.8)] ring-1 ring-white/80"
                style={{ backgroundImage: `url('${chapterImage}')` }}
              />
            </div>
          </div>

          <article className="rounded-[2rem] border border-white/75 bg-white/60 p-7 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)] backdrop-blur-xl md:p-10">
            <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">Overview of Chronic Inflammation</h2>
            <p className="mt-4 text-2xl leading-relaxed text-slate-700 md:text-[1.85rem]">
              Chronic inflammation is a prolonged response where ongoing stimuli and immune dysregulation cause simultaneous tissue destruction and repair attempts. Macrophages, lymphocytes, and fibroblasts coordinate cytokine signaling that can lead to fibrosis, altered vascularization, and delayed functional recovery.
            </p>

            <h3 className="mt-8 border-t border-slate-200/70 pt-6 text-4xl font-semibold text-slate-900 md:text-5xl">
              Chronic Inflammation in OMFS
            </h3>
            <p className="mt-4 text-2xl leading-relaxed text-slate-700 md:text-[1.85rem]">
              In maxillofacial surgery, persistent inflammation may present as delayed healing, scar-heavy remodeling, and recurrent symptom activity. Understanding mediator profiles and trigger persistence improves clinical planning, follow-up strategy, and intervention timing.
            </p>

            <div className="mt-7 overflow-hidden rounded-[1.6rem] bg-white/70 ring-1 ring-slate-200/80">
              <div
                className="h-72 bg-cover bg-center md:h-80"
                style={{ backgroundImage: `url('${chapterImage}')` }}
              />
              <div className="p-6">
                <h4 className="text-3xl font-semibold text-slate-900 md:text-4xl">{chapter.title}</h4>
                <p className="mt-1 text-xl text-slate-600 md:text-2xl">
                  Persistent inflammation and tissue remodeling.
                </p>
              </div>
            </div>
          </article>

          {cardRelated.length > 0 && (
            <section className="rounded-[2rem] border border-white/75 bg-white/55 p-6 shadow-[0_26px_70px_-50px_rgba(15,23,42,0.8)] backdrop-blur-xl">
              <h3 className="text-3xl font-semibold text-slate-900 md:text-4xl">Related</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {cardRelated.map((item) => (
                  <Link
                    key={item.title}
                    href={`/basic-sciences/${subtopic}/${item.slug}`}
                    className="rounded-[1.4rem] bg-white/75 p-5 ring-1 ring-slate-200/70 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <p className="text-2xl font-semibold text-slate-900 md:text-3xl">{item.title}</p>
                    <p className="mt-2 text-lg text-slate-600 md:text-xl">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

function MediatorsInflammationLayout({
  subtopic,
  subtopicData,
  chapter,
  chapterImage,
  details,
  nextHref,
}) {
  const chapterItems = subtopicData.chapters.map((item) => ({
    ...item,
    slug: slugifySegment(item.title),
  }));
  const relatedTopics = chapterItems.filter((item) => item.title !== chapter.title).slice(0, 3);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.1),transparent_35%),linear-gradient(180deg,#fbfcff_0%,#f5f8ff_45%,#eff4ff_100%)] pb-14">
      <div className="border-b border-slate-200/80 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-500">
          <Link href="/basic-sciences" className="hover:text-slate-800">Basic Sciences</Link>
          <span className="mx-2">›</span>
          <Link href={`/basic-sciences/${subtopic}`} className="hover:text-slate-800">
            {subtopicData.title}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700">{chapter.title}</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pt-7">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          {chapter.title}
        </h1>
        <p className="mt-4 max-w-4xl text-2xl leading-relaxed text-slate-600">
          In this lesson, we&apos;ll explore key inflammatory mediators and how their coordinated signaling shapes vascular changes, immune-cell behavior, and tissue outcomes.
        </p>
      </section>

      <section className="mx-auto mt-6 grid max-w-7xl gap-6 px-4 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Progress</h3>
            <div className="mt-4 h-2.5 rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                style={{ width: `${details.progress}%` }}
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-slate-700">{details.progress}% complete</p>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              {details.objectives.map((objective) => (
                <li key={objective} className="flex items-start gap-2">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm">
            <ul className="space-y-1">
              {chapterItems.map((item) => {
                const active = item.title === chapter.title;
                return (
                  <li key={item.title}>
                    <Link
                      href={`/basic-sciences/${subtopic}/${item.slug}`}
                      className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xl transition ${
                        active
                          ? "bg-blue-100 text-blue-900"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Related</h3>
            <div className="mt-3 space-y-2">
              {relatedTopics.map((item) => (
                <Link
                  key={item.title}
                  href={`/basic-sciences/${subtopic}/${item.slug}`}
                  className="block rounded-xl px-2 py-1.5 text-xl text-slate-700 hover:bg-slate-100"
                >
                  › {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Quick Check</h3>
            <ul className="mt-3 space-y-2 text-xl text-slate-700">
              {details.quickCheck.map((question) => (
                <li key={question} className="leading-snug">• {question}</li>
              ))}
            </ul>
            <Link
              href={nextHref}
              className="mt-4 inline-block w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-center text-lg font-semibold text-white"
            >
              Next Topic: {details.nextTopic}
            </Link>
          </div>
        </aside>

        <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
          <h2 className="text-5xl font-semibold text-slate-900">Mediators of Inflammation</h2>
          <p className="mt-4 text-2xl leading-relaxed text-slate-700">
            Inflammatory mediators are soluble signals that orchestrate vascular permeability, leukocyte recruitment, pain generation, and tissue remodeling. They include histamine, prostaglandins, leukotrienes, cytokines, and complement components.
          </p>
          <p className="mt-4 text-2xl leading-relaxed text-slate-700">
            Their effects depend on timing, concentration, and target-cell sensitivity. Early mediators amplify acute responses, while persistent cytokine and growth-factor activity can push tissue toward fibrosis and chronic inflammation.
          </p>

          <h3 className="mt-7 border-t border-slate-200 pt-6 text-5xl font-semibold text-slate-900">
            Mechanism of Inflammatory Mediators
          </h3>
          <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-start">
            <ol className="space-y-4">
              <li>
                <p className="text-3xl font-semibold text-slate-900">1. Trigger Recognition</p>
                <p className="mt-1 text-xl text-slate-700">
                  Tissue injury or infection activates resident immune cells and initiates mediator release.
                </p>
              </li>
              <li>
                <p className="text-3xl font-semibold text-slate-900">2. Mediator Release</p>
                <p className="mt-1 text-xl text-slate-700">
                  Histamine, prostaglandins, and cytokines rapidly alter vascular flow and endothelial permeability.
                </p>
              </li>
              <li>
                <p className="text-3xl font-semibold text-slate-900">3. Cellular Recruitment</p>
                <p className="mt-1 text-xl text-slate-700">
                  Chemotactic signals recruit neutrophils and monocytes to contain injury and clear debris.
                </p>
              </li>
              <li>
                <p className="text-3xl font-semibold text-slate-900">4. Resolution or Chronicity</p>
                <p className="mt-1 text-xl text-slate-700">
                  Balanced signaling resolves inflammation, while persistent triggers drive chronic tissue remodeling.
                </p>
              </li>
            </ol>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div
                className="h-[25rem] bg-cover bg-center"
                style={{ backgroundImage: `url('${chapterImage}')` }}
              />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-5">
            <h4 className="text-4xl font-semibold text-slate-900">Clinical Connection: OMFS Application</h4>
            <p className="mt-2 text-2xl leading-relaxed text-slate-700">
              In oral and maxillofacial surgery, understanding mediator kinetics helps guide anti-inflammatory strategy, pain control, and risk assessment for delayed healing after operative procedures.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

function ImpairedHealingLayout({
  subtopic,
  subtopicData,
  chapter,
  chapterImage,
  details,
  nextHref,
}) {
  const chapterItems = subtopicData.chapters.map((item) => ({
    ...item,
    slug: slugifySegment(item.title),
  }));
  const relatedTopics = chapterItems.filter((item) => item.title !== chapter.title).slice(0, 4);
  const sideRelated = relatedTopics.slice(0, 2);
  const cardRelated = relatedTopics.slice(2, 4);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f3f7ff_0%,#edf3ff_50%,#e7eef9_100%)] pb-14">
      <div className="border-b border-slate-200/80 bg-white/65">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-slate-500">
          <Link href="/basic-sciences" className="hover:text-slate-800">Basic Sciences</Link>
          <span className="mx-2">›</span>
          <Link href={`/basic-sciences/${subtopic}`} className="hover:text-slate-800">
            {subtopicData.title}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700">{chapter.title}</span>
        </div>
      </div>

      <section className="mx-auto mt-6 grid max-w-7xl gap-6 px-4 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-3xl border border-white/70 bg-white/80 p-3 shadow-lg shadow-slate-300/45">
            <ul className="space-y-1.5 text-lg text-slate-700">
              {chapterItems.map((item) => {
                const active = item.title === chapter.title;
                return (
                  <li key={item.title}>
                    <Link
                      href={`/basic-sciences/${subtopic}/${item.slug}`}
                      className={`flex items-center gap-2 rounded-xl px-3 py-2.5 transition ${
                        active ? "bg-cyan-100 text-blue-900" : "hover:bg-slate-100"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-lg shadow-slate-300/35">
            <h3 className="text-4xl font-semibold text-slate-900">Related</h3>
            <div className="mt-3 space-y-2">
              {sideRelated.map((item) => (
                <Link
                  key={item.title}
                  href={`/basic-sciences/${subtopic}/${item.slug}`}
                  className="block rounded-xl border border-slate-200 bg-white px-3 py-2 text-xl text-slate-700 hover:bg-slate-50"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-slate-300/40 md:p-8">
              <h1 className="text-5xl font-semibold leading-tight text-slate-900 md:text-7xl">
                {chapter.title}
              </h1>
              <p className="mt-4 max-w-3xl text-2xl leading-relaxed text-slate-600">
                In this lesson, we explore why wound healing stalls, how inflammation becomes maladaptive, and what patterns predict delayed recovery in OMFS care.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">⏱ {details.duration}</span>
                <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-semibold text-blue-700">{details.level}</span>
                {details.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-semibold text-blue-700">{tag}</span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                <h3 className="text-4xl font-semibold text-slate-900">Progress</h3>
                <div className="mt-3 h-2.5 rounded-full bg-slate-200">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: `${details.progress}%` }} />
                </div>
                <p className="mt-2 text-lg font-semibold text-slate-700">{details.progress}% complete</p>
                <ul className="mt-2 space-y-1.5 text-base text-slate-700">
                  {details.objectives.map((objective) => (
                    <li key={objective}>• {objective}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                <h3 className="text-4xl font-semibold text-slate-900">Resources</h3>
                <ul className="mt-2 space-y-1.5 text-lg text-slate-700">
                  {details.resources.map((resource) => (
                    <li key={resource}>☑ {resource}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
                <h3 className="text-4xl font-semibold text-slate-900">Quick Check</h3>
                <ul className="mt-2 space-y-2 text-lg text-slate-700">
                  {details.quickCheck.map((q) => (
                    <li key={q}>• {q}</li>
                  ))}
                </ul>
                <Link
                  href={nextHref}
                  className="mt-4 inline-block w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-2.5 text-center text-lg font-semibold text-white"
                >
                  Next Topic: {details.nextTopic}
                </Link>
              </div>
            </div>
          </div>

          <article className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-lg shadow-slate-300/35 md:p-8">
            <h2 className="text-5xl font-semibold text-slate-900">Overview of Impaired Healing</h2>
            <p className="mt-4 text-2xl leading-relaxed text-slate-700">
              Impaired healing occurs when tissue repair phases are disrupted by persistent inflammation, poor vascular supply, microbial burden, or host-system limitations. The result is delayed closure, fragile granulation tissue, and higher complication risk.
            </p>
            <h3 className="mt-7 border-t border-slate-200 pt-6 text-5xl font-semibold text-slate-900">
              Impaired Healing in OMFS
            </h3>
            <p className="mt-4 text-2xl leading-relaxed text-slate-700">
              In oral and maxillofacial surgery, delayed healing can present as persistent edema, wound dehiscence, infection recurrence, and prolonged pain. Early risk stratification supports better intervention timing and improves recovery outcomes.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="h-72 bg-cover bg-center md:h-80" style={{ backgroundImage: `url('${chapterImage}')` }} />
              <div className="p-4">
                <h4 className="text-4xl font-semibold text-slate-900">Impaired Healing</h4>
                <p className="text-xl text-slate-600">Infection, ischemia, systemic factors, and risks.</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Pearl</p>
              <p className="mt-2 text-2xl font-semibold text-slate-800">{details.pearl}</p>
            </div>
          </article>

          {cardRelated.length > 0 && (
            <section className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-slate-300/30">
              <h3 className="text-4xl font-semibold text-slate-900">Related</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {cardRelated.map((item) => (
                  <Link key={item.title} href={`/basic-sciences/${subtopic}/${item.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50">
                    <p className="text-3xl font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-lg text-slate-600">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

function HealingInOmfsLayout({
  subtopic,
  subtopicData,
  chapter,
  chapterImage,
  details,
  nextHref,
  generated,
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const chapterItems = subtopicData.chapters.map((item) => ({
    ...item,
    slug: slugifySegment(item.title),
  }));
  const chapterSlug = slugifySegment(chapter.title);
  const isGrowthAdaptationsChapter =
    subtopic === "pathology" &&
    chapterSlug === "growth-adaptations-cellular-injury-and-cell-death";
  const headerSubtitle = isGrowthAdaptationsChapter
    ? "Comprehensive molecular and clinical framework for neoplastic transformation and progression."
    : "Clinical frameworks for optimizing tissue healing in oral and maxillofacial surgery.";
  const vascularFigure = `${basePath}/image1_background.png`;
  const processFigure = `${basePath}/cellbio1.png`;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_0%_20%,rgba(59,130,246,0.1),transparent_38%),linear-gradient(180deg,#f7f9ff_0%,#eef3ff_48%,#e8eef8_100%)] pb-14">
      <section className="border-b border-slate-200/70 bg-white/65">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-500">
          <Link href="/training" className="hover:text-slate-800">Lectures</Link>
          <span className="mx-2">›</span>
          <Link href="/basic-sciences" className="hover:text-slate-800">Basic Sciences</Link>
          <span className="mx-2">›</span>
          <Link href={`/basic-sciences/${subtopic}`} className="hover:text-slate-800">
            {subtopicData.title}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700">{chapter.title}</span>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-6 pt-1">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            {chapter.title}
          </h1>
          <p className="mt-3 text-2xl text-slate-600">{headerSubtitle}</p>
        </div>
      </section>

      <section className="mx-auto mt-6 grid max-w-7xl gap-5 px-4 lg:grid-cols-[300px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
            <h3 className="text-4xl font-semibold text-slate-900">Progress</h3>
            <div className="mt-3 h-2.5 rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                style={{ width: `${details.progress}%` }}
              />
            </div>
            <p className="mt-2 text-lg font-semibold text-slate-700">{details.progress}% complete</p>
            <ul className="mt-3 space-y-1.5 text-base text-slate-700">
              {details.objectives.map((objective) => (
                <li key={objective}>• {objective}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
            <h3 className="text-4xl font-semibold text-slate-900">Resources</h3>
            <ul className="mt-2 space-y-1.5 text-lg text-slate-700">
              {details.resources.map((resource) => (
                <li key={resource}>☑ {resource}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
            <h3 className="text-4xl font-semibold text-slate-900">Quick Check</h3>
            <ul className="mt-2 space-y-2 text-lg text-slate-700">
              {details.quickCheck.map((question) => (
                <li key={question}>• {question}</li>
              ))}
            </ul>
            <Link
              href={nextHref}
              className="mt-4 inline-block w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-2.5 text-center text-lg font-semibold text-white"
            >
              {details.nextTopic}
            </Link>
          </div>
        </aside>

        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-5xl font-semibold text-slate-900">Lecture Focus</h2>
              <p className="text-lg font-semibold text-blue-700">{details.progress}% complete</p>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-blue-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                style={{ width: `${details.progress}%` }}
              />
            </div>
            <ul className="mt-4 space-y-2 text-lg text-slate-700">
              {details.objectives.map((objective) => (
                <li key={objective}>✔ {objective}</li>
              ))}
            </ul>
          </div>

          <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-5xl font-semibold text-slate-900">{details.rapidMapTitle}</h3>
            <p className="mt-2 text-xl text-slate-600">{details.rapidMapNotes}</p>

            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <div
                className="h-72 bg-cover bg-center md:h-80"
                style={{ backgroundImage: `url('${chapterImage}')` }}
              />
              <div className="bg-gradient-to-r from-indigo-700 to-blue-700 px-4 py-3 text-white">
                <p className="text-2xl font-semibold">Clinical connection</p>
                <p className="mt-1 text-lg text-blue-100">{details.clinicalConnection}</p>
              </div>
            </div>
          </article>

          {isGrowthAdaptationsChapter && generated?.markdown ? (
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-sm">
              <div className="border-b border-slate-200 bg-[linear-gradient(120deg,#eff6ff_0%,#f0fdfa_40%,#f8fafc_100%)] px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  Textbook Overview
                </p>
                <h3 className="mt-1 text-4xl font-semibold text-slate-900">
                  Principles of Neoplasia: A Molecular and Clinical Comprehensive
                </h3>
              </div>
              <div className="p-5 md:p-6">
                <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-slate-700 prose-strong:text-slate-900 prose-li:text-slate-700 prose-table:table-auto prose-th:border prose-th:border-slate-300 prose-th:bg-slate-50 prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-slate-200 prose-td:px-3 prose-td:py-2">
                  <ReactMarkdown>{generated.markdown}</ReactMarkdown>
                </div>
              </div>
            </article>
          ) : (
            <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
              <h3 className="text-5xl font-semibold text-slate-900">Textbook Overview</h3>
              <h4 className="mt-5 border-t border-slate-200 pt-5 text-4xl font-semibold text-slate-900">
                Key Phases of Healing in OMFS
              </h4>
              <div className="mt-4 grid gap-5 lg:grid-cols-[1.2fr_0.9fr]">
                <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                  <div>
                    <p className="text-3xl font-semibold text-slate-900">1. Stabilization and Perfusion</p>
                    <p className="mt-1">
                      Immediate postoperative management focuses on hemostasis, perfusion support, and edema control to protect tissue viability and maintain oxygen delivery.
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-slate-900">2. Controlled Inflammation</p>
                    <p className="mt-1">
                      A balanced immune response is essential for debris clearance and infection control; excessive inflammation increases fibrosis risk and delays tissue maturation.
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-slate-900">3. Regeneration and Remodeling</p>
                    <p className="mt-1">
                      Granulation, epithelial recovery, and collagen remodeling require surveillance for dehiscence, ischemia, and persistent infection signals.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[vascularFigure, processFigure, chapterImage].map((img, idx) => (
                    <div key={`${img}-${idx}`} className="overflow-hidden rounded-xl border border-slate-200">
                      <div className="h-32 bg-cover bg-center md:h-36" style={{ backgroundImage: `url('${img}')` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-lg leading-relaxed text-slate-700">
                  ddasdasdfdfdsfsdfsfdsfasfdsfsfasfdsfsfsfsda fsa fdsa f sdf dsa fdsa f sadf dsa fsd f sadf sadf sad fsad f asdf asd fdsa f sdf sadf dsaf dsa fsad f dsf sadf sad fsad f sadfs
                </p>
              </div>
            </article>
          )}
                  

          <div className="rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Pearl</p>
            <p className="mt-2 text-2xl font-semibold text-slate-800">{details.pearl}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
            <h3 className="text-4xl font-semibold text-slate-900">Related Topics</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {chapterItems
                .filter((item) => item.title !== chapter.title)
                .slice(0, 4)
                .map((item) => (
                  <Link
                    key={item.title}
                    href={`/basic-sciences/${subtopic}/${item.slug}`}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50"
                  >
                    <p className="text-2xl font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-base text-slate-600">{item.desc}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.entries(subtopicContent).flatMap(([subtopic, content]) =>
    content.chapters.map((chapter) => ({
      subtopic,
      chapter: slugifySegment(chapter.title),
    }))
  );
}

export default async function ChapterDetailPage({ params }) {
  const resolvedParams = await params;
  const subtopic = resolvedParams?.subtopic;
  const chapterSlug = resolvedParams?.chapter;
  const subtopicData = subtopicContent[subtopic];

  if (!subtopicData) notFound();

  const chapterIndex = subtopicData.chapters.findIndex(
    (ch) => slugifySegment(ch.title) === chapterSlug
  );

  if (chapterIndex < 0) notFound();

  const chapter = subtopicData.chapters[chapterIndex];
  const nextChapter = subtopicData.chapters[chapterIndex + 1];
  const overrideKey = `${subtopic}/${chapterSlug}`;
  const details =
    chapterOverrides[overrideKey] ||
    buildDefaultDetails(subtopicData.title, chapter, nextChapter);
  
  const generated = loadGeneratedChapter(subtopic, chapterSlug); //*NEW

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const chapterImage =
    chapter.bgImage && chapter.bgImage.startsWith("/")
      ? `${basePath}${chapter.bgImage}`
      : chapter.bgImage;
  const nextHref = nextChapter
    ? `/basic-sciences/${subtopic}/${slugifySegment(nextChapter.title)}`
    : `/basic-sciences/${subtopic}`;
  const isCellStructureChapter =
    overrideKey === "cell-biology/cell-structure-and-organization";
  const isChronicInflammationChapter =
    overrideKey === "inflammation-healing/chronic-inflammation";
  const isMediatorsInflammationChapter =
    overrideKey === "inflammation-healing/mediators-of-inflammation";
  const isImpairedHealingChapter =
    overrideKey === "inflammation-healing/impaired-healing";
  const isHealingTemplateChapter =
    overrideKey === "inflammation-healing/healing-in-omfs" ||
    overrideKey === "inflammation-healing/phases-of-wound-healing" ||
    overrideKey === "pathology/growth-adaptations-cellular-injury-and-cell-death";
  const organelleFigure = `${basePath}/cellorganelles1.png`;
  const cytoskeletonFigure = `${basePath}/cytoskeleton1.png`;
  const ecmFigure = `${basePath}/cellbio1.png`;

  if (isChronicInflammationChapter) {
    return (
      <ChronicInflammationLayout
        subtopic={subtopic}
        subtopicData={subtopicData}
        chapter={chapter}
        chapterImage={chapterImage}
      />
    );
  }

  if (isMediatorsInflammationChapter) {
    return (
      <MediatorsInflammationLayout
        subtopic={subtopic}
        subtopicData={subtopicData}
        chapter={chapter}
        chapterImage={chapterImage}
        details={details}
        nextHref={nextHref}
      />
    );
  }

  if (isImpairedHealingChapter) {
    return (
      <ImpairedHealingLayout
        subtopic={subtopic}
        subtopicData={subtopicData}
        chapter={chapter}
        chapterImage={chapterImage}
        details={details}
        nextHref={nextHref}
      />
    );
  }

  if (isHealingTemplateChapter) {
    return (
      <HealingInOmfsLayout
        subtopic={subtopic}
        subtopicData={subtopicData}
        chapter={chapter}
        chapterImage={chapterImage}
        details={details}
        nextHref={nextHref}
        generated={generated}
      />
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.2),transparent_30%),linear-gradient(180deg,#f6fbff_0%,#eff5ff_42%,#e8f1ff_100%)] pb-12">
      <section className="mx-auto max-w-7xl px-4 pt-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700/80">
          <Link href="/" className="hover:text-blue-900">Home</Link>
          <span className="mx-2">▸</span>
          <Link href="/training" className="hover:text-blue-900">Lectures</Link>
          <span className="mx-2">▸</span>
          <Link href="/basic-sciences" className="hover:text-blue-900">Basic Sciences</Link>
          <span className="mx-2">▸</span>
          <Link href={`/basic-sciences/${subtopic}`} className="hover:text-blue-900">
            {subtopicData.title}
          </Link>
          <span className="mx-2">▸</span>
          <span className="text-slate-700">{chapter.title}</span>
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          {chapter.title}
        </h1>
        <p className="mt-3 max-w-3xl text-2xl text-slate-700">{chapter.desc}</p>
        
        {generated?.markdown ? (
  <section className="mt-6 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
    <h2 className="text-3xl font-bold text-slate-900">AI Notes</h2>

    <div className="prose prose-slate mt-4 max-w-none">
      <ReactMarkdown>{generated.markdown}</ReactMarkdown>
    </div>

    {generated.references?.length ? (
      <>
        <h3 className="mt-8 text-2xl font-semibold text-slate-900">References</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-slate-700">
          {generated.references.map((r) => (
            <li key={r.id}>{r.citation}</li>
          ))}
        </ol>
      </>
    ) : null}
  </section>
) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-semibold text-blue-700">
            ⏱ {details.duration}
          </span>
          <span className="rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-semibold text-blue-700">
            {details.level}
          </span>
          {details.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-6 grid max-w-7xl gap-5 px-4 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-5">
          <div className="overflow-hidden rounded-3xl border border-white/70 bg-white/85 p-3 shadow-xl">
            <div
              className="relative h-72 overflow-hidden rounded-2xl bg-cover bg-center md:h-[26rem]"
              style={{ backgroundImage: `url('${chapterImage}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-cyan-400/10" />
              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/90 text-3xl text-blue-700 shadow-2xl"
              >
                ▶
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-md">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-4xl font-bold text-slate-900">Lecture Focus</h2>
              <p className="text-lg font-semibold text-blue-700">{details.progress}% complete</p>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-blue-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
                style={{ width: `${details.progress}%` }}
              />
            </div>
            <ul className="mt-5 space-y-3">
              {details.objectives.map((point) => (
                <li key={point} className="flex items-start gap-3 text-lg text-slate-700">
                  <span className="mt-1 text-blue-600">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Pearl</p>
            <p className="mt-2 text-2xl font-semibold text-slate-800">{details.pearl}</p>
          </div>

          <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-md">
            <h3 className="text-4xl font-bold text-slate-900">{details.rapidMapTitle}</h3>
            <p className="mt-2 text-lg text-slate-600">{details.rapidMapNotes}</p>
            <div
              className="mt-4 h-64 rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url('${chapterImage}')` }}
            />
            <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-4 text-white">
              <p className="text-xl font-semibold">Clinical connection</p>
              <p className="mt-1 text-lg text-blue-100">{details.clinicalConnection}</p>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Progress</h3>
            <ul className="mt-4 space-y-2 text-lg text-slate-700">
              {details.objectives.map((objective) => (
                <li key={objective}>• {objective}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Table of Contents</h3>
            <ul className="mt-4 space-y-2 text-lg text-slate-700">
              <li>• High-yield overview</li>
              <li>• Core concepts</li>
              <li>• Clinical links</li>
              <li>• Rapid recall</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Resources</h3>
            <ul className="mt-4 space-y-2 text-lg text-slate-700">
              {details.resources.map((resource) => (
                <li key={resource}>☑ {resource}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-900">Quick Check</h3>
            <ul className="mt-4 space-y-3 text-lg text-slate-700">
              {details.quickCheck.map((q) => (
                <li key={q}>• {q}</li>
              ))}
            </ul>
            <Link
              href={nextHref}
              className="mt-5 inline-block w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-3 text-center text-lg font-semibold text-white"
            >
              Next Topic: {details.nextTopic}
            </Link>
          </div>
        </aside>
      </section>

      {isCellStructureChapter && (
        <section className="mx-auto mt-8 max-w-7xl px-4">
          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-lg md:p-8">
            <h2 className="text-4xl font-bold text-slate-900">High-yield overview</h2>
            <p className="mt-4 max-w-4xl text-xl leading-relaxed text-slate-700">
              Cells are organized into functional compartments. The fastest exam
              strategy is to map a symptom to the failing structure, then infer
              the disrupted pathway.
            </p>

            <div className="mt-5 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-4">
              <p className="text-2xl font-semibold text-cyan-700">Pearl</p>
              <p className="mt-1 text-lg text-slate-700">
                Ask first: <strong>Which organelle is responsible for this function?</strong>{" "}
                then map to a failure phenotype.
              </p>
            </div>

            <div className="mt-8 space-y-7">
              <article id="core-organelles" className="space-y-4">
                <h3 className="text-4xl font-bold text-slate-900">Core organelles</h3>
                <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
                  <div className="text-lg leading-relaxed text-slate-700">
                    <p>
                      Major eukaryotic organelles coordinate synthesis, energy,
                      transport, and signaling. A strong mental model links each
                      organelle to its most testable dysfunction.
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li>• Nucleus: genetic control and transcription programs.</li>
                      <li>• Mitochondria: ATP production and apoptosis signaling.</li>
                      <li>• RER/Golgi: protein processing and trafficking.</li>
                      <li>• Lysosomes/peroxisomes: turnover and detox pathways.</li>
                    </ul>
                  </div>
                  <div
                    className="h-72 rounded-2xl border border-blue-100 bg-cover bg-center md:h-80"
                    style={{ backgroundImage: `url('${organelleFigure}')` }}
                  />
                </div>
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-700">
                  <strong>Figure 1.</strong> Core organelles and protein flow:
                  nucleus → RER → Golgi → membrane/secretory pathway.
                </p>
              </article>

              <article id="cytoskeleton-transport" className="space-y-4">
                <h3 className="text-4xl font-bold text-slate-900">Cytoskeleton & transport</h3>
                <div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
                  <div className="text-lg leading-relaxed text-slate-700">
                    <p>
                      Cytoskeletal systems define intracellular logistics and
                      tissue mechanics. Distinguish transport-heavy versus
                      cortex/shape-heavy disorders.
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li>• Microtubules: long-distance transport and spindle.</li>
                      <li>• Actin: cortical architecture and migration.</li>
                      <li>• Intermediate filaments: tensile strength.</li>
                    </ul>
                    <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
                      <strong>Pitfall:</strong> microtubules are not the main
                      cortical scaffold; actin is.
                    </p>
                  </div>
                  <div
                    className="h-72 rounded-2xl border border-blue-100 bg-cover bg-center md:h-80"
                    style={{ backgroundImage: `url('${cytoskeletonFigure}')` }}
                  />
                </div>
                <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-700">
                  <strong>Figure 2.</strong> Cytoskeletal roles in movement
                  (actin), transport/spindle (microtubules), and strength
                  (intermediate filaments).
                </p>
              </article>

              <article id="ecm-adhesion" className="space-y-4">
                <h3 className="text-4xl font-bold text-slate-900">
                  Extracellular matrix (ECM) & adhesion
                </h3>
                <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
                  <div className="text-lg leading-relaxed text-slate-700">
                    <p>
                      ECM proteins such as collagen, elastin, fibronectin, and
                      laminin coordinate tissue architecture and healing
                      responses.
                    </p>
                    <p className="mt-3">
                      Integrin signaling bridges cell structure with wound
                      biology, making ECM concepts essential for OMFS healing
                      and scar outcomes.
                    </p>
                    <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-4">
                      <h4 className="text-2xl font-semibold text-slate-900">Key takeaways</h4>
                      <ul className="mt-2 space-y-2">
                        <li>• Compartmentalization determines function.</li>
                        <li>• Cytoskeleton enables transport, shape, and division.</li>
                        <li>• ECM/integrins connect cell biology to wound healing.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div
                      className="h-56 rounded-2xl border border-blue-100 bg-cover bg-center"
                      style={{ backgroundImage: `url('${ecmFigure}')` }}
                    />
                    <div className="rounded-2xl bg-gradient-to-r from-indigo-700 to-blue-700 px-4 py-3 text-white">
                      <p className="text-lg font-semibold">Clinical connection</p>
                      <p className="mt-1 text-sm text-blue-100">
                        Collagen remodeling and integrin signaling are key to
                        scar quality and postoperative tissue stability.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
