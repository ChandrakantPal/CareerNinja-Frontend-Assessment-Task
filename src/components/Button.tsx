import React from 'react'

interface Props {
  title: string
  onClick: () => void
}

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="px-4 py-2 my-2 text-gray-600 border rounded-full shadow-2xl outline-none w-44 focus:outline-none"
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
