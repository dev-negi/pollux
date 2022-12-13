function Layout({ title, description, children }) {
  return (
    <>
      <div className="app-header">
        <title>Pollux</title>
        {description && <meta name="description" content={description}></meta>}
      </div>
      <div className="main-container">{children}</div>
      <div className="footer">app Header</div>
    </>
  );
}

export default Layout;
