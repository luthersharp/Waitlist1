import React, { useState } from 'react';

const FooterCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "b5800470-0195-4552-9d84-86c021da369a",
                name: formData.name,
                email: formData.email,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setFormData({ name: '', email: '' }); // Clear the form fields
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <main id="formTwo" className="py-0 px-4 lg:px-56">
            <div className="border py-5 rounded-md border-black max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto space-y-3 sm:text-center">
                    <h3 className="text-teal-400 lg:text-4xl font-semibold">
                        Podsynk
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Join Waitlist
                    </p>
                    <p>
                        "For a successful podcasting journey.."
                    </p>
                </div>
                <div className="mt-3 max-w-lg mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                            <div>
                                <label className="font-medium">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-teal-500 hover:bg-slate-900 active:bg-teal-400 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default FooterCTA;
