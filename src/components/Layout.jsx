const Layout = ({ children }) => {
  return (
    <div className='w-screen flex justify-center'>
      <div className='max-w-md w-full mt-20'>{children}</div>
    </div>
  )
}

export default Layout
