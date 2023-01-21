import Nav from 'Components/Cart/Nav'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import { Box, Heading, HStack, Stack } from '@chakra-ui/react'
import Cards from 'Components/Cart/Cards'
import { data } from 'Components/Cart/cart.data.js'
import Coupan from 'Components/Cart/Coupan'
export default function Cart() {
    const [session,setSession] = useState([])
    const [totalprice,setTotalprice] = useState(0)
    // console.log(session)


    const handlequantity=(id,val)=>{

        let arr = session.map((el)=>{
                if(el.id==id){
                    el.quantity += val
                }

                return el
        })

        setSession(arr)
        handleTotalprice()

    }

    const handleTotalprice = ()=>{
        let ans = 0
        session.map((el)=>{
            return ans+= el.price * el.quantity
        })

        setTotalprice(ans)

    }
    // console.log("total",totalprice)

    const handleDelete=(id)=>{
        const deletetodos = session.filter((todo)=>todo.id !== id)

        sessionStorage.setItem("data", JSON.stringify(deletetodos))
        let ss = JSON.parse(sessionStorage.getItem("data"))
        setSession(ss)

    }

    useEffect(()=>{
        let ss = JSON.parse(sessionStorage.getItem("data"))
        setSession(ss)
        handleTotalprice()
        sessionStorage.setItem("data", JSON.stringify(data))
    },[0])
  return (
    <div>
        <Head>
            <title>Cart</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/images/logo.png" />
      </Head>
      <main>
        <Nav/>
        <Box border={'1px'} p='20px'>
            <Stack direction={{base:'column',lg:'row'}}>

                <Box  boxShadow='md' p='9px' rounded='md' bg='white'm='auto' w={{base:'90%',lg:'60%'}}>
                    <Heading size='md' p='10px'>shopping Cart ({session.length} items )</Heading>
                    <Box p='0px' border={'0px'}>
                        <Cards data={session} handlequantity={handlequantity} handleDelete={handleDelete} />
                    </Box>


                </Box>
                <Box m='auto' w={{base:'90%',lg:'40%'}}>
                    <Box p='20px'>
                        <Coupan/>
                    </Box>
                    <Box p='20px'>
                        <Box>
                            <Heading  size='md'>Order Summary({session.length} items )</Heading>
                        </Box>
                        
                    </Box>
                    
                </Box>



            </Stack>
        </Box>

      </main>
    </div>
  )
}
