

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-12 rounded-lg shadow-lg">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-900">Kenya Association Of Marketers Dashboard </h2>
        <p className="mt-4 text-gray-700">
          Bring KPIs together for online sellers so they can optimize performance.
        </p>
        <p className="mt-4 text-gray-700 underline">
          Learn more about this dashboard and how it is used.
        </p>
        <a
          href="#"
          className="mt-6 inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600"
        >
          Read more ➔
        </a>
      </div>
      <div className="md:w-1/2 relative">
        <img
          src="./src/assets/dashboard.jpg"
          alt="Dashboard"
          className="w-full rounded-lg shadow-lg"
        />
        <a
          href="#"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600"
        >
          View Dashboard ➔
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
