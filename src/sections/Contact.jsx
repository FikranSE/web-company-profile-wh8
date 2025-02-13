
import { Phone, Mail, MapPin } from 'lucide-react';

const contactData = {
  support: {
    phone: "+123 456 78 90",
    email: "support@mail.com"
  },
  sales: {
    phone: "+123 456 78 90",
    email: "support@mail.com"
  },
  mapEmbedCode: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.176933476559!2d-122.08424948468109!3d37.42199927982598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba0fb6602f65%3A0x72b35f8d81b8a0b6!2sGoogleplex!5e0!3m2!1sen!2sus!4v1631832726424!5m2!1sen!2sus"
};

const ContactInfo = ({ title, phone, email }) => (
  <div className="mb-6">
    <h3 className="text-gray-700 font-semibold mb-4">{title}</h3>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-sky-600" />
        <span className="text-gray-600 text-sm">{phone}</span>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-sky-600" />
        <span className="text-gray-600 text-sm">{email}</span>
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Information Side */}
        <div className="w-full lg:w-1/3 flex flex-col">
          {/* CONTACT Header */}
          <div className="bg-sky-600 p-6 rounded-lg shadow-lg mb-4 transform transition duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-white" />
              <h2 className="text-white text-2xl font-bold">CONTACT</h2>
            </div>
          </div>
          
          {/* Contact Details Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 transform transition duration-300 hover:shadow-xl">
            {/* Support Section */}
            <ContactInfo 
              title="Support"
              phone={contactData.support.phone}
              email={contactData.support.email}
            />

            {/* Sales Section */}
            <ContactInfo 
              title="Sales"
              phone={contactData.sales.phone}
              email={contactData.sales.email}
            />

            {/* Contact Button */}
            <button className="mt-6 w-full bg-sky-600 text-white py-3 px-6 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Contact us</span>
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 flex flex-col">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[300px] sm:h-[400px] md:h-[600px] lg:h-[600px] transform transition duration-300 hover:shadow-xl">
            <iframe
              src={contactData.mapEmbedCode}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;