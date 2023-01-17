import { Client, Databases, Permission, Role } from "appwrite";

const client = new Client()
    .setEndpoint('http://localhost/v1')
    .setProject('63c6f0ea9d8071ea939f');

const databases = new Databases(client);

let promise = databases.createDocument(
    '63c6f0ffdb9c522d233f',
    '63c6f1085828f416402a',
    { 'actorName': 'Chris Evans', 'height': 183 },
    [
        Permission.read(Role.team("5c1f88b87435e")),            // Only users of team 5c1f88b87435e can read the document
        Permission.update(Role.team("5c1f88b87435e", "owner")), // Only users of team 5c1f88b87435e with the role owner can update the document
        Permission.delete(Role.team("5c1f88b87435e", "owner")),   // Only users of team 5c1f88b87435e with the role owner can delete the document
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});