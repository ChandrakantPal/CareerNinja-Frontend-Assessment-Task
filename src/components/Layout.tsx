const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="m-auto md:p-12 md:border md:rounded-lg md:shadow-lg">
        {children}
      </div>
    </div>
  )
}

export default Layout
