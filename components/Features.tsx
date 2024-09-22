import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Adjust the import path based on your folder structure
import { CheckCircleIcon } from "lucide-react"; // Using lucide-react icons which is commonly used with shadcn-ui

const features = [
  {
    title: "Quick Search",
    description:
      "Easily search through all your previous translations, ensuring you find exactly what you need in seconds.",
  },
  {
    title: "Consistent Translation Memory",
    description:
      "Keep a history of all translations to maintain consistency across different projects and tasks.",
  },
  {
    title: "Document Management",
    description:
      "Upload and manage translation tasks directly from Microsoft Word files for seamless integration.",
  },
  {
    title: "Efficient Reuse",
    description:
      "Reuse previous translations to speed up your workflow and reduce repetitive tasks.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Intuitive design that makes managing and tracking your translations easy and efficient.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-cyan-600/5 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Explore Our Key Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex transform flex-col items-start rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 dark:bg-gray-800"
            >
              <CardHeader className="flex items-center gap-2">
                <CheckCircleIcon className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useState } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
// import Image from "next/image";
// const featuredPlaces = [
//   {
//     title: "Paris, France",
//     description: "The City of Light",
//     image: "/placeholder.svg?height=400&width=600",
//     rating: 4.8,
//   },
//   {
//     title: "Tokyo, Japan",
//     description: "Where tradition meets future",
//     image: "/placeholder.svg?height=400&width=600",
//     rating: 4.9,
//   },
//   {
//     title: "New York City, USA",
//     description: "The Big Apple",
//     image: "/placeholder.svg?height=400&width=600",
//     rating: 4.7,
//   },
//   {
//     title: "Rome, Italy",
//     description: "The Eternal City",
//     image: "/placeholder.svg?height=400&width=600",
//     rating: 4.6,
//   },
// ];
// export default function Featured() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPlaces.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + featuredPlaces.length) % featuredPlaces.length
//     );
//   };
//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 ">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
//           Featured Destinations
//         </h2>
//         <div className="relative">
//           <div className="flex overflow-hidden">
//             {featuredPlaces.map((place, index) => (
//               <div
//                 key={index}
//                 className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${
//                   index === currentIndex ? "opacity-100" : "opacity-0"
//                 }`}
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//               >
//                 <Card className="w-full max-w-md mx-auto">
//                   <CardHeader>
//                     <CardTitle>{place.title}</CardTitle>
//                     <CardDescription>{place.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <Image
//                       src={
//                         "https://images.unsplash.com/photo-1705917950934-7efe2b6866cc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                       }
//                       width={600}
//                       height={400}
//                       alt={place.title}
//                       className="w-full h-64 object-cover rounded-md"
//                     />
//                   </CardContent>
//                   <CardFooter className="flex justify-between">
//                     <span className="text-sm text-gray-500">
//                       Rating: {place.rating}/5
//                     </span>
//                     <Button variant="outline">Learn More</Button>
//                   </CardFooter>
//                 </Card>
//               </div>
//             ))}
//           </div>
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute top-1/2 left-4 transform -translate-y-1/2"
//             onClick={prevSlide}
//           >
//             <ChevronLeftIcon className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute top-1/2 right-4 transform -translate-y-1/2"
//             onClick={nextSlide}
//           >
//             <ChevronRightIcon className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
