import { Html5Qrcode } from 'html5-qrcode';
import { useEffect, useRef, useState } from 'react';
import Nav from '../Components/Nav';
import scannerIcon from '../Assets/scanner.svg';
import scanner from '../Assets/scanner.png';
import './BarcodeScanner.css';

const BarcodeScanner = () => {
  const [isActive, setIsActive] = useState(false);
  const scannerRef = useRef(null);

  const startCamera = async () => {
    try {
      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode("reader");
      }
      
      setIsActive(true);

      await scannerRef.current.start(
        { facingMode: "environment" },
        { 
            fps: 20, 
            qrbox: { width: 280, height: 200 },
            aspectRatio: 1.0 
        },
        (decodedText) => {
          console.log("Scan Match:", decodedText);
          if (navigator.vibrate) navigator.vibrate(200);
          stopCamera();
        },
        () => { }
      );
    } catch (err) {
      console.error("Camera failed:", err);
      setIsActive(false);
    }
  };

  const stopCamera = async () => {
    if (scannerRef.current && scannerRef.current.isScanning) {
      await scannerRef.current.stop();
      setIsActive(false);
    }
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current && scannerRef.current.isScanning) {
        scannerRef.current.stop().catch(err => console.error("Cleanup failed", err));
      }
    };
  }, []);

  return (
    <div className='scan_body'>
      <h1 className='header_title header_w'>Barcode Scanner</h1>

      <div className='flex_row map_card'>
        <img src={scannerIcon} alt="scanner" className='nav_icon_top' />
        <div className='column_start'>
          <h3 className='map_title'>Scan the Product</h3>
          <p className='header_subtitle'>Point your camera ahead to scan your product.</p>
        </div>
      </div>

      <div className="mobile_scanner_wrapper">
        <div id="reader"></div>
        
        {!isActive && (
          <div className="placeholder_ui">
            <img src={scanner} alt="scan icon" className='large_scan_icon' />
            <button className="scan_btn" onClick={startCamera}>
              Scan Product
           </button>
          </div>
        )}

        {isActive && (
          <button className="stop_btn" onClick={stopCamera}>
            Close Camera
          </button>
        )}
      </div>

      <Nav />
    </div>
  );
};

export default BarcodeScanner;