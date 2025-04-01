import { Users, CreditCard, Clipboard, User } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Trips for all travellers</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Whatever your situation, whichever destination - if you're looking
            for a good time, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="feature-card flex gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex-shrink-0">
              <Users size={48} className="text-travel-teal" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-travel-earth">Like Minded Travellers</h3>
              <p className="text-gray-600">
                Joining solo or in a group, you're never alone. Come meet your new squad of best
                friends you never knew you had.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card flex gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex-shrink-0">
              <CreditCard size={48} className="text-travel-teal" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-travel-earth">All Inclusive & Hassle Free</h3>
              <p className="text-gray-600">
                No more worrying about the transportation, hotels & itineraries. One
                booking and we've got you all covered.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card flex gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex-shrink-0">
              <Clipboard size={48} className="text-travel-teal" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-travel-earth">Bucket list experiences</h3>
              <p className="text-gray-600">
                Curated by experts who've been there done that. Local food, travel icons, unique
                experiences, everything is hand picked.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card flex gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex-shrink-0">
              <User size={48} className="text-travel-teal" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-travel-earth">Led by Experts</h3>
              <p className="text-gray-600">
                Trip leaders & local guides who are smart, fun & experienced. Top suggestions and
                support you need along the way.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Who We Are</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
