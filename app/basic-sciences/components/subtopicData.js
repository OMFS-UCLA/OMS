const defaultImages = [
  "/cellorganelles1.png",
  "/immuno1.png",
  "/pathology1.png",
  "/logo.png",
  "/logo2.png",
  "/logo_nobackground.png",
];

function chapter(id, title, desc, icon, bgImage, href = "#") {
  return { id, title, desc, icon, bgImage, href };
}

export const subtopicContent = {
  "cell-biology": {
    title: "Cell Biology",
    subtitle: "Foundational and clinical cell biology topics.",
    chapters: [
      chapter(1, "Cell Structure & Organization", "Types of cells, organelles, cytoskeleton, and extracellular matrix.", "🧫", defaultImages[0]),
      chapter(2, "Cell Membrane & Transport", "Membrane structure, passive and active transport, ion channels.", "🫧", defaultImages[4]),
      chapter(3, "Organelles", "Nucleus, mitochondria, ER, Golgi apparatus, and lysosomes.", "🔬", defaultImages[5]),
      chapter(4, "Cell Signaling", "Signal transduction pathways and intracellular communication.", "📡", defaultImages[1]),
      chapter(5, "DNA, RNA & Protein Synthesis", "Replication, transcription, translation, and protein folding.", "🧪", defaultImages[2]),
      chapter(6, "Cell Cycle & Division", "Mitosis, meiosis, checkpoints, and cycle control.", "🔁", defaultImages[3]),
    ],
  },
  immunology: {
    title: "Immunology",
    subtitle: "Core immunology principles relevant to OMFS and clinical medicine.",
    chapters: [
      chapter(1, "Innate Immunity", "Barriers, complement, neutrophils, and macrophage responses.", "🛡️", defaultImages[1]),
      chapter(2, "Adaptive Immunity", "B-cell and T-cell activation, specificity, and memory.", "🧬", defaultImages[4]),
      chapter(3, "Antigen Presentation", "MHC pathways and cellular signaling in antigen display.", "🔎", defaultImages[5]),
      chapter(4, "Inflammation & Cytokines", "Key cytokines, chemokines, and inflammatory cascades.", "🔥", defaultImages[2]),
      chapter(5, "Hypersensitivity", "Type I-IV reactions and immune-mediated pathology.", "⚠️", defaultImages[3]),
      chapter(6, "Clinical Immunology", "Immunologic disorders and perioperative implications.", "🏥", defaultImages[0]),
    ],
  },
  pathology: {
    title: "Pathology",
    subtitle: "Pathology foundations for diagnosis, treatment planning, and surgery.",
    chapters: [
      chapter(1, "Cell Injury & Adaptation", "Reversible and irreversible injury, adaptation patterns.", "🧪", defaultImages[2]),
      chapter(2, "Acute & Chronic Inflammation", "Tissue response, mediators, and progression patterns.", "🩺", defaultImages[3]),
      chapter(3, "Wound Healing", "Regeneration, repair, fibrosis, and healing phases.", "🩹", defaultImages[0]),
      chapter(4, "Hemodynamic Disorders", "Edema, thrombosis, embolism, infarction, and shock.", "🫀", defaultImages[4]),
      chapter(5, "Neoplasia Basics", "Benign vs malignant change and tumor biology.", "🔬", defaultImages[1]),
      chapter(6, "Oral Pathology Cases", "Case-based pathology patterns in OMFS practice.", "📚", defaultImages[5]),
    ],
  },
  "hematology-oncology": {
    title: "Hematology-Oncology",
    subtitle: "Blood disorders and oncology principles relevant to OMFS care.",
    chapters: [
      chapter(1, "Hematopoiesis", "Bone marrow biology and blood cell line development.", "🩸", defaultImages[4]),
      chapter(2, "Anemia Workup", "Classification and diagnostic framework for anemia.", "🧾", defaultImages[5]),
      chapter(3, "Coagulation", "Platelet and clotting pathways in surgical care.", "🧬", defaultImages[3]),
      chapter(4, "Leukemias & Lymphomas", "Clinical patterns, staging, and therapeutic overview.", "🧫", defaultImages[1]),
      chapter(5, "Solid Tumor Biology", "Oncogenesis and tumor spread principles.", "🎯", defaultImages[2]),
      chapter(6, "Perioperative Oncology", "Surgical implications and treatment sequencing.", "🏥", defaultImages[0]),
    ],
  },
  "inflammation-healing": {
    title: "Inflammation and Healing",
    subtitle: "Mechanisms of inflammation and tissue repair in surgical contexts.",
    chapters: [
      chapter(1, "Acute Inflammatory Response", "Vascular and cellular events in acute inflammation.", "⚡", defaultImages[3]),
      chapter(2, "Chronic Inflammation", "Persistent inflammation and tissue remodeling.", "♻️", defaultImages[1]),
      chapter(3, "Mediators of Inflammation", "Histamine, prostaglandins, cytokines, and cascades.", "🧪", defaultImages[4]),
      chapter(4, "Phases of Wound Healing", "Hemostasis, proliferation, and maturation timelines.", "🩹", defaultImages[0]),
      chapter(5, "Impaired Healing", "Infection, ischemia, systemic factors, and risks.", "⚠️", defaultImages[2]),
      chapter(6, "Healing in OMFS", "Soft tissue and bone healing in maxillofacial surgery.", "🦷", defaultImages[5]),
    ],
  },
  microbiology: {
    title: "Microbiology",
    subtitle: "Microbial fundamentals and infection control for OMFS practice.",
    chapters: [
      chapter(1, "Bacterial Classification", "Morphology, staining, growth, and virulence.", "🦠", defaultImages[5]),
      chapter(2, "Viral Principles", "Viral structure, replication, and host interaction.", "🧫", defaultImages[1]),
      chapter(3, "Fungal & Parasitic Infections", "Major organisms and diagnostic principles.", "🔬", defaultImages[2]),
      chapter(4, "Biofilms", "Biofilm biology in oral and implant-related disease.", "🪥", defaultImages[0]),
      chapter(5, "Antimicrobial Stewardship", "Selection, resistance, and therapy optimization.", "💊", defaultImages[4]),
      chapter(6, "Infection Control", "Sterilization protocols and operative prevention.", "🧼", defaultImages[3]),
    ],
  },
  "microbiology-essentials": {
    title: "Microbiology Essentials",
    subtitle: "High-yield microbiology concepts for clinical and board review.",
    chapters: [
      chapter(1, "Essential Bacteria", "Core bacteria, Gram patterns, and clinical relevance.", "🦠", defaultImages[5]),
      chapter(2, "Essential Viruses", "High-yield viruses and pathogenesis clues.", "🧬", defaultImages[1]),
      chapter(3, "Key Antimicrobials", "Mechanisms, side effects, and OMFS use-cases.", "💊", defaultImages[4]),
      chapter(4, "Oral Infections", "Common odontogenic and maxillofacial infections.", "🦷", defaultImages[0]),
      chapter(5, "Rapid Diagnostics", "Culture, PCR, susceptibility, and interpretation.", "📈", defaultImages[2]),
      chapter(6, "Case Review", "Integrated case-based microbiology decision-making.", "🧠", defaultImages[3]),
    ],
  },
};
