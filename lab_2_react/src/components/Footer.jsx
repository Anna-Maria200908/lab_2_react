function Footer({ year, name }) {
  return (
    <footer style={{ padding: '15px', textAlign: 'center', backgroundColor: '#e9ecef', borderRadius: '8px' }}>
      <p>&copy; {year} {name}. Усі права захищено.</p>
    </footer>
  );
}

export default Footer;