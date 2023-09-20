import React from 'react'
import styled from 'styled-components'
import { device } from '../device/device'

const Wrapper = styled.div`
    padding-top: 105px;
    height: 100%;
    padding-bottom: 165px;

    @media ${device.tablet} {
        padding-bottom: 80px;
    }
`

export default React.memo(Wrapper)