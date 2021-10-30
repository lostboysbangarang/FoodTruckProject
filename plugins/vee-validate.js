import { extend, localize } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

const dictionary = {
    en: {
        messages: {
            required: () => '* Required',
        },
    },
};

extend("required", {
  ...required,
  message: "This field is required"
});

// Install email rule.
extend("email", {
    ...email,
    message: "Please enter a valid email"
});

// Install min rule.
extend("min", min);

localize(dictionary);