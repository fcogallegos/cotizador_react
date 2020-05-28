import React from 'react';
import styled from '@emotion/styled';


const Message = styled.div`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultQuotation = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextQuotation = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({quotation}) => {
    

    return (
        (quotation === 0) 
            //si cumple la condicion ejecuta esto
            ? <Message>Choose brand, year and type of insurance</Message> 
            //si no cumple la condicion ejecuta esto
            :  (
                    <ResultQuotation>
                        <TextQuotation>The total is: $ {quotation} </TextQuotation>
                    </ResultQuotation>
                )
    )

}
 
export default Result;
