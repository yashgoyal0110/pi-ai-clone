import './ImagePrompt.css'
function ImagePrompt({url, text}) {
  return (
    <div className="image-prompt">
    <p>{text}</p>
    <img src={url}></img>
</div>
  )
}

export default ImagePrompt