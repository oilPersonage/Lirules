import { useEffect, useState } from 'react';

export function useMobileDetect() {
  const [mobile, setMobile] = useState(true); // for about page = true

  useEffect(() => {
    setMobile(window.matchMedia('(max-width: 600px)').matches);
  }, []);

  return mobile;
}
