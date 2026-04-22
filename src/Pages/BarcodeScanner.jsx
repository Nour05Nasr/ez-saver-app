import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import scanner from '../Assets/scanner.svg';
import './BarcodeScanner.css';


const BarcodeScanner = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 10, // Frames per second
      qrbox: { width: 250, height: 250 }, 
    });

    scanner.render(onScanSuccess, onScanFailure);

    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Code matched: ${decodedText}`, decodedResult);
      scanner.clear();
    }

    function onScanFailure(error) {
    }

    return () => scanner.clear(); 
  }, []);

  return (<div className='scan_body'>
      <h1 className='header_title header_w'>Barcode Scanner</h1>

                    <div className='flex_row map_card'>
                        <img src={scanner} alt="arrow" className='nav_icon_top' />
                        <div className='column_start'>
                            <h3 className='map_title'>Scan the Product</h3>
                            <p className='header_subtitle'>
                               Point your camera ahead to scan your product.
                            </p>
                        </div>
                    </div>

      <div className='reader_div' id="reader"></div>

      <Nav />
    </div>);
};

export default BarcodeScanner;