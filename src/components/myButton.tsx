import {  Button,  } from "@chakra-ui/react"
import {
    AiOutlineMail
} from "react-icons/ai";
function MyButton(props:any){
    return (
        <Button onClick={()=>props.onClick?props.onClick():{}} margin="50px auto auto auto"
        leftIcon={<AiOutlineMail />}
        textAlign="center"
        color={"emerald"}
        _hover={{ borderColor: "emerald" }}
        variant="outline"
        borderColor="#cbbfbb"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="2px"
        display="flex"
        fontSize="xl"
        h="50px"
        w="150px"
        borderRadius="0"
        _focus={{
            boxShadow:
                "0 0 1px 2px jet, 0 1px 1px jet",
        }}
        type={props.type?props.type:"button"}
    >{props.text}</Button>
    )

}
export default MyButton;