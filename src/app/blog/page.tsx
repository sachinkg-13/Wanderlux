import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, User, Search, Bookmark, ArrowRight, Mail } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Switzerland",
    excerpt: "Discover the less-traveled paths and secret spots that make Switzerland a paradise for adventurous souls.",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
    date: "May 12, 2024",
    author: "Emma Wilson",
    category: "Destinations"
  },
  {
    id: 2,
    title: "A Foodie's Guide to Japanese Street Food",
    excerpt: "From takoyaki to taiyaki, explore the vibrant world of Japanese street food that will tantalize your taste buds.",
    image: "https://images.unsplash.com/photo-1535189043414-47a3c49a0bed",
    date: "April 29, 2024",
    author: "Michael Chen",
    category: "Food & Culture"
  },
  {
    id: 3,
    title: "Packing Essentials for Your Costa Rica Adventure",
    excerpt: "Everything you need to know about what to bring for a perfect Costa Rican exploration, from rainforests to beaches.",
    image: "https://images.unsplash.com/photo-1503756234508-e32369269deb",
    date: "April 15, 2024",
    author: "Carlos Rodriguez",
    category: "Travel Tips"
  },
  {
    id: 4,
    title: "How to Make Friends While Traveling Solo",
    excerpt: "Practical advice for building meaningful connections with fellow travelers and locals during your solo adventures.",
    image: "https://images.unsplash.com/photo-1479660095429-2cf4e1360472",
    date: "March 27, 2024",
    author: "Sarah Johnson",
    category: "Solo Travel"
  },
  {
    id: 5,
    title: "Sustainable Travel: Minimizing Your Footprint",
    excerpt: "Simple ways to make your travels more eco-friendly without sacrificing the quality of your experience.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    date: "March 10, 2024",
    author: "David Thompson",
    category: "Responsible Travel"
  },
  {
    id: 6,
    title: "Photography Tips for Capturing Epic Landscapes",
    excerpt: "Expert advice on how to take stunning landscape photos that will make your friends and family say 'wow'.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    date: "February 25, 2024",
    author: "Jessica Lee",
    category: "Photography"
  }
];

const BlogCategories = () => {
  const categories = [
    { name: "Destinations", count: 12 },
    { name: "Travel Tips", count: 8 },
    { name: "Food & Culture", count: 6 },
    { name: "Solo Travel", count: 7 },
    { name: "Photography", count: 5 },
    { name: "Responsible Travel", count: 4 },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4 text-travel-earth">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.name} className="flex justify-between items-center group cursor-pointer">
            <div className="flex items-center">
              <ArrowRight size={16} className="mr-2 text-travel-teal opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-gray-700 group-hover:text-travel-teal transition-colors">{category.name}</span>
            </div>
            <span className="bg-travel-sand-light/50 text-travel-earth px-2 py-1 rounded-full text-xs">
              {category.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopularPosts = () => {
  const popularPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4 text-travel-earth">Popular Posts</h3>
      <div className="space-y-4">
        {popularPosts.map((post) => (
          <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
            <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 group-hover:text-travel-teal transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4 text-travel-earth">Search</h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full p-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-travel-teal/20 focus:border-travel-teal"
        />
        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

const NewsletterSignup = () => {
  return (
    <div className="bg-travel-teal text-white p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
      <p className="mb-4 text-white/80">Get travel tips and inspiration delivered to your inbox.</p>
      <div className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full p-3 border border-white/20 bg-white/10 rounded-lg placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <button className="flex items-center justify-center bg-white text-travel-teal font-medium py-3 px-4 rounded-lg hover:bg-white/90 transition-colors">
          <Mail size={16} className="mr-2" />
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-travel-earth">Travel Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stories, tips, and inspiration to fuel your wanderlust and enhance your travel experiences.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="bg-travel-teal-light/20 text-travel-teal px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-travel-earth">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <button className="w-full mt-6 py-2 text-travel-teal border border-travel-teal rounded-md hover:bg-travel-teal hover:text-white transition-colors flex items-center justify-center">
                        <span>Read More</span>
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="btn-primary">Load More Articles</button>
              </div>
            </div>

            <div className="lg:w-1/3">
              <SearchBox />
              <BlogCategories />
              <PopularPosts />
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
