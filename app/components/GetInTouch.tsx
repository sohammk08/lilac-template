import Link from "next/link";
import Image from "next/image";

function GetInTouch() {
  return (
    <section className="bg-[#E8E2DE] font-sans">
      <div className="flex flex-col lg:flex-row min-h-150 lg:min-h-175">
        {/* Left section - Content */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#E8E2DE] order-2 lg:order-1">
          <div className="flex-1 px-6 sm:px-10 lg:px-16 py-12 lg:py-0 flex flex-col justify-center text-left font-medium space-y-6 text-[#3d4a3d] text-base sm:text-lg leading-relaxed">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
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
            className="flex items-center justify-center gap-3 border-t border-[#3d4a3d]/20 text-[#3d4a3d] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#3d4a3d] hover:text-[#E8E2DE] w-full py-5 sm:py-6"
          >
            Get In Touch <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right section - Image */}
        <div className="w-full lg:w-1/2 relative h-100 sm:h-125 lg:h-auto order-1 lg:order-2">
          <Image
            src="/im2.png"
            alt="Flat lay with lilac flowers, coffee cup, hat, and journal"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
