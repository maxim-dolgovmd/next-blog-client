import React from 'react'
import Image from "next/image"
import styled from 'styled-components'
import { device } from '../device/device'

const Block = styled.div`
    position: relative;
    width: min-content;
`

const BackraundImage = styled.div`
    ${(props) => {
        return props.images && {
            background: `url(${props.images})`,
            width: '350px',
            height: '270px',
            borderRadius: '0px 0px 15px 15px',
            backgroundSize: '350px 270px'
        }
    }};

    @media ${device.laptopL} {
        width: 320px;
        height: 250px;
        background-size: 320px 250px;
    }

    @media ${device.tablet} {
        width: 400px;
        height: 310px;
        background-size: 400px 310px;
    }

    @media ${device.mobileL} {
        width: 300px;
        height: 230px;
        background-size: 300px 230px;
    }
`

const AbsoluteInfo = styled.div`
    background-color: #FEFEFE;
    border-radius: 0px 0px 15px 15px;
    padding: 14px 18px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`

const Title = styled.div`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
`

const CardPost = ({images, title}) => {

    return (
        <Block>
            <BackraundImage images={images} />
            <AbsoluteInfo>
                <Title>{title}</Title>
            </AbsoluteInfo>
        </Block>
    )
}

export default CardPost