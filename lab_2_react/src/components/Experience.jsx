function Experience({ items }) {
  return (
    <section style={{ padding: '20px', backgroundColor: '#f4f4f9', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Досвід роботи</h2>
      {items.map((item, index) => (
        <article key={index} style={{ marginBottom: '15px' }}>
          <h3>{item.role} — {item.company}</h3>
          <p><em>{item.period}</em></p>
          <ul>
            {item.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Experience;