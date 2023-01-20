import { Account } from 'appwrite';
import { client } from '$lib/utils/appwrite-client';
const account = new Account(client);

/**
 *
 */
export const getCurrentSession = async () => {
	return account.getSession('current');
};

/**
 *
 */
export const login = async () => {
	return await account.createAnonymousSession();
};

/**
 *
 * @param {string} id
 */
export const logout = async (id) => {
	await account.deleteSession(id);
};
