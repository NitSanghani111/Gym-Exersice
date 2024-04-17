import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const Admin = () => {
    const [formData, setFormData] = useState({
        image: '',
        heading: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/addposts', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log('Post added successfully');
                // Display confirmation message
                alert('Post added successfully');
                // Reset form after successful submission
                setFormData({ image: '', heading: '', description: '' });
            } else {
                console.error('Failed to add post:', response.data); // Log response data
            }
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };


    return (
        <div className="container text-2xl mx-auto py-8 mt-24">
            <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="image" className="block text-md font-medium text-gray-700">Image URL</label>
                    <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} className="mt-1 p-2 block w-full border border-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="heading" className="block text-md font-medium text-gray-700">Heading</label>
                    <input type="text" id="heading" name="heading" value={formData.heading} onChange={handleChange} className="mt-1 p-2 block w-full border border-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-md font-medium text-gray-700">Description</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" className="mt-1 p-2 block w-full border border-black rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Add Post</button>
                </div>
            </form>
        </div>
    );
};

export default Admin;
