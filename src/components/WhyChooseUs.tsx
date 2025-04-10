// import React from 'react';
// import { Shield, Filter, Users, CheckSquare } from 'lucide-react';

// const features = [
//   {
//     title: "No Third Party Mess",
//     description: "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
//     icon: <Users className="w-10 h-10 text-travel-teal" />
//   },
//   {
//     title: "Transparency & Security",
//     description: "Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!",
//     icon: <Shield className="w-10 h-10 text-travel-teal" />
//   },
//   {
//     title: "Co-Travelers Filtering",
//     description: "Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!",
//     icon: <Filter className="w-10 h-10 text-travel-teal" />
//   },
//   {
//     title: "One Stop Hassle Free Experience",
//     description: "Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!",
//     icon: <CheckSquare className="w-10 h-10 text-travel-teal" />
//   }
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 bg-travel-sand-light/30">
//       <div className="container-custom">
//         <div className="text-center mb-16">
//           <div className="inline-block bg-travel-teal text-white px-6 py-2 rounded-md mb-6 text-xl font-bold">
//             Why WANDERLUX?
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-travel-earth hidden">Why Choose Us</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="mb-6">
//                 <h3 className="text-2xl font-bold mb-3 text-travel-teal">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//               <div className="bg-travel-teal/10 p-6 rounded-full w-20 h-20 flex items-center justify-center">
//                 {feature.icon}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


import { Shield, Award, Heart, CreditCard } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Confidently WANDERLUX</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Travel with trust. Because this is your trip - something you've planned for and
            dreamed about. You should feel confident in your journey every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="bg-green-700 p-10 text-white md:rounded-tl-[40px]">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white p-5 relative">
                <Shield size={42} className="text-green-700" />
                <div className="absolute top-0 right-0 h-4 w-4 bg-yellow-300 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Industry-Leading Travel Protection</h3>
            <p className="text-center">
              Cancel for any reason (bad hair day applies) up to 24 hours before your tour leaves and
              get a full money-back refund. WANDERLUX issued a record-breaking $15 million cash back to
              travelers during the COVID-19 pandemic.
            </p>
          </div>

          <div className="bg-travel-earth p-10 text-white">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white p-5 relative">
                <Award size={42} className="text-travel-earth" />
                <div className="absolute top-0 right-0 h-4 w-4 bg-yellow-300 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Experience & Expertise</h3>
            <p className="text-center">
              We've been doing this for a long time. Since 2010, in fact. WANDERLUX is the most experienced
              and longest-running tour operator in the adventure travel industry. You choose us for our expertise.
            </p>
          </div>

          <div className="bg-sky-100 p-10 md:rounded-tr-[40px]">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-white p-5 relative">
                <Heart size={42} className="text-travel-teal" />
                <div className="absolute top-0 right-0 h-4 w-4 bg-yellow-300 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-travel-earth">Traveling Well</h3>
            <p className="text-center text-gray-700">
              Our team is on the pulse of world events and protocols, so you are kept fully aware and feel
              well-prepared for your trip. We ensure your safety is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;