import './ImagePrompt.css'
function ImagePrompt(image) {
  return (
    <div className="image-prompt">
    <p>{image.text}</p>
    <img src={image.url}></img>
</div>
  )
}

export default ImagePrompt