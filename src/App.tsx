interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {

  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
   <div>
    <Button title="send1"/>
    <Button title="send2"/>
    <Button title="send3"/>
  </div>
  )
}

export default App
