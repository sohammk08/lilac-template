"use client";
import { motion } from "framer-motion";

function Specialities() {
  const specialties = [
    {
      title: "Anxiety & Panic",
      description:
        "Understanding and easing worry, racing thoughts, panic symptoms and the physical effects of anxiety.",
      image: "/specialty1.png",
    },
    {
      title: "Trauma & PTSD",
      description:
        "Support tailored to help you heal from past experiences, whether from a single event or ongoing trauma, and how they impact your life, relationships, and sense of self today.",
      image: "/specialty2.png",
    },
    {
      title: "Burnout & Perfectionism",
      description:
        "Helping high-achieving professionals, entrepreneurs, and creatives recover from chronic stress, reconnect with themselves, and build healthier boundaries and rhythms.",
      image: "/specialty3.png",
    },
  ];

  return (
    <section className="bg-[#FDF8F3] font-sans py-20 lg:py-28">
      <div className=" mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-semibold text-[#3d4a3d] text-center mb-16 lg:mb-20 tracking-tight">
          My Specialities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="border border-[#3d4a3d] font-medium bg-[#E8E2DE] p-5 flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold text-[#3d4a3d] mb-6">
                {item.title}
              </h3>
              <p className="text-[#3d4a3d] text-sm leading-relaxed mb-8 grow">
                {item.description}
              </p>
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specialities;
