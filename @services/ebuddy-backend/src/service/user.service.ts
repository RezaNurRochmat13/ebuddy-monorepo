import UsersRepository from "../repository/user.repository";

const { all, findById, save, update, destroy } = UsersRepository();

export default function UsersService() {

    async function findAllUsers() {
        const users = await all();
        return users
    }

    async function findUserById(id: string) {
        const user = await findById(id);
        return user
    }

    async function createUser(user: any) {
        const newUser = await save(user);
        return newUser;
    }

    async function updateUser(id: string, user: any) {
        const updatedUser = await update(id, user);
        return updatedUser;
    }

    async function deleteUser(id: string) {
        const deletedUser = await destroy(id);
        return deletedUser;
    }

    return {
        findAllUsers,
        findUserById,
        createUser,
        updateUser,
        deleteUser
    }
}