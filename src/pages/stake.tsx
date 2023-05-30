import BalancesTable from 'components/BalancesTable'
import ConnectWallet from 'components/Connect/ConnectWallet'
import LoadingModal from 'components/LoadingModal'
import SelectToken from 'components/SelectToken'
import SetAllowance from 'components/SetAllowance'
import StakeForm from 'components/StakeForm'
import { ThemeToggleButton, ThemeToggleList } from 'components/Theme'
import ViewReward from 'components/ViewReward'
import WithdrawStake from 'components/WithdrawStake'
import { useAppContext } from 'contexts/AppContext'
import React from 'react'
import styles from 'styles/Home.module.scss'
import { useAccount } from 'wagmi'


function Header() {
  return (
    <header className={styles.header}>
      <div>
        <ThemeToggleList />
      </div>
      <div className="flex items-center">
        <ThemeToggleButton /> header <ThemeToggleList />
      </div>

      <div className="flex items-center">
        <ThemeToggleButton />
        <ThemeToggleList />
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ThemeToggleList />
      </div>
      <div className="flex items-center">
        <ThemeToggleButton /> footer <ThemeToggleList />
      </div>

      <div className="flex items-center">
        <ThemeToggleButton />
        <ThemeToggleList />
      </div>
    </footer>
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
        </>)}


      </div>
      <Footer />
    </div>
  )
}
