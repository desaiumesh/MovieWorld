
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

interface IconButtonProps {
    text: string;
    onClick: () => void;
}

const IconArrowButton = ({ text, onClick }: IconButtonProps) => {
    return (
        <button onClick={onClick} style={{ display: 'flex', marginLeft:'10px', alignItems: 'center', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff' }}>
                <FontAwesomeIcon icon={faArrowCircleRight} />
                {text}
         </button>
    );
};

export default IconArrowButton;
