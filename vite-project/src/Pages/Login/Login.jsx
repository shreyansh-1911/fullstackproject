import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        try {
            const response = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();

                localStorage.setItem('token', data.token); 
                localStorage.setItem('role', data.role); 

                // Redirect based on role
                if (data.role === 'admin') {
                    window.location.href = 'http://localhost:5173';
                } else if (data.role === 'user') {
                    navigate('/'); // Redirect to user page
                }
            } else {
                const errorData = await response.json();
                setError(errorData.message); // Set error message from server response
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.'); // General error message
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0">Don't have an account? <Link to="/register" className="text-primary text-decoration-none">Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
