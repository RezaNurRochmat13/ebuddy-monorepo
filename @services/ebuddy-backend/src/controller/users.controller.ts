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
        const { name, username, password, address } = request.body;
        const user = await createUser({ name, username, password, address });
        response.json(user);
    }

    async function update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, username, password, address } = request.body;
        const user = await updateUser(id, { name, username, password, address });
        response.json(user);
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
