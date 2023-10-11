import { useState } from 'react';

interface FormState {
    [key: string]: string;
}

export const useForm = (initialForm: FormState = {}) => {
    const [formState, setFormState] = useState<FormState>(initialForm);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        formState,
        onInputChange,
        onResetForm,
    };
};
