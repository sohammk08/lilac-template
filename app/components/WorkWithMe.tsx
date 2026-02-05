import Link from "next/link";
import Image from "next/image";

function WorkWithMe() {
  return (
    <section className="font-sans">
      <div className="flex flex-col lg:flex-row min-h-150 lg:min-h-200">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 relative h-75 lg:h-auto">
          <Image
            src="/workwithme.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col bg-[#c2becb] text-[#214321]">
          <div className="flex-1 font-medium px-6 sm:px-10 lg:px-12 xl:px-16 py-10 lg:py-12 flex flex-col justify-center space-y-5 text-base lg:text-lg leading-relaxed">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              You don&apos;t have to do this all <i>alone</i>.
            </h2>

            <p>
              If any of these feel familiar, know that change and relief are
              possible:
            </p>

            <ul className="ml-5 sm:ml-8 space-y-2 list-disc">
              <li>
                Constant worry, overthinking or feeling &quot;on edge&quot;
              </li>
              <li>Trouble sleeping or waking up already tense.</li>
              <li>
                Physical symptoms of anxiety (tight chest, racing heart,
                fatigue)
              </li>
              <li>Feeling stuck, numb or disconnected from yourself</li>
              <li>
                Lingering effects of past trauma or difficult life experiences
              </li>
              <li>
                Professional burnout, perfectionism, or chronic high-pressure
              </li>
            </ul>

            <p>
              With empathy, structure, and evidence-based tools, we&apos;ll work
              together to help you feel more grounded and present in your life.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 mt-auto border-t border-[#3d4a3d]/20 text-[#3d4a3d] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#3d4a3d] hover:text-[#E8E2DE] w-full py-6"
          >
            Work With Me →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorkWithMe;
