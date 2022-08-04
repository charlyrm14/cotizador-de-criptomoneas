import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Error } from './Error';
import { useCurrencySelect } from '../hooks/useCurrencySelect';
import { coins } from '../data/coins';



const ButtonSubmit = styled.button`
    background-color: #853C7E;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #6F2D64;
    }
`

export function Form ( { setCoins } ) {

    const [ criptos, setCriptos ]       = useState([]);
    const [ error, setError ]           = useState( false );
    
    // coin -> set: del Hook de useCurrencySelect
    const [ coin, CurrencySelect ]      = useCurrencySelect( 'Elige tu moneda', coins );

    const [ criptocoin, CriptoSelect ]  = useCurrencySelect( 'Elige tu criptomoneda', criptos );



    useEffect ( () => {

        const consultAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const response  = await fetch( url )
            const result    = await response.json();

            const criptosArray = result.Data.map( cripto => {
                const obj = { 
                    id: cripto.CoinInfo.Name, 
                    name: cripto.CoinInfo.FullName 
                }

                return obj;
            });
            
            setCriptos(criptosArray);

        };

        consultAPI();

    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        
        if ( [ coin, criptocoin ].includes('') ) {
            setError( true );
            return;
        }

        setError( false );

        setCoins({ 
            coin, 
            criptocoin 
        });
    }

    return (
        <>
            { error && <Error> Todos los campos son obligatorios </Error> }
            <form onSubmit={ handleSubmit }>

                <CurrencySelect/>

                <CriptoSelect/>

                <ButtonSubmit>
                    Cotizar
                </ButtonSubmit>

            </form>
        </>
    );

}