import TitleStyled from "./styled"

interface TitleProps {
    text: string;
}

const Title = (props: TitleProps) => {
    return (
        <TitleStyled>
            {props.text}
        </TitleStyled>
    )
}

export default Title