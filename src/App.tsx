import './App.css'
import { CardTwitter } from './components/Card'
import { users } from './utils/users'

function App() {

  return (
    <>
      <div>
        <p>
          Inventary System
        </p>
      </div>
      <div>
      {users.map(item => 
        (
          <CardTwitter key={item.username} user={item.username} name={item.user} avatar={item.img} follow={item.isFollow} />
        )
        )}
      </div>
    </>
  )
}

export default App
