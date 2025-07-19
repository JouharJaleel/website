import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '95%', label: 'Client Retention' },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section with Motion */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-600 rounded-2xl -translate-x-6 -translate-y-6 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Our Team" 
              className="rounded-2xl shadow-xl relative z-10 w-full h-auto object-cover"
            />
            
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg z-20">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    viewport={{ once: true }}
                  >
                    <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Content with Motion */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We're a team of digital strategists, creative visionaries, and marketing experts.</h2>
            <p className="text-gray-600 leading-relaxed">
            we are a dynamic team of creative minds passionate about bringing ideas to life. As a forward-thinking startup, we specialize in innovative digital solutions that elevate brands and captivate audiences. From design to strategy, we merge artistic vision with cutting-edge technology to craft impactful experiences. Our mission is to push creative boundaries, delivering top-tier services that make your brand stand out.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { title: "Efficiency", text: "We ensure maximum productivity through efficient solutions and streamlined workflows." },
                { title: "Customer Satisfaction", text: "We prioritize customer satisfaction by delivering exceptional services tailored to your needs." },
                { title: "Transparent Communication", text: "We maintain open and honest communication throughout our partnership." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Learn More About Us
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;
