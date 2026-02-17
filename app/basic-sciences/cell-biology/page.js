import SubtopicChaptersPage from "../components/SubtopicChaptersPage";
import { subtopicContent } from "../components/subtopicData";

export default function CellBiologyPage() {
  const content = subtopicContent["cell-biology"];
  return (
    <SubtopicChaptersPage
      title={content.title}
      subtitle={content.subtitle}
      chapters={content.chapters}
    />
  );
}
