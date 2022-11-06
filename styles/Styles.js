import styled from "styled-components/native";

import Constants from "expo-constants";

// Colors
export const colors = {
  primary: "#52A8AE", // Darker green
  secondary: "#C7D66D", // Lime
  tertiary: "#75B9BE", // Lighter green
  alternative: "#DCEAB2", // Lighter lime
  warning: "#DB4444", // Red
  dark: "#333333", // Dark
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  background-color: white;
  padding: 40px 0;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
  margin-left: 20px;
  margin-right: 20px;
`;

// Header
export const HeaderView = styled.View`
  padding-vertical: 40px;
`;

export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.tertiary};
`;

// List
export const ListContainer = styled.View`
  margin-bottom: 30px;
  flex: 1;
  padding-bottom: 40px;
`;

export const ListContent = styled.View`
  flex: 1;
`;

export const ListViewNoData = styled.TouchableHighlight`
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-top: 200px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
`;

export const ListView = styled.TouchableHighlight`
  background-color: transparent;
  width: 100%;
  padding: 15px 0 4px;
  justify-content: space-around;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  border: 1px dashed ${colors.primary};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;

export const ListViewHidden = styled.View`
  background-color: ${colors.tertiary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`;

export const DelButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;

export const ListText = styled.Text`
  font-size: 11px;
  letter-spacing: 1px;
  color: ${colors.primary};
  flex: 1 70%;
  position: absolute;
  bottom: -25px;
`;

export const ListUser = styled.Text`
  font-size: 14px;
  letter-spacing: 2px;
  color: ${colors.dark};
`;

// Text for swiped todo row
export const SwipedTodoText = styled(ListText)`
  color: ${colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

// Modal
export const ModalButton = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background-color: #52a8ae;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 25px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: white;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;
  background-color: white;
`;

export const ModalView = styled.View`
  background-color: white;
  padding: 35px 0;
  width: 100%;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  color: black;
  letter-spacing: 1px;
  margin-top: 20px;
  border: 1px dashed ${colors.primary};
  outline-width: 0;
`;
export const StyledInputError = styled.Text`
  font-size: 11px;
  padding-left: 12px;
  margin-top: 4px;
  color: red;
`;
export const ModalAction = styled.TouchableOpacity`
  width: 45%;
  height: 60px;
  background-color: ${colors.primary};
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: row;
  color: white;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;
