import { FaChartLine, FaRocket, FaUsers, FaLeaf, FaCogs, FaLightbulb } from "react-icons/fa";

const ServicesOverview = () => {
  return (
    <section className="bg-white py-20 px-6">
      {/* Top 3 cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          {
            title: "Streamline Your Operations",
            points: ["Process Optimization", "Workflow Automation", "Performance Metrics"],
            icon: <FaCogs size={24} className="text-yellow-500" />,
          },
          {
            title: "Unify & Accelerate Your Revenue",
            points: ["Sales Alignment", "Marketing Integration", "Customer Service Unity"],
            icon: <FaChartLine size={24} className="text-yellow-500" />,
          },
          {
            title: "Conquer Your Market",
            points: ["Market Research", "Strategic Positioning", "Launch Planning"],
            icon: <FaRocket size={24} className="text-yellow-500" />,
          },
        ].map(({ title, points, icon }, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 space-y-4 border hover:shadow-lg transition">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-100 p-2 rounded-full">{icon}</div>
              <h4 className="font-semibold text-gray-800">{title}</h4>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
            <span className="text-yellow-500 text-sm font-medium cursor-pointer">Learn More →</span>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center my-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded transition">
          View All Services
        </button>
      </div>

      {/* EconomicMobility & Climate Resilience */}
      <div className="text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Fostering <span className="text-yellow-500">EconomicMobility</span> & Climate Resilience
        </h3>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We are committed to driving economic growth by empowering the engines of our economy—SMEs and MSMEs.
          True growth is sustainable growth.
        </p>
      </div>

      {/* Orange Stat Boxes */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-yellow-400 text-white rounded-lg p-6 shadow space-y-4">
          <h4 className="text-lg font-semibold">Empowering Businesses, Creating Jobs</h4>
          <p>
            We are committed to driving economic growth by empowering SMEs and MSMEs...
          </p>
          <div className="flex justify-between font-bold">
            <span>750+<br />Jobs Created</span>
            <span>$5B+<br />Economic Generated</span>
          </div>
        </div>
        <div className="bg-orange-500 text-white rounded-lg p-6 shadow space-y-4">
          <h4 className="text-lg font-semibold">Building Sustainable & Resilient Operations</h4>
          <p>
            Our BPM approach reduces waste, improves resource and energy efficiency, and builds environmentally responsible supply chains.
          </p>
          <div className="flex justify-between font-bold">
            <span>40%<br />Waste Reduction</span>
            <span>25<br />Green Initiatives</span>
          </div>
        </div>
      </div>

      {/* Bottom 4 Benefits */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold mb-6">
          The GloryVille Advantage: Holistic, Local, Sustainable
        </h3>
        <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-700">
          {[
            {
              icon: <FaCogs size={22} className="text-yellow-500 mx-auto" />,
              label: "Integrated Specialization",
              desc: "We deliver holistic strategy + execution in key business areas.",
            },
            {
              icon: <FaUsers size={22} className="text-yellow-500 mx-auto" />,
              label: "Deep African Contextualization",
              desc: "Strategies shaped by deep market insight across West Africa.",
            },
            {
              icon: <FaChartLine size={22} className="text-yellow-500 mx-auto" />,
              label: "Focus on Measurable ROI",
              desc: "We prioritize clear metrics, profit, and scalable results.",
            },
            {
              icon: <FaLightbulb size={22} className="text-yellow-500 mx-auto" />,
              label: "Innovative",
              desc: "We recommend the best-fit solutions & technology to deliver impact.",
            },
          ].map(({ icon, label, desc }, i) => (
            <div key={i} className="space-y-2">
              {icon}
              <h4 className="font-semibold">{label}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
