const students = require('../docs/student.swagger.js')

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: "Chris's Node API",
        description: "The documentation for the _nology self-paced course Node API, designed to teach server-side programming to trainees.",
        contact: "christopherbigland@gmail.com",
        url: "https://nology.io"
    },
    servers: {
        url: "http://localhost:3000/",
        description: "Local Server"
    },
    tags: {
        name: "Students"
    },
    paths: {
        "/api/students": {
            get: students.findAll,
            post: students.create
        },
        "/api/students/:id": {
            get: students.find,
            delete: students.destroy
        }
    }
}

module.exports = swaggerDocument;
