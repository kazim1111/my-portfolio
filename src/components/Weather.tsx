import {useEffect} from 'react';

export default function Weather() {
  useEffect(() => {
    const existingScript = document.getElementById('weatherwidget-io-js');

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'weatherwidget-io-js';
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginTop: -180,
        marginRight: 100,
        padding: 16,
        borderRadius: 16,
        background: 'rgb(1, 14, 34)',
        color: 'white',
        fontFamily: 'Arial',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
        bottom: 20,
        right: 90,
        zIndex: 999,
        width: 350,
        transformOrigin: 'bottom right',
      }}>
      <a
        className="weatherwidget-io"
        data-days="5"
        data-label_1="BAKU"
        data-label_2="WEATHER"
        data-mode="Forecast"
        data-theme="original"
        href="https://forecast7.com/en/40d4149d87/baku/">
        BAKU WEATHER
      </a>
    </div>
  );
}
