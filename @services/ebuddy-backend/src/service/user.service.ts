import User from "../entities/user";
import UsersRepository from "../repository/user.repository";
import useBcrypt from "../utils/bcrypt.util";

const { all, findById, save, update, destroy } = UsersRepository();

export default function UsersService() {
    const { encryptPassword } = useBcrypt()

    async function findAllUsers() {
        const users = await all();
        return users
    }

    async function findUserById(id: string) {
        const user = await findById(id);
        return user
    }

    async function createUser(payload: any) {
        const user = new User(payload.id, payload.name, payload.username, payload.password, payload.address);
        const hashedPassword = await encryptPassword(user.getPassword() as string);

        user.setPassword(hashedPassword);
        const newUser = await save(user.toObject());
        return newUser;
    }

    async function updateUser(id: string, user: any) {
        const updatedHashedPassword = await encryptPassword(user.getPassword() as string);
        user.setPassword(updatedHashedPassword);

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