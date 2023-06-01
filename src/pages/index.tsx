import BalancesTable from 'components/BalancesTable'
import ConnectWallet from 'components/Connect/ConnectWallet'
import LoadingModal from 'components/LoadingModal'
import SelectToken from 'components/SelectToken'
import SetAllowance from 'components/SetAllowance'
import StakeForm from 'components/StakeForm'
import { ThemeToggleButton, ThemeToggleList } from 'components/Theme'
import Todo from 'components/Todo'
import ViewReward from 'components/ViewReward'
import WithdrawStake from 'components/WithdrawStake'
import { useAppContext } from 'contexts/AppContext'
import React from 'react'
import styles from 'styles/Home.module.scss'
import { useAccount } from 'wagmi'


function Header() {
  return (
    <header className='w-100 mt-9' >
      <h2 className='text-center text-3xl font-extrabold'>Yield Farm</h2>
    </header>
  )
}

export default function Stake() {
  const { isConnected } = useAccount()
  const { isLoading } = useAppContext()
  return (
    <div className={styles.container}>
      <Header />
      <div className="h-full mx-auto w-[1200px] text-center">
        <div className="flex items-center justify-center my-5"><ConnectWallet /></div>
        {isLoading && <LoadingModal />}
        {isConnected && (<>
          <BalancesTable />
          <SelectToken />
          <SetAllowance />
          <StakeForm />
          <ViewReward />
          <WithdrawStake />
          <Todo />
        </>)}
      </div>
    </div>
  )
}
