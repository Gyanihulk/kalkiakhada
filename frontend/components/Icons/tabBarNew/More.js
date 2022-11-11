function SvgMore({ active, ...props }) {
  return (
    <svg
      width={20}
      height={23}
      viewBox="0 0 20 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 3.572c0-.395.32-.715.714-.715h18.572a.715.715 0 010 1.429H.714A.714.714 0 010 3.572zm0 7.143C0 10.322.32 10 .714 10h18.572c.393 0 .714.322.714.715a.716.716 0 01-.714.714H.714A.715.715 0 010 10.715zm19.286 7.857H.714a.715.715 0 010-1.429h18.572c.393 0 .714.322.714.714a.716.716 0 01-.714.715z"
        fill={active ? '#E60023' : '#212121'}
      />
    </svg>
  )
}

export default SvgMore
