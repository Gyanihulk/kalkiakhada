import { useId } from 'react'

function SvgUser(props) {
  const id = useId()
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={15} cy={15} r={15} fill={`url(#${id})`} />
      <path
        d="M21.5 22.5v-1.555c0-1.719-1.4-3.111-3.125-3.111h-6.25A3.118 3.118 0 009 20.944V22.5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx={15.25}
        cy={11.6111}
        rx={3.125}
        ry={3.11111}
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={id}
          x1={-21.1673}
          y1={7.3093}
          x2={1.60617}
          y2={52.5686}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CCD1D9" />
          <stop offset={1} stopColor="#8F9AA8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgUser
