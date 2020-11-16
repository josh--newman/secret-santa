# Migration `20201116103646-migration`

This migration has been generated by Josh Newman at 11/16/2020, 8:36:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

CREATE TABLE "_GroupToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    FOREIGN KEY ("A") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

CREATE UNIQUE INDEX "_GroupToUser_AB_unique" ON "_GroupToUser"("A", "B")

CREATE INDEX "_GroupToUser_B_index" ON "_GroupToUser"("B")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201116103337-migration..20201116103646-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = ["sqlite", "postgresql"]
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -13,15 +13,17 @@
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
 // TODO: Please remove the following example:
 model User {
-  id     String  @id @default(cuid())
-  email  String  @unique
-  name   String
-  groups Group[]
+  id        String   @id @default(cuid())
+  email     String   @unique
+  name      String
+  groups    Group[]
+  createdAt DateTime @default(now())
 }
 model Group {
-  id      String @id @default(cuid())
-  name    String
-  members User[]
+  id        String   @id @default(cuid())
+  name      String
+  members   User[]
+  createdAt DateTime @default(now())
 }
```

