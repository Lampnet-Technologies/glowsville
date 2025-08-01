import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <section className="text-white py-20 px-6 text-center" id="ContactCTA" style={{ backgroundImage: 'url(/assets/contactcta-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-3xl font-semibold mb-4">Ready to Scale Sustainably? Let&apos;s Talk.</h2>
      <p className="max-w-2xl mx-auto mb-8">
        Whether you&apos;re an MsME, SME, or Mid-Sized Corporate in Nigeria or West Africa, we&apos;re here to help you optimize your processes, supercharge your revenue, and expand your market with resilience.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
        <button className="bg-white text-yellow-500 px-6 py-3 rounded font-bold hover:bg-gray-100">
          Schedule Your Strategic Consultation
        </button>
        <button className="bg-yellow-700 px-6 py-3 rounded font-bold hover:bg-yellow-800">
          View Success Stories
        </button>
      </div>

    {/*   <div className="flex flex-col md:flex-row justify-center gap-8 text-sm mt-6">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>+234 [Your Number]</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>contact@gloryvillesolutions.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <span>Lagos, Nigeria</span>
        </div>
      </div> */}
    </section>
  );
};

export default ContactCTA;
