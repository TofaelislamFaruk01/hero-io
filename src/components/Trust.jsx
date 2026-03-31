

const Trust = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-500  text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats container */}
        <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-20 max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div>
            <p className="  text-sm opacity-70  mb-2">Total Downloads</p>
            <p className="text-5xl font-bold">29.6M</p>
            <p className="text-xs opacity-70 mt-3">21% More Than Last Month</p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="  text-sm opacity-70  mb-2">Total Reviews</p>
            <p className="text-5xl font-bold">906K</p>
            <p className="text-xs opacity-70 mt-3">46% More Than Last Month</p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="  text-sm opacity-70  mb-2">Active Apps</p>
            <p className="text-5xl font-bold">132+</p>
            <p className="text-xs opacity-70 mt-3">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;