import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const StyledPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
  }
  // use your custom style for ".popup-content"
  &-content {
    display: flex;
    border-radius: 12px;
    flex-direction: column;
    align-items: center;
    background: #fff;
    position: relative;
    padding: 1em;
    width: 50%;
    transition: all 0.3s ease-in-out;
    -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
  }

  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }

  transition: all 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  font-weight: bold;
  font-size: 20px;
  color: #888;
  cursor: pointer;
`;

export const Avatar = styled.img`
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  top: -75px;
  border: 4px solid #ccc;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 8px 0;

  strong {
    font-size: 16px;
  }

  span {
    font-size: 16px;
    margin-left: 10px;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  }
`;
