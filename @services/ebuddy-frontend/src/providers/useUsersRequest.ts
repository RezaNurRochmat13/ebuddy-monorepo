import { useState } from "react";

interface User {
    name: string;
    username: string;
    address: string;
}

export default function useUserRequest() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    async function getAllUsers() {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8000/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
                },
            });
            const data = await response.json();
            if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
            
            setIsLoading(false);
            setUsers(data);
        } catch (error) {
            setError(error);
            setUsers([]);
            throw error;
        } finally{
            setIsLoading(false);
        }
    }

    return { getAllUsers, users, isLoading, error };
}