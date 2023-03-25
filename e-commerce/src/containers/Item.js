import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import {Link} from 'react-router-dom'

const Item = ({ product }) => {
  return (
    
    <Card sx={{ maxWidth: 250 }} style={styles.container} underline = "none">
      <CardActionArea>
        <CardMedia
          sx={{ height: 250 }}
          component="img"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            textAlign="center"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          <Typography fontSize="35px" color="text.secondary" textAlign="center">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea >
      <CardActions  >
        <Link style={styles.link} to={`/product/${product.id}`} >
          <Button >
            Detalles
          </Button>
          </Link>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "white",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 90,
    margin: 0,
    color: "#722F37",
  },
  link:{
    color: "#722F37",
    textDecoration: 'none',
  }
};

export default Item;