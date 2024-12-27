import LevelOne from "./LevelOne"
import LevelThree from "./LevelThree"
import LeveTwo from "./LeveTwo"
import { MockData } from "./MockData"
import './ImageGrid.css'
function ImageGrid() {
  return (
    <div className="image-grid">
        <LevelOne imageOne={MockData[0]} imageTwo={MockData[1]}/>
        <LeveTwo image = {MockData[2]} />
        <LevelThree image={MockData[3]} />
        <LevelOne imageOne={MockData[4]} imageTwo={MockData[5]}/>
        <LeveTwo image = {MockData[6]} />
        <LevelThree image={MockData[7]} />
        <LevelOne imageOne={MockData[8]} imageTwo={MockData[9]}/>
        <LeveTwo image = {MockData[10]} />
        <LevelThree image={MockData[11]} />
        <LevelOne imageOne={MockData[12]} imageTwo={MockData[13]}/>
        <LeveTwo image = {MockData[14]} />
        <LevelThree image={MockData[15]} />
    </div>
  )
}

export default ImageGrid