import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-[#FDF8F3] w-full min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 mt-20 sm:px-8 lg:px-12 py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-42">
          {/* Image */}
          <div className="relative w-full max-w-70 sm:max-w-[320px] md:max-w-95 lg:max-w-md xl:max-w-xl aspect-3/4 lg:aspect-4/6 rounded-t-full overflow-hidden shrink-0">
            <Image
              src="/im1.png"
              alt="Woman holding lilac flowers"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 28rem, 36rem"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-[#3d4a3d] text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight tracking-tight mb-6">
              Live your life
              <br />
              in full bloom
            </h1>
            <p className="text-[#3d4a3d] text-base sm:text-lg md:text-xl font-medium mb-8 max-w-xl">
              Therapy for Adults in Minneapolis, MN.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 border border-[#3d4a3d] text-[#3d4a3d] text-sm sm:text-base font-semibold tracking-wider uppercase hover:bg-[#3d4a3d] hover:text-[#FDF8F3] transition-all duration-300"
            >
              CONNECT WITH ME
              <span className="text-lg sm:text-xl" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
