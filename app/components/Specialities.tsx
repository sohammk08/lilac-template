import Image from "next/image";

function Specialities() {
  const specialties = [
    {
      title: "Self-Esteem",
      description:
        "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: "/specialty1.png",
    },
    {
      title: "Relationships",
      description:
        "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: "/specialty2.png",
    },
    {
      title: "Burnout",
      description:
        "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: "/specialty3.png",
    },
  ];

  return (
    <section className="bg-[#FDF8F3] font-sans py-20 lg:py-28">
      <div className=" mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-medium text-[#3d4a3d] text-center mb-16 lg:mb-20 tracking-tight">
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
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
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
