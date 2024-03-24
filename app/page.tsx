import Post from "@/components/Post";
import RecentlySaved from "@/components/RecentlySaved";
import RecommendedTopics from "@/components/RecommendedTopics";
import StaffPicks from "@/components/StaffPicks";
import WhoToFollow from "@/components/WhoToFollow";
import { Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Container maxWidth="xl">
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
          <Stack spacing={6}>
            <StaffPicks />
            <RecommendedTopics />
            <WhoToFollow />
            <RecentlySaved />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
