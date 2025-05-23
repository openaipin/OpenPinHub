import {
  Paper,
  Box,
  Title,
  Text,
  List,
  Button,
  Badge,
  useMantineTheme,
} from "@mantine/core";

import classes from "./Hero.module.css";
import { useMediaQuery } from "@mantine/hooks";
import interposer from "src/assets/interposer.png";
import heroBg from "src/assets/mirrored-squares.png";

const Hero = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Paper
      withBorder
      bd="3px solid white"
      p="xl"
      radius="xl"
      className={classes.paper}
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <Box className={classes.flexContainer}>
        <Box className={classes.textContainer}>
          <Title mb="lg">The OpenPin Interposer</Title>
          <Text mb="lg">
            You'll need an interposer to install OpenPin on your AI Pin. This is
            the highest-quality one you can buy, made by the creator of OpenPin.
          </Text>
          <Text fw="bold">Features</Text>
          <List mb="xl">
            <List.Item>High-precision, extremely durable design</List.Item>
            <List.Item>USB C connector</List.Item>
            <List.Item>Premium braided cable included</List.Item>
          </List>
          <Button
            size="lg"
            component="a"
            href="https://buy.stripe.com/cN2eYQ66U5PO3DObII"
            target="_blank"
            className={classes.button}
          >
            Buy Now
          </Button>
        </Box>
        <Box className={classes.imageContainer}>
          <Box component="img" src={interposer} className={classes.image} />
          <Badge
            color="white"
            c="black"
            radius="sm"
            size={isMobile ? "lg" : "xl"}
            className={classes.badge}
          >
            V2.0
          </Badge>
        </Box>
      </Box>
    </Paper>
  );
};

export default Hero;
