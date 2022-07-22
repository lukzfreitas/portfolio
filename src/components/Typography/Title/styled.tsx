import styled from "styled-components";

interface TitleStyledProps {

}

const TitleStyled = styled.h2((props: TitleStyledProps) => ({
    fontSize: '3.125rem',
    fontWeight: 700,
    fontFamily: 'Inter, sans-serif'
}))

export default TitleStyled