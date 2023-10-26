import Button from "./Button"
const Header = ({ title }) => {

  const addHandler = () => {
    console.log('click');
}

  return (
    <header className="header" >
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={addHandler}></Button>
    </header>
  )


}

Header.defaultProps = {
  title: 'Task Tracker'
}

export default Header