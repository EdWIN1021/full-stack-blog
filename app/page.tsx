import Post from "@/components/Post";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid container>
      <Grid
        item
        xs={8}
        className="px-10 py-5"
        sx={{ borderRight: "1px solid #e0e0e0" }}
      >
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>

      <Grid item xs={4} className="p-10">
        <div className="mb-20">
          <p>Staff Picks</p>
          some stuff
        </div>

        <div className="mb-20">
          <p className="mb-6">Recommended topics</p>
          <div className="flex gap-3 flex-wrap">
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Java</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">React</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Ruby</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Java</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Java</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">React</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Ruby</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Java</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Java</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">React</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Ruby</span>
            <span className="rounded-full bg-[#F2F2F2] px-4 py-1">Java</span>
          </div>
        </div>

        <div>
          <p className="mb-6">Who to follow</p>
        </div>
      </Grid>
    </Grid>
  );
}
