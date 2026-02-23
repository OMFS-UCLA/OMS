import Link from "next/link";
import {
  slugifySegment,
  subtopicContent,
} from "../../components/subtopicData";
import ExpandableImagePanel from "../../../components/ExpandableImagePanel";

const details = {
  progress: 48,
  subtitle:
    "Core pathology framework for growth adaptations, cellular injury progression, and mechanisms of cell death.",
  rapidMapTitle:
    "Growth Adaptations, Cellular Injury & Cell Death (rapid map)",
  rapidMapNotes:
    "Hypertrophy/hyperplasia, reversible vs irreversible injury, necrosis, apoptosis, free radical injury, and amyloidosis.",
  clinicalConnection:
    "Clinical connection: pattern recognition across adaptation, injury, and death pathways improves differential diagnosis and urgency decisions.",
  objectives: [
    "Differentiate reversible from irreversible cell injury.",
    "Compare apoptosis and necrosis by mechanism and morphology.",
    "Apply growth adaptation patterns to pathology diagnosis.",
  ],
  resources: ["Pathology Core PDF", "Morphology Image Sheet", "Practice MCQs"],
  quickCheck: [
    "Which finding most strongly indicates irreversible injury?",
    "How does apoptosis differ from necrosis on histology?",
    "Which adaptation pattern best explains this clinical scenario?",
  ],
  pearl:
    "Anchor injury questions to ATP depletion, membrane damage, and DNA/protein response pathways.",
};

