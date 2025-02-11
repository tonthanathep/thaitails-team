import type { CollectionConfig } from "payload";

export const Staff: CollectionConfig = {
  slug: "staff",
  auth: {
    strategies: [
      {
        name: "custom-strategy",
        authenticate: async ({ payload, headers }) => {
          const usersQuery = await payload.find({
            collection: "users",
            where: {
              secret: {
                equals: headers.get("secret"),
              },
            },
          });
          const user = usersQuery.docs[0] || null;
          return {
            user: user ? { ...user, collection: "users" } : null,
          };
        },
      },
    ],
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: ({ req: { user }, data }) => {
      return Boolean(user);
    },
  },

  fields: [
    {
      name: "uid",
      type: "number",
      required: true,
      label: "Staff ID",
    },
    {
      name: "name",
      type: "text",
      required: true,
      label: "Staff Name",
    },
    {
      name: "role",
      type: "relationship",
      required: true,
      hasMany: true,
      relationTo: "roles",
      label: "Roles",
    },
    {
      name: "isActive",
      type: "checkbox",
      required: true,
      defaultValue: true,
      label: "Active?",
    },
    {
      name: "userJSON",
      type: "json",
      label: "User JSON",
    },
  ],
};
