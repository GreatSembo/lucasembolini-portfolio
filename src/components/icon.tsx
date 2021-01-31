import { useEffect, useState } from "react";
import { Container, Box, Icon, Stack, SimpleGrid, Image, Text } from "@chakra-ui/react"
import { Link as WouterLink } from "wouter";
import useLocation from "wouter/use-location";
const MAIN_COLOR="emerald"
type IconProps = {
    as: any,
    linkTo?: string,
    icon?: boolean,
    textHover?: string
}
export default function SideIcon(props: IconProps) {
    const [location] = useLocation();
    const [selected, setSelected] = useState(false)
    const [hoverIcon, setHoverIcon] = useState(false)
    useEffect(() => {
        if (location == props.linkTo) {
            setSelected(true)
        } else {
            setSelected(false)
        }
    }, [location])
    return (
        <>
            {!props.icon &&
                <WouterLink href={props.linkTo || "/"} target="_blank">
                    {props.textHover && <Box className="flip">
                        <Icon as={props.as} w={9} h={9} cursor="pointer" color={selected ? MAIN_COLOR : "black"}
                            transform="rotateY(0deg)"
                            _hover={{ color: MAIN_COLOR }} zIndex={2} />
                        <Text transform="rotateY(-90deg)" align="center" color={MAIN_COLOR} fontSize="xl" top="5px" textTransform="uppercase" position="absolute" >{props.textHover}</Text>
                    </Box>
                    }
                    {!props.textHover &&
                        <Icon as={props.as} w={9} h={9} cursor="pointer" color={selected ? MAIN_COLOR : "black"}

                            _hover={{ color: MAIN_COLOR }} zIndex={2} />

                    }
                </WouterLink>
            }
            {props.icon &&
                <a href={props.linkTo || "/"} target="_blank">
                    <Icon as={props.as} w={9} h={9} cursor="pointer" color={selected ? MAIN_COLOR : "black"} _hover={{ color: MAIN_COLOR }} />
                </a>
            }
        </>
    )
}