import { Size } from "../../components/Display/media-query";
import { Fade } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { layoutbgcolor, textcolor } from "components/Display/AppControl";
import { ServiceList } from "components/Display/AppControl";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const ServicesSub = () => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <Fade in={true} timeout={1800}>
      <div
        style={{
          backgroundColor: layoutbgcolor,
          paddingLeft: "10pt",
          paddingRight: "10pt",
        }}
      >
        <div
          style={{ color: textcolor }}
          className="text-2xl font-bold text-center justify-center pt-5 pb-5"
        >
          Gallery
        </div>
        <ImageList className="px-5" variant="masonry" cols={3} gap={8}>
          {ServiceList.map((item, i) => (
            <ImageListItem key={i}>
              <img src={item.image} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Fade>
  );
};

export const ServicesSubMain = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <Fade in={true} timeout={1800}>
      <div
        style={{
          backgroundColor: layoutbgcolor,
          paddingLeft: "10pt",
          paddingRight: "10pt",
          paddingTop: topBarOn
            ? isResponsiveSize
              ? "50pt"
              : "80pt"
            : isResponsiveSize
            ? "50pt"
            : "80pt",
        }}
      >
        <div
          style={{ color: textcolor }}
          className="text-2xl font-bold text-center justify-center pb-5"
        >
          Gallery
        </div>
        <ImageList className="px-5" variant="masonry" cols={3} gap={8}>
          {ServiceList.map((item, i) => (
            <ImageListItem key={i}>
              <img src={item.image} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Fade>
  );
};
