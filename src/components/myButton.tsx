import {  Button,  } from "@chakra-ui/react"
import {
    AiOutlineMail
} from "react-icons/ai";
function MyButton(props:any){
    return (
        <Button onClick={()=>props.onClick?props.onClick():{}} margin="50px auto auto auto"
        leftIcon={<AiOutlineMail />}
        textAlign="center"
        color={"electric_lime"}
        _hover={{ bg: "forest_green_traditional" }}
        variant="outline"
        borderColor="forest_green_traditional"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="2px"
        display="flex"
        h="50px"
        w="150px"
        borderRadius="0"
        _focus={{
            boxShadow:
                "0 0 1px 2px forest_green_traditional, 0 1px 1px forest_green_traditional",
        }}
        type={props.type?props.type:"button"}
    >{props.text}</Button>
    )

}
export default MyButton;