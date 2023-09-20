import React from "react";
import Head from 'next/head'
import Wrapper from "../../components/wrapper/wrapper";
import Container from "../../components/container/container";
import Back from "../../components/back/back";

import styled from 'styled-components'
import { device } from "../../components/device/device";
import { useRouter } from 'next/router'
import { useRemovePostMutation } from "../../api/postsApi";
import {useDispatch, useSelector} from 'react-redux'
import {setRemovePost} from '../../redux/slices/postSlice'

const Block = styled.div`
    position: relative;
    background-color: #FEFEFE;
    /* box-sizing: content-box; */
    padding: 48px 32px;
    border-radius: 15px;

    @media ${device.mobileL} {
        padding: 24px 28px;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Title = styled.div`
    color: #3260A1;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
`

const BlockInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
`

const Info = styled.div`
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
`

const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 28px;

    @media ${device.laptop} {
        display: flex;
        flex-direction: column-reverse;
    }
`

const BackraundImage = styled.div`
    ${(props) => {
        return props.image && {
            background: `url(${props.image})`,
            width: '540px',
            height: '418px',
            borderRadius: '15px',
            backgroundSize: '540px 418px'
        }
    }};

    @media ${device.tablet} {
        width: 380px;
        height: 300px;
        background-size: 380px 300px;
    }

    @media ${device.mobileL} {
        width: 280px;
        height: 220px;
        background-size: 280px 270px;
    }
`

const AddPages = styled.div`
    position: absolute;
    bottom: -16px;
    left: 50%;
    background-color: #EB5050;
    padding: 8px 18px;
    border-radius: 10px;
    margin-left: -72px;
    cursor: pointer;
`

const Text = styled.div`
    color: #FFFFFF;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
`

const Blog = ({posts}) => {

    const router = useRouter()

    if (router.isFallback) {
        return <div>Is Loading...</div>
    }
    const post = posts?.post
    const [removeId] = useRemovePostMutation()

    const deletePost = async () => {
        const id = await post?._id
        removeId({id})
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <Container>
                <Wrapper>
                    <Box>
                        <Back />
                        <Block>
                            <Card>
                                <BlockInfo>
                                    <Title>{post?.title}</Title>
                                    <Info>{post?.text}</Info>
                                </BlockInfo>
                                <BackraundImage image={post?.image} alt="countryImage" />
                            </Card>
                            <AddPages onClick={deletePost}>
                                <Text>Удалить статью</Text>
                            </AddPages>
                        </Block>
                    </Box>
                </Wrapper>
            </Container>
        </>
    )
} 

export const getStaticProps = async (context) => {
    const id = context?.params?.id
    console.log(id)
    const res = await fetch(`http://localhost:5000/blogs/${id}`)
    const data = await res.json()
    return {
        props: {posts: data}
    }
}

export const getStaticPaths = async () => {
    const responce = await fetch('http://localhost:5000/blogs')
    const data = await responce.json()

    const paths = data?.map((obj) => {
        return {
            params: {id: String(obj._id)}
        }
    })

    return {
        paths,
        fallback: true,
    }
}

export default Blog
