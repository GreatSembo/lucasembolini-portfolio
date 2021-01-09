function Logo(props) {
  const viewBox=`${props.w} -21.402 ${props.w} ${props.h}`
  return (
    <svg
      width={props.w || 166.923}
      height={props.h ||192.805}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="166.539 -21.402 166.923 192.805"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
     
    >
      <defs>
        <filter
          id="prefix__editing-hover"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood floodColor="#000" result="flood" />
          <feComposite
            operator="in"
            in2="SourceAlpha"
            in="flood"
            result="shadow"
          />
          <feOffset dx={2.8} dy={-2.7} in="SourceGraphic" result="offset-1" />
          <feOffset dx={-2.8} dy={2.7} in="shadow" result="offset-2" />
          <feMerge>
            <feMergeNode in="offset-2" />
            <feMergeNode in="offset-1" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-hover)">
        <path
          d="M212.1 46.7v51.23h29.3v5.37h-37.22V46.7h7.92zm75.8 48.41V80.28q0-1.73-.5-2.28-.5-.54-2.32-.54H258.6q-7.19 0-7.19-7.19V53.89q0-7.19 7.19-7.19h29.76q7.18 0 7.18 7.19v9.01h-8v-8.01q0-1.82-.5-2.32-.51-.5-2.33-.5h-22.47q-1.73 0-2.28.5-.54.5-.54 2.32v14.38q0 1.82.54 2.32.55.5 2.28.5h26.39q7.19 0 7.19 7.19v16.83q0 7.19-7.19 7.19h-29.85q-7.19 0-7.19-7.19V87.1h8.01v8.01q0 1.82.54 2.32.55.5 2.28.5h22.66q1.82 0 2.32-.5.5-.5.5-2.32z"
          fill="#70e000"
        />
      </g>
      <style />
    </svg>
  )
}

export default Logo
