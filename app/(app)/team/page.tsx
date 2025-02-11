import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getContent } from "@/utils/getContent";

const TeamPage = async () => {
  const staff = await getContent({
    collections: "staff",
    where: {
      isActive: {
        equals: true,
      },
    },
  });

  console.log(staff);

  return (
    <div className='w-full'>
      {staff.map((person, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{person.name}</CardTitle>
            <CardDescription>{person.role[0].name}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TeamPage;
