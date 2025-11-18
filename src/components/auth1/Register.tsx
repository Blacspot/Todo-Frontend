import Navbar from "../Navbar/Navbar";
import { useForm, type SubmitHandler } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { usersAPI } from "../../features/auth/userAPI";
import { toast } from "sonner";
import { useNavigate } from "react-router";

type RegisterInputs = {
    first_name: string
    last_name: string
    email: string
    phone_number: string
    password: string
    confirmPassword: string
}

const schema = yup.object({
    first_name: yup.string().max(50, 'Max 50 characters').required('First name is required'),
    last_name: yup.string().max(50, 'Max 50 characters').required('Last name is required'),
    email: yup.string().email('Invalid email').max(100, 'Max 100 characters').required('Email is required'),
    phone_number: yup.string().max(20, 'Max 20 characters').required('Phone number is required'),
    password: yup.string().min(6, 'Min 6 characters').max(255, 'Max 255 characters').required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], "Password must match")
        .required('Confirm password is required')
})
export const Register = () => {
    const navigate = useNavigate()
    const [createUser, { isLoading }] = usersAPI.useCreateUsersMutation()
    const {
        register,
        handleSubmit,
        formState: { error }
    } = useForm<RegisterInputs>({
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
        try{
            const response = await createUser(data).unwrap()
            console.log("Response",response);
            toast.success(response.message)

            setTimeout(() => {
                navigate('/verify', {
                    state: {email: data.email}
                })
            })
        }
    }

}