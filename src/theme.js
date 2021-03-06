import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
  sm: "340px",
  md: "768px",
  lg: "1278px",
  xl: "1920px",
})

export default {
    colors: {
        jet: "#363537",
        dark_green: "#006400ff",
        pakistan_green: "#007200ff",
        ao_english: "#008000ff",
        yellow_green_wheel: "#38b000ff",
        sheen_green: "#70e000ff",
        green_lizard: "#8cd867",
        electric_lime: "#ccff33ff",
        emerald:"#2fbf71",
        mantis:"#8CD867"
    },
    breakpoints: breakpoints,
    fonts: {
      heading: "ristretto",
      body: "ristretto",
    },
 
  }