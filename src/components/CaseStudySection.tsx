import { FaStore, FaIndustry, FaWallet } from "react-icons/fa";

const CaseStudySection = () => {
  return (
    <section className="bg-yellow-50 py-20 px-6 text-center">
      <h3 className="text-2xl md:text-3xl font-semibold mb-2">
        Transforming Businesses, <span className="text-yellow-500">DrivingReal Impact</span>
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        See how our integrated approach has helped Nigerian and West African businesses achieve sustainable growth and market success.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: <FaStore className="text-yellow-500" />,
            title: "E-commerce Retail",
            result: "40% Conversions • 25% CAC",
            note: "40% increase in leads + 25% reduction in customer acquisition costs.",
          },
          {
            icon: <FaIndustry className="text-yellow-500" />,
            title: "Manufacturing",
            result: "15% Waste • 30% Efficiency",
            note: "Reduced waste and improved delivery by 30% through workflow optimization.",
          },
          {
            icon: <FaWallet className="text-yellow-500" />,
            title: "FinTech Startup",
            result: "200% Revenue • $2M Series A",
            note: "Scaled from MVP to successful Series A through GTM strategy.",
          },
        ].map(({ icon, title, result, note }, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 space-y-3">
            <div className="flex items-center justify-center text-3xl">{icon}</div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-gray-500">{note}</p>
            <span className="block font-bold text-yellow-500">{result}</span>
          </div>
        ))}
      </div>

      <h4 className="text-xl font-semibold mb-4">
        Thought Leadership for the <span className="text-yellow-500">African Business Landscape</span>
      </h4>
      <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm">
        Stay ahead with our insights, case studies, and tailored strategies for Nigerian and West African markets.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {[
          "RevOps 101: The Guide for Nigerian SMEs",
          "5 GTM Mistakes to Avoid When Expanding in West Africa",
          "Case Study: How Process Optimization Transformed a Lagos-Based Manufacturer",
        ].map((title, i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-left text-sm">
            <h5 className="font-semibold text-gray-800">{title}</h5>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded font-medium hover:bg-yellow-600">
          Explore All Case Studies
        </button>
        <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded font-medium hover:bg-yellow-100">
          Visit Our Insights Hub
        </button>
      </div>
    </section>
  );
};

export default CaseStudySection;
