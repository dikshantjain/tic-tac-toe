export default function GameOver({ winner, onRestart }: any) {
    return (
      <div className="bg-white text-center p-6 rounded-xl shadow-xl w-64 z-20">
        <h2 className="text-2xl font-bold text-red-600 mb-3">Game Over!</h2>
        {winner ? (
          <p className="text-lg text-gray-800 mb-4">{winner} won!</p>
        ) : (
          <p className="text-lg text-gray-800 mb-4">It's a draw!</p>
        )}
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Rematch
        </button>
      </div>
    );
  }
  