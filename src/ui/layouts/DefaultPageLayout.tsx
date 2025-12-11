"use client";
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/9529da4d6e77/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Topbar with right nav — https://app.subframe.com/9529da4d6e77/library?component=Topbar+with+right+nav_d20e2e52-ba3d-4133-901a-9a15f7f729a9
 */

import React from "react";
import { TopbarWithRightNav } from "../components/TopbarWithRightNav";
import * as SubframeUtils from "../utils";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLDivElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full flex-col items-center",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <TopbarWithRightNav
        leftSlot={
          <img
            className="h-6 grow shrink-0 basis-0 object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1765442824/uploads/17280/btzbi8c1eqvekongifbl.png"
          />
        }
        rightSlot={
          <div className="flex items-center justify-end">
            <TopbarWithRightNav.NavItem selected={true}>
              About
            </TopbarWithRightNav.NavItem>
          </div>
        }
      />
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
