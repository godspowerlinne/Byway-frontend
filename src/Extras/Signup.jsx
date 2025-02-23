import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import Account from './Account';
import { motion } from 'framer-motion'; // Import framer-motion

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.username.trim()) newErrors.username = 'Username is required';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');

        if (!validateForm()) return;

        setLoading(true);

        try {
            // Simulate API call for signup
            const url = 'http://localhost:3007/byway/signup'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Account created successfully!');
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                setErrors({ submit: data.message || 'Signup failed. Please try again.' });
            }
        } catch (error) {
            setErrors({ submit: 'Network error. Please try again later.' });
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
            className="w-full max-w-[690px] min-h-[567px] p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"  // Added shadow
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2 className="lg:text-[36px] text-2xl font-[600] mb-8 text-center text-gray-800 dark:text-gray-200">
                Create Your Account
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-lg font-[600] text-gray-600 dark:text-gray-300 mb-2">Full Name</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[58px] focus:outline-none border-[1px] border-[#E2E8F0] dark:border-[#353535] rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[58px] focus:outline-none border-[1px] border-[#E2E8F0] dark:border-[#353535] rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              </motion.div>

                <motion.div variants={itemVariants}>
                    <label className="block text-lg font-[600] text-gray-600 dark:text-gray-300 mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[58px] focus:outline-none border-[1px] border-[#E2E8F0] dark:border-[#353535] rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                    />
                    {errors.username && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.username}</p>
                    )}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <label className="block text-lg font-[600] text-gray-600 dark:text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 min-h-[58px] focus:outline-none border-[1px] border-[#E2E8F0] dark:border-[#353535] rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-lg font-[600] text-gray-600 dark:text-gray-300 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-3 min-h-[58px] focus:outline-none border-[1px] border-[#E2E8F0] dark:border-[#353535] rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-lg font-[600] text-gray-600 dark:text-gray-300 mb-2">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-3 min-h-[58px] focus:outline-none border-[1px] border-[#E2E8F0] dark:border-[#353535] rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                            />
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
                            )}
                        </div>
                    </div>
                </motion.div>

                <motion.button
                    type="submit"
                    disabled={loading}
                    className="bg-[#020617] dark:bg-blue-600 rounded-[8px] py-[10px] lg:min-w-[238px] min-w-full min-h-[48px] hover:bg-blue-700 dark:hover:bg-blue-700 text-white transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }} // Add a hover effect
                    whileTap={{ scale: 0.95 }}  // Add a tap effect
                >
                    {loading ? (
                        <span className='flex items-center gap-2 justify-center'>
                            <Loader2 className="animate-spin h-5 w-5" />
                            Creating Account...
                        </span>
                    ) : (
                        <span className='flex items-center gap-2 justify-center'>
                            Create Account < ArrowRight />
                        </span>
                    )}
                </motion.button>
                <Account />
            </form>
        </motion.div>
    );
};

export default Signup;