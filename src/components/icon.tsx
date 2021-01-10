import {useEffect, useState} from "react";
import { Container, Box, Icon, Stack, SimpleGrid, Image } from "@chakra-ui/react"
import { Link as WouterLink } from "wouter";
import useLocation from "wouter/use-location";

type Props2 = {
    as: any,
    linkTo?: string
}
export default function SideIcon(props: Props2) {
    const [location] = useLocation();
    const [selected,setSelected]=useState(false)
    useEffect(()=>{
        if(location==props.linkTo){
            setSelected(true)
        }else{
            setSelected(false)
        }
    },[location])
    return <WouterLink href={props.linkTo || "/"}>
        <Icon as={props.as} w={9} h={9} cursor="pointer" color={selected?"green_lizard":"black"} _hover={{ color: "green_lizard" }}/>
        </WouterLink>
}