import Topics from "@/components/Topics";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";

const page = () => {
  return (
    <Grid container>
      <Grid item xs={6} p={10}>
        <Stack spacing={1}>
          <Typography variant="subtitle1" fontWeight={600}>
            Story Preview
          </Typography>

          <div className="flex justify-center items-center bg-[#FAFAFA] min-h-[200px] text-[rgba(0,0,0,0.54)] text-center px-20">
            Include a high-quality image in your story to make it more inviting
            to readers.
          </div>

          <p className="text-xl font-semibold">a</p>
          <Divider />

          <p>a</p>
          <Divider />

          <p className="text-[rgba(0,0,0,0.54)] ">
            <span className="font-semibold">Note:</span> Changes here will
            affect how your story appears in public places like homepage and in
            subscribers’ inboxes — not the contents of the story itself.
          </p>
        </Stack>
      </Grid>
      <Grid item xs={6} p={10}>
        <p className="mb-5">
          Publishing to: <span className="font-semibold">Edwinshi</span>
        </p>

        <p className="mb-5">
          Add or change topic (up to 5) so readers know what your story is about
        </p>

        <Topics />

        <Button
          sx={{ marginTop: 5 }}
          size="small"
          color="secondary"
          variant="contained"
        >
          Publish now
        </Button>
      </Grid>
    </Grid>
  );
};

export default page;
