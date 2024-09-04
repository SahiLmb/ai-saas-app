/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-content-gen_owner:bEJlj7gpmN6U@ep-polished-water-a5lmpv87.us-east-2.aws.neon.tech/AI-content-gen?sslmode=require',
    }
  };