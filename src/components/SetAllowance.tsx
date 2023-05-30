import { useAppContext } from 'contexts/AppContext'
import { ethers } from 'ethers'
import React, { useEffect } from 'react'
import { erc20ABI, useAccount, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

export default function SetAllowance() {
  const { selectedToken, setIsLoading } = useAppContext()
  const { config: erc20Config, error: erc20Error } = usePrepareContractWrite({
    address: selectedToken as `0x${string}`,
    abi: erc20ABI,
    functionName: 'approve',
    args: [process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`,
    ethers.utils.parseEther(`1`)]
  })
  const { address } = useAccount()

  const { data, isFetched, refetch } = useContractRead({
    address: selectedToken as `0x${string}`,
    abi: erc20ABI,
    functionName: 'allowance',
    args: [address, process.env.NEXT_PUBLIC_TOKEN_FARM_ADDRESS as `0x${string}`]
  })

  const { write, data: writeData } = useContractWrite(erc20Config)
  const { isLoading } = useWaitForTransaction({ hash: writeData ? writeData.hash : null })

  useEffect(() => {
    setIsLoading(isLoading)
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])


  return (
    <div className='border rounded max-w-xl mx-auto px-5 py-1 text-left my-9'>
      <h2 className='text-left my-3 text-3xl mt-8 uppercase font-bold'>Step 3: Allowances</h2>
      <p className='text-slate-600'>This step requires you to grant the farming contract access to your tokens to stake it. Allow it maximum.</p>
      {isFetched && <p>Current allowance: {ethers.utils.formatEther(data)}</p>}
      <button disabled={!write} onClick={() => write()} className='p-2 rounded bg-slate-500 text-white my-3'>Set allowance</button>
    </div>
  )
}
