import { useState, useEffect } from 'react';

export default function MyComponent() {
  // Use the useState hook to create a piece of state that
  // we can use to store and retrieve data from localStorage
  const [data, setData] = useState(null);

  // When the component first renders, we'll check localStorage
  // to see if we have any data stored under the key "myData"
  useEffect(() => {
    const storedData = localStorage.getItem('myData');

    if (storedData) {
      // Since localStorage can only store strings, we need
      // to parse the stored data back into an object before
      // setting it as the initial value for our state variable
      setData(JSON.parse(storedData));
    }
  }, []);

  // Whenever the data in state changes, we'll update localStorage
  // so that the data is preserved even if the user refreshes the page
  useEffect(() => {
    // Since localStorage can only store strings, we need to
    // convert the data object to a JSON string before storing it
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  // Now we can use the data in state just like we would with any other piece of state
  return (
    <div>
      <p>Hello {data?.name}</p>
      {console.log('data',data)}
      <button onClick={() => setData({ name: 'John Doe' })}>
        Set data
      </button>
    </div>
  );
}

