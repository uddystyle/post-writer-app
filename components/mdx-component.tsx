"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Callout from "./callout";

const components = {
  Image,
  Callout,
};

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <div className="prose max-w-none lg:prose-xl">
      <Component components={components} />
    </div>
  );
}
