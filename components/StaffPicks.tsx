import { Avatar, Stack } from "@mui/material";
import Link from "next/link";

const StaffPicks = () => {
  return (
    <div>
      <h4>Staff Picks</h4>

      <Stack spacing={3} my={4}>
        <div>
          <div className="flex gap-2 mb-2">
            <Avatar
              sizes="20px"
              alt={"E"}
              src={"/static/images/avatar/2.jpg"}
              sx={{ width: 24, height: 24 }}
            />
            <span className="font-semibol">Edwin Shi</span>
          </div>

          <p className="font-semibold">
            The Brain Science Behind Aging and Forgetting The Brain Science
            Behind Aging and Forgetting
          </p>
        </div>

        <div>
          <div className="flex gap-2 mb-2">
            <Avatar
              sizes="20px"
              alt={"E"}
              src={"/static/images/avatar/2.jpg"}
              sx={{ width: 24, height: 24 }}
            />
            <span>Edwin Shi</span>
          </div>

          <p className="font-semibold">
            The Brain Science Behind Aging and Forgetting The Brain Science
            Behind Aging and Forgetting
          </p>
        </div>

        <div>
          <div className="flex gap-2 mb-2">
            <Avatar
              sizes="20px"
              alt={"E"}
              src={"/static/images/avatar/2.jpg"}
              sx={{ width: 24, height: 24 }}
            />
            <span>Edwin Shi</span>
          </div>

          <p className="font-semibold">
            The Brain Science Behind Aging and Forgetting The Brain Science
            Behind Aging and Forgetting
          </p>
        </div>
      </Stack>

      <Link className="text-[rgb(26,137,23)]" href={""}>
        See the full list
      </Link>
    </div>
  );
};

export default StaffPicks;
