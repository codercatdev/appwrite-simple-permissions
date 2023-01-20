import { Databases, Permission, Role, ID } from 'appwrite';
import { client } from '$lib/utils/appwrite-client';
const databases = new Databases(client);

export const basic = async () => {
	return databases.createDocument(
		'63c6f0ffdb9c522d233f',
		'63c6f1085828f416402a',
		ID.unique(),
		{ actorName: 'Chris Evans', height: 183 },
		[
			Permission.read(Role.any()), // Anyone can view this document
			// Permission.update(Role.team('writers')), // Writers can update this document
			// Permission.update(Role.team('admin')), // Admins can update this document
			Permission.delete(Role.user('5c1f88b42259e')) // User 5c1f88b42259e can delete this document
			// Permission.delete(Role.team('admin')) // Admins can delete this document
		]
	);
};

export const teamRoles = async () => {
	return databases.createDocument(
		'63c6f0ffdb9c522d233f',
		'63c6f1085828f416402a',
		ID.unique(),
		{ actorName: 'Chris Evans', height: 183 },
		[
			Permission.read(Role.team('5c1f88b87435e')), // Only users of team 5c1f88b87435e can read the document
			Permission.update(Role.team('5c1f88b87435e', 'owner')), // Only users of team 5c1f88b87435e with the role owner can update the document
			Permission.delete(Role.team('5c1f88b87435e', 'owner')) // Only users of team 5c1f88b87435e with the role owner can delete the document
		]
	);
};
