import Image from "next/image";

const ImpactSection = () => {
  return (
    <section className="py-16 px-6 bg-white flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">
          Your Partner for{" "}
          <span className="text-yellow-500">Integrated Growth</span> & Sustainable Impact
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          In Nigeria’s dynamic economy, we are the strategic partner helping Nigerian and West African
          businesses to thrive — combining innovation, strategy, and deep market understanding.
        </p>
        <button className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 transition">
          Learn About Our Impact
        </button>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/assets/chart-laptop.png"
          alt="Growth Chart"
          width={500}
          height={350}
          className="rounded-lg shadow"
        />
      </div>
    </section>
  );
};

export default ImpactSection;
