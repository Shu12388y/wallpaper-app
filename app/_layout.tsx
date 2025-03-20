import React from 'react'
import { Stack } from 'expo-router';

const Layout = () => {
  return (<Stack screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name='(account)/accountsetting' options={{
        headerShown:true,
        headerTitle:"Account",
        headerBackTitle:"Go back"
    }}/>
    </Stack>
  )
}

export default Layout;