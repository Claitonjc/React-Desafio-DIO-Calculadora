
import { ButtonContainer } from "./styles";

const Button = ({label, onClick, className}) => {
    return (
      <ButtonContainer className={className} onClick = {onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;