import styled from "styled-components";

interface LabelStyleProps {
    size: 'medium' | 'small'
}

export const LabelStyle = styled.p((props: LabelStyleProps) => ({
    fontSize: props.size == 'medium' ? '1.5rem' : '1.25rem',
    fontFamily: 'Inter, sans-serif',
    lineHeight: props.size == 'medium' ? 1.6 : 1.5,
    color: 'rgb(174, 176, 180)',
    fontWeight: 400
}))