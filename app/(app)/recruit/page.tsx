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

const PositionCard = ({ position }: any) => {
  return (
    <div className='flex flex-col w-full h-full rounded-2xl border border-gray-300 p-5 shadow-md'>
      <div className='flex flex-row w-full h-full'>
        <div className='rounded-2xl'>
          <
        </div>
        <div className='flex flex-col w-full'>
          <h1 className='text-2xl font-semibold'>{position.name}</h1>
          <h2 className='text-lg'>{position.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default RecruitPage;
