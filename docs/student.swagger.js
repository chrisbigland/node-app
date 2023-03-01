const findAll = {
    tags: ["Students"],
    description: "GET all students - receive a list of all of the students",
    operationId: "findAll",
    responses: {
        200: {
            description: "The students were received",
            content: "application/json"
        }
    }
}

const find = {
    tags: ["Students"],
    description: "GET a student - receive particular student using their id",
    operationId: "findAll",
    responses: {
        200: {
            description: "The students was received",
            content: "application/json"
        }
    }
}

const create = {
    tags: ["Students"],
    description: "POST a student - adds a student to the list of students",
    operationId: "create",
    responses: {
        201: {
            description: "The student was successfully created",
            content: "application/json"
        }
    }
}

const destroy = {
    tags: ["Students"],
    description: "DELETE one student - remove a student from the list of students using its id",
    operationId: "destroy",
    responses: {
        202: {
            description: "The students was successfully destroyed",
            content: "application/json"
        }
    }
}

module.exports = { findAll, find, create, destroy }