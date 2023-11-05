const Header = () => {
  return (
    <header>
      <div>
       <p>This is a header</p> 
       <p>{import.meta.env.VITE_API_URL}</p>
        </div>
    </header>
  );
};

export default Header;