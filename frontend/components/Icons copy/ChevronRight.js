function SvgChevron(props) {
  return (
    <svg
      width={8}
      height={15}
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 .5c.256 0 .512.098.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L5.586 7.5.292 2.206A1 1 0 011 .5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgChevron
