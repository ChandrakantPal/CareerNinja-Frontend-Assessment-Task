import React from 'react'
import { useHistory } from 'react-router'
import Button from './Button'
import Layout from './Layout'

const PickSide = () => {
  const history = useHistory()

  return (
    <Layout>
      <p className="font-semibold text-center text-gray-600">Pick your side</p>
      <div className="flex justify-between my-12">
        {/* <h1 className="font-bold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
          x
        </h1>
        <h1 className="font-bold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
          o
        </h1>
      </div> */}
        <label className="flex flex-col items-center ">
          <h1 className="font-bold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
            x
          </h1>
          <input
            type="radio"
            className="form-radio"
            name="radio"
            value="1"
            checked
          />
        </label>
        <label className="flex flex-col items-center ">
          <h1 className="font-bold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300">
            o
          </h1>
          <input
            type="radio"
            className="form-radio"
            name="radio"
            value="1"
            checked
          />
        </label>
      </div>
      <Button title="Continue" onClick={() => history.push('/game')} />
    </Layout>
  )
}

export default PickSide
