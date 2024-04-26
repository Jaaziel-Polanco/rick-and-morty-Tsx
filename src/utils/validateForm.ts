import * as yup from 'yup';

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required('El nombre de usuario es requerido'),
    password: yup.string().trim().required('La contraseña es requerida').min(8, 'La contraseña debe tener al menos 8 caracteres').max(20, 'La contraseña debe tener menos de 20 caracteres')
})