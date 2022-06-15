import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import TimeAgo from "javascript-time-ago";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BrowseNovel() {
  const timeAgo = new TimeAgo("en-US");

  const [expanded, setExpanded] = React.useState(false);
  const url = app_config.api_url;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [loading, setLoading] = useState(true);
  const [novelList, setNovelList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url + "/novel/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNovelList(data);
        setLoading(false);
      });
  }, []);

  const searchCard = () => {
    return (
      <div className="">
        <div className="card">
          <div className="card-header bg-white p-4">
            <div class="input-group rounded">
              <input
                style={{ border: "none", outline: "none" }}
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span
                class="input-group-text border-0 bg-white"
                id="search-addon"
              >
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="card-body p-4">
            <p className="text-muted">ADVANCED SEARCH</p>
            <div className="row">
              <div className="col-sm-3">
                <button className="btn btn-outline-primary">City</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayData = () => {
    if (!loading) {
      return novelList.map((novel) => (
        <div className="col-md-4">
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: green[500] }} aria-label="user">
                  {novel.uploadedBy.firstname.slice(0, 1)}
                </Avatar>
              }
              title={
                novel.uploadedBy.firstname + " " + novel.uploadedBy.lastname
              }
              subheader={timeAgo.format(new Date(novel.createdAt))}
            />
            <CardMedia
              component="img"
              height="400"
              image={url + "/uploads/" + novel.thumbnail}
              alt={novel.title}
            />
            <CardContent>
              <Typography variant="h5" color="text.secondary">
                {novel.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {novel.author}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button
                className="mt-3"
                onClick={(e) => navigate("/main/novelDetail/" + novel._id)}
              >
                View More
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{novel.description}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      ));
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#eee" }}>
      <Container className="py-5">
        {searchCard()}
        <div className="row mt-5">{displayData()}</div>
      </Container>
      ;
    </div>
  );
}
