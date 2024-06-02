import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({title,isLoading}: Props) {
  return <Container>
    {isLoading? }
  </Container>;
}
