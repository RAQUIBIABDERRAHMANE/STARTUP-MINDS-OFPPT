import RegistrationForm from "@/components/RegistrationForm";
import { Sparkles, Users, Calendar, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen mesh-gradient relative isolate overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.primary),transparent)]" />
      <div className="absolute top-0 right-0 p-8 text-zinc-500/20 pointer-events-none">
        <Sparkles className="w-64 h-64 rotate-12" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <MotionWrapper>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Next Big Thing In Tech</span>
            </div>
          </MotionWrapper>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            STARTUP <span className="gradient-text">MINDS</span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            The ultimate gathering for tomorrow's innovators. Join us for a day of networking,
            inspiration, and the future of technology.
          </p>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <InfoItem icon={<Calendar className="w-5 h-5" />} text="Coming Soon" />
            <InfoItem icon={<MapPin className="w-5 h-5" />} text="OFPPT Campus" />
            <InfoItem icon={<Users className="w-5 h-5" />} text="Limited Seats" />
          </div>
        </div>

        <section id="register" className="relative">
          <RegistrationForm />
        </section>

        <footer className="mt-24 text-center text-zinc-600 text-sm">
          <p>© 2026 STARTUP MINDS. Powered by OFPPT Innovation Hub.</p>
        </footer>
      </div>
    </main>
  );
}

function InfoItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900/40 px-4 py-2 rounded-full border border-zinc-800">
      <span className="text-indigo-500">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

// Simple wrapper since Framer Motion's motion components can't be used directly in RSC without "use client"
// But the whole page isn't "use client" to benefit from SSR metadata etc.
import { ClientWrapper } from "../components/ClientWrapper";
function MotionWrapper({ children }: { children: React.ReactNode }) {
  return <ClientWrapper>{children}</ClientWrapper>;
}
