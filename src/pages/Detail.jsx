import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import CommentForm from "../components/blog/CommentForm";
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { details } = useSelector((state) => state.blog);
  const { getDetailData } = useBlogCalls();
  const [commentCard, setCommentCard] = useState(false);
  const { currentUser } = useSelector((state) => state.auth);
  //delete modal states
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //update modal
  const [update, setUpdate] = useState(false);
  const updateOpen = () => setUpdate(true);
  const updateClose = () => setUpdate(false);

  useEffect(() => {
    getDetailData(`blogs/${id}`);
  }, []);

  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              sx={{ objectFit: "contain", maxWidth: 500 }}
              image={details?.image}
              component="img"
            />

            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box>
                  <AccountCircleIcon
                    sx={{ display: "flex", alignItems: "center" }}
                    fontSize="large"
                  />
                </Box>
                <Box>
                  <Typography>{details?.author}</Typography>
                  <Typography>
                    {new Date(details?.publish_date).toDateString()}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="h6">{details?.title}</Typography>
              <Typography>{details?.content}</Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <FavoriteIcon /> {details?.likes}
              </IconButton>

              <IconButton onClick={() => setCommentCard(!commentCard)}>
                <CommentIcon />
                {details?.comment_count}
              </IconButton>
              <IconButton>
                <VisibilityIcon /> {details?.post_views}
              </IconButton>
            </CardActions>
            {/* COMMENT CARD SECTION */}

            {commentCard && (
              <Box width="100%" mt={3} p={3}>
                {details?.comments?.map((item, index) => (
                  <Box key={index} p={2}>
                    <Typography>{item.user}</Typography>
                    <Typography color="#aaa">
                      {new Date(item.time_stamp).toDateString()}
                    </Typography>
                    <Typography mb={2}>{item.content}</Typography>
                    <Divider />
                  </Box>
                ))}
                <CommentForm postId={details.id} />
              </Box>
            )}
            {/* DELETE UPDATE BUTTON *********** */}
            {details.author === currentUser.username && (
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                  onClick={updateOpen}
                >
                  UPDATE BLOG
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "red" }}
                  onClick={handleOpen}
                >
                  DELETE BLOG
                </Button>

                <DeleteModal
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  open={open}
                  id={id}
                />
                <UpdateModal
                  updateOpen={updateOpen}
                  updateClose={updateClose}
                  update={update}
                  id={id}
                />
              </CardActions>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;