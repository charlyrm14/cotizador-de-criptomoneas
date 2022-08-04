import { useState } from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    color: #FFF;
    display: block;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 5px;
`


export function useCurrencySelect ( label, coins, criptos ) {


    const [ state, setState ] = useState('');


    const CurrencySelect = () => (
        <>
            <Label> { label } </Label>
            <Select value={ state }
                    onChange={ e => setState( e.target.value ) }>
                <option value=""> Selecciona </option>
                {
                    coins.map( coin => (
                        <option key={ coin.id } 
                                value={ coin.id }> 
                                
                                { coin.name }

                        </option>
                    ))
                }
            </Select>
        </>
    )

    return [ state, CurrencySelect ]

}