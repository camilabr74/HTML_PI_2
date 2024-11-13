import Navbar from "../components/Navbar/Navbar";

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
