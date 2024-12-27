import './LevelTwo.css'
function LeveTwo({image}) {
  return (
    <div className="level-two">
        <p>{image.text}</p>
        <img src={image.url}></img>
    </div>
  )
}

export default LeveTwo