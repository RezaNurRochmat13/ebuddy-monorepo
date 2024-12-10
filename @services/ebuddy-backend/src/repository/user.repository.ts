import firebaseConfig from "../config/firebase.config";
import User from "../entities/user";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebaseConfig);


export default function UsersRepository() {
    async function all() {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const users: User[] = [];
        usersSnapshot.forEach((doc) => {
            const user = doc.data();
            users.push(new User(user.id, user.name, user.username, user.password, user.address));
        });

        return users;
    }

    async function save(user: User) {
        await addDoc(collection(db, 'users'), user)
    }

    async function findById(id: string) {
        const userCollection = doc(db, "users", id);
        const userSnapshot = await getDoc(userCollection);
        const user = userSnapshot.data();
        return new User(user?.id, user?.name, user?.username, user?.password, user?.address);
    }

    async function update(id: string, payload: User) {
        const user = doc(db, 'users', id);
        await updateDoc(user, payload as any);
    }

    async function destroy(id: string) {
        const user = doc(db, 'users', id);
        await deleteDoc(user);
    }

    return {
        all,
        save,
        findById,
        update,
        destroy
    }
}