import tictoe from './assets/tictoe.png';
import { Player } from './components/Player';

function App() {

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-600">
        Tic Tac Toe
      </h1>
      <img
        src={tictoe}
        alt="Tic Tac Toe"
        className="w-32 h-32 object-contain"
      />
      <main className='bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-auto mt-10'>
        <div className='flex justify-center'>
          <ol className="flex space-x-8 text-lg font-semibold text-gray-800">
            <Player name="Player 1" symbol="X"></Player>
            <Player name= "Player 2" symbol="O"></Player>
          </ol>
        </div>
      </main>
    </div>
  )
}

export default App
