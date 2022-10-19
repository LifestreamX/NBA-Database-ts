import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useWindowResize } from '../../hooks/windowSizeHook';

const override: CSSProperties = {
  display: 'block',
  margin: ' auto',
};

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('black');

  const [width, height] = useWindowResize();    

  console.log(width)

  return (
      <ClipLoader
        loading={loading}
        cssOverride={override}
        size={200}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
  );
}

export default Spinner;
