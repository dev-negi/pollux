function Layout({ title, description, children }) {
  return (
    <>
      <div className="app-header">
        <title>Pollux</title>
        {description && <meta name="description" content={description}></meta>}
      </div>
      <div className="main-container">{children}</div>
      <div className="flex flex-row">
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </div>
    </>
  );
}

export default Layout;
