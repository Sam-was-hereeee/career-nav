import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  gridcols: number;
  gridcolsSm?: number;
  gridcolsMd?: number;
  gridcolsLg?: number;
}

const maxWidthByGridCols: Record<number, string> = {
  1: "max-w-[1px]",
  2: "max-w-[460px]",
  3: "max-w-[700px]",
  4: "max-w-[1px]",
  5: "max-w-[1px]",
  6: "max-w-[1px]",
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
        `grid grid-cols-${gridcols} ${maxWidthByGridCols[gridcols]} gap-4 sm:gap-6 w-full place-content-around place-items-center`,
        gridcolsSm &&
          `sm:grid-cols-${gridcolsSm} sm:${maxWidthByGridCols[gridcolsSm]}`,
        gridcolsMd &&
          `md:grid-cols-${gridcolsMd} md:${maxWidthByGridCols[gridcolsMd]}`,
        gridcolsLg &&
          `lg:grid-cols-${gridcolsLg} lg:${maxWidthByGridCols[gridcolsLg]}`
      )}
    >
      {children}
    </div>
  );
};
