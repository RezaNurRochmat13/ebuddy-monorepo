import { Request, Response } from "express";
import UsersService from "../service/user.service"

const { findAllUsers, createUser, updateUser, findUserById, deleteUser } = UsersService();

export default function UsersController() {
    async function index(request: Request, response: Response) {
        const users = await findAllUsers();
        response.json(users);
    }

    async function show(request: Request, response: Response) {
        const { id } = request.params;
        const user = await findUserById(id);
        response.json(user);
    }

    async function create(request: Request, response: Response) {
        const user = await createUser(request.body);
        response.status(201).json({ message: 'User created successfully', data: user});
    }

    async function update(request: Request, response: Response) {
        const { id } = request.params;
        const user = await updateUser(id, request.body);
        response.json({message: "User updated successfully", data: user});
    }

    async function destroy(request: Request, response: Response) {
        const { id } = request.params;
        const user = await deleteUser(id);
        response.json(user);
    }

    return {
        index,
        show,
        create,
        update,
        destroy
    }
}
