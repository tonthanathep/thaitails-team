import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: {
    useAPIKey: true,
  },

  fields: [
    { name: "email", type: "text", required: true },
    { name: "nickname", type: "text", required: true },
    { name: "role", type: "select", options: ["admin", "editor"] },
    { name: "slug", type: "text" },
  ],
};
