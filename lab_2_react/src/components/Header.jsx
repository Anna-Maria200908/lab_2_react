function Header({ name, title, email, github }) {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f4f4f9', borderRadius: '8px', marginBottom: '20px' }}>
      <h1>{name}</h1>
      <p><strong>Посада:</strong> {title}</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a> | 
        GitHub: <a href={github} target="_blank" rel="noreferrer">{github}</a>
      </p>
    </header>
  );
}

export default Header;