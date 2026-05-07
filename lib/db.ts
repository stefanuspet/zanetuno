import { neon } from "@neondatabase/serverless";

export const sql = neon(process.env.zanetuno_DATABASE_URL!);
