import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const categories = ['All', 'Digital Marketing', 'Web Designing', 'Motion Graphics', 'Video Editing', 'Graphics Designing', '3D Modeling'];

const projects = [
  {
    title: 'TechVision Rebrand',
    category: 'Web Designing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
    description: 'Complete digital transformation for a leading tech company.',
  },
  {
    title: 'GreenEarth Campaign',
    category: 'Motion Graphics',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Sustainability-focused content strategy that increased engagement.',
  },
  {
    title: 'LuxuryStay SEO',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    description: 'Comprehensive SEO strategy for a luxury hotel chain.',
  },
  {
    title: 'FitLife Social',
    category: 'Graphics Designing',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    description: 'Social media campaign that grew brand following by 300%.',
  },
  {
    title: 'EcoShop PPC',
    category: '3D Modeling',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Targeted PPC campaign with a 400% ROI for an eco-friendly store.',
  },
  {
    title: 'FinTech Revolution',
    category: 'Video Editing',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Educational content series for a fintech thought leader.',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-indigo-600 font-medium">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Featured Projects</h2>
          <p className="text-gray-600">
            Explore our recent work and see how we've helped businesses achieve their goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? "bg-indigo-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true} // ✅ Infinite Loop
          speed={1000} // ✅ Smooth transition speed
          autoplay={{ delay: 2000, disableOnInteraction: false }} // ✅ Auto-slide enabled
          modules={[Autoplay, Navigation, Pagination]}
          navigation={false}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="portfolio-carousel"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-2xl shadow-md bg-white">
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-center text-sm px-4">{project.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-indigo-600">{project.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{project.title}</h3>
                  <a href="#" className="inline-flex items-center text-indigo-600 font-medium mt-4 hover:text-indigo-700">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;