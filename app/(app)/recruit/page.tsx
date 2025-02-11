import PositionCard from "@/components/recruit/PositionCard";
import { getContent } from "@/utils/getContent";

const RecruitPage = async () => {
  const roles = await getContent({
    collections: "roles",
    where: {
      isRecruiting: {
        equals: true,
      },
    },
  });

  console.log(roles);

  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 className='text-3xl font-bold'>Opening Positions</h1>
      {roles.map((role, index) => (
        <PositionCard key={index} position={role} />
      ))}
    </div>
  );
};

export default RecruitPage;
