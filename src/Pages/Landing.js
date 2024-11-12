import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import Vid from "Videos/Vid.mp4";
import Vid2 from "Videos/Vid2.mp4";
import {
  AppFont,
  ButtonStyle,
  CompanyName,
  layoutbgcolor,
  textcolor,
} from "components/Display/AppControl";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { PageFooter } from "components/Display/PageFooter";
import { ServicesSub } from "Pages/SubPages/ServicesSub";
import { Enquire } from "./SubPages/Enquire";
import { TypeAnimation } from "react-type-animation";

const LandingContext = () => {
  const TextAnimation = () => {
    const size = Size();
    const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
    return (
      <div style={{ minHeight: "45pt" }}>
        <TypeAnimation
          sequence={[
            "Welcome to Kassiesbaai Cottage - ",
            2000,
            "Welcome to Kassiesbaai Cottage - Time ",
            200,
            "Welcome to Kassiesbaai Cottage - Time to ",
            200,
            "Welcome to Kassiesbaai Cottage - Time to rest",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: isResponsiveSize ? "1rem" : "1.5rem",
            display: "inline-block",
          }}
          repeat={Infinity}
        />
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: layoutbgcolor,
          color: textcolor,
        }}
        className="text-lg text-center justify-center pt-3"
      >
        <TextAnimation />
      </div>
      <CardContent
        className="flex align-center mx-auto"
        style={{
          fontFamily: AppFont,
          color: textcolor,
          backgroundColor: layoutbgcolor,
          border: "none",
          maxWidth: "800pt",
        }}
      >
        <div className="text-center justify-center">
          Welcome to Kassiesbaai Cottage, your perfect seaside escape in the
          heart of Arniston. Nestled just steps from the tranquil shores of
          Arniston Beach, our cozy one-bedroom apartment offers stunning sea
          views, modern comforts, and a peaceful atmosphere for the ultimate
          getaway. Whether you're here to relax, explore the natural beauty of
          the area, or enjoy some quality time with loved ones, our charming
          cottage provides the perfect setting for a memorable stay. With a
          range of amenities, including a fully equipped kitchen, barbecue
          facilities, and easy access to local attractions, Kassiesbaai Cottage
          is the ideal destination for those seeking a coastal retreat with a
          personal touch.
        </div>
      </CardContent>
      <CardActions
        className="flex align-center justify-center"
        style={{
          fontFamily: AppFont,
          color: textcolor,
          backgroundColor: layoutbgcolor,
          border: "none",
        }}
      >
        <Button sx={ButtonStyle} href="/AboutUs">
          Read more about {CompanyName}
        </Button>
      </CardActions>
    </div>
  );
};

export const Landing = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="block"
      style={{
        width: topBarOn
          ? isResponsiveSize
            ? "calc(100vw)"
            : "calc(100vw - 200px)"
          : isResponsiveSize
          ? "calc(100vw)"
          : "calc(100vw)",
      }}
    >
      <div>
        {isResponsiveSize ? (
          <video
            autoPlay
            muted
            loop
            style={{
              zIndex: 1,
              width: "100%",
            }}
            src={Vid}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            style={{
              zIndex: 1,
              width: "100%",
            }}
            src={Vid2}
          />
        )}
      </div>
      <div
        style={{
          zIndex: 2,
          width: "100%",
        }}
      >
        <LandingContext />
        <ServicesSub />
      </div>
      <div
        style={{
          zIndex: 3,
          width: "100%",
        }}
      >
        <Enquire />
      </div>
      <div
        style={{
          zIndex: 4,
          width: "100%",
        }}
      >
        <PageFooter />
      </div>
    </div>
  );
};
