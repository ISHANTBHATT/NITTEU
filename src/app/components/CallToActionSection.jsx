import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#1b2b4a] text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="w-16 h-1 bg-white mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Apply to our program today
            </h2>
            <p className="text-white/80 max-w-xl">
              Felis est ante dignissim orci quam nisi justo nibh lorem venenatis
              ipsum pulvinar nunc eu lectus amet aliquet leo lacinia ipsum enim
              nulla massa pellentesque.
            </p>
          </div>

          <Button className="bg-red-600 hover:bg-red-700 text-white">
            ENROLL NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
