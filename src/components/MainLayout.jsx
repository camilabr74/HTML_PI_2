import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-screen">
        {children}
      </main>
    </>
  );
};

export default Layout;
