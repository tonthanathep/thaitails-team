import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },

  fields: [
    { name: "nickname", type: "text", required: true },
    { name: "secret", type: "text" },
    { name: "role", type: "select", options: ["admin", "editor"] },
  ],
};
