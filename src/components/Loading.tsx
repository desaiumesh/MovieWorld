import { RingLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RingLoader size={150} color={"#f9d3b4"} />
    </div>
  );
};

export default Loading;
