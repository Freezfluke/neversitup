import {Text} from 'react-native';

type PropsTextLabel = {
  message: string;
  color: string;
  fontSize: number;

};

const TextLabel = ({message, color, fontSize}: PropsTextLabel) => {
  return <Text style={{color, fontSize}}>{message}</Text>;
};

export default {TextLabel};
