import styled from '@emotion/styled'
import { ContentPasteSearch } from '@mui/icons-material'
import React, { useState } from 'react'

const SideTab = () => {

  const [isSideTabOpen, setIsSideTabOpen] = useState(false)

  const toggleSideTab = (source) => {
    if(source === 'sideButton')
      setIsSideTabOpen(!isSideTabOpen)
    else if (source === 'link')
      setIsSideTabOpen(false)

  }

  return (
    <SideTabContainer isOpen={isSideTabOpen}>
      <SideTabButton onClick={() => toggleSideTab('sideButton')}>
        <ContentPasteSearch/>
      </SideTabButton>
      <div>
        <a href="#lucknow" onClick={() => toggleSideTab('link')}>lucknow</a>
      </div>
    </SideTabContainer>
  )
}

export default SideTab

const SideTabContainer = styled.div`
  position: fixed;
  z-index: 3;
  @media screen and (max-width: 767px) {
    width: 80vw;
    left: ${props => props.isOpen ? '0' : '-93vw'};
  }
  width: 12rem;
  height: 70vh;
  left: ${props => props.isOpen ? '0' : '-15rem'};
  top: 50%;
  transform: translateY(-50%);
  background-color: #FFFFEE;
  transition: all 0.3s ease-in-out;
  padding: 1rem 1.5rem;
  border-radius: 0 12px 12px 0;

  & a {
    text-decoration: none;
    color: black;
  }
`

const SideTabButton = styled.button`
  background-color: #FFFFEE;
  border: transparent;
  position: absolute;
  right: -38px;
  border-radius: 0 12px 12px 0;
  padding: 4px 10px;
`