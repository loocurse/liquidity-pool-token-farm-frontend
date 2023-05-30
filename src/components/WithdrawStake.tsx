import { useAppContext } from 'contexts/AppContext'
import React, { useEffect } from 'react'
import farmABI from 'utils/farm-abi'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

export default function WithdrawStake() {
  const { selectedToken, setIsLoading } = useAppContext()
  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
    abi: farmABI,
    functionName: 'unstake',
    args: [selectedToken]
  })

  const { write, isLoading } = useContractWrite(config)

  useEffect(() => {
    setIsLoading(isLoading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <div className='border rounded max-w-xl mx-auto px-5 py-1 text-left my-9'>
      <h2 className='text-left my-3 text-3xl mt-8 uppercase font-bold'>Step 6: Unstake</h2>
      <p className='text-slate-600'>Unstake to claim rewards.</p>
      <div className="flex items-stretch mt-3">
        <button disabled={!write} onClick={() => write()} className='p-2 rounded bg-slate-500 text-white my-3'>Unstake</button>
      </div>
    </div>
  )
}
