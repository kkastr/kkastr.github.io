import ProfileHeader from "@/components/profile_header";
import BioSection from "@/components/bio_section";
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ProfileHeader />
      <BioSection />
    </div>
  );
}
