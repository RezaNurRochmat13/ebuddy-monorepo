import bcrypt from 'bcrypt';

export default function useBcrypt() {
    async function encryptPassword(password: string) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async function decryptPassword(password: string, hash: string) {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    }

    return {
        encryptPassword,
        decryptPassword
    }
}