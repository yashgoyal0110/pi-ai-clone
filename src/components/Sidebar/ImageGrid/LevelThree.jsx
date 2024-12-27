import './LevelThree.css'

function LevelThree({image}) {
  return (
    <div className='level-three'>
        <img src = {image.url}></img>
        <p>{image.text}</p>
    </div>
  )
}

export default LevelThree