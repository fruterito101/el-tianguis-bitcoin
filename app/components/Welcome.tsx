interface WelcomeProps {
  onStart: () => void;
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-yellow-300 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <div className="text-8xl mb-6">🛒</div>
        <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-4">
          El Tianguis Bitcoin
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          ¡Bienvenido al mercado más chingón de México! 🇲🇽
        </p>
        <div className="bg-orange-50 rounded-2xl p-6 mb-8">
          <p className="text-lg text-gray-800 mb-4">
            Aquí aprenderás Bitcoin comprando tacos, micheladas y más mientras los comerciantes del tianguis te enseñan todo sobre la revolución financiera.
          </p>
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-orange-600">
            <span>Empiezas con:</span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg">
              100,000 sats ₿
            </span>
          </div>
        </div>
        <button
          onClick={onStart}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-2xl font-bold py-4 px-12 rounded-full transform hover:scale-105 transition-all shadow-lg"
        >
          ¡A CHINGARLE! 🚀
        </button>
      </div>
    </div>
  );
}
