import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
  } from "@mui/material";
  import AccountCircleIcon from "@mui/icons-material/AccountCircle";
  import FavoriteIcon from "@mui/icons-material/Favorite"
  import CommentIcon from '@mui/icons-material/Comment';
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { fetchStart, getSuccess } from "../features/blogSlice";
const Detail= () => {
  const dispatch=useDispatch()
  const { id } = useParams();
  const {detailData}=useSelector((state)=>state.blog)

  const getIdData = async () => {
    dispatch(fetchStart);
    const BASE_URL = "http://32304.fullstack.clarusway.com/api/blogs/";
    try {
      const { data } = await axios(`${BASE_URL}${id}/`,{
        headers: { Authorization: `Token 16e1828d99f7d1d81e481902da6e70a004284c62` },
      });
      console.log(data)
      dispatch(getSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIdData()
  }, []);

    return (
      <Box sx={{ minHeight: "90vh" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item>
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia
                sx={{
                  objectFit: "contain",
                  maxWidth: 500,
                }}
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png"
                component="img"
              />
  
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2,mb:3 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccountCircleIcon fontSize="large" color="primary" />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.9rem" }}>admin</Typography>
                    <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                      29.03.2023 17:27:38
                    </Typography>
                  </Box>
                </Box>
  
                <Typography variant="h6">React</Typography>
                <Typography sx={{ color: "#777" }}>
                  React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu
                  bir javascript kütüphanesidir. Facebook önderliğinde bir
                  geliştirici grubu tarafından geliştirilmekte olan React,
                  Model-View-Controller prensibine uygun olarak oluşturulmuştur.
                </Typography>
              </CardContent>
  
                <CardActions>
                <IconButton>
                    <FavoriteIcon />
                    <span>3</span>
                </IconButton>
  
                <IconButton>
                    <CommentIcon />
                    <span>3</span>
                </IconButton>
  
                <IconButton >
                    <VisibilityIcon />
                    <span>3</span>
                </IconButton>
  
                </CardActions>
  
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Detail;
