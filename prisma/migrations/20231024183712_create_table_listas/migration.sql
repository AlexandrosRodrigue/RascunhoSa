-- CreateTable
CREATE TABLE `lista` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `tamanho` INTEGER NOT NULL,
    `desconto` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `lista_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
