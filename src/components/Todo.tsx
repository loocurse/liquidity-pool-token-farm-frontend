import React from 'react'

export default function Todo() {
  return (
    <div className='border rounded max-w-xl mx-auto px-5 py-1 text-left my-9'>
      <h2 className='text-left my-3 text-3xl mt-8 uppercase font-bold'>Further works</h2>
      <p className='text-gray-200'>This simple application serves as a demonstration of a token farming DApp. There are serveral improvements needed to take this to production</p>
      <ol className="list-decimal list-inside">
        <li className='my-1'>Staking mechanism: the staking mechanism does not allow users to stake the same token multiple times. This might be a useful feature.</li>
        <li className='my-1'>Staking mechanism: does not allow users to unstake some tokens. This might be useful for users looking to liquidate partially</li>
        <li className='my-1'>Additional LPs: although the contract owner can add more LPs, the current contract does not allow modification of previous LPs reward proportion. This can be implemented as a setter.</li>
      </ol>
      <h2 className='text-left my-3 text-3xl mt-8 uppercase font-bold'>Resources</h2>
      <ul className="list-disc list-inside">
        <li className='my-1 font-mono'>Farm contract - {process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS} </li>
      </ul>
    </div>
  )
}
