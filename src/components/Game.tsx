import Layout from './Layout'
import SettingIcon from './SettingIcon'

const Game = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between w-96">
        <p className="px-4 text-center text-gray-600">User</p>
        <p className="px-4 py-2 text-center border rounded-full shadow-2xl">
          0 - 0
        </p>
        <p className="px-4 text-center text-gray-600">AI</p>
      </div>
      <div className="p-4 m-4 border rounded-lg shadow-2xl">
        <div className="flex flex-wrap my-4 w-80 h-80">
          <div className="flex items-center justify-center w-1/3 border-b-2 border-r-2 border-gray-200 bg-emerald-500 h-1/3">
            <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
              x
            </h1>
          </div>
          <div className="flex items-center justify-center w-1/3 border-b-2 border-r-2 border-gray-200 bg-emerald-500 h-1/3">
            <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
              o
            </h1>
          </div>
          <div className="flex items-center justify-center w-1/3 border-b-2 border-gray-200 bg-emerald-500 h-1/3"></div>
          <div className="flex items-center justify-center w-1/3 border-b-2 border-r-2 border-gray-200 bg-emerald-500 h-1/3"></div>
          <div className="flex items-center justify-center w-1/3 border-b-2 border-r-2 border-gray-200 bg-emerald-500 h-1/3">
            <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
              o
            </h1>
          </div>
          <div className="flex items-center justify-center w-1/3 border-b-2 border-gray-200 bg-emerald-500 h-1/3">
            <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
              o
            </h1>
          </div>
          <div className="flex items-center justify-center w-1/3 border-r-2 border-gray-200 bg-emerald-500 h-1/3">
            <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
              x
            </h1>
          </div>
          <div className="flex items-center justify-center w-1/3 border-r-2 border-gray-200 bg-emerald-500 h-1/3"></div>
          <div className="flex items-center justify-center w-1/3 bg-emerald-500 h-1/3">
            <h1 className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
              x
            </h1>
          </div>
        </div>
      </div>
      <SettingIcon />
    </Layout>
  )
}

export default Game
