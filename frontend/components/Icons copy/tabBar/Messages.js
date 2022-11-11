function SvgMessages({ active = false, ...props }) {
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
          d="M20.486 3c-4.354 0-8.53 1.738-11.608 4.832A16.539 16.539 0 004.07 19.498c.01 2.95.821 5.843 2.345 8.366a.592.592 0 010 .519l-2.345 6.01a1.208 1.208 0 00.21 1.178 1.079 1.079 0 00.962.424h.211l7.997-1.485a.514.514 0 01.329 0 16.347 16.347 0 0014.185-.276 16.434 16.434 0 005.613-4.653 16.534 16.534 0 003.06-6.633 16.576 16.576 0 00-.093-7.31 16.53 16.53 0 00-3.227-6.553 16.427 16.427 0 00-5.728-4.507A16.347 16.347 0 0020.486 3zm3.517 22.39h-9.38c-.467 0-.914-.187-1.244-.518a1.772 1.772 0 010-2.5c.33-.331.777-.517 1.244-.517h9.38c.467 0 .914.186 1.244.517a1.772 1.772 0 010 2.5c-.33.331-.777.518-1.244.518zm4.69-8.25h-14.07c-.467 0-.914-.185-1.244-.517a1.772 1.772 0 010-2.5c.33-.331.777-.517 1.244-.517h14.07c.467 0 .914.186 1.244.518a1.772 1.772 0 010 2.5c-.33.33-.777.517-1.243.517z"
          fill="currentColor"
        />
      ) : (
        <path
          d="M20.322 5A15.322 15.322 0 007.57 28.808L5 35.644l8.604-1.556A15.324 15.324 0 0035.275 16.94 15.322 15.322 0 0020.322 5v0zM13.25 16.786h14.144M13.25 23.858h9.43"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export default SvgMessages
