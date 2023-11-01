import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Chat from '../../components/chat/Chat'

function Home() {
  return (
    <div className='home' >
      <div className="container">
        <Sidebar />
        <Chat/>
      </div>
    </div>
  )
}

export default Home