import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { BsWhatsapp } from 'react-icons/bs';
import arrow from '../../assets/Arrow.svg';
import Input from '../Input';
import TextArea from '../TextArea';
import SubmitButton from '../SubmitButton';
import axios from 'axios';

const Div = styled.section`
    padding: 64px 0px;

    .rosa{
        color: var(--color-rosa);
    }

    h3{
        margin-bottom: 32px;
    }
`

const DivGrid = styled.div`
    display: flex;
    gap: 32px;
    justify-content: space-between;

    @media (max-width: 425px) {
        flex-wrap: wrap;
    }

    p{
        font-weight: bold;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        p{
            font-size: 16px;
        }
    }

    .icon-arrow{
        margin-top: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .icon-arrow svg{
        font-size: 64px;
    }

    @media (max-width: 768px) {
        .icon-arrow svg{
            font-size: 40px;
        }
    }

    .icon-arrow img {
        width: 398px;
        height: auto;
    }

    @media (max-width: 768px) {
        .icon-arrow img{
            width: 250px;
        }
    }

    .raio{
        text-align: center;
        font-size: 128px;
        margin-top: 64px;
    }

    @media (max-width: 425px) {
        .raio{
            margin-top: 0px;
            padding: 32px 0px;
        }
    }

    .form{
        max-width: 442px;
    }

    .form h4{
        text-align: center;
        margin-bottom: 24px;
    }

    .radio p {
        font-weight: 400;
        font-size: 16px;
        padding-left: 16px;
    }

    .radio input[type= "radio"]{
        appearance: none;
        background-color: transparent;
        width: 16px;
        height: 16px;
        border: 2px solid var(--color-rosa);
        border-radius: 100%;
        margin: 0;
    }

    .radio input[type= "radio"]:checked{
        background-color: var(--color-rosa);
        width: 16px;
        height: 16px;
    }

    .radio label{
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-right: 16px;
        margin-top: 8px;
        margin-bottom: 16px;
        padding-left: 16px;
    }

    .button-area{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
    }
`

export default function Section4() {

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        contact_form: 0,
        message: ''
    });

    const handleChange = (e) => {
        if (e.target.name === "phone") {
            const value = phoneMask(e.target.value);
            setFormData({ ...formData, [e.target.name]: value });
        } else
            setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('https://contact.pixelmagic.com.br/public/api/setContact', formData)
            .then(response => {
                setSuccessMessage("Mensagem enviada com sucesso!");
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage("Algo deu errado ao enviar sua mensagem. Tente novamente!");
                setSuccessMessage('');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function phoneMask(v) {

        let r = v.replace(/\D/g, "");
        r = r.replace(/^0/, "");

        if (r.length > 11) {
            r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (r.length > 7) {
            r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
        } else if (r.length > 2) {
            r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else if (v.trim() !== "") {
            r = r.replace(/^(\d*)/, "($1");
        }
        return r;
    }

    return (
        <Container>
            <Div id='precisa-de-ajuda'>
                <h3>Precisa de ajuda? / <span className='rosa' id='comecar-projeto'>Começar seu projeto</span></h3>
                <DivGrid>
                    <div>
                        <p>Você não está sozinho!</p>
                        <p>Envie uma mensagem para nosso WhatsApp</p>
                        <p>Ou se preferir, preencha o formulário ao lado que nós entraremos em contato.</p>
                        <div className='icon-arrow'>
                            <a href='https://wa.me/5535984323737' aria-label='Chamar no WhatsApp' target='_blank' rel='noreferrer'><BsWhatsapp /></a>
                            <img src={arrow} alt='Ícone de flecha' width='398' height='32' />
                        </div>
                        <div className='raio'>
                            <span>⚡️</span>
                        </div>
                    </div>
                    <div className='form'>
                        <h4>Formulário de contato</h4>
                        <form onSubmit={handleSubmit}>
                            <Input placeholder='Seu nome *' type='text' name='name' value={formData.name} onChange={handleChange} />
                            <Input placeholder='Seu e-mail *' type='email' name='email' value={formData.email} onChange={handleChange} />
                            <Input placeholder='Seu número (opcional)' type='tel' name='phone' value={formData.phone} onChange={handleChange} />
                            <div className='radio'>
                                <p>Por onde você prefere conversar? *</p>
                                <label>
                                    <input type='radio' name='contact_form' value='0' onChange={handleChange} checked={formData.contact_form === '0'} />
                                    Prefiro WhatsApp
                                </label>
                                <label>
                                    <input type='radio' name='contact_form' value='1' onChange={handleChange} checked={formData.contact_form === '1'} />
                                    Prefiro E-mail
                                </label>
                            </div>
                            <TextArea placeholder='Sua mensagem' rows='4' name='message' value={formData.message} onChange={handleChange} />
                            <div className='button-area'>
                                <SubmitButton>
                                    {loading ? 'Enviando...' : 'Enviar'}
                                </SubmitButton>
                            </div>
                            <p style={{ color: 'var(--color-success)', fontSize: '12px', marginTop: '16px' }}>{successMessage}</p>
                            <p style={{ color: 'var(--color-error)', fontSize: '12px', marginTop: '16px' }}>{errorMessage}</p>
                        </form>
                    </div>
                </DivGrid>
            </Div>
        </Container>
    )
}