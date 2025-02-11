import type { CollectionConfig } from "payload";

export const Staff: CollectionConfig = {
  slug: "staff",
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
