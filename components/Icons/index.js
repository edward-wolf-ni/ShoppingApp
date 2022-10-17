export const HeardIcon = ({ height=25, width=25, color="none"  }) => (
  <svg
    height={height}
    //viewBox="0 0 21 21"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline-block" }}
  >
    <path
      d="M10.5 6.5c.5-2.5 4.343-2.657 6-1 1.603 1.603 1.5 4.334 0 6l-6 6-6-6a4.243 4.243 0 0 1 0-6c1.55-1.55 5.5-1.5 6 1z"
      fill={color}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const TrashIcon = ({height=25, width=25, color="none"  }) => (
  <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline-block" }}>
    <g
      fill={color}
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 4.5h10v12a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2zm5-2a2 2 0 0 1 1.995 1.85l.005.15h-4a2 2 0 0 1 2-2zM3.5 4.5h14M8.5 7.5v8M12.5 7.5v8" />
    </g>
  </svg>
)

export const CardIcon = ({ height=25, width=25, color="none" }) => (
  <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline-block" }}>
    <g fill={color} fillRule="evenodd">
      <path
        d="M5 6.5h12.5l-1.586 5.55a2 2 0 0 1-1.923 1.45h-6.7a2 2 0 0 1-1.989-1.78L4.5 4.5h-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="currentColor" transform="translate(2 4)">
        <circle cx={5} cy={12} r={1} />
        <circle cx={13} cy={12} r={1} />
      </g>
    </g>
  </svg>
)

export const HouseIcon = ({ height=25, width=25, color="none" }) => (
  <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block" }}>
    <g
      fill={color}
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m1.5 10.5 9-9 9 9" />
      <path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    </g>
  </svg>
)