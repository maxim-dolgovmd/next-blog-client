import React from 'react'
import styled from 'styled-components'
import Container from '../container/container'
import Link from 'next/link'

import Head from 'next/head'

const Box = styled.div`
    background-color: #FEFEFE;
    position: fixed;
    width: 100%;
    z-index: 300;
`

const BlockContent = styled.div`
    position: relative;
    padding: 17px 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
`

const AddPages = styled.div`
    position: absolute;
    bottom: -30%;
    left: 50%;
    background-color: #67BFFF;
    padding: 8px 18px;
    border-radius: 10px;
    margin-left: -59px;
    box-shadow: 0px 10px 25px 0px #94AED426;
    cursor: pointer;
`

const Text = styled.div`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
`

const Header = () => {
    return (
        <>
            <Head>
                <title>Create next app</title>
            </Head>
            <Box>
                <Container>
                    <BlockContent>
                        <Link href={'/'}>
                            NEXT | BLOG
                        </Link>
                        <Link href={'/add-posts'}>
                            <AddPages>
                                <Text>Добавить статью</Text>
                            </AddPages>
                        </Link> 
                    </BlockContent>
                </Container>
            </Box>
        </>
    )
}

export default Header