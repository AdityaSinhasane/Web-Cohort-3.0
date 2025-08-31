import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();

async function createDummyUser(){
    await client.user.create({
        data:{
            username: "xyz",
            age: 22,
            password: "zzzz",
            city: "Pune",
            todos:{
                create:{
                    description: "go to school",
                    title: "Collge",
                    done: true
                }
            }
        }
    });
}

createDummyUser();