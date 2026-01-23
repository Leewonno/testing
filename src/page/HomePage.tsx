'use client'

import Link from "next/link"
import styled from "styled-components"

const PageLink = styled(Link)`
  
`

export const HomePage = () => {
  return (
    <>
      <PageLink href={'/flab'}>F-Lab</PageLink>
      <PageLink href={'/jyp'}>JYP</PageLink>
    </>
  )
}