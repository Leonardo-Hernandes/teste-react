import * as cpf from "@fnando/cpf";
import { useFormik } from "formik";
import * as yup from "yup";

export const useRegistrationForm = () => {
    const nameValidationRegex = /^[a-zA-Z \u00C0-\u024F\']+$/;

    const validationSchema = yup.object({
        name: yup
            .string()
            .trim()
            .min(4, "O nome deve conter no mínimo 4 caracteres")
            .matches(
                nameValidationRegex,
                "Nome inválido. Este campo não pode conter números ou caracteres especiais"
            )
            .required("Campo obrigatório. Por favor, digite seu nome"),
        password: yup
            .string()
            .required("Campo obrigatório. Por favor, digite sua senha"),
        email: yup
            .string()
            .email("Email inválido, por favor digite seu email novamente")
            .trim()
            .required("Campo obrigatório. Por favor, digite seu email"),
        cpf: yup
            .string()
            .matches(
                /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
                "CPF inválido. Digite o seu CPF completo com 11 dígitos"
            )
            .test(
                "cpf",
                "CPF inválido. Digite o seu CPF completo com 11 dígitos",
                (value) => {
                    return cpf.isValid(`${value}`);
                }
            )
            .required("Campo obrigatório. Por favor, digite seu CPF"),
        adress: yup
            .string()
            .trim()
            .required("Campo obrigatório. Por favor, digite sua endereço"),
        phone: yup
            .string()
            .min(4, "Número de telefone incompleto, por favor preencha novamente")
            .trim()
            .required("Campo obrigatório. Por favor, digite seu telefone"),
    });

    const initialValues = {
        name: "",
        password: "",
        email: "",
        cpf: "",
        adress: "",
        phone: "",
    };

    return useFormik({
        initialValues,
        initialErrors: { firstName: "initial error" },
        validationSchema,
        onSubmit: () => { },
    });
};
