import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "../ui/Button";

function ExpenseForm({ onCancel, editing, onSubmit, previousValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: previousValues ? previousValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: previousValues
        ? previousValues.date.toISOString().slice(0, 10)
        : "",
      isValid: true,
    },
    description: {
      value: previousValues ? previousValues.description : "",
      isValid: true,
    },
  });

  function inputHandler(inputId, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputId]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    console.log(expenseData);

    const amountIsValid = expenseData.amount > 0 && !isNaN(expenseData.amount);
    const dateIsValid =
      !isNaN(expenseData.date) &&
      expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    console.log(
      `amountIsValid: ${amountIsValid}, dateIsValid: ${dateIsValid}, descriptionIsValid: ${descriptionIsValid}`
    );

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  console.log(
    inputs.amount.isValid,
    inputs.date.isValid,
    inputs.description.isValid
  );

  const fromIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  console.log(`FormIsInvalid: ${fromIsInvalid}`);

  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          placeholder: "$0.00",
          onChangeText: inputHandler.bind(this, "amount"),
          value: inputs.amount.value,
        }}
      />
      <Input
        label={"Date"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputHandler.bind(this, "date"),
          value: inputs.date.value,
        }}
      />
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          onChangeText: inputHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />
      {fromIsInvalid && (
        <Text>Invalid input. Please check your input values.</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {editing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
    marginVertical: 10,
  },
});

export default ExpenseForm;
