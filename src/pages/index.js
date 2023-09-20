import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Head from 'next/head'

import Container from '../components/container/container'
import CardPost from '../components/cardPost/cardPost'
import Wrapper from '../components/wrapper/wrapper'

import { device } from '../components/device/device'

const LinkNext = styled(Link)`
    width: min-content;
`

const BoxGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* justify-content: space-between; */
    column-gap: 18px;
    row-gap: 42px;

    @media ${device.laptop} {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
    }
`

const Home = ({data}) => {

    return (
        <>
            <Head>
                <title>Create next app</title>
            </Head>
            <Container>
                <Wrapper>
                    <BoxGrid>
                        {data?.map((obj) => {
                            return (
                                <LinkNext key={obj._id} href={`/blog/${obj._id}`}>
                                    <CardPost
                                        images={obj.image} 
                                        title={obj.title} 
                                    />
                                </LinkNext>
                            )})}
                    </BoxGrid>
                </Wrapper>
            </Container>
    
        </>
    )
}

export default Home

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5000/blogs`)
    const data = await res.json()
   
    if (!data) {
      return {
        notFound: true,
      }
    }
   
    return {
      props: { data }
    }
}