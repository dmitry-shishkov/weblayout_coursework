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
    messages: {
      name: {
        required: 'Введите имя',
        minLength: 'Поле должно содержать минимум 2 знака',
        maxLength: 'Поле должно содержать максимум 25 знаков',
      },
      phone: {
        required: 'Введите номер телефона'
      },
    },
  });