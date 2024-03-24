import { Avatar, Button, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

const WhoToFollow = () => {
  return (
    <div>
      <h4>Who to follow</h4>

      <Stack spacing={2} my={4}>
        <div className="flex items-center">
          <div className="flex items-start gap-3 flex-1">
            <Avatar
              sizes="20px"
              alt={"E"}
              src={""}
              sx={{ width: 36, height: 36 }}
            />

            <div>
              <span className="font-semibol">Edwin Shi</span>
              <p className="text-[13px] text-[rgb(107,107,107)]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <Button variant="outlined">Follow</Button>
        </div>

        <div className="flex items-center">
          <div className="flex items-start gap-3 flex-1">
            <Avatar
              sizes="20px"
              alt={"E"}
              src={""}
              sx={{ width: 36, height: 36 }}
            />

            <div>
              <span className="font-semibol">Edwin Shi</span>
              <p className="text-[13px] text-[rgb(107,107,107)]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <Button variant="outlined">Follow</Button>
        </div>

        <div className="flex items-center">
          <div className="flex items-start gap-3 flex-1">
            <Avatar
              sizes="20px"
              alt={"E"}
              src={""}
              sx={{ width: 36, height: 36 }}
            />

            <div>
              <span className="font-semibol">Edwin Shi</span>
              <p className="text-[13px] text-[rgb(107,107,107)]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <Button variant="outlined">Follow</Button>
        </div>
      </Stack>

      <Link className="text-[rgb(26,137,23)]" href={""}>
        See more suggestions
      </Link>
    </div>
  );
};

export default WhoToFollow;
