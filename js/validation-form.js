let selector = document.querySelector("input[type='tel']");
  let im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  //just-validate
  new JustValidate(".application", {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 15,
        function: (name, value) => {
          let arrayCheck = /(?=.*\d)|(?=.*[.,#?№;%!:@$^&*"'{}|=+()-])/;
          return !arrayCheck.test(String(value));
        },
      },
      tel: {
        required: true,
        function: () => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
    messages: {
      name: {
        minLength: "Мин. количество символов :value",
        maxLength: "Макс. количество символов :value",
        required: "Введите имя",
      },
      tel: {
        required: "Введите номер",
        function: "Введите не менее 10 символов",
      },
    },
  });
