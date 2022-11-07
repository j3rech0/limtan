import React, { useState } from "react";
import { Text, Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  StyledInput,
  ModalView,
  ModalAction,
  ModalActionGroup,
  StyledInputError,
  ButtonText,
} from "../styles/Styles";
import DropDownPicker from "react-native-dropdown-picker";
import { Formik } from "formik";
import * as Yup from "yup";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const initialValues = {
  accounttype: "",
  title: "",
  user: "",
  pass: "",
};

const yupSchema = Yup.object().shape({
  accounttype: Yup.string().required("Account type is required."),
  title: Yup.string()
    .required("Title is required.")
    .min(2, "A minimum of 2 characters is required"),
  user: Yup.string()
    .required("Username is required.")
    .min(2, "A minimum of 2 characters is required"),
  pass: Yup.string().required("Password is required."),
});

const Add = ({ modalVisible, setModalVisible, setInputValue, handleAdd }) => {
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

  const handleSubmit = (values) => {
    handleAdd(values);
    setInputValue("");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={yupSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {(props) => (
        <>
          <ModalButton
            onPress={() => {
              setModalVisible(true);
            }}
            activeOpacity={0.9}
          >
            <ButtonText>Add</ButtonText>
          </ModalButton>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleClose}
          >
            <ModalContainer>
              <Text>Data will be saved locally.</Text>
              <ModalView>
                <DropDownPicker
                  open={open}
                  value={value}
                  placeholder="Account type"
                  items={items}
                  setValue={setValue}
                  setOpen={setOpen}
                  setItems={setItems}
                  closeAfterSelecting={true}
                  style={{
                    borderRadius: 0,
                    borderStyle: "dashed",
                    borderColor: "#52A8AE",
                  }}
                  dropDownContainerStyle={{
                    backgroundColor: "#ffffff",
                    borderRadius: 0,
                    borderStyle: "dashed",
                    borderColor: "#52A8AE",
                  }}
                  selectedItemContainerStyle={{
                    backgroundColor: "#52A8AE",
                  }}
                  selectedItemLabelStyle={{
                    color: "#fff",
                  }}
                  onSelectItem={(item) => {
                    props.values.accounttype = item.label;
                  }}
                  props={{
                    activeOpacity: 0.8,
                  }}
                  placeholderStyle={{
                    color: "#ccc",
                  }}
                  ArrowUpIconComponent={() => (
                    <MaterialIcons
                      name="keyboard-arrow-up"
                      size={24}
                      color="#52A8AE"
                    />
                  )}
                  ArrowDownIconComponent={() => (
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      size={24}
                      color="#52A8AE"
                    />
                  )}
                />
                {props.touched.accounttype && props.errors.accounttype ? (
                  <StyledInputError>
                    {props.errors.accounttype}
                  </StyledInputError>
                ) : null}
                <StyledInput
                  placeholder="Website name, Email platform etc."
                  placeholderTextColor="#ccc"
                  autofocus={true}
                  value={props.values.title}
                  onChangeText={props.handleChange("title")}
                  onBlur={props.handleBlur("title")}
                />
                {props.touched.title && props.errors.title ? (
                  <StyledInputError>{props.errors.title}</StyledInputError>
                ) : null}
                <StyledInput
                  placeholder="User"
                  placeholderTextColor="#ccc"
                  autofocus={true}
                  value={props.values.user}
                  onChangeText={props.handleChange("user")}
                  onBlur={props.handleBlur("user")}
                />
                {props.touched.user && props.errors.user ? (
                  <StyledInputError>{props.errors.user}</StyledInputError>
                ) : null}
                <StyledInput
                  placeholder="Pass"
                  placeholderTextColor="#ccc"
                  autofocus={true}
                  value={props.values.pass}
                  onChangeText={props.handleChange("pass")}
                  onBlur={props.handleBlur("pass")}
                />
                {props.touched.pass && props.errors.pass ? (
                  <StyledInputError>{props.errors.pass}</StyledInputError>
                ) : null}
              </ModalView>
              <ModalActionGroup>
                <ModalAction
                  onPress={() => {
                    handleClose(), props.resetForm();
                  }}
                  activeOpacity={0.9}
                  style={{ backgroundColor: "#DB4444" }}
                >
                  <Ionicons name="md-close-circle" size={28} color="#ffffff" />
                  <Text style={{ color: "white", marginLeft: 10 }}>Cancel</Text>
                </ModalAction>
                <ModalAction onPress={props.handleSubmit} activeOpacity={0.9}>
                  <Ionicons
                    name="md-checkmark-circle"
                    size={28}
                    color="#ffffff"
                  />
                  <Text style={{ color: "white", marginLeft: 10 }}>Save</Text>
                </ModalAction>
              </ModalActionGroup>
            </ModalContainer>
          </Modal>
        </>
      )}
    </Formik>
  );
};

export default Add;
