import homePageImg from "../assets/home-page.avif";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center mt-8 mb-16 bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${homePageImg})` }}
    >
      <div className="mt-16 bg-gray-700 rounded-full p-5">
        <span>Awsome fitness club</span>
      </div>
      <div className="flex flex-col gap-4 text-2xl overflow-visible p-5 m-5 bg-yellow-600 rounded-full">
        <span>
          Make the <span className="text-green-700">PERFECT </span>body
        </span>
      </div>
    </div>
  );
}
