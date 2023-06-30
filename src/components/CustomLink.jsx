import { link, useMatch } from 'react-router-dom';


const CustomLink = ({ children, to, ...props }) => {
const match = useMatch (to);

  return (
      <link
          to={to}
          style= {{
          color: match ? 'var(--color-active)': 'white',
      }}
          {...props}>
          {children}
    </link>
  )
}

export { CustomLink };
