import config from "@payload-config";
import { CollectionSlug, getPayload } from "payload";

type Props = {
  collections: string;
  select?: any;
  where?: any;
  sort?: any;
};

export const getContent = async ({
  collections,
  select,
  where,
  sort,
}: Props) => {
  const payload = await getPayload({ config });
  const res = await payload.find({
    collection: collections as CollectionSlug,
    where: where,
    select: select,
    sort: sort,
  });

  return res.docs;
};
