import React, { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import Account from "./Account";
import { motion } from 'framer-motion'; // Import framer-motion

const Login = () => {
    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const validateForm = () => {
        const newErrors = {};
        if (!formData.identifier.trim()) {
            newErrors.identifier = "Email or username is required";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");

        if (!validateForm()) return;

        setLoading(true);

        try {
            const isEmail = formData.identifier.includes("@");

            const loginData = {
                password: formData.password,
                // Spread the identifier into either email or username field
                ...(isEmail
                    ? { email: formData.identifier }
                    : { username: formData.identifier }),
            };
            // Server url for your login endpoint added to dotenv
            const url = "http://localhost:3007/byway/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage("Login successful!");
                setTimeout(() => {
                    window.location.href = "/dashboard"; // Redirect to dashboard or home page
                }, 2000);
            } else {
                setErrors({
                    submit: data.message || "Login failed. Please try again.",
                });
            }
        } catch (error) {
            setErrors({ submit: "Network error. Please try again later." });
        } finally {
            setLoading(false);
        }
    };

    // Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="w-full max-w-[690px] min-h-[567px] p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" // Added shadow
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2 className="lg:text-[36px] text-2xl font-[600] mb-8 text-center text-gray-800 dark:text-gray-200">
                Sign in to your account
            </h2>

            {successMessage && (
                <motion.div
                    className="mb-4 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg"
                    variants={itemVariants}
                >
                    {successMessage}
                </motion.div>
            )}

            {errors.submit && (
                <motion.div
                    className="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg"
                    variants={itemVariants}
                >
                    {errors.submit}
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8"> {/* Adjusted spacing */}
                <motion.div variants={itemVariants}>
                    <label className="block text-lg font-[600] text-gray-600 dark:text-gray-300 mb-2">
                        Email or Username
                    </label>
                    <input
                        type="text"
                        name="identifier"
                        placeholder="Username or Email ID"
                        value={formData.identifier}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[58px] focus:outline-none border-[1px] border-[#E2E8F0] dark:border-[#353535] rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                    />
                    {errors.identifier && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.identifier}
                        </p>
                    )}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <label className="block text-lg font-[600] text-gray-600 dark:text-gray-300 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[58px] focus:outline-none border-[1px] border-[#E2E8F0] dark:border-[#353535] rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                            {errors.password}
                        </p>
                    )}
                </motion.div>

                <motion.button
                    type="submit"
                    disabled={loading}
                    className="bg-[#020617] dark:bg-blue-600 rounded-[8px] py-3 px-6 lg:min-w-[238px] min-w-full min-h-[48px] hover:bg-blue-700 dark:hover:bg-blue-700 text-white font-semibold transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {loading ? (
                        <span className="flex items-center gap-2 justify-center">
                            <Loader2 className="animate-spin h-5 w-5" />
                            Signing In...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2 justify-center">
                            Sign In <ArrowRight />
                        </span>
                    )}
                </motion.button>
                <Account />
            </form>
        </motion.div>
    );
};

export default Login;