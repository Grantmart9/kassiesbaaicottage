import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I4 from "Images/I4.jpg";
import I5 from "Images/I5.jpg";
import I6 from "Images/I6.jpg";
import I7 from "Images/I7.jpg";
import I8 from "Images/I8.jpg";
import { layoutbgcolor, textcolor } from "components/Display/AppControl";

export const AboutUs = () => {
  return (
    <div className="flex align-center justify-center my-auto">
      <Card style={{ backgroundColor: layoutbgcolor, boxShadow: "none" }}>
        <CardContent
          className="flex align-center justify-center font-bold"
          sx={{ color: textcolor }}
        >
          About Us
        </CardContent>
        <CardContent
          className="flex text-center justify-center"
          sx={{ color: textcolor }}
        >
          Kassiesbaai Cottage offers a peaceful beachfront retreat in Arniston,
          just steps from Arniston Beach. This one-bedroom apartment features a
          fully equipped kitchen, cozy living area with a fireplace, and a
          private entrance for added privacy. Guests can enjoy stunning sea
          views, barbecue facilities, free Wi-Fi, and activities like darts and
          cycling. The cottage is also wheelchair accessible and offers easy
          access to nearby attractions like the Arniston Cave (1.4 km) and
          Shipwreck Museum in Bredasdorp (25 km). With its tranquil setting and
          excellent amenities, it’s no wonder couples love this location, rating
          it 9.6 for a romantic getaway.
        </CardContent>
      </Card>
    </div>
  );
};

export const AboutUsMain = ({ topBarOn, isResponsiveSize }) => {
  const WovenImageList = () => {
    const itemData = [
      {
        img: I1,
      },
      {
        img: I2,
      },
      {
        img: I3,
      },
      {
        img: I4,
      },
      {
        img: I5,
      },
      {
        img: I6,
      },
      {
        img: I7,
      },
      {
        img: I8,
      },
    ];

    return (
      <ImageList sx={{ padding: "20pt" }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  };

  return (
    <div
      style={{
        paddingTop: topBarOn
          ? isResponsiveSize
            ? "50pt"
            : "80pt"
          : isResponsiveSize
          ? "50pt"
          : "80pt",
      }}
      sx={{ backgroundColor: layoutbgcolor }}
      className="rounded-md"
    >
      <div className="flex align-center justify-center p-2">
        <div className="grid md:grid-cols-2 gap-0">
          <div
            sx={{ color: textcolor }}
            className="text-center justify-center p-2"
          >
            <Card
              sx={{
                bgcolor: "transparent",
                maxWidth: "500pt",
                padding: "20pt",
                boxShadow: "none",
              }}
            >
              Kassiesbaai Cottage: Your Perfect Seaside Escape in Arniston
              Escape to the tranquil beauty of Arniston and experience the
              ultimate beachfront retreat at Kassiesbaai Cottage. Located just
              steps from the serene Arniston Beach, this charming one-bedroom
              apartment offers breathtaking sea views, making it an ideal choice
              for a romantic getaway or peaceful solo retreat. With barbecue
              facilities, free Wi-Fi, and an array of activities such as darts
              and cycling available, you'll have everything you need for a
              relaxing stay. Whether you're watching the sunset from the comfort
              of your private patio or enjoying a meal cooked on the barbecue,
              Kassiesbaai Cottage is designed to offer you a memorable
              experience.
            </Card>
            <Card
              sx={{
                bgcolor: "transparent",
                maxWidth: "500pt",
                padding: "20pt",
                marginTop: "20pt",
                boxShadow: "none",
              }}
            >
              Comfort and Convenience at Your Fingertips Inside, Kassiesbaai
              Cottage is designed to make you feel right at home. The spacious
              open-plan living area features a fully equipped kitchen with
              modern appliances including an oven and microwave, while the cozy
              sitting area boasts a flat-screen TV and a warming fireplace,
              creating the perfect ambiance for any season. The bedroom is
              peaceful and restful, complemented by a walk-in shower and a
              bathroom designed for your comfort. Tiled floors throughout add to
              the sleek, contemporary feel, and for added privacy, the cottage
              features a private entrance. Whether you're unwinding indoors or
              enjoying the surrounding natural beauty, you'll find every comfort
              you need right at your doorstep.
            </Card>
            <Card
              sx={{
                bgcolor: "transparent",
                maxWidth: "500pt",
                padding: "20pt",
                marginTop: "20pt",
                boxShadow: "none",
              }}
            >
              Explore Arniston and Beyond Kassiesbaai Cottage isn't just about
              relaxation — it's also about adventure. The picturesque town of
              Arniston offers a range of exciting outdoor activities, from
              cycling through scenic landscapes to exploring the nearby Arniston
              Cave, just 1.4 km away. History enthusiasts will enjoy a visit to
              the Shipwreck Museum in Bredasdorp, only 25 km from the property.
              After a day of exploration, return to your peaceful sanctuary and
              unwind in the stunning setting that makes Kassiesbaai Cottage so
              special. With its unbeatable location, comfortable amenities, and
              breathtaking surroundings, it’s no wonder that couples have rated
              it an exceptional 9.6 for a two-person trip.
            </Card>
          </div>
          <WovenImageList />
        </div>
      </div>
    </div>
  );
};
