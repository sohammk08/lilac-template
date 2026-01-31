import Link from "next/link";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <section className="bg-[#E8E2DE] font-sans">
      <div className="flex flex-col lg:flex-row min-h-150 lg:min-h-170">
        {/* Left section */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#E8E2DE]">
          <div className="flex-1 px-12 lg:px-15 flex flex-col justify-center text-left font-medium space-y-6 text-[#3d4a3d] text-lg leading-relaxed">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">
              Live a fulfilling life.
            </h2>
            <p>
              Life can be challenging—especially when you&apos;re trying to
              balance your personal and professional life.
            </p>
            <p>
              It&apos;s easy to feel like you&apos;re alone in facing these
              challenges, but I want you to know that I&apos;m here to help.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 mt-auto border-t border-[#3d4a3d]/20 text-[#3d4a3d] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#3d4a3d] hover:text-[#E8E2DE] w-full py-6 lg:py-6"
          >
            Get In Touch →
          </Link>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2 relative h-auto">
          <Image
            src="/im2.png"
            alt="Flat lay with lilac flowers, coffee cup, hat, and journal"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
