import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Divider from "@mui/material/Divider";

const Post = () => {
  return (
    <>
      <div className="flex p-10">
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

      <Divider />
    </>
  );
};

export default Post;
