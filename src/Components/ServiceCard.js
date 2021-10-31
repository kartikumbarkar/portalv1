import React from 'react'
import styled from 'styled-components';

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled >
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled >
    )
}

const ServiceCardStyled = styled.div`
    background-color:#191D2B;
    border-left: 1px solid #2e344e;
    border-top: 8px solid #2e344e;
    border-right: 1px solid #2e344e;
    border-bottom: 1px solid #2e344e;
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid #FF0266;
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        h4{
            color: red;
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: #FF0266;
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p{
            padding: .8rem 0;
            color:#FFF;
        }
    }
`;

export default ServiceCard;
