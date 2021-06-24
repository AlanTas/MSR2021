   const [captures, setCaptures] = useState([]);
   const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
   const [capturing, setCapturing] = useState(false);
   const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

    const setFlashModehandler = (flashMode) => setFlashMode(flashMode);
    const setCameraTypeHandler = (cameraType) => setCameraType(cameraType);
    const handleCaptureInHandler = () => setCapturing(true);

    const handleCaptureOut = () => {
        if (capturing)
            camera.stopRecording();
    };

    const handleShortCapture = async () => {
        const photoData = await camera.takePictureAsync();
        setCapturing(false);
        setCaptures([...captures, photoData]);
    };
    
    const handleLongCapture = async () => {
        setTimeout(() => capturing && camera.stopRecording(), 20*1000);
        const videoData = await camera.recordAsync();
        setCapturing(false);
        setCaptures([...captures, videoData]);
