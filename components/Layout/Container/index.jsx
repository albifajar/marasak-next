import Image from 'next/image'

export const Container = ({ children, ...rest }) => {
  return (
    <div className="w-11/12 mx-auto md:w-1/4" {...rest}>
      {children}
    </div>
  )
}
