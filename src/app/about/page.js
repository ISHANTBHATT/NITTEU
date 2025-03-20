import AboutSection from "../components/AboutSection";
import CallToActionSection from "../components/CallToActionSection";
import LeadershipSection from "../components/LeadershipSection";
import StaffSection from "../components/StaffSection";
import ValuesSection from "../components/ValuesSection";

export default function Home() {
  return (
    <main className="min-h-screen pt-10">
      <AboutSection />
      <ValuesSection />
      <LeadershipSection />
      <StaffSection />
      <CallToActionSection />
    </main>
  );
}
