import styled from '@emotion/styled';

const ResultContainer = styled.div`
    color: #FFF;
    display: flex;
    align-items: start;
    gap: 2rem;
    margin: 30px;
`

const Image = styled.img`
    display: block;
    width: 110px;
`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Price = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

export function Result ( { result } ) {

    const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR , IMAGEURL, LASTUPDATE } = result;

    return (
        <ResultContainer>
            <Image src={ `https://cryptocompare.com/${IMAGEURL}` } alt="Imagen Cripto Result" />
            
            <div>
                <Price> Precio: <span> { PRICE } </span> </Price>
                <Text> Precio más alto del día: <span> { HIGHDAY } </span> </Text>
                <Text> Precio más bajo del día: <span> { LOWDAY } </span> </Text>
                <Text> Variación últimas 24 horas <span> { CHANGE24HOUR } </span> </Text>
                <Text> Última actualización: <span> { LASTUPDATE } </span> </Text>
            </div>
        </ResultContainer>
    );
}