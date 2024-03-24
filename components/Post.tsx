import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Divider from "@mui/material/Divider";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";

const Post = () => {
  return (
    <>
      <div className="p-10">
        <div className="flex ">
          <div>
            <div className="flex gap-1">
              <AccountCircleOutlinedIcon />

              <div className="text-sm">
                <span>Unbecoming </span>

                <span className="text-dark-gray"> &middot; Feb 16, 2022</span>
              </div>
            </div>
            <h2 className="py-1 text-xl font-bold">
              10 Seconds That Ended My 20 Year Marriage
            </h2>
            pIt’s August in Northern Virginia, hot and humid. I still haven’t
            showered from my morning trail run. I’m wearing my stay-at-home mom
            uniform — over-sized Marine Corps sweats, tshirt, Crocs flip flops,
          </div>

          <img
            src={
              "https://miro.medium.com/v2/resize:fill:224:224/1*2PEPQ0LxKFELp2lojVF-lw.jpeg"
            }
            width={112}
            height={112}
          />
        </div>

        <div className="flex items-center mt-5 justify-between">
          <div className="flex gap-4">
            <span className="text-sm rounded-full bg-[#F2F2F2] px-2 py-1 cursor-pointer inline-block">
              Java
            </span>

            <span className="text-sm rounded-full bg-[#F2F2F2] px-2 py-1 cursor-pointer inline-block">
              React
            </span>

            <span className="text-sm rounded-full bg-[#F2F2F2] px-2 py-1 cursor-pointer inline-block">
              Web development
            </span>
          </div>

          <TurnedInNotOutlinedIcon
            sx={{ color: "rgb(107, 107, 107)", cursor: "pointer" }}
          />
        </div>
      </div>

      <Divider />
    </>
  );
};

export default Post;
