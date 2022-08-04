import styled from '@emotion/styled';

const Text = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 10px;
    font-size: 20px;
    text-transform: uppercase;
    font-weigth: 700;
    text-align: center;
    border-radius: 5px;
`

export function Error ( { children } ) {

    return (
        <Text>
            { children }
        </Text>
    );

}


