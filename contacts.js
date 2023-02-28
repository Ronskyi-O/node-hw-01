const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

const contactsPath = path.resolve('./db/contacts.json')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })


async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, 'utf8')
        const contacts = JSON.parse(data)
        console.log(contacts);
    } catch (error) {
        console.log(error);
    }
}

async function getContactById(contactId) {
    // try {
    //     await rl.on('line', (contactId) => {
    //         const data = fs.readFile(contactsPath, 'utf8')
    //         const contacts = JSON.parse(data)
    //         const contactById = (contacts) => {
    //             contacts.find(contact => contact.id === contactId);
    //             return console.log(contactById);
    //         }
    //     })
    // } catch (error) {
    //     console.log(error);
    // }
    // rl.close()

}

function removeContact(contactId) {
    // ...твой код
}

function addContact(name, email, phone) {
    // ...твой код
}

module.exports = {
    contactsPath,
    listContacts,
    getContactById,
}