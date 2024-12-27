import './App.css'
import ChatBox from './components/ChatBox/ChatBox'
import ProfileSection from './components/ProfileSection/ProfileSection'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='app'>
    <ProfileSection />
    <Sidebar />
    <ChatBox /> 
    </div>
  )
}

export default App
