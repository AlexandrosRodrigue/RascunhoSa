import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const result = await prisma.courses.create({
        data: {
            name: "",
            surname : "",
            email: "",
            cpf: "",
            password: "",
        },
    });

    console.log(result)
    
}

main();