import Slider from "@mui/material/Slider";
import { Box, Typography, useTheme } from "@mui/material";
import { CustomSliderT } from "../../types";
import { useEffect, useState } from "react";

const CustomSlider = ({
  value,
  marks,
  handleChange,
  defaultValue,
}: CustomSliderT) => {
  const theme = useTheme();
  const [isSmall, setIsmall] = useState<boolean>();

  const updateOrientation = () => {
    if (window.innerWidth >= 900) {
      setIsmall(false);
    } else {
      setIsmall(true);
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateOrientation);
    return () => {
      window.removeEventListener("resize", updateOrientation);
    };
  }, []);

  useEffect(() => {
    updateOrientation();
  }, []);

  return (
    <div
      style={{
        height: isSmall ? "400px" : "",
      }}
    >
      <Slider
        orientation={isSmall ? "vertical" : "horizontal"}
        onChange={(_: Event, value: number | number[]) => {
          const changeNum = Array.isArray(value) ? value[0] : value;
          console.log("", _);
          handleChange(changeNum);
        }}
        min={4.7}
        defaultValue={defaultValue}
        value={value}
        size="medium"
        color="primary"
        sx={{
          "& .MuiSlider-thumb": {
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "primary",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: isSmall ? "" : "relative",
          },
          "& .MuiSlider-thumb::before, & .MuiSlider-thumb::after": {
            content: "''",
            position: "absolute",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
          },
          "& .MuiSlider-thumb::before": {
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          },
          "& .MuiSlider-track": {
            height: "6px",
          },
          "& .MuiSlider-rail": {
            height: "6px",
            color: "#acc4e4",
          },
          "& .MuiSlider-mark": {
            display: "none",
          },
        }}
        max={33}
        step={null}
        marks={marks.map((mark, index) => ({
          value: mark.value,
          label: (
            <Box
              sx={{
                right: "0px",
                textAlign: "left",
                margin: {
                  md:
                    index < marks.length / 2
                      ? `0px 0px 0px ${70 - index * 10}px`
                      : ` 0px ${70 - index * 30}px 0px 0px`,
                  xs: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  fontSize: "14px",
                }}
              >
                {mark.price}
              </Typography>
              <Typography
                sx={{
                  color: "#7B7B7B",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                {mark.label}
              </Typography>
            </Box>
          ),
        }))}
      />
    </div>
    //     <Slider
    //   color="primary"
    //   disabled={false}
    //   marks={false}
    //   size="medium"
    //   valueLabelDisplay="off"
    //   variant="solid"
    // />
  );
};

export default CustomSlider;
