import { Star, Quote } from 'lucide-react';
import FadeMotion from './FadeMotion';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "Working with DigitalPulse transformed our online presence. Their strategic approach to SEO and content marketing increased our organic traffic by 200% in just six months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GreenEarth Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "The team at DigitalPulse doesn't just deliver results; they become true partners in your business growth. Their data-driven approach and creative strategies have been instrumental in our success.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "E-commerce Manager",
      company: "LuxuryStay Hotels",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      quote: "The PPC campaign DigitalPulse created for us delivered an ROI of 400%. Their attention to detail and continuous optimization made all the difference in our digital advertising efforts.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeMotion direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-indigo-600 font-medium">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with DigitalPulse.
            </p>
          </div>
        </FadeMotion>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeMotion key={index} direction="up" delay={index * 0.2}>
              <div className="bg-gray-50 p-8 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-indigo-100" />
                
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </FadeMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;