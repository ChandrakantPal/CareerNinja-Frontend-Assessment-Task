import { useHistory } from 'react-router'
import Button from './Button'
import Layout from './Layout'
import SettingIcon from './SettingIcon'

const SelectOpponent = () => {
  const history = useHistory()
  return (
    <Layout>
      <h1 className="font-bold text-center">
        <span className="font-black text-transparent text-9xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
          x
        </span>
        <span className="font-black text-transparent text-9xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
          o
        </span>
      </h1>
      <div className="flex flex-col items-center mt-12">
        <p className="my-4">Choose your play mode</p>
        <button
          className="px-4 py-2 my-2 text-white bg-blue-500 border rounded-full shadow-xl outline-none w-44 focus:outline-none"
          onClick={() => history.push('/side')}
        >
          With AI
        </button>
        <Button title="With a friend" onClick={() => history.push('/side')} />
      </div>
      <SettingIcon />
    </Layout>
  )
}

export default SelectOpponent
