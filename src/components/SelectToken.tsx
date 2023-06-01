import { useAppContext } from 'contexts/AppContext'
import React from 'react'

export default function SelectToken() {
  const { selectedToken, setSelectedToken } = useAppContext()

  return (
    <div className='border rounded max-w-xl mx-auto px-5 py-1 text-left my-9'>
      <h2 className='text-left my-3 text-3xl mt-8 uppercase font-bold '>Step 2: Select token</h2>
      <p className='text-gray-200'>Select the token you would like to stake</p>
      <select className='text-3xl p-3 bg-[#1E2325]' value={selectedToken} onChange={(e) => setSelectedToken(e.target.value)}>
        <option value={process.env.NEXT_PUBLIC_LP1}>LP1</option>
        <option value={process.env.NEXT_PUBLIC_LP2}>LP2</option>
        <option value={process.env.NEXT_PUBLIC_LP3}>LP3</option>
      </select>
    </div>
  )
}
