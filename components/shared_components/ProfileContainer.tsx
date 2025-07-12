import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  gridcols: 1 | 2 | 3 | 4 | 5 | 6;
  gridcolsSm?: 1 | 2 | 3 | 4 | 5 | 6;
  gridcolsMd?: 1 | 2 | 3 | 4 | 5 | 6;
  gridcolsLg?: 1 | 2 | 3 | 4 | 5 | 6;
}

const gridColsToClassName: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const gridColsSmToClassName: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
};

const gridColsMdToClassName: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

const gridColsLgToClassName: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

const maxWidthByGridCols: Record<number, string> = {
  1: "max-w-[1px]",
  2: "max-w-[460px]",
  3: "max-w-[700px]",
  4: "max-w-[1px]",
  5: "max-w-[1px]",
  6: "max-w-[1px]",
};

const maxWidthByGridColsSm: Record<number, string> = {
  1: "sm:max-w-[1px]",
  2: "sm:max-w-[460px]",
  3: "sm:max-w-[700px]",
  4: "sm:max-w-[1px]",
  5: "sm:max-w-[1px]",
  6: "sm:max-w-[1px]",
};

const maxWidthByGridColsMd: Record<number, string> = {
  1: "md:max-w-[1px]",
  2: "md:max-w-[460px]",
  3: "md:max-w-[700px]",
  4: "md:max-w-[1px]",
  5: "md:max-w-[1px]",
  6: "md:max-w-[1px]",
};

const maxWidthByGridColsLg: Record<number, string> = {
  1: "lg:max-w-[1px]",
  2: "lg:max-w-[460px]",
  3: "lg:max-w-[700px]",
  4: "lg:max-w-[1px]",
  5: "lg:max-w-[1px]",
  6: "lg:max-w-[1px]",
};

export const ProfileContainer = ({
  children,
  gridcols,
  gridcolsSm,
  gridcolsMd,
  gridcolsLg,
}: Props) => {
  return (
    <div
      className={clsx(
        `grid ${gridColsToClassName[gridcols]} ${maxWidthByGridCols[gridcols]} gap-4 sm:gap-6 w-full place-content-around place-items-center`,
        gridcolsSm &&
          `${gridColsSmToClassName[gridcolsSm]} ${maxWidthByGridColsSm[gridcolsSm]}`,
        gridcolsMd &&
          `${gridColsMdToClassName[gridcolsMd]} ${maxWidthByGridColsMd[gridcolsMd]}`,
        gridcolsLg &&
          `${gridColsLgToClassName[gridcolsLg]} ${maxWidthByGridColsLg[gridcolsLg]}`
      )}
    >
      {children}
    </div>
  );
};
