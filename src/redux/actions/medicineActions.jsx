export const ADD_MEDICINE = "ADD_MEDICINE";

export const addMedicine = (medicine, quantity) => ({
  type: ADD_MEDICINE,
  payload: { medicine, quantity },
});

