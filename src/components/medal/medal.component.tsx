import * as React from "react";

export const Medal = ({ width, title, medalType, flagColor }: any) => {
  enum MedalsType {
    "CX",
    "CBS",
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width}>
      <text data-name={title} transform="translate(52 78.5)" fill="#003671">
        <tspan x="0" textAnchor="middle">
          {title}
        </tspan>
      </text>
      <g data-name="Grupo 1638">
        <g data-name="Grupo 1591">
          <path
            data-name="Trazado 3103"
            d="M57.872 17.771L41.14 25.357 54.665 55.18l7.282-6.155 9.407-1.387z"
            fill={flagColor}
          />
          <path
            data-name="Trazado 3104"
            d="M45.474 18.073l16.732 7.586-13.524 29.867-7.282-6.2-9.45-1.387z"
            fill={flagColor}
            opacity={0.585}
          />
          <path
            data-name="Trazado 3105"
            d="M73.348 21.714c0 1.6-2.3 2.948-2.644 4.465-.347 1.56 1.17 3.771.52 5.2-.694 1.43-3.338 1.6-4.291 2.818s-.52 3.9-1.734 4.9-3.641-.043-5.028.65-2.124 3.294-3.641 3.641c-1.474.347-3.251-1.647-4.812-1.647s-3.338 1.994-4.812 1.647c-1.517-.347-2.254-2.948-3.641-3.641s-3.858.347-5.028-.65c-1.214-1-.78-3.685-1.734-4.9s-3.6-1.387-4.291-2.818c-.65-1.387.867-3.641.52-5.2-.433-1.517-2.731-2.861-2.731-4.465s2.3-2.948 2.644-4.465c.347-1.56-1.17-3.771-.52-5.2.694-1.43 3.338-1.6 4.291-2.818s.52-3.9 1.734-4.9 3.641.043 5.028-.65S45.302.387 46.819.04c1.474-.347 3.251 1.647 4.812 1.647S54.968-.306 56.442.04c1.517.347 2.254 2.948 3.641 3.641s3.858-.347 5.028.65c1.214 1 .78 3.685 1.734 4.9s3.6 1.387 4.291 2.818c.65 1.387-.867 3.641-.52 5.2.434 1.518 2.732 2.862 2.732 4.465z"
            fill="#ffc839"
          />
        </g>
        <text transform="translate(52 27.5)" fill="#edab00">
          <tspan x="0" textAnchor="middle">
            {medalType == "cx" ? MedalsType.CX : null}
            {medalType == "cbs" ? MedalsType.CBS : null}
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default Medal;
