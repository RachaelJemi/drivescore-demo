import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
  const [status, setStatus] = useState('Ready to drive')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DriveScore</Text>
      <Text style={styles.status}>{status}</Text>

      <View style={styles.buttons}>
        <Button title="Start trip" color="green"onPress={() => setStatus('Trip started')} />
        <Button title="Stop trip" color="red" onPress={() => setStatus('Trip stopped')} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, marginBottom: 8 },
  status: { fontSize: 18, marginBottom: 16 },
  buttons: { flexDirection: 'row', gap: 12 },
})