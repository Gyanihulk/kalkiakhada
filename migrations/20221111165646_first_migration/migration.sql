-- CreateEnum
CREATE TYPE "UserUserTypeType" AS ENUM ('trainer', 'gymOwner', 'trainee');

-- CreateEnum
CREATE TYPE "AssetFolderType" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "AssetStatusType" AS ENUM ('active', 'inactive');

-- CreateEnum
CREATE TYPE "CollectionStatusType" AS ENUM ('active', 'inactive');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "email" TEXT NOT NULL DEFAULT E'',
    "password" TEXT NOT NULL,
    "about" JSONB NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "avatar" TEXT,
    "contactNumber" TEXT NOT NULL DEFAULT E'',
    "userType" "UserUserTypeType",
    "role" TEXT,
    "passwordResetToken" TEXT,
    "passwordResetIssuedAt" TIMESTAMP(3),
    "passwordResetRedeemedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "file_filesize" INTEGER,
    "file_mode" TEXT,
    "file_filename" TEXT,
    "folder" "AssetFolderType",
    "altTitle" TEXT NOT NULL DEFAULT E'',
    "caption" TEXT NOT NULL DEFAULT E'',
    "status" "AssetStatusType",
    "author" TEXT,
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "handle" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',
    "permissions" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "canSeeOtherUsers" BOOLEAN NOT NULL DEFAULT false,
    "canManageUsers" BOOLEAN NOT NULL DEFAULT false,
    "canManageRoles" BOOLEAN NOT NULL DEFAULT false,
    "canReadListing" BOOLEAN NOT NULL DEFAULT false,
    "canManageListing" BOOLEAN NOT NULL DEFAULT false,
    "canManageAnimal" BOOLEAN NOT NULL DEFAULT false,
    "canManageArticle" BOOLEAN NOT NULL DEFAULT false,
    "canManageEvent" BOOLEAN NOT NULL DEFAULT false,
    "canManagePage" BOOLEAN NOT NULL DEFAULT false,
    "canManageTrait" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "handle" TEXT NOT NULL DEFAULT E'',
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "handle" TEXT NOT NULL DEFAULT E'',
    "author" TEXT,
    "status" "CollectionStatusType",
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Structure" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "handle" TEXT NOT NULL DEFAULT E'',
    "structure" JSONB,
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Structure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "handle" TEXT NOT NULL DEFAULT E'',
    "tagType" TEXT,
    "dateCreated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Asset_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Collection_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_avatar_idx" ON "User"("avatar");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE UNIQUE INDEX "Asset_author_key" ON "Asset"("author");

-- CreateIndex
CREATE INDEX "Collection_author_idx" ON "Collection"("author");

-- CreateIndex
CREATE INDEX "Tag_tagType_idx" ON "Tag"("tagType");

-- CreateIndex
CREATE UNIQUE INDEX "_Asset_tags_AB_unique" ON "_Asset_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Asset_tags_B_index" ON "_Asset_tags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Collection_tags_AB_unique" ON "_Collection_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Collection_tags_B_index" ON "_Collection_tags"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_avatar_fkey" FOREIGN KEY ("avatar") REFERENCES "Asset"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_fkey" FOREIGN KEY ("role") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_tagType_fkey" FOREIGN KEY ("tagType") REFERENCES "Structure"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Asset_tags" ADD FOREIGN KEY ("A") REFERENCES "Asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Asset_tags" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Collection_tags" ADD FOREIGN KEY ("A") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Collection_tags" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
