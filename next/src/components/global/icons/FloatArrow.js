export const FloatArrow = () => {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" overflow="visible">
            {/* 1) defs наверх */}
            <defs>
                <clipPath id="bgblur_0" clipPathUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="72" height="72" rx="36" />
                </clipPath>
                <clipPath id="bgblur_1" clipPathUnits="userSpaceOnUse">
                    <rect x="8" y="8" width="56" height="56" rx="28" />
                </clipPath>
                <clipPath id="bgblur_2" clipPathUnits="userSpaceOnUse">
                    <rect x="16" y="16" width="40" height="40" rx="20" />
                </clipPath>
            </defs>

            {/* 2) клип на foreignObject, не на внутренний <div> */}
            <foreignObject
                x="-24"
                y="-24"
                width="120"
                height="120"
                clipPath="url(#bgblur_0)"
                pointerEvents="none"
            >
                <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        height: '100%',
                        width: '100%',
                    }}
                />
            </foreignObject>

            <rect x="0" y="0" width="72" height="72" rx="36" fill="#00696E" fillOpacity="0.04" />
            <rect x="0.5" y="0.5" width="71" height="71" rx="35.5" stroke="#00696E" strokeOpacity="0.08" />

            <foreignObject
                x="-16"
                y="-16"
                width="104"
                height="104"
                clipPath="url(#bgblur_1)"
                pointerEvents="none"
            >
                <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        height: '100%',
                        width: '100%',
                    }}
                />
            </foreignObject>

            <rect x="8" y="8" width="56" height="56" rx="28" fill="#00696E" fillOpacity="0.08" />
            <rect x="8.5" y="8.5" width="55" height="55" rx="27.5" stroke="#00696E" strokeOpacity="0.16" />

            <foreignObject
                x="-8"
                y="-8"
                width="88"
                height="88"
                clipPath="url(#bgblur_2)"
                pointerEvents="none"
            >
                <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        height: '100%',
                        width: '100%',
                    }}
                />
            </foreignObject>

            <rect x="16" y="16" width="40" height="40" rx="20" fill="#08858F" />

            {/* ТВОЯ СТРЕЛКА — теперь поверх и видна в Safari */}
            <path
                d="M42.5303 36.5303C42.8232 36.2374 42.8232 35.7626 42.5303 35.4697L37.7574 30.6967C37.4645 30.4038 36.9896 30.4038 36.6967 30.6967C36.4038 30.9896 36.4038 31.4645 36.6967 31.7574L40.9393 36L36.6967 40.2426C36.4038 40.5355 36.4038 41.0104 36.6967 41.3033C36.9896 41.5962 37.4645 41.5962 37.7574 41.3033L42.5303 36.5303ZM30 36L30 36.75L42 36.75L42 36L42 35.25L30 35.25L30 36Z"
                fill="#FFFBF7"
            />
        </svg>
    );
};
