import Map from '../components/Map';

function Initial() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center bg-gray-50 p-6 sm:p-8"
    >
      <h1
        className="text-3xl sm:text-4xl font-extrabold
         text-gray-800 mb-4 sm:mb-5 mt-4 sm:mt-6"
      >
        Estações Tech
      </h1>
      <div
        className="w-full max-w-2xl sm:max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8"
      >
        <Map />
      </div>
    </div>
  );
}

export default Initial;
