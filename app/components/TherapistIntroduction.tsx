import Image from "next/image";
import Link from "next/link";

export default function TherapistIntroduction() {
  return (
    <section className="bg-[#E8E2DE] font-sans pb-20">
      <div className="flex flex-col lg:flex-row justify-between min-h-175 lg:min-h-200 mx-30 space-x-5">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center font-semibold py-16 lg:py-20 order-2 lg:order-1">
          <h2 className="text-5xl lg:text-6xl font-medium text-[#3d4a3d] mb-8 tracking-tight">
            Hi, I&apos;m Lilac.
          </h2>

          <p className="text-[#3d4a3d] text-xl leading-relaxed mb-12">
            I&apos;m committed to providing a safe and supportive environment
            where we can explore your thoughts, feelings, and behaviors. With
            empathy and guidance, we&apos;ll work together to navigate the
            challenges life throws your way.
          </p>

          <Link
            href="/contact"
            className="inline-flex mx-auto items-center gap-3 px-6 py-3 border border-[#3d4a3d] text-[#3d4a3d] text-sm font-semibold uppercase hover:bg-[#3d4a3d] hover:text-[#E8E2DE] transition-all duration-300 w-fit"
          >
            Let&apos;s Chat
            <span>→</span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-start pl-25 order-1 lg:order-2 overflow-visible">
          <div className="relative w-full h-160 max-w-sm lg:max-w-md aspect-3/4 rounded-t-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/holdingflowers.png"
              alt="Lilac holding flowers"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-0 right-0 lg:-right-10 w-45 h-45 lg:w-75 lg:h-75 rounded-full overflow-hidden z-10">
            <Image
              src="/flowers.png"
              alt="White flowers"
              priority
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
