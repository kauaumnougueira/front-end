import { useNavigate } from 'react-router-dom';

function Initial() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>
        Hello world!
      </h1>
    </div>
  );
}

export default Initial;
