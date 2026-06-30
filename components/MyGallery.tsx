import Image from "next/image";

import College1 from "@/public/images.png";
import College2 from "@/public/image1.jpg";
import College3 from "@/public/image2.png";
import College4 from "@/public/image3.jpg";
import College5 from "@/public/image1.jpg";

const images = [College1, College2, College3, College4, College5];

export default function CollegeGallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            Mission Log 🚀
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Life Outside the Classroom
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Certified expert in rating mango shakes, chocolate lassi, street
            food, and taking random photos wherever I go.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image}
                  alt={`College ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
