function Home({ title }: { title: string }) {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>{title}</h2>
        <p>Home Page.</p>
        </div>
    );
}


export default Home