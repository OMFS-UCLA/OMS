import { notFound } from "next/navigation";
import SubtopicChaptersPage from "../components/SubtopicChaptersPage";
import { subtopicContent } from "../components/subtopicData";

export function generateStaticParams() {
  return Object.keys(subtopicContent).map((subtopic) => ({ subtopic }));
}

export default async function BasicScienceSubtopicPage({ params }) {
  const resolvedParams = await params;
  const subtopic = resolvedParams?.subtopic;
  const content = subtopicContent[subtopic];

  if (!content) {
    notFound();
  }

  return (
    <SubtopicChaptersPage
      title={content.title}
      subtitle={content.subtitle}
      chapters={content.chapters}
    />
  );
}
