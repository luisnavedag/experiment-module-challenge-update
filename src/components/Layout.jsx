const Layout = ({ children }) => {
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-xl w-full mt-20">{children}</div>
    </div>
  );
};

export default Layout;
