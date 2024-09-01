import Map from '../components/Map';

function Initial() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-5 mt-6">
        Estações Tech
      </h1>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <Map />
      </div>
    </div>
  );
}

export default Initial;
