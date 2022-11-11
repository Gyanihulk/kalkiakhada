function SvgHome({ active = false, ...props }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {active ? (
        <path
          d="M34.678 19.25L20.75 5.32a1.029 1.029 0 00-1.5 0L5.322 19.25A1.006 1.006 0 005 20v10.842A4.157 4.157 0 009.157 35h21.686A4.157 4.157 0 0035 30.842V20a1.008 1.008 0 00-.322-.75z"
          fill="currentColor"
        />
      ) : (
        <path
          d="M34.717 19.864a2.266 2.266 0 00-.724-1.675L20 5.283 6.008 18.19a2.265 2.265 0 00-.725 1.675v12.589a2.264 2.264 0 002.264 2.264h24.906a2.264 2.264 0 002.264-2.264V19.864z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export default SvgHome
