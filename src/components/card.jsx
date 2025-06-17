function ExampleCard({ cardNumber }) {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-2xl border
       border-gray-200 p-6 transition-transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-xl font-semibold mb-10">Card {cardNumber}</h2>
        <p className="text-gray-600">This is a rectangular card using React and Tailwind CSS.</p>
      </div>
      <div className="max-w-sm mx-auto border-b-4 border-b-gray-500"></div>
    </>
  );
}
export default ExampleCard;