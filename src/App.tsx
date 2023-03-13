import QrScanner from 'qr-scanner';
import { useEffect, useRef, useState } from 'react';

const App = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          setResult(result.data);
          console.log(result);
        },
        {
          /* your options or returnDetailedScanResult: true if you're not specifying any other options */
          highlightScanRegion: true,
          maxScansPerSecond: 10,
          highlightCodeOutline: true
        }
      );
      qrScanner.start();
    }
  }, [videoRef]);

  return (
    <div className="App">
      <video width={800} ref={videoRef}></video>

      <h3>
        <>Result: {result}</>
      </h3>
    </div>
  );
};

export default App;
