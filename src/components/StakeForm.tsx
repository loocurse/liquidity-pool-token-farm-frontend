import { useAppContext } from 'contexts/AppContext'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import farmABI from 'utils/farm-abi'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'

export default function StakeForm() {
  const [amount, setAmount] = useState(5)
  const { setIsLoading, selectedToken } = useAppContext()


  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
    abi: farmABI,
    functionName: 'stake',
    args: [selectedToken as `0x${string}`, ethers.utils.parseEther(`${amount}`)]
  })
  const { write, data: writeData } = useContractWrite(config)
  const { isLoading } = useWaitForTransaction({ hash: writeData ? writeData.hash : null })


  useEffect(() => {
    setIsLoading(isLoading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <div className='border rounded max-w-xl mx-auto px-5 py-1 text-left my-9'>
      <h2 className='text-left my-3 text-3xl mt-8 uppercase font-bold'>Step 4: Stake</h2>
      <p className='text-gray-200'>You can now stake as much as you have allowed in the previous step.</p>
      <div className="flex items-stretch my-3">
        <input type='number' className='mr-2 bg-[#1E2325] text-5xl border rounded' value={amount} onChange={(e) => setAmount(+e.target.value)}></input>
        <button disabled={!write} onClick={() => write()} className='p-2 rounded bg-slate-500 text-white my-3 text-xl'>Stake</button>
      </div>

    </div>
  )
}
