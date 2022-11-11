function SvgNotificationBell({ active = false, ...props }) {
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
        <>
          <path
            d="M20 5.283a9.713 9.713 0 019.713 9.713c0 10.8 3.94 12.928 5.004 12.928H5.283c1.087 0 5.004-2.15 5.004-12.928A9.713 9.713 0 0120 5.283v0z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2.3371}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.185 31.016a.34.34 0 01.231.103.285.285 0 010 .248 4.096 4.096 0 01-1.142 2.96 4.239 4.239 0 01-2.936 1.298 4.248 4.248 0 01-3.01-1.123 4.104 4.104 0 01-1.32-2.887.468.468 0 01.126-.413.525.525 0 01.546-.186h7.505z"
            fill="currentColor"
          />
        </>
      ) : (
        <path
          d="M20 5.283a9.713 9.713 0 019.713 9.713c0 10.8 3.94 12.928 5.004 12.928H5.283c1.087 0 5.004-2.15 5.004-12.928A9.713 9.713 0 0120 5.283v0zM16.604 32.068a3.51 3.51 0 006.792 0"
          stroke="currentColor"
          strokeWidth={2.3371}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export default SvgNotificationBell
