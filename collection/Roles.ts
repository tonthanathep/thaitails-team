import type { CollectionConfig } from "payload";

export const Roles: CollectionConfig = {
  slug: "roles",
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
      label: "Role Name",
    },
    {
      name: "team",
      type: "relationship",
      required: true,
      relationTo: "teams",
      label: "Team",
    },
    {
      name: "description",
      type: "textarea",
      label: "Job Description",
      required: false,
    },
    {
      name: "responsibilities",
      type: "textarea",
      label: "Responsibilities",
      required: false,
    },
    {
      name: "requirements",
      type: "textarea",
      label: "Requirements",
      required: false,
    },
    {
      name: "isRecruiting",
      type: "checkbox",
      defaultValue: false,
      label: "Recruiting?",
    },
  ],
};
