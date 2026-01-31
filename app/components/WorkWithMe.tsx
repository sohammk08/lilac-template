import Link from "next/link";
import Image from "next/image";

function WorkWithMe() {
  return (
    <section className="bg-[#E8E2DE] font-sans">
      <div className="flex flex-col lg:flex-row min-h-150 lg:min-h-200">
        {/* Left section */}
        <div className="w-full lg:w-1/2 relative h-auto">
          <Image
            src="/workwithme.png"
            alt=""
            fill
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center bg-[#E8E2DE]">
          <div className="flex-1 px-12 lg:px-15 flex flex-col justify-center text-left font-medium space-y-6 text-[#3d4a3d] text-lg leading-relaxed">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">
              You don&apos;t have to do this all <i>alone</i>.
            </h2>
            <p>If you are facing any of these, there&apos;s hope:</p>
            <div className="ml-10 space-y-2">
              <li className="list-disc list-inside">
                Persistent feelings of sadness or hopelessness
              </li>
              <li className="list-disc list-inside">
                Trouble focusing or making decisions
              </li>
              <li className="list-disc list-inside">
                Difficulty maintaining relationships
              </li>
              <li className="list-disc list-inside">
                Feeling constantly exhausted or unmotivated
              </li>
              <li className="list-disc list-inside">
                A pervasive sense of being overwhelmed
              </li>
            </div>
            <p>
              With empathy and guidance, we&apos;ll work together to navigate
              the challenges life throws your way.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 mt-auto border-t border-[#3d4a3d]/20 text-[#3d4a3d] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#3d4a3d] hover:text-[#E8E2DE] w-full py-6 lg:py-6"
          >
            Work With Me →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorkWithMe;
