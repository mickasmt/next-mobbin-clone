"use client";

import { ButtonTag } from "@/components/button-tag";

const categories = [
  "All",
  "Finance",
  "Business",
  "Health & Fitness",
  "Food & Drink",
  "Education",
  "Shopping",
  "Artificial Intelligence",
  "Travel & Transportation",
  "Lifestyle",
  "Entertainment",
  "Communication",
  "Crypto & Web3",
  "CRM",
  "Social Networking",
  "Medical",
];

export default function CarouselButtonsTags() {
  return (
    <section className="relative h-full w-full overflow-x-scroll scrollbar-none gap-1">
      {categories.map((category) => (
        <ButtonTag key={category} title={category} />
      ))}
    </section>
  );
}
