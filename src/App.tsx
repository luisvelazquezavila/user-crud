import UserTable from './components/UserTable'
import UserTableProvider from './providers/UserTableProvider'

function App() {

  return (
    <UserTableProvider>
      <UserTable />
    </UserTableProvider>
  )
}

export default App