export default function GrowthAdaptationsStandalonePage() {
  const subtopic = "pathology";
  const chapterSlug = "growth-adaptations-cellular-injury-and-cell-death";
  const subtopicData = subtopicContent[subtopic];
  const chapter = subtopicData.chapters.find(
    (item) => slugifySegment(item.title) === chapterSlug
  );
  const chapterItems = subtopicData.chapters.map((item) => ({
    ...item,
    slug: slugifySegment(item.title),
  }));
  const chapterIndex = chapterItems.findIndex((item) => item.slug === chapterSlug);
  const nextChapter = chapterItems[chapterIndex + 1];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const chapterImage = `${basePath}/Principles%20of%20Neoplasia%20image.png`;
  const nextHref = nextChapter
    ? `/basic-sciences/${subtopic}/${nextChapter.slug}`
    : `/basic-sciences/${subtopic}`;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_0%_20%,rgba(59,130,246,0.1),transparent_38%),linear-gradient(180deg,#f7f9ff_0%,#eef3ff_48%,#e8eef8_100%)] pb-14">
      <section className="border-b border-slate-200/70 bg-white/65">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-slate-500">
          <Link href="/training" className="hover:text-slate-800">
            Lectures
          </Link>
          <span className="mx-2">›</span>
          <Link href="/basic-sciences" className="hover:text-slate-800">
            Basic Sciences
          </Link>
          <span className="mx-2">›</span>
          <Link href="/basic-sciences/pathology" className="hover:text-slate-800">
            Pathology
          </Link>
          <span className="mx-2">›</span>
          <span className="text-slate-700">{chapter?.title}</span>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-6 pt-1">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            {chapter?.title}
          </h1>
          <p className="mt-3 text-2xl text-slate-600">{details.subtitle}</p>
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
            <p className="mt-2 text-lg font-semibold text-slate-700">
              {details.progress}% complete
            </p>
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
              {nextChapter?.title || "Return to Pathology"}
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
              <ExpandableImagePanel
                src={chapterImage}
                alt="Principles of Neoplasia rapid map"
              />
              <p className="px-4 py-2 text-sm font-medium text-slate-500">
                Click image to expand. Click outside image or press Esc to close.
              </p>
              <div className="bg-gradient-to-r from-indigo-700 to-blue-700 px-4 py-3 text-white">
                <p className="text-2xl font-semibold">Clinical connection</p>
                <p className="mt-1 text-lg text-blue-100">{details.clinicalConnection}</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-5xl font-semibold text-slate-900">
              1. Fundamental Tumor Biology: Monoclonality and Classification
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              The shift from normal cellular homeostasis to neoplastic growth
              represents a catastrophic failure of the deterministic signals
              governing tissue architecture and cellular proliferation. In the
              physiological state, cell cycle control is maintained by a complex
              regulatory network; however, neoplasia arises when the enabling
              characteristic of <strong>Genome Instability and Mutation</strong>{" "}
              permits the bypass of these constraints (Hanahan &amp; Weinberg,
              2011; Hanahan, 2022). Understanding the monoclonal origin of
              tumors, the fact that a malignancy commences with the
              transformation of a single progenitor, is essential for targeted
              therapeutic interventions. This clonal foundation dictates that
              while a tumor may become highly heterogeneous through subclonal
              evolution, its constituent cells share a common lineage, providing
              the molecular handprints necessary for precise diagnostic and
              therapeutic targeting.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              <strong>Nomenclature and Origin</strong> Tumor nomenclature is
              fundamentally bifurcated by biological behavior into{" "}
              <strong>benign</strong> and <strong>malignant</strong>. Benign
              tumors are generally localized, whereas malignant neoplasms
              (cancers) are pathologically distinguished by their capacity to
              breach the basement membrane and destroy surrounding architecture.
              Central to this process is <strong>monoclonality</strong>.
              Neoplasms originate from the transformation of a single cell that
              acquires a selective growth advantage. As this cell divides, it
              gives rise to a genetically heterogeneous but clonally related
              population. Over time, selective pressures, including immune
              surveillance and therapeutic intervention, sculpt this population,
              yet the shareable monoclonal origin remains the defining hallmark
              of the tumor&apos;s identity (Pierantoni et al., 2024; van Zijl et
              al., 2011).
            </p>

            <h4 className="mt-6 text-3xl font-semibold text-slate-900">
              Comparative Analysis of Neoplasms
            </h4>
            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-300">
              <table className="min-w-full border-collapse text-left text-xl text-slate-800">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">Criteria</th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">Benign Neoplasms</th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">Malignant Neoplasms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Differentiation / Anaplasia</td>
                    <td className="border border-slate-300 px-3 py-2">Well-differentiated; resembles tissue of origin.</td>
                    <td className="border border-slate-300 px-3 py-2">Ranges from well-differentiated to anaplastic.</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Rate of Growth</td>
                    <td className="border border-slate-300 px-3 py-2">Usually slow; may stop or regress.</td>
                    <td className="border border-slate-300 px-3 py-2">Typically rapid; erratic or autonomous.</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Boundary</td>
                    <td className="border border-slate-300 px-3 py-2">Circumscribed or encapsulated.</td>
                    <td className="border border-slate-300 px-3 py-2">Irregular; infiltrative.</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Local Invasion</td>
                    <td className="border border-slate-300 px-3 py-2">Does not invade; remains localized.</td>
                    <td className="border border-slate-300 px-3 py-2">Infiltrative and destructive to basement membrane.</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2 font-semibold">Metastasis</td>
                    <td className="border border-slate-300 px-3 py-2">Absent.</td>
                    <td className="border border-slate-300 px-3 py-2">Frequently present; the defining lethal trait.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              <strong>Clinical Significance of Biological Divergence</strong>{" "}
              The biological divergence between benign and malignant tumors
              dictates the selection of treatment modalities. Benign tumors
              often allow for watchful waiting or simple surgical excision due
              to their circumscribed nature. In contrast, the infiltrative and
              metastatic capacity of malignant tumors necessitates aggressive,
              multi-modal management. The choice between local control (surgery,
              radiotherapy) and systemic intervention (chemotherapy,
              immunotherapy) is governed by the risk of subclinical
              dissemination, which remains the primary driver of cancer-related
              mortality (van Zijl et al., 2011).
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              While classification provides the &quot;what&quot; of a tumor, the
              mechanistic &quot;how&quot; is determined by the specific genetic
              and epigenetic drivers that fuel the transition from homeostasis
              to malignancy.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-5xl font-semibold text-slate-900">
              2. Carcinogenesis: The Molecular Logic of Transformation
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Carcinogenesis is governed by the <strong>Multistep Mutation Theory</strong>,
              which posits that the transition from a benign polyp to an invasive
              carcinoma is a cumulative process of genetic and epigenetic insults.
              In colorectal cancer (CRC), this is visualized as a predictable
              progression where each hit confers a selective phenotypic advantage.
              This transition is not merely about growth; it is about the systematic
              dismantling of cellular checks and balances (Pierantoni et al., 2024).
            </p>

            <h4 className="mt-6 text-3xl font-semibold text-slate-900">
              Genetic Drivers of Transformation
            </h4>
            <ul className="mt-3 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700 marker:text-blue-700">
              <li>
                <strong>Oncogenes:</strong> These genes sustain proliferative
                signaling. Mutations in <em>KRAS</em> or <em>BRAF</em> trigger
                the <strong>Ras/MAPK cascade</strong>. Crucially, this involves
                signaling through <strong>RAF, PI3K, MAPK, and RALGDS</strong>,
                which collectively drive autonomous growth and resistance to
                apoptosis (Pierantoni et al., 2024).
              </li>
              <li>
                <strong>Tumor Suppressor Genes:</strong> The &quot;Two-Hit&quot;
                hypothesis typically governs these loss-of-function events. In
                the <strong>Chromosomal Instability (CIN) pathway</strong>, the
                loss of <em>APC</em> is a hallmark. Mechanistically, <em>APC</em>{" "}
                mutation causes a <strong>reduction in beta-catenin degradation</strong>,
                allowing beta-catenin to accumulate and translocate to the nucleus,
                where it activates pro-proliferative gene programs. Subsequent
                loss of <em>TP53</em> eliminates the cell&apos;s ability to trigger
                senescence or apoptosis in response to DNA damage (Pierantoni et al., 2024).
              </li>
              <li>
                <strong>DNA Repair Genes:</strong> The{" "}
                <strong>Microsatellite Instability (MSI) pathway</strong> arises
                from a defective DNA mismatch repair (MMR) system, often via the
                silencing of <em>MLH1</em> or <em>MSH2</em>.
              </li>
            </ul>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              <strong>Clinical Impact: The &quot;So What?&quot; Layer</strong>{" "}
              The molecular pathway of a tumor dictates its clinical management.
              CIN-driven tumors are characterized by gross structural anomalies,
              while <strong>MSI-H (MSI-High)</strong> tumors exhibit a high
              mutational load. This high mutational burden is clinically significant
              because it results in the production of <strong>numerous neoantigens</strong>.
              These neoantigens make MSI-H tumors highly susceptible to{" "}
              <strong>PD-1 inhibition</strong> (e.g., pembrolizumab), as the
              immune system can more readily recognize the &quot;non-self&quot;
              nature of the tumor (Pierantoni et al., 2024; Hanahan, 2022).
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              These genetic alterations confer the <strong>phenotypic plasticity</strong>
              {" "}required for the tumor to survive in hostile environments and
              adopt new identities during progression.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-5xl font-semibold text-slate-900">
              3. Phenotypic Plasticity and the Hallmarks of Cancer
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              A revolutionary dimension of the Hallmarks of Cancer is{" "}
              <strong>Phenotypic Plasticity</strong>, which describes the
              ability of cancer cells to escape terminal differentiation and
              adopt progenitor-like states. Crucially, this plasticity often
              occurs independently of genetic mutation, relying instead on{" "}
              <strong>nonmutational epigenetic reprogramming</strong> to alter
              cellular identity (Hanahan, 2022; CST Blog 2022).
            </p>
            <h4 className="mt-6 text-3xl font-semibold text-slate-900">
              Mechanisms of Plasticity
            </h4>
            <ul className="mt-3 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700 marker:text-blue-700">
              <li>
                <strong>Dedifferentiation:</strong> Mature cells revert to a
                progenitor state. A primary model is the Epithelial-Mesenchymal
                Transition (EMT), where epithelial cells lose apical-basal
                polarity and adopt a motile phenotype. This is driven by the
                &quot;Cadherin Switch&quot; (loss of E-cadherin, gain of
                N-cadherin) and transcription factors including Snail, Slug,
                ZEB1, and Twist.
              </li>
              <li>
                <strong>Blocked Differentiation:</strong> Progenitor cells are
                prevented from reaching a post-proliferative state. In Acute
                Myeloid Leukemia (AML), markers such as CD33 and
                Myeloperoxidase (MPO) support identification.
              </li>
              <li>
                <strong>Transdifferentiation:</strong> Cells switch into a
                different lineage. In Barrett&apos;s esophagus, squamous cells
                shift toward intestinal-like phenotype with markers including
                CDX2/MUC2 and keratin pattern changes (CK7/CK20).
              </li>
            </ul>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              <strong>Clinical Strategy: Differentiation Therapy</strong>{" "}
              Understanding blocked differentiation enabled differentiation
              therapy. In acute promyelocytic leukemia, disrupted retinoic acid
              signaling can be pharmacologically restored to drive maturation and
              remission without direct cytotoxic destruction.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-5xl font-semibold text-slate-900">
              4. Mechanisms of Tumor Progression: Invasion and the Metastatic Cascade
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              The metastatic cascade is a multi-step process that is
              statistically inefficient, yet it remains the primary cause of
              cancer death. To succeed, tumor cells must overcome physical,
              physiological, and immunological barriers.
            </p>
            <h4 className="mt-6 text-3xl font-semibold text-slate-900">
              Modes of Invasion and Movement
            </h4>
            <ul className="mt-3 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700 marker:text-blue-700">
              <li>
                <strong>Collective Invasion:</strong> Cells move as coordinated
                clusters, with leading &quot;tip cells&quot; driving ECM
                rearrangement and focal-adhesion guidance.
              </li>
              <li>
                <strong>Mesenchymal-to-Amoeboid Transition (MAT):</strong>{" "}
                when protease-dependent movement is blocked, cells can switch to
                rapid protease-independent migration through matrix gaps.
              </li>
            </ul>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              <strong>Molecular Mechanism of Intravasation</strong> Tumor cells
              can create endothelial &quot;gates&quot; for transmigration.
              Mammary carcinoma models describe ALOX12/15-derived metabolites
              reducing VE-cadherin and enabling vascular entry.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              <strong>The Role of the Microenvironment</strong> Cancer-associated
              fibroblasts, chemokine signaling loops (e.g., CXCL12/CXCR4), and
              integrin-MMP axis activity coordinate migration and matrix
              remodeling; this supports why single-pathway inhibition often fails.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-5xl font-semibold text-slate-900">
              5. Clinical Evaluation: Grading, Staging, and Screening Principles
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Pathological grading and clinical staging translate molecular
              complexity into a practical management roadmap. Grading reflects
              tumor behavior and differentiation; staging defines disease extent.
            </p>
            <h4 className="mt-6 text-3xl font-semibold text-slate-900">
              Grading and Staging Defined
            </h4>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700 marker:text-blue-700">
              <li><strong>Grading:</strong> Cytological differentiation (e.g., Gleason score).</li>
              <li><strong>Staging:</strong> TNM system (Tumor, Node, Metastasis).</li>
            </ul>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              <strong>Metastatic Models: Linear vs Parallel</strong> Linear
              progression suggests late dissemination; parallel progression
              suggests early spread in select tumors (e.g., ERBB2/HER2-driven
              breast cancer).
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              <strong>The &quot;Seed and Soil&quot; Theory</strong> Organ-specific
              metastasis reflects compatibility between tumor phenotype and target
              tissue microenvironment, guiding surveillance and risk-stratified
              screening strategies.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm">
            <h3 className="text-5xl font-semibold text-slate-900">6. Works Cited</h3>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700 marker:text-blue-700">
              <li>
                Cell Signaling Technology. (2022). Hallmarks of cancer:
                Unlocking phenotypic plasticity.
              </li>
              <li>
                Hanahan, D. (2022). Hallmarks of cancer: New dimensions.{" "}
                <em>Cancer Discovery</em>, 12(1), 31-46.
              </li>
              <li>
                Hanahan, D., &amp; Weinberg, R. A. (2011). Hallmarks of cancer:
                The next generation. <em>Cell</em>, 144(5), 646-674.
              </li>
              <li>
                Koistinen, P., &amp; Heino, J. Integrins in cancer cell
                invasion. Madame Curie Bioscience Database.
              </li>
              <li>
                Pierantoni, C., Cosentino, L., &amp; Ricciardiello, L. (2024).
                Molecular pathways of colorectal cancer development.{" "}
                <em>Digestive Diseases</em>, 42(4), 319-324.
              </li>
              <li>
                van Zijl, F., Krupitza, G., &amp; Mikulits, W. (2011). Initial
                steps of metastasis: Cell invasion and endothelial transmigration.{" "}
                <em>Mutation Research</em>, 728(1-2), 23-34.
              </li>
            </ol>
          </article>

          <div className="rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">Pearl</p>
            <p className="mt-2 text-2xl font-semibold text-slate-800">{details.pearl}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
