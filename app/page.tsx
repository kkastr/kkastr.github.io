import ProfileHeader from "@/components/profile_header";
import BioSection from "@/components/bio_section";
import ProjectSection from "@/components/featured_projects";
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ProfileHeader />
      <BioSection />
      <ProjectSection />
    </div>
  );
}
