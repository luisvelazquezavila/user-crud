import './App.css'
// import Component from './components/Modal'
// import PruebaModal from './components/PruebaModal'
import UserTable from './components/UserTable'
import UserTableProvider from './providers/UserTableProvider'

function App() {

  return (
    <UserTableProvider>
      {/* <Component /> */}
      <UserTable />
      {/* <PruebaModal /> */}
    </UserTableProvider>
  )
}

export default App
