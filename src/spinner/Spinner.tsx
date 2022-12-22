import { useState, CSSProperties, useEffect, useRef } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useWindowResize } from '../components/hooks/windowSizeHook';

const override: CSSProperties = {
  display: 'block',
  margin: ' auto',
};

function Spinner() {
  let [loading, setLoading] = useState<boolean>(true);
  let [color, setColor] = useState<string>('black');

  const [width, height] = useWindowResize();

  let [spinnerSize, setSpinnerSize] = useState<number>(0);

  // Sets spinner size base of width of screen
  useEffect(() => {
    if (width <= 480) {
      setSpinnerSize(100);
    } else if (width <= 768) {
      setSpinnerSize(200);
    } else if (width > 768) {
      setSpinnerSize(300);
    }
  }, [width]);

  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      size={spinnerSize}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  );
}

export default Spinner;
