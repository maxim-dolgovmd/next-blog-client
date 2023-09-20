import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Container from '../../components/container/container'
import Wrapper from '../../components/wrapper/wrapper'
import Back from '../../components/back/back'

import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { device } from '../../components/device/device'
import { useCreatePostMutation } from '../../api/postsApi'
import {useDispatch, useSelector} from 'react-redux'
import { AddCreated } from '../../redux/slices/postSlice'
import { setCreated, setAddPost } from '../../redux/slices/postSlice'
import { useRouter } from 'next/router'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 165px;

    @media ${device.tablet} {
        gap: 60px;
    }
`

const BlockForm = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

const Form = styled.form`
    padding: 26px;
    background-color: #FFFFFF;
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 15px;
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`

const Title = styled.h1`
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    letter-spacing: 0em;
    color: #222222;
`

const InputStyle = styled.input`
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    padding: 8px;
`

const InputArea = styled.textarea`
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    padding: 8px;
    min-height: 150px;
`

const BoxButton = styled.div`
    padding-top: 14px;
    display: flex;
    justify-content: center;
`

const AddButton = styled.button`
    padding: 10px 28px;
    display: inline-flex;
    box-shadow: 0px 10px 25px 0px #94AED426;
    border-radius: 10px;
    background-color: #67BFFF;

    ${(props) => {
        return props.disabled && {
            backgroundColor: '#979da2'
        }
    }};
`

const Text = styled.div`
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    letter-spacing: 0em;
`

const CreatedComment = styled.div`
    position: absolute;
    bottom: -57px;
    right: 0;
    padding: 12px 16px;
    background-color: #89efb5;
    color: #3260A1;
    border-radius: 15px;
`

const AddPosts = () => {
    
    const router = useRouter()
    const [createPost, {isLoading, isError}] = useCreatePostMutation()
    const { register, reset, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
    const dispatch = useDispatch()
    const {created, addPost} = useSelector((state) => state.posts)
    
    console.log(errors)
    console.log(created)

    const onSubmit = async (data) => {
        console.log(data)
        await createPost(data)
        dispatch(setCreated(true))
        reset()
        setTimeout(() => {
            dispatch(setCreated(false))
        }, 3000);
        router.push('/')
    }

    return (
        <>
            <Head>
                <title>NEXT BLOG | Добавить пост</title>
            </Head>
            <Container>
                <Wrapper>
                    <Box>
                        <Back />
                        <BlockForm>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <InputBox>
                                    <Title>Название статьи:</Title>
                                    <InputStyle 
                                        type="text" 
                                        {...register('title', {
                                            required: 'Введите название статьи',
                                            minLength: {
                                                value: 6,
                                                message: 'Минимум 6 символов ',
                                            }
                                        })}
                                    />
                                    {errors.title?.message && (
                                        <div style={{color: 'red'}}>{errors.title.message}</div>
                                    )}
                                </InputBox>
                                <InputBox>
                                    <Title>Текст статьи:</Title>
                                    <InputArea 
                                        type="text" 
                                        {...register('textArea', {
                                            required: 'Введите текст',
                                            minLength: {
                                                value: 12,
                                                message: 'Минимум 12 символов'
                                            }
                                        })}
                                    />
                                    {errors.textArea?.message && (
                                        <div style={{color: 'red'}}>{errors.textArea.message}</div>
                                    )}
                                </InputBox>
                                <InputBox>
                                    <Title>URL картинки:</Title>
                                    <InputStyle 
                                        type="text"
                                        {...register('urlImage', {
                                            required: 'Введите url'
                                        })}
                                    />
                                    {errors.urlImage?.message && (
                                        <div style={{color: 'red'}}>{errors.urlImage.message}</div>
                                    )}
                                </InputBox>
                                <BoxButton >
                                    <AddButton disabled={Object.keys(errors)?.length > 0} type='submit' onClick={() => {}}>
                                        <Text>Добавить</Text>
                                    </AddButton>
                                </BoxButton>
                            </Form>
                            {created && (
                                <CreatedComment>
                                    <div>Статья создана</div>
                                </CreatedComment>
                            )}
                        </BlockForm>
                    </Box>
                </Wrapper>
            </Container>
        </>
    )
}

export default AddPosts