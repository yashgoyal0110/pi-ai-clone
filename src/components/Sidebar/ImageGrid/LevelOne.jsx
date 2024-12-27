import './LevelOne.css'
function LevelOne({imageOne, imageTwo}) {
  return (
    <div className='level-one'>
        <div className='img-one-container'>
            <img src = {imageOne.url}></img>
            <p>{imageOne.text}</p>
        </div>
        <div className='img-two-container'>
            <img src = {imageTwo.url}></img>
            <p>{imageTwo.text}</p>
        </div>
    </div>
  )
}

export default LevelOne