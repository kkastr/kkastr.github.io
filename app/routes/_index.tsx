import type { MetaFunction } from "react-router";
import ProfileHeader from "~/components/profile_header";
import BioSection from "~/components/bio_section";
import ProjectSection from "~/components/featured_projects";

export const meta: MetaFunction = () => {
  return [
    { title: "kkastr - home" },
    { name: "description", content: "Portfolio website" },
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
