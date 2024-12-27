import Heading from './Heading/Heading'
import HistoryBox from './HistoryBox/HistoryBox'
import ImageGrid from './ImageGrid/ImageGrid'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='side-bar'>
      <div className='side-bar-content'>
        <Heading />
        <HistoryBox />
        <ImageGrid />
        </div>
    </div>
    
  )
}

export default Sidebar