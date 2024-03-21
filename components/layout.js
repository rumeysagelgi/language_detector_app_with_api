import SEO from "./seo";

const Layout = ({ children }) => {
  return (
    <div className="bg-secondary min-h-screen">
      <SEO />
      {children}
    </div>
  );
};

export default Layout;
