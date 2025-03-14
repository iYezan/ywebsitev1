import React, { useState } from 'react';
import { 
  Laptop, 
  Globe, 
  Wrench, 
  Phone, 
  ChevronRight, 
  Monitor, 
  MousePointer2, 
  Headphones, 
  AlertTriangle, 
  Clock, 
  Shield, 
  AlertOctagon,
  PaintBucket,
  Smartphone,
  Zap,
  Image as ImageIcon,
  Timer,
  Bed,
  Sofa,
  Table,
  Tv,
  BookOpen,
  Box,
  Briefcase,
  Star,
  Calculator,
  ExternalLink,
  Hammer,
  Quote
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import QuoteCalculator from './components/QuoteCalculator';

function App() {
  const [showQuoteCalculator, setShowQuoteCalculator] = useState(false);
  const whatsappNumber = '447506676770';
  const whatsappMessage = encodeURIComponent("Hello, I would like to request a quote for your services");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const taskRabbitUrl = 'https://www.taskrabbit.co.uk/profile/hisham-a--4?ref=TRY9T0ME&invitation_source=url';

  const services = [
    {
      title: 'IT Helpdesk Support',
      icon: <Laptop className="w-12 h-12" />,
      description: 'A comprehensive IT Support to fit your organisation\'s outsourced IT requirements. Our IT Help Desk is the heart of our offering.',
      items: [
        { icon: <Monitor />, text: '1st / 2nd Line Support' },
        { icon: <MousePointer2 />, text: 'Desktop "client side" Support' },
        { icon: <Headphones />, text: 'Remote or Onsite Assistance' },
        { icon: <AlertTriangle />, text: 'Efficient Diagnosis & Troubleshooting' },
        { icon: <Clock />, text: 'Aggressive SLA Options' },
        { icon: <Shield />, text: 'Specialist Support for the Tough Stuff' },
        { icon: <AlertOctagon />, text: 'Crisis Management & Support' }
      ]
    },
    {
      title: 'Website Development',
      icon: <Globe className="w-12 h-12" />,
      description: 'Professional web development services tailored to your needs.',
      items: [
        { icon: <PaintBucket />, text: 'Custom design that reflects your brand' },
        { icon: <Smartphone />, text: 'Responsive design for all devices' },
        { icon: <MousePointer2 />, text: 'User-friendly navigation' },
        { icon: <ImageIcon />, text: 'High-quality images and graphics' },
        { icon: <Zap />, text: 'Fast loading times' },
        { icon: <Timer />, text: 'Regular maintenance and updates' }
      ]
    },
    {
      title: 'Furniture Assembly',
      icon: <Wrench className="w-12 h-12" />,
      description: 'Expert furniture assembly service on your time.',
      items: [
        { icon: <BookOpen />, text: 'Wardrobes' },
        { icon: <Bed />, text: 'Bed Frames' },
        { icon: <Box />, text: 'Dressers' },
        { icon: <Tv />, text: 'TV Benches' },
        { icon: <Table />, text: 'Desks' },
        { icon: <Box />, text: 'Storage Units' },
        { icon: <Sofa />, text: 'Sofa & Sofa bed' }
      ]
    }
  ];

  const testimonials = [
    {
      text: "Very professional and efficient. Assembled my furniture perfectly and even helped move some heavy items. Highly recommended!",
      rating: 5,
      author: "Sarah M."
    },
    {
      text: "Great service! Fixed my computer issues quickly and explained everything clearly. Very knowledgeable and professional.",
      rating: 5,
      author: "James K."
    },
    {
      text: "Excellent work on my website. Clean design, fast loading, and exactly what I wanted. Will definitely use again!",
      rating: 5,
      author: "Emma L."
    },
    {
      text: "Second time I have hired Hisham - he is brilliant highly professional and helpful.",
      rating: 5,
      author: "Hannah R."
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 text-[#51af33]" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                TechPro Services
              </span>
            </div>
            <button
              onClick={() => setShowQuoteCalculator(true)}
              className="bg-[#51af33] hover:bg-[#438e2a] text-white font-bold py-2 px-4 sm:py-2.5 sm:px-5 rounded-lg transition duration-300 shadow-lg hover:scale-105 text-sm sm:text-base hidden sm:flex items-center"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=60")',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="relative container mx-auto px-4 min-h-screen flex items-center pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-[#51af33]/10 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
              <span className="text-[#51af33] text-sm sm:text-base font-semibold">Professional Services</span>
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#51af33] rounded-full ml-2" />
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#51af33] rounded-full ml-1" />
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#51af33] rounded-full ml-1" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-gray-900">
              Expert Solutions for Your Needs
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-600">
              Professional IT support, web development, and furniture assembly services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#51af33] hover:bg-[#438e2a] text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition duration-300 shadow-lg hover:scale-105 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Contact via WhatsApp
              </a>
              <button
                onClick={() => setShowQuoteCalculator(true)}
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition duration-300 shadow-lg hover:scale-105 text-sm sm:text-base border-2 border-gray-200"
              >
                <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl hover:transform hover:scale-105 transition duration-300 shadow-xl border border-gray-100 group"
              >
                <div className="text-[#51af33] mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="text-[#51af33] transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Client Testimonials
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#51af33] fill-current" />
                <span className="text-lg sm:text-xl font-bold text-[#51af33]">4.9</span>
                <span className="text-gray-600 text-sm sm:text-base">average rating</span>
              </div>
              <a
                href={taskRabbitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#51af33]/10 rounded-full text-[#51af33] hover:bg-[#51af33]/20 transition-colors duration-300"
              >
                <Hammer className="w-5 h-5" />
                <span className="font-medium">View TaskRabbit Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={48}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 64
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 80
              }
            }}
            className="!px-4 !pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="bg-white rounded-xl p-8 relative shadow-lg border border-gray-100 h-full">
                  <Quote className="absolute top-6 left-6 w-8 h-8 text-[#51af33]/20" />
                  <div className="flex flex-col h-full justify-between">
                    <p className="text-gray-700 text-lg leading-relaxed mb-8 pt-10">
                      {testimonial.text}
                    </p>
                    <div>
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-[#51af33] fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-900 font-semibold text-lg">{testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're here to help you with all your IT, web development, and furniture assembly needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#51af33] hover:bg-[#438e2a] text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact via WhatsApp
            </a>
            <button
              onClick={() => setShowQuoteCalculator(true)}
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:scale-105 border-2 border-gray-200"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {showQuoteCalculator && (
        <QuoteCalculator onClose={() => setShowQuoteCalculator(false)} />
      )}
    </div>
  );
}

export default App;