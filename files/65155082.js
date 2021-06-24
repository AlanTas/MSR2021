<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Video Speed Scrubber</title>
  <style>
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #4C4C4C url('https://unsplash.it/1500/900?image=1021');
      background-size: cover;
      font-family: sans-serif;
    }
    
    .wrapper {
      width: 850px;
      display: flex;
    }
    
    video {
      box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .speed {
      background: #efefef;
      flex: 1;
      display: flex;
      align-items: flex-start;
      margin: 10px;
      border-radius: 50px;
      box-shadow: 0 0 1px 3px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    .speed-bar {
      width: 100%;
      background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      color: white;
      height: 16.3%;
    }
  </style>
</head>

<body>

  <div class="wrapper">
    <video class="flex" width="765" height="430" src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" loop controls></video>
    <div class="speed">
      <div class="speed-bar">1×</div>
    </div>
  </div>


</body>

</html>