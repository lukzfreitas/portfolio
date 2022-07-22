import { FlexGrid } from "./styled";

interface WelcomeProps {
    title: string;
}

const Welcome = (props: WelcomeProps) => {
    return (
        <FlexGrid>            
            {props.title}
        </FlexGrid>
    )
}

export default Welcome;