import type { CollectionConfig } from "payload";

export const Teams: CollectionConfig = {
  slug: "teams",
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
      label: "Team Name",
    },
    {
      name: "parentTeam",
      type: "relationship",
      required: false,
      relationTo: "teams",
      label: "Parent Team",
    },
    {
      name: "level",
      type: "select",
      required: true,
      label: "Level",
      options: [
        { value: "1", label: "Level 1" },
        { value: "2", label: "Level 2" },
        { value: "3", label: "Level 3" },
        { value: "4", label: "Level 4" },
        { value: "5", label: "Level 5" },
      ],
    },
    {
      name: "description",
      type: "textarea",
      label: "Job Description",
      required: true,
    },
  ],
};
