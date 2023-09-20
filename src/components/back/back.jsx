import React from 'react'
import styled from 'styled-components'
import Image from "next/image"
import Link from 'next/link'

const Box = styled.div`
    display: inline-flex;
`

const Title = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
`

const Block = styled.div`
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 12px 16px;
`

const Back = () => {
    return (
        <Box>
            <Link href={'/'}>
                <Block>
                    <Image src={'/Vector.svg'} width={24} height={15} alt='vector' />
                    <Title>Назад</Title>
                </Block>
            </Link>
        </Box>
    )
}

export default Back