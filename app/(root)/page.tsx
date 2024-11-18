import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
const Home= () => {
  const loggedIn = { firstName:'Chirukesh', lastName:'Devabhathini', email:'chirukeshdevabhathini@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
            <HeaderBox 
             type="greeting"
             title="welcome"
             user={loggedIn?.firstName || 'Guest'}
             subtext="Access and manage your account and transactions efficiently"
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}

            />
          </header>
          RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:3532.34}, {currentBalance:353.23}]}
      />
    </section>
  )
}

export default Home
