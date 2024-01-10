import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://payments.worldpay.com/resources/hpp/integrations/embedded/js/hpp-embedded-integration-library.js';
    script.async = true;

    document.getElementsByTagName('head')[0].appendChild(script);

    script.onload = () => {
      // Initialize the library and pass options
      const customOptions = {
        url: 'https://payments-test.worldpay.com/app/hpp/integration/wpg/corporate?OrderKey=HERBALIFETESTECOM%5ETESTORD12523918&Ticket=00170532885893202n5Tcbo0KRuLVdggqX68CLQmL23x8v4QU_WzQFi&source=https%3A%2F%2Fsecure-test.worldpay.com',
        type: 'iframe',
        inject: 'onload',
        target: 'custom-html',
        accessibility: true,
        debug: false,
      };
      const libraryObject = new WPCL.Library();
      libraryObject.setup(customOptions);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>iFrame</h1>
      <div id="custom-html"></div>
    </div>
  );
}
