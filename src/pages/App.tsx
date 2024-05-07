import { Box, Button, Container, Link, Typography } from "@mui/material";
import { CustomSwitch } from "../components/common/CustomSwitch";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { creditConstant } from "../constant/credit";
import CustomSlider from "../components/common/CustomSlider";
import { AppProps } from "../types";

function App({ light, setLight }: AppProps) {
  const [showTopUp, setShowTopUp] = useState(true);

  // Default top-up setup
  const [topUp, setTopUp] = useState(10);

  const selectedTopUp = creditConstant.find((item) => item.value === topUp);
  const theme = useTheme();

  const handleLog = () => {
    console.log("Selected credit amount is ", selectedTopUp?.price);
  };
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* Top Bar */}
      <Box>
        <Typography
          onClick={() => setLight(!light)}
          sx={{
            color: theme.palette.text.primary,
            paddingTop: 5,
            textAlign: "end",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          {light ? "Light" : "Dark"}
        </Typography>
      </Box>

      {/* Middle Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "80%",
          width: {
            md: "80%",
          },
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Top Container */}
          <Box
            sx={{
              borderRadius: 5,
              width: "100%",
              p: {
                md: "30px",
                xs: "20px",
              },
              bgcolor: theme.palette.primary.light,
              boxShadow: 0,
            }}
          >
            <Box
              sx={{
                color: "text.primary",
                fontSize: 20,
                fontWeight: "600",
                display: "flex",
                gap: "20px",
                marginBottom: "6px",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  color: theme.palette.text.primary,
                }}
              >
                Setup Auto Top-up
              </Typography>
              <CustomSwitch value={showTopUp} setValue={setShowTopUp} />
            </Box>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: {
                  md: "15px",
                  xs: "13px",
                },
                fontWeight: 400,
              }}
            >
              Once the credit goes below the threshold value, credits can be
              auto purchased. Setup auto top-up to enjoy uninterrupted services.
              You can disable this anytime to stop auto top-up.
            </Typography>
          </Box>
          {/* Bottom Container */}

          {showTopUp && (
            <Box
              sx={{
                borderRadius: 5,
                width: "100%",
                p: {
                  md: "30px",
                  xs: "20px",
                },
                bgcolor: theme.palette.primary.light,
                boxShadow: 0,
              }}
            >
              <Box>
                <Box
                  sx={{
                    color: "text.primary",
                    fontSize: 20,
                    fontWeight: "600",
                    display: "flex",
                    gap: "20px",
                    marginBottom: "6px",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Setup Auto Top-up
                  </Typography>
                  <CustomSwitch value={showTopUp} setValue={setShowTopUp} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      "& span": {
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                      },
                      color: theme.palette.text.secondary,
                      fontSize: {
                        md: "15px",
                        xs: "13px",
                      },
                    }}
                  >
                    Once the credit goes below a minimum threshold{" "}
                    <span>50</span>, we will auto-purchase{" "}
                    <span>${selectedTopUp?.label.split(" ")[0]}</span> credits
                    and add them to your account.{" "}
                    <Link
                      style={{
                        color: theme.palette.primary.contrastText,
                        textDecoration: "none",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      Learn more
                    </Link>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "20px",
                  marginBottom: "35px",
                }}
              >
                <CustomSlider
                  value={topUp}
                  handleChange={setTopUp}
                  defaultValue={10}
                  marks={creditConstant}
                />
              </Box>
              <Box
                sx={{
                  paddingTop: "10px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleLog}
                  sx={{
                    color: "white",
                    textTransform: "initial",
                  }}
                >
                  Confirm auto-purchase
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
