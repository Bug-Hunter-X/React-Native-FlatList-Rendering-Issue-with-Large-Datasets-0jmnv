The solution involves using `windowSize` and `initialNumToRender` props of the FlatList to improve performance. We'll also use a more robust key extractor to improve performance and prevent unnecessary re-renders.

```javascript
<FlatList
  data={largeDataset}
  renderItem={({item}) => <Text>{item.text}</Text>}
  keyExtractor={(item) => item.id.toString()} // Assuming each item has a unique 'id'
  windowSize={10} // Adjust as needed
  initialNumToRender={10} // Adjust as needed
/>
```

Consider using libraries like `react-native-virtualized-list` or `react-window` for even better performance with extremely large datasets.