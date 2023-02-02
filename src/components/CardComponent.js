import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardComponent(props) {
  const theme = useTheme();
  const dates = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(props.content?.node?.last_updated);
  return (
    <Card sx={{ display: "flex", width: "500px" }}>
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: "30%" }}
        image={props.content?.node?.ImageStyle_thumbnail}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.content?.node?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {dates}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
