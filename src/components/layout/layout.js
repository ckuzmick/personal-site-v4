import { NavLink } from "@theme-ui/components"
import React from "react"
import { Flex, Box } from 'theme-ui'

const Layout = (props) => {
    return (
        <Flex>
            <Box p={2} bg="background" sx={{ minWidth: '100px', display: "flex", alignItems: 'flex-end', flexDirection: 'column' }}>
                <ul style={{ margin:"0px", padding:"0px", listStyle:"none" }}>
                    <li style={{ textAlign:"right", fontSize:"17px" }}>
                    <NavLink href="/" p={1}>Home</NavLink>
                    </li>
                    <li style={{ textAlign:"right", fontSize:"17px" }}>
                    <NavLink href="/about/" p={1}>About</NavLink>
                    </li>
                    <li style={{ textAlign:"right", fontSize:"17px" }}>
                    <NavLink href="/resources/" p={1}>Resources</NavLink>
                    </li>
                </ul>
            </Box>
            <Box p={2} bg="background" sx={{ flexGrow: '1' }} class="container">
                {props.children}
            </Box>
        </Flex>
    )
  }
  
export default Layout