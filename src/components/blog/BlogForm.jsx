import { Box, TextField } from "@mui/material";


const BlogForm = () => {
  return (
    <Box
    sx={{
      display:"flex",
      flexDirection:"column",
      gap:2
  }}
  component="form"
  width="100%"
    >
      <TextField
        label="Title"
        name="title"
        id="title"
        type="text"
        variant="outlined"
        required
      />
    </Box>
  );
};

export default BlogForm;
