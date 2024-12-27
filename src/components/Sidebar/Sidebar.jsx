import Heading from './Heading/Heading'
import HistoryBox from './HistoryBox/HistoryBox'
import ImageGrid from './ImageGrid/ImageGrid'
import { RxCross2 } from "react-icons/rx";
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='side-bar'>
      <div className='cross-container'>
        <RxCross2 className='cross-icon'/>
      </div>
      
      <div className='side-bar-content'>
        <Heading />
        <HistoryBox />
        <ImageGrid />
        </div>
    </div>
    
  )
}

export default Sidebar