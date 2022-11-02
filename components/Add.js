import React, { useState } from "react";
import { Text, Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  StyledInput,
  ModalView,
  ModalAction,
  ModalActionGroup,
} from "../styles/Styles";
import DropDownPicker from "react-native-dropdown-picker";
const Add = ({
  modalVisible,
  setModalVisible,
  inputValue,
  setInputValue,
  handleAdd,
}) => {
  // Dropdown
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Email", value: "email" },
    { label: "Website", value: "website" },
    { label: "Others", value: "others" },
  ]);

  const handleClose = () => {
    setModalVisible(false);
    setInputValue("");
  };

  const handleSubmit = () => {
    if (!inputValue) return;
    if (!value) return;
    handleAdd({
      platform: value,
      title: inputValue,
    });
    setInputValue("");
  };

  return (
    <>
      <ModalButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>➕</Text>
      </ModalButton>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <ModalContainer>
          <ModalView>
            <DropDownPicker
              style={{ marginBottom: 20 }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            <StyledInput
              placeholder="Title"
              autofocus={true}
              value={inputValue}
              onChangeText={(text) => {
                setInputValue(text);
              }}
              onSubmitEditing={handleSubmit}
            />
          </ModalView>
          <ModalActionGroup>
            <ModalAction onPress={handleClose}>
              <Text>❌</Text>
            </ModalAction>
            <ModalAction onPress={handleSubmit}>
              <Text>✔️</Text>
            </ModalAction>
          </ModalActionGroup>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Add;
