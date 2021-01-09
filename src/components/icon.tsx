import { Container, Box, Icon, Stack, SimpleGrid, Image } from "@chakra-ui/react"
import { Link as WouterLink } from "wouter";
type Props2 = {
    as: any,
    linkTo?: string
}
export default function SideIcon(props: Props2) {
    return <WouterLink href={props.linkTo || "/"}>
        <Icon as={props.as} w={9} h={9} cursor="pointer" color="black" _hover={{ color: "green_lizard" }}/>
        </WouterLink>
}