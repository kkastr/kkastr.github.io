import type { MetaFunction } from "react-router";
import ProfileHeader from "~/components/profile_header";
import BioSection from "~/components/bio_section";
import ProjectSection from "~/components/featured_projects";

export const meta: MetaFunction = () => {
  const title = "Konstantinos Kastritis | Applied ML Engineer & Data Scientist";
  const description =
    "Applied ML Engineer and Data Scientist building production LLM systems, data pipelines, and scientific machine learning tools.";
  const siteUrl = "https://kastritis.dev";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: siteUrl },
    { property: "og:image", content: `${siteUrl}/favicon.ico` },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${siteUrl}/favicon.ico` },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <ProfileHeader />
      <BioSection />
      <ProjectSection />
    </div>
  );
}
