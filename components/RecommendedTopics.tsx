import Link from "next/link";
import React from "react";

const RecommendedTopics = () => {
  return (
    <div>
      <h4>Recommended topics</h4>

      <div className="flex gap-3 flex-wrap my-9">
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Java</span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1">React</span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Ruby</span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Java</span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1">React</span>
        <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Ruby</span>
      </div>

      <Link className="text-[rgb(26,137,23)]" href={""}>
        See more topics
      </Link>
    </div>
  );
};

export default RecommendedTopics;
