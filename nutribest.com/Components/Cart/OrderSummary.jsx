import { Divider, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function OrderSummary({totalprice,maxprice}) {

  const discount = maxprice-totalprice
  return (
    <div>
        <VStack border='0px' alignItems={'left'} rowGap='8px' pt='8px' pr='20px' p='20px' bg='white'>
            <HStack color={'gray.500'} justifyContent={'space-between'}>
              <Text fontSize='lg'>Total MRP</Text>
              <Text fontSize='lg'>$ {parseFloat(maxprice).toFixed(2)}</Text>
            </HStack>

            <HStack  justifyContent={'space-between'}>
              <Text color={'gray.500'} fontSize='lg'>Total Discounts</Text>
              <Text color={'green.300'} fontSize='lg'>-$ {discount==0?'1':'1'} </Text>
            </HStack>

            <HStack justifyContent={'space-between'}>
              <Text color={'gray.500'} fontSize='lg'>Loyalty Saving</Text>
              <Text color={'green.300'} fontSize='lg'>-$ 1 </Text>
            </HStack>

            <HStack justifyContent={'space-between'}>
              <Text color={'gray.500'} fontSize='lg'>Shipping Charges</Text>
              <Text color={'green.300'} fontSize='lg'>FREE</Text>
            </HStack>
          <Divider />
          <HStack justifyContent={'space-between'}>
                <Heading  fontSize='lg'>Payable Amount</Heading>
                <Heading  fontSize='lg'>$ {parseFloat(totalprice-2).toFixed(2)}</Heading>
              </HStack>
        </VStack>

    </div>
  )
}
