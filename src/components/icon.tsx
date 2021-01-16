import {useEffect, useState} from "react";
import { Container, Box, Icon, Stack, SimpleGrid, Image } from "@chakra-ui/react"
import { Link as WouterLink } from "wouter";
import useLocation from "wouter/use-location";

type IconProps = {
    as: any,
    linkTo?: string,
    icon?:boolean
}
export default function SideIcon(props: IconProps) {
    const [location] = useLocation();
    const [selected,setSelected]=useState(false)
    useEffect(()=>{
        if(location==props.linkTo){
            setSelected(true)
        }else{
            setSelected(false)
        }
    },[location])
    return (
        <>
        {!props.icon && 
            <WouterLink href={props.linkTo || "/"} target="_blank">
            <Icon as={props.as} w={9} h={9} cursor="pointer" color={selected?"green_lizard":"black"} _hover={{ color: "green_lizard" }}/>
            </WouterLink>
        }
         {props.icon && 
            <a href={props.linkTo || "/"} target="_blank">
            <Icon as={props.as} w={9} h={9} cursor="pointer" color={selected?"green_lizard":"black"} _hover={{ color: "green_lizard" }}/>
            </a>
        }
        </>
    )
}