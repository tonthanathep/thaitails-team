import type { CollectionConfig } from "payload";

export const ThirdPartyAccess: CollectionConfig = {
  slug: "third-party-access",
  auth: {
    useAPIKey: true,
  },
  fields: [
    { name: "user", type: "relationship", relationTo: "users", required: true },
  ],
};
