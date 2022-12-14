import FastImage from "react-native-fast-image"
import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: "black";
`;

export const ImageIndex = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;
export const CarImage = styled(FastImage)`
  width: 280px;
  height: 123px;
`;
