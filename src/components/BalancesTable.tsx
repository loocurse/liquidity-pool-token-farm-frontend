import React from 'react'
import { erc20ABI, useAccount, useContractReads } from 'wagmi'
import { ethers } from 'ethers'
import farmABI from 'utils/farm-abi'
import { truncateAddress } from 'utils/helper'

export default function BalancesTable() {
  const { address } = useAccount()

  const { data, isLoading } = useContractReads({
    contracts: [
      {
        address: process.env.NEXT_PUBLIC_LP1 as `0x${string}`,
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [address]
      },
      {
        address: process.env.NEXT_PUBLIC_LP2 as `0x${string}`,
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [address]
      },
      {
        address: process.env.NEXT_PUBLIC_LP3 as `0x${string}`,
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [address]
      },
      {
        address: process.env.NEXT_PUBLIC_LP1 as `0x${string}`,
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [address]
      },
      {
        address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
        abi: farmABI,
        functionName: 'stakes',
        args: [address, process.env.NEXT_PUBLIC_LP1 as `0x${string}`]
      },
      {
        address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
        abi: farmABI,
        functionName: 'stakes',
        args: [address, process.env.NEXT_PUBLIC_LP2 as `0x${string}`]
      },
      {
        address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
        abi: farmABI,
        functionName: 'stakes',
        args: [address, process.env.NEXT_PUBLIC_LP3 as `0x${string}`]
      },
      {
        address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
        abi: farmABI,
        functionName: 'calculateReward',
        args: [address, process.env.NEXT_PUBLIC_LP1 as `0x${string}`]
      },
      {
        address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
        abi: farmABI,
        functionName: 'calculateReward',
        args: [address, process.env.NEXT_PUBLIC_LP2 as `0x${string}`]
      },
      {
        address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
        abi: farmABI,
        functionName: 'calculateReward',
        args: [address, process.env.NEXT_PUBLIC_LP3 as `0x${string}`]
      },
    ],
  })
  if (isLoading) return <div className="">Loading...</div>
  return (
    <div className='border rounded max-w-xl mx-auto px-5 py-1 text-left my-9'>
      <h2 className='text-left my-3 text-3xl mt-8 uppercase font-bold '>Step 1: Balances</h2>
      <p className='text-gray-200'>Remember: you cannot stake already staked tokens.</p>
      <table className="table-auto mx-auto w-full mt-4">
        <thead>
          <tr className='border'>
            <th>Token</th>
            <th>Contract Address</th>
            <th>Balance</th>
            <th>Staked</th>
            <th>Reward</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border'>
            <td>LP1</td>
            <td className='font-mono'>{truncateAddress(process.env.NEXT_PUBLIC_LP1)}</td>
            <td>{ethers.utils.formatEther(data[0]._hex)}</td>
            <td>{ethers.utils.formatEther(data[4]?.amount._hex)}</td>
            <td>{Number.parseFloat(ethers.utils.formatEther(data[7]?._hex)).toExponential()}</td>
          </tr>
          <tr className='border'>
            <td>LP2</td>
            <td className='font-mono'>{truncateAddress(process.env.NEXT_PUBLIC_LP2)}</td>
            <td>{ethers.utils.formatEther(data[1]._hex)}</td>
            <td>{ethers.utils.formatEther(data[5]?.amount._hex)}</td>
            <td>{Number.parseFloat(ethers.utils.formatEther(data[8]?._hex)).toExponential()}</td>
          </tr>
          <tr className='border'>
            <td>LP3</td>
            <td className='font-mono'>{truncateAddress(process.env.NEXT_PUBLIC_LP3)}</td>
            <td>{ethers.utils.formatEther(data[2]._hex)}</td>
            <td>{ethers.utils.formatEther(data[6]?.amount._hex)}</td>
            <td>{Number.parseFloat(ethers.utils.formatEther(data[9]?._hex)).toExponential()}</td>
          </tr>
        </tbody>
      </table>
      <p className='italic text-slate-500 text-sm my-3'>Do ask the admin for tokens.</p>
    </div>

  )
}
