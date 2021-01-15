new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 25,
      },
      phone: {
        required: true,
      },
    },
  });