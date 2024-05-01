import React, { useState } from 'react'
import { ContentPasteSearch } from '@mui/icons-material'
import styled from '@emotion/styled'

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
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <a href="#overview" style={{
          marginBottom: "30px",
          textAlign: "center"
        }} onClick={() => toggleSideTab('link')}>Overview</a>
        <a href="#lucknow" style={{
          marginBottom: "30px",
          textAlign: "center"
        }} onClick={() => toggleSideTab('link')}>Chronology of Meher Baba’s Lucknow visits</a>
        <a href="#present" style={{
          marginBottom: "30px",
          textAlign: "center"
        }} onClick={() => toggleSideTab('link')}>History of Avatar Meher Baba Centre, Lucknow</a>
        <a href="#places" style={{
          marginBottom: "30px",
          textAlign: "center"
        }} onClick={() => toggleSideTab('link')}>Places of Lucknow related to Meher Baba</a>
      </div>
    </SideTabContainer>
  )
}

export default SideTab

const SideTabContainer = styled.div`
  position: fixed;
  z-index: 3;
  @media screen and (max-width: 767px) {
    width: 70vw;
    left: ${props => props.isOpen ? '0' : '-83%'};
  }
  width: 12rem;
  height: 70vh;
  left: ${props => props.isOpen ? '0' : '-15rem'};
  top: 55%;
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
  padding: 4px 6px 4px 10px;
`
