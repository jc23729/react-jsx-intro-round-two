function App() {
  return (
    <div>
      <Tweet
        name="Juan Cruz"
        username="jc7891"
        message="This is an app that I would never use"
        date = {new Date().toDateString()}
      />
    </div>
  );
}
