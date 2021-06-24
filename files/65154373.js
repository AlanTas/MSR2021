videosChunked.map((chunk, chunkIndex) => (
  chunk => (
    <div>
      {chunk.map((video, i) => (
          <div key={i}>
            <a>                                                             
              <div>
                <span>Clip {chunkIndex * 6 + i + 1}</span>
                <label>{video.duration}</label>
              </div>
            </a>
          </div>
      ))}
    </div>
  )
));
