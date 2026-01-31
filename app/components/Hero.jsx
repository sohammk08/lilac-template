import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-[#FDF8F3] w-full min-h-screen items-center">
      <div className="mx-auto pl-15 pt-10 text-center space-x-45 flex items-center">
        <div className="relative w-full max-w-md lg:max-w-xl aspect-4/6 rounded-t-full overflow-hidden">
          <Image
            src="/im1.png"
            alt="Woman holding lilac flowers"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        <div>
          <h1 className="text-[#3d4a3d] text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-8">
            Live your life
            <br />
            in full bloom
          </h1>
          <p className="text-[#3d4a3d] text-lg sm:text-xl font-medium mb-8 lg:mb-8 max-w-2xl mx-auto">
            Therapy for Adults in Minneapolis, MN.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-2 border border-[#3d4a3d] text-[#3d4a3d] text-base font-semibold tracking-wider uppercase hover:bg-[#3d4a3d] hover:text-[#FDF8F3] transition-all duration-300"
          >
            CONNECT WITH ME
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
