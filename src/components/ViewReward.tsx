import { useAppContext } from 'contexts/AppContext'
import { ethers } from 'ethers'
import React from 'react'
import farmABI from 'utils/farm-abi'
import { useAccount, useContractRead } from 'wagmi'

export default function ViewReward() {
  const { selectedToken } = useAppContext()
  const { address } = useAccount()
  const { data, isFetched } = useContractRead({
    address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
    abi: farmABI,
    functionName: 'calculateReward',
    args: [address, selectedToken],
  })

  return (
    <div className='border rounded max-w-xl mx-auto px-5 py-1 text-left my-9'>
      <h2 className='text-left my-3 text-3xl mt-8 uppercase font-bold'>Step 5: View rewards</h2>
      <p className='text-gray-200'>View your reward for the selected token.</p>
      {isFetched && <p className='my-3'>Reward: {ethers.utils.formatEther(data)} $REWARD</p>}
    </div>
  )
}
