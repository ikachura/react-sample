export const onSubmit = (firstName, lastName, age) => {
  // validation

  return {
    type: 'ON_SUBMIT',
    payload: {
      firstName,
      lastName,
      age,
    },
  }
}

// payload, err(or), meta
