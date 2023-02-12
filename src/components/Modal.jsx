import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

function Modal({ title, description, isOpen, onClose }) {
  const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ModalContent = styled.div`
    min-width: 500px;
    min-height: 200px;
    background-color: white;
    padding: 60px;
    border-radius: 8px;
  `;

  const ModalTitle = styled.h1`
    font-size: 30px;
    text-align: center;
  `;

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        {description ? <p>{description}</p> : null}
        <p className="alignCenter">
          <Button value="Close" onClick={onClose} />
        </p>
      </ModalContent>
    </ModalWrapper>
  );
}

Modal.defaultProps = {
  title: '',
  description: '',
  isOpen: false,
  onClose: () => {},
};

Modal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
