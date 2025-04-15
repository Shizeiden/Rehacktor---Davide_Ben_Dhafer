import { useState } from "react";
import { getErrors, getFieldError, FormSchemaLogin, ConfirmSchemaLogin } from "../../lib/validationForm";
import supabase from "../../supabase/supabase-client";
import { useNavigate } from "react-router";

export default function LoginPage() {
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        // if (!formState.email || !formState.password) {
        //     setFormErrors({
        //         email: !formState.email ? "Email obbligatoria" : "",
        //         password: !formState.password ? "Password obbligatoria" : "",
        //     });
        //     return;
        // }
        const { error, data } = ConfirmSchemaLogin.safeParse(formState);
        if (error) {
            const errors = getErrors(error);
            setFormErrors(errors);
            console.log(errors);
        } else {
            console.log(data);
            let { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            });
            if (error) {
                alert("Errore di accesso 👎🏻! Controlla le credenziali.");
            } else {
                alert("Accesso effettuato con successo 👍🏻!");
                await new Promise((resolve) => setTimeout(resolve, 1000));
                navigate("/"); // Torna alla homepage dopo il login
            }
        } 
    };

    const onBlur = (property) => () => {
        const message = getFieldError(property, formState[property]);
        setFormErrors((prev) => ({ ...prev, [property]: message }));
        setTouchedFields((prev) => ({ ...prev, [property]: true }));
    };

    const isInvalid = (property) => {
        if (formSubmitted || touchedFields[property]) {
            return !!formErrors[property];
        }
        return undefined;
    };

    const setField = (property) => (e) => {
        setFormState((prev) => ({ ...prev, [property]: e.target.value }));
    };

    return (
        <div className="container mt-5 text-white">
            <h1 className="text-center my-5">LOGIN:</h1>
            <form onSubmit={onSubmit} className="max-w-md mx-auto" noValidate>

                {/* Email Input */}
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={setField("email")}
                        onBlur={onBlur("email")}
                        aria-invalid={isInvalid("email")}
                        required 
                    />
                    {formErrors.email && <small>{formErrors.email}</small>}
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email address
                    </label>
                </div>

                {/* Password Input */}
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" " 
                        type="password"
                        id="password"
                        name="password"
                        value={formState.password}
                        onChange={setField("password")}
                        onBlur={onBlur("password")}
                        aria-invalid={isInvalid("password")}
                        required 
                    />
                    {formErrors.password && <small>{formErrors.password}</small>}
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Password
                    </label>
                </div>

                <br />
                <button type="submit" className="btn-1 custom-btn">
                    Login
                </button>
            </form>
        </div>
    );
}
