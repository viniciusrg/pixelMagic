import styled from 'styled-components';
import whatsappIcon from '../../assets/whatsapp.webp';

const Icon = styled.img`
    position: fixed;
    bottom: 2rem;
    right: 1rem;
    transition: .5s;
    animation: pulse 2s infinite;

    @keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
`

export default function WhatsappIcon() {
    return (
        <a href='https://wa.me/5535984773124' aria-label='Link do WhatsApp' target='_blank' rel='noreferrer'>
            <Icon src={whatsappIcon} width='60' heigth='60' />
        </a>
    )
}