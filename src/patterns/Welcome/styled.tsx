import styled from "styled-components";

interface FlexGridProps {
    display?: string;
    verticalAlign?: string;
    horizontalAlign?: string;
    height?: string;
    width?: string;
}

export const FlexGrid = styled.div(({
    display = 'flex',
    verticalAlign = 'flex-start',
    horizontalAlign = 'flex-start',
    height = '100%',
    width = '100%',
}: FlexGridProps) => ({
    display,
    height,
    width,
    border: '1px solid black',
    alignItems: verticalAlign,
    justifyContent: horizontalAlign
}));