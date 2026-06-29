import Image from "next/image";
import SchoolPic from "@/public/my-school.jpg";

const MySchool = () => {
  return (
    <section className="py-5">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-400">
            My School
          </span>

          <h2 className="mt-5 text-[28px] font-bold text-white md:text-5xl">
            Future Pilot... Currently in 7th Class 😎
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-400">
            Currently studing in class 7. RAM: Unlimited Energy⚡Battery: 100% until homework starts.😂
          </p>
        </div>

        {/* Card */}
        <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
          {/* Image */}
          <div className="relative h-[250px] overflow-hidden md:h-[550px]">
            <Image
              src={SchoolPic}
              alt="My School"
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySchool;