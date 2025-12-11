"use client";
/*
 * Documentation:
 * AI Chat Toolbar — https://app.subframe.com/9529da4d6e77/library?component=AI+Chat+Toolbar_e3cd651a-0a0f-441e-8ea8-b0fe066515e7
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface AiChatToolbarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const AiChatToolbarRoot = React.forwardRef<
  HTMLDivElement,
  AiChatToolbarRootProps
>(function AiChatToolbarRoot(
  { children, className, ...otherProps }: AiChatToolbarRootProps,
  ref
) {
  return children ? (
    <div
      className={SubframeUtils.twClassNames(
        "flex items-start justify-center",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  ) : null;
});

export const AiChatToolbar = AiChatToolbarRoot;
