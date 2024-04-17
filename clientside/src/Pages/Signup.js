import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", phone: "", work: "", password: "", cpassword: "" });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid");
            console.log('invalid');
        } else {
            window.alert("Successful");
            console.log('Successful');
            navigate('/login');
        }
    }

    return (
        <>
            <section className="vh-100 bg-gray-200 flex justify-center items-center" style={{ marginTop: '5em' }}>
                <div className="w-full max-w-md">
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-3xl font-bold text-center mb-8">Sign up</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                                <input type="text" id="name" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500" value={user.name} onChange={handleInput} name='name' />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                                <input type="email" id="email" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500" value={user.email} onChange={handleInput} name='email' />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
                                <input type="text" id="phone" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500" value={user.phone} onChange={handleInput} name='phone' />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="work" className="block text-sm font-semibold mb-2">Work</label>
                                <input type="text" id="work" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500" value={user.work} onChange={handleInput} name='work' />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-semibold mb-2">Password</label>
                                <input type="password" id="password" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500" value={user.password} onChange={handleInput} name='password' />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cpassword" className="block text-sm font-semibold mb-2">Confirm Password</label>
                                <input type="password" id="cpassword" className="w-full py-2 px-3 border rounded-md focus:outline-none focus:border-blue-500" value={user.cpassword} onChange={handleInput} name='cpassword' />
                            </div>
                            <div className="mb-4">
                                <button type="button" name="signup" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={postData}>Register</button>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
