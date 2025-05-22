-- First, update all existing users to REPORTER role
UPDATE `User` SET `role` = 'REPORTER' WHERE 1=1;

-- Then modify the role column to use the ENUM type with the specified values
ALTER TABLE `User` 
MODIFY COLUMN `role` ENUM('REPORTER', 'APPROVER', 'VIEWER', 'ADMIN') NOT NULL DEFAULT 'REPORTER';

-- Optional: Set specific users to different roles (adjust as needed)
-- UPDATE `User` SET `role` = 'ADMIN' WHERE `email` = 'admin@example.com';
-- UPDATE `User` SET `role` = 'APPROVER' WHERE `email` LIKE '%manager%';

-- Verify the changes
SELECT id, name, email, role FROM `User` ORDER BY role, name;
