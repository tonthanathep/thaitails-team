import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    { name: "nickname", type: "text", required: true },
    { name: "role", type: "select", options: ["admin", "editor"] },
  ],
};
