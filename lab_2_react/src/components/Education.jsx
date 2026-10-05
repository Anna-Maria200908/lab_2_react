function Education({ degree, university, years }) {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f4f4f9', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Освіта</h2>
      <article>
        <h3>{degree}</h3>
        <p>{university}, {years}</p>
      </article>
    </section>
  );
}

export default Education;