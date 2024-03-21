const Footer = () => {
  
  return (
    <footer 
      onClick={() => window.location.href = 'https://github.com/arebac/react-toDoApp.git'}
      style={{ cursor: 'pointer' }}>Click here to visit the project repository
    </footer>
  );
}

export default Footer;
