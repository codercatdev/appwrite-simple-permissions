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
        Permission.read(Role.any()),                  // Anyone can view this document
        Permission.update(Role.team("writers")),      // Writers can update this document
        Permission.update(Role.team("admin")),       // Admins can update this document
        Permission.delete(Role.user("5c1f88b42259e")), // User 5c1f88b42259e can delete this document
        Permission.delete(Role.team("admin"))         // Admins can delete this document
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});