// Load environment variables
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import mysql from "mysql2/promise";

const schemaFile = path.join(__dirname, "../../server/database/schema.sql");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const migrate = async () => {
  try {
    const sql = fs.readFileSync(schemaFile, "utf8");

    const database = await mysql.createConnection({
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME, // ✅ IMPORTANT : on ne change pas la DB
      multipleStatements: true,
    });

    // ❌ PAS de drop/create database sur Railway
    // ❌ PAS de "USE db"

    console.log(`Migrating database '${DB_NAME}'...`);

    await database.query(sql);

    database.end();

    console.info(`✔ Tables migrated using ${path.normalize(schemaFile)}`);
  } catch (err) {
    console.error("Migration error:", err);
  }
};

migrate();
