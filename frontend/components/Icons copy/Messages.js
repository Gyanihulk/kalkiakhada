import { useId } from 'react'

function SvgMessages({ active = false, ...props }) {
  const id = useId()
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 10.567h-4.65l-1.55 2.344H8.7l-1.55-2.344H2.5"
        stroke="#140F26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M5.19 4.465L2.5 10.567v3.906c0 .863.694 1.563 1.55 1.563h12.4c.856 0 1.55-.7 1.55-1.563v-3.906l-2.69-6.102a1.55 1.55 0 00-1.418-.93H6.609a1.55 1.55 0 00-1.419.93z"
        stroke="#140F26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={15}
        cy={4.54773}
        r={3.75}
        fill={active ? `url(#${id})` : ``}
        stroke="#F4F5F6"
        strokeWidth={1.5}
      />
      <defs>
        <linearGradient
          id={id}
          x1={10.5}
          y1={0.0477295}
          x2={10.5}
          y2={9.04773}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6E77" />
          <stop offset={1} stopColor="#EF0007" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgMessages
