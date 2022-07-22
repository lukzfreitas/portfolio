import { LabelStyle } from "./styled";

interface LabelProps {
    text: string;
}

const Label = (props: LabelProps) => {
    return (
        <LabelStyle size="medium">
            {props.text}
        </LabelStyle>
    )
}

export default Label