// server.js
const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT = 3000;

// Function to create a new user
const createUser = () => ({
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.string.uuid(),
});

// Function to create a new company
const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country(),
    },
});

// API route to create a new user
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// API route to create a new company
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// API route to create both user and company
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({
        user: newUser,
        company: newCompany
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